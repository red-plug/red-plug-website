<template>
    <div class="font-serif text-1xl sm:text-3xl group">
        <NuxtLink href="/">
            <div class="flex items-center">
                <NuxtImg src="/logo/red-plug-responsive.svg" height="300" alt="Red Plug Logo" :class="getImgClass" />
                <h3 class="hidden sm:block md:hidden">
                    RP
                </h3>
                <h3 class="hidden md:block">
                    Red Plug 
                </h3>
            </div>
        </NuxtLink>
    </div>
</template>
<script setup lang="ts">
import { cn } from "@/lib/utils"

interface AppLogoProps {
    imgClassName?: string
}

const props = withDefaults(defineProps<AppLogoProps>(), {
  imgClassName: "",
})

const getImgClass = computed(() =>
  cn("h-10 md:h-14 inline-block mr-2", props.imgClassName),
)

</script>