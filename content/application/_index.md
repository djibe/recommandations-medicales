+++
title = "L'Application"
description = "TODO:"
breadcrumbTitle = "Application"
auteurs = ["Jean-Baptiste FRON"]
date = "2023-03-27T09:54:00+02:00"
publishdate = "2023-03-27"
lastmod = "2023-03-27"
draft = true
todo = "background-image: linear-gradient(to right top, #4150f5, #746ff9, #998ffc, #bab0fe, #d8d1ff, #e5e0ff, #f2f0ff, #ffffff, #ffffff, #ffffff, #ffffff, #ffffff);"
+++

<script>
  document.getElementById('app-install').addEventListener('click', async () => {
  // Hide the app provided install promotion
  hideInstallPromotion();
  // Show the install prompt
  deferredPrompt.prompt();
  // Wait for the user to respond to the prompt
  const { outcome } = await deferredPrompt.userChoice;
  // Optionally, send analytics event with outcome of user choice
  console.log(`User response to the install prompt: ${outcome}`);
  // We've used the prompt, and can't use it again, throw it away
  deferredPrompt = null;
});
</script>
