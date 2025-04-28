<template>
  <main>
    <AppHeader />
    <slot />
    <ScrollTop />
    <footer>
      <AppFooter />
    </footer>
  </main>
  <div class="hidden">
    <Icon name="heroicons:computer-desktop" />
    <Icon name="heroicons:sun" />
    <Icon name="heroicons:moon" />
  </div>
</template>
