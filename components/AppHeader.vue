<template>
  <Drawer v-model:visible="showMenu">
    <template #header>
      <AppLogo />
    </template>
    <AppMenu @item-click="toggleMenu" />
  </Drawer>
  <header class="sticky top-0 py-2 z-50 backdrop-blur-md">
    <div class="container mx-auto px-2">
      <nav class="flex justify-between p-2 items-center">
        <div class="block md:hidden">
          <Button class="shadow-md" type="button" severity="secondary" @click="toggleMenu" aria-label="Mostrar o esconder menú" rounded outlined>
            <template #icon>
              <Icon name="heroicons:bars-3" />
            </template>
          </Button>
        </div>
        <div>
          <AppLogo />
        </div>
        <div class="flex items-center">
          <AppMenu class="hidden md:flex" />
          <DarkModeSwitch />
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
const { y: verticalWindowScroll } = useWindowScroll()

const showMenu = ref(false)
const showHeaderBackground = ref(false)
const scrollThreshold = ref(50)

const toggleMenu = () => {
  showMenu.value = !showMenu.value
}

watch(verticalWindowScroll, async (value) => {
    showHeaderBackground.value = value > scrollThreshold.value
})

</script>