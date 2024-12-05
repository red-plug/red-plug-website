<template>
    <Drawer v-model:visible="showMenu">
        <template #header>
            <AppLogo />
        </template>
        <AppMenu  @item-click="toggleMenu" />
    </Drawer>
    <div class="p-4 md:p-6 flex justify-between items-center bg-surface-0 dark:bg-surface-900 z-10">
        <div class="block md:hidden">
            <Button type="button" severity="secondary" @click="toggleMenu">
                <template #icon>
                    <Icon name="heroicons:bars-3" />
                </template>
            </Button>
        </div>
        <AppLogo />
        <div class="flex gap-x-14 items-center">
            <AppMenu class="hidden md:flex" />
            <DarkModeSwitch />
        </div>
    </div>
</template>

<script setup lang="ts">

const showMenu = ref(false)

const toggleMenu = () => {
    showMenu.value = !showMenu.value
}

</script>