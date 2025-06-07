<template>
  <main>
    <AppHeader />
    <slot />
    <ScrollTop />
    <AgentBubble />
    <footer>
      <AppFooter />
    </footer>
  </main>
  <div class="hidden">
    <Icon name="heroicons:computer-desktop" />
    <Icon name="heroicons:sun" />
    <Icon name="heroicons:moon" />
    <Icon name="heroicons:arrow-right" />
    <Icon name="heroicons:arrow-left" />
  </div>
</template>
