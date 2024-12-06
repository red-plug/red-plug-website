<template>
    <Button type="button" severity="secondary" @click="changeTheme">
        <template #icon>
            <Icon name="heroicons:computer-desktop" v-if="selectedTheme.key == 'system'" />
            <Icon name="heroicons:sun" v-if="selectedTheme.key == 'light'" />
            <Icon name="heroicons:moon" v-if="selectedTheme.key == 'dark'" />
        </template>
    </Button>
</template>

<script setup lang="ts">

const themes = ref([
    { 'key': 'system', 'label': 'System' },
    { 'key': 'light', 'label': 'Light' },
    { 'key': 'dark', 'label': 'Dark' },
])
const colorMode = useColorMode()
const index = ref<number>(0)

index.value = themes.value.findIndex(theme => theme.key === colorMode.preference)
const selectedTheme = ref(themes.value[index.value])
    
const changeTheme = () => {
    index.value = index.value < 2 ? index.value + 1 : 0
    colorMode.preference = themes.value[index.value].key
    selectedTheme.value = themes.value[index.value]
}

</script>