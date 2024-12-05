<template>
    <div class="h-screen md:h-auto flex items-center bg-surface-0 dark:bg-surface-900">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 md:px-16 px-8">
            <div class="col-span-1 h-full md:ps-8 flex flex-col justify-center order-1 md:order-none">
                <h2 class="text-4xl md:text-5xl font-semibold">
                    <span class="text-primary">¿</span>Qué te detiene de lanzar tu idea en línea<span class="text-primary">?</span>
                </h2>
                <p class="text-xl md:text-2xl mt-4">
                    <ClientOnly>
                        <Carousel :value="items" :autoplayInterval="2000" orientation="vertical" :showIndicators="false" :showNavigators="false" circular :pt="carouselPt">
                            <template #item="slotProps">
                                <span v-text="slotProps.data">
                                </span>
                            </template>
                        </Carousel>
                    </ClientOnly>
                </p>
                <div class="mt-4 flex gap-x-2">
                    <Button as="a" href="/#contact" class="transition-transform md:hover:scale-110 w-1/2 md:w-auto">
                        Cuéntanos
                    </Button>
                    <Button as="a" href="/#projects" severity="secondary" class="w-1/2 md:w-auto">
                        Conócenos
                    </Button>
                </div>
            </div>
            <div class="col-span-1">
                <ClientOnly>
                    <Vue3Lottie animationLink="/animations/animation-10.json" width="100%" height="100%" class="hidden md:block" noMargin />
                    <Vue3Lottie animationLink="/animations/animation-10.json" width="80%" height="100%" class="block md:hidden" noMargin />
                </ClientOnly>
             </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import type { CarouselPassThroughOptions } from 'primevue/carousel';

const items = ref([
    'Conecta con tus clientes',
    'Sincroniza tu operación',
    'Impulsa tu negocio',
    'Da visibilidad a tu marca'
])

const carouselPt = {
    viewport: {
        style: {
            'height': '2rem'
        }
    }
} as CarouselPassThroughOptions
</script>