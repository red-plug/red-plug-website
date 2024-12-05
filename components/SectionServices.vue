<template>
    <div class="mt-16 md:mt-32">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 md:px-16 p-8">
            <div class="col-span-1">
                <h2 class="text-3xl md:text-4xl text-center font-semibold mt-8">
                    Nuestros servicios
                </h2>
                <div class="flex justify-center h-full">
                    <ClientOnly>
                        <Vue3Lottie animationLink="/animations/animation-01.json" width="90%" height="100%"
                            class="hidden md:block" noMargin />
                        <Vue3Lottie animationLink="/animations/animation-01.json" width="40%" height="80%"
                            class="block md:hidden" noMargin />
                    </ClientOnly>
                </div>
            </div>
            <div class="col-span-1">
                <Accordion :value="0" class="mt-8 md:mt-24 border border-primary border-dashed">
                    <AccordionPanel v-for="(service, index) in services" :key="service.icon" :value="index">
                        <AccordionHeader>
                            <span class="flex items-center gap-2 w-full">
                                <Icon :name="service.icon" class="text-primary text-xl"/>
                                <span class="font-bold">{{ service.name }}</span>
                            </span>
                        </AccordionHeader>
                        <AccordionContent>
                            <p class="m-0" v-if="!service.draft">{{ service.description }}</p>
                            <div v-if="service.draft">
                                <Skeleton width="90%" class="mb-2"></Skeleton>
                                <Skeleton width="100%" class="mb-2"></Skeleton>
                                <Skeleton width="80%" class="mb-2"></Skeleton>
                                <Skeleton width="95%" class="mb-2"></Skeleton>
                                <Skeleton width="70%" class="mb-2"></Skeleton>
                                <Skeleton width="100%" class="mb-2"></Skeleton>
                                <Skeleton width="60%" class="mb-2"></Skeleton>
                                <p class="text-center text-sm italic">
                                    (Aún estamos perfeccionando esta herramienta)
                                </p>
                            </div>
                        </AccordionContent>
                    </AccordionPanel>
                </Accordion>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
const services = ref<Service[]>([
    {
        name: 'Desarrollo a la medida',
        description: 'Transformamos tus ideas en aplicaciones web únicas, diseñadas especialmente para ti. Creamos soluciones personalizadas que se adaptan a tus necesidades y objetivos, utilizando tecnologías modernas. Nuestro software es modular y escalable, lo que significa que puede crecer y evolucionar contigo, integrando nuevas funciones cuando lo necesites. Te garantizamos un producto robusto, seguro y fácil de usar, pensado para ofrecerte una experiencia excepcional y resultados prácticos en tu día a día.',
        icon: 'heroicons:cube-transparent',
        draft: false
    },
    {
        name: 'Sistema de Gestión de contenidos (CMS)',
        description: 'Creamos sistemas de gestión de contenido (CMS) diseñados a tu medida, para que tengas el control total sobre tu sitio web o aplicación. Nuestras soluciones son intuitivas y flexibles, permitiéndote administrar tu contenido de manera sencilla. Además, desarrollamos un CMS modular y escalable, que puede adaptarse y crecer según tus necesidades cambien o aumenten. Te entregamos una herramienta robusta, segura y optimizada, que se ajusta perfectamente a tus objetivos y te facilita la gestión de tu proyecto digital.',
        icon: 'heroicons:document-arrow-up',
        draft: true
    },
    {
        name: 'E-commerce a la medida',
        description: 'Diseñamos plataformas de ecommerce únicas y adaptadas a tus necesidades, para que puedas vender en línea de manera efectiva y profesional. Nuestras soluciones son intuitivas, seguras y escalables, lo que te permite comenzar con lo que necesitas ahora y añadir funcionalidades a medida que tu negocio crece. Creamos una experiencia de compra optimizada tanto para ti como para tus clientes, garantizando un sistema robusto y personalizado que se adapta a tus objetivos y te ayuda a alcanzar el éxito en el mundo digital.',
        icon: 'heroicons:shopping-cart',
        draft: true
    },
    {
        name: 'Hosting (exclusivo clientes de desarrollo)',
        description: 'Ofrecemos soluciones de hosting confiables y seguras, diseñadas exclusivamente para quienes desarrollan su CMS, ecommerce o software web personalizado con nosotros. Nuestro servicio garantiza un entorno optimizado y completamente adaptado a tu proyecto, brindándote alta disponibilidad, velocidad y soporte técnico dedicado. Al ser exclusivo para nuestros clientes, aseguramos una integración perfecta entre el desarrollo y el alojamiento, proporcionando una experiencia sin interrupciones y un rendimiento superior.',
        icon: 'heroicons:server-stack',
        draft: false
    }
])

interface Service {
    name: string
    description: string
    icon: string
    draft: boolean
}
</script>