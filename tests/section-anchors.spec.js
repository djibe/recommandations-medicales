const { test, expect } = require('@playwright/test');

test.describe('Section Anchors', () => {
  test('should work end-to-end for expandable sections', async ({ page }) => {
    // Test on a real page with sections
    await page.goto('/recommandations/cancer-sein/');
    
    // 1. Test anchor appears on hover
    const definitionsSection = page.locator('h2:has-text("Définitions")');
    await definitionsSection.hover();
    const anchor = definitionsSection.locator('.section-anchor');
    await expect(anchor).toBeVisible();
    
    // 2. Test click opens section and changes URL
    await anchor.click();
    await expect(page.locator('#définitions-b')).toHaveClass(/show/);
    expect(page.url()).toContain('d%c3%a9finitions'); // URL encoded
    
    // 3. Test direct URL navigation opens section
    await page.goto('/recommandations/cancer-sein/#sources');
    await expect(page.locator('#sources-block')).toHaveClass(/show/);
    
    // 4. Test fallback for invalid anchor
    await page.goto('/recommandations/cancer-sein/#nonexistent');
    // Should not crash - page loads normally
    await expect(page.locator('h1')).toBeVisible();
  });
});