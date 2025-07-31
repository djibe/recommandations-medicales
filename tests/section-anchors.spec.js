const { test, expect } = require("@playwright/test");

test.describe("Section Anchors", () => {
  test("should work end-to-end for expandable sections", async ({ page }) => {
    // Test on a real page with sections
    await page.goto("/recommandations/cancer-sein/");

    // 1. Test anchor appears on hover
    const definitionsSection = page.locator('h2:has-text("Définitions")');
    await definitionsSection.hover();
    const anchor = definitionsSection.locator(".section-anchor");
    await expect(anchor).toBeVisible();

    // 2. Test click opens section and changes URL
    await anchor.click();
    await expect(page.locator("#définitions-b")).toHaveClass(/show/);
    expect(page.url()).toContain("d%c3%a9finitions"); // URL encoded

    // 3. Test direct URL navigation opens section
    await page.goto("/recommandations/cancer-sein/#sources");
    await expect(page.locator("#sources-block")).toHaveClass(/show/);

    // 4. Test fallback for invalid anchor
    await page.goto("/recommandations/cancer-sein/#nonexistent");
    // Should not crash - page loads normally
    await expect(page.locator("h1")).toBeVisible();
  });

  test("should handle French characters in URLs correctly", async ({
    page,
  }) => {
    // Test URL encoding/decoding for French characters
    await page.goto("/recommandations/cancer-sein/");

    const definitionsSection = page.locator('h2:has-text("Définitions")');
    await definitionsSection.hover();
    await definitionsSection.locator(".section-anchor").click();

    // Verify URL contains properly encoded French characters
    expect(page.url()).toContain("d%c3%a9finitions"); // é encoded as %c3%a9

    // Test direct navigation with encoded URL
    await page.goto("/recommandations/cancer-sein/#d%c3%a9finitions");
    await expect(page.locator("#définitions-b")).toHaveClass(/show/);
  });

  test("should maintain anchor state on page reload", async ({ page }) => {
    // Navigate to page with anchor
    await page.goto("/recommandations/cancer-sein/#sources");
    await expect(page.locator("#sources-block")).toHaveClass(/show/);

    // Reload page - section should remain open
    await page.reload();
    await expect(page.locator("#sources-block")).toHaveClass(/show/);
    expect(page.url()).toContain("#sources");
  });

  test("should handle multiple sections correctly", async ({ page }) => {
    await page.goto("/recommandations/cancer-sein/");

    // Open first section
    const definitionsSection = page.locator('h2:has-text("Définitions")');
    await definitionsSection.hover();
    await definitionsSection.locator(".section-anchor").click();
    await expect(page.locator("#définitions-b")).toHaveClass(/show/);

    // Open second section - first should close (Bootstrap collapse behavior)
    const sourcesSection = page.locator('h2:has-text("Sources")');
    await sourcesSection.hover();
    await sourcesSection.locator(".section-anchor").click();
    await expect(page.locator("#sources-block")).toHaveClass(/show/);
    expect(page.url()).toContain("#sources");
  });

  test("should work on different recommendation pages", async ({ page }) => {
    // Test on a different page to ensure feature works globally
    await page.goto("/recommandations/hypertension-arterielle/");

    // Find any expandable section
    const firstExpandableSection = page
      .locator("h2")
      .filter({ hasText: /Définitions|Clinique|Traitement/ })
      .first();

    if ((await firstExpandableSection.count()) > 0) {
      await firstExpandableSection.hover();
      const anchor = firstExpandableSection.locator(".section-anchor");
      await expect(anchor).toBeVisible();

      await anchor.click();
      // Should change URL
      expect(page.url()).toContain("#");
    } else {
      // Skip test if no expandable sections found on this page
      console.log(
        "No expandable sections found on hypertension-arterielle page - skipping test"
      );
    }
  });

  test("should copy section URL to clipboard on anchor click", async ({
    page,
  }) => {
    await page.goto("/recommandations/cancer-sein/");

    // Grant clipboard permissions
    await page
      .context()
      .grantPermissions(["clipboard-read", "clipboard-write"]);

    // Click on a section anchor
    const definitionsSection = page.locator('h2:has-text("Définitions")');
    await definitionsSection.hover();
    const anchor = definitionsSection.locator(".section-anchor");
    await anchor.click();

    // Wait for clipboard operation to complete
    await page.waitForTimeout(500);

    // Verify the clipboard contains the section URL
    const clipboardText = await page.evaluate(() =>
      navigator.clipboard.readText()
    );
    expect(clipboardText).toContain(
      "/recommandations/cancer-sein/#d%c3%a9finitions"
    );

    // No visual feedback - clipboard operation is silent
    // Just verify the URL was copied successfully
  });
});
