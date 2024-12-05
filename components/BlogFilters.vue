<template>
    <div class="">
        <Fluid>
            <label for="search" class="text-xs hidden md:inline">Búsqueda</label>
            <InputText id="search" name="search" size="small" v-model="search" class="mt-1" placeholder="Buscar..." />
        </Fluid>
        <Fluid class="mt-4 hidden md:block">
            <label class="text-xs">
                Etiquetas
            </label>
            <Listbox id="tags" name="tags" v-model="tags" :options="props.tags" multiple class="mt-1" checkmark :pt="ptListbox" :virtualScrollerOptions="{ itemSize: 32 }"  />
        </Fluid>
    </div>
</template>
<script setup lang="ts">
import type { ListboxPassThroughOptions } from 'primevue';

const { search, tags } = useFilters()

const props = defineProps({
    tags: Array<String>
})

const ptListbox = {
    option: {
        class: 'text-xs',
        style: {
        }
    }
} as ListboxPassThroughOptions
</script>
