<template>
  <div class="relative grid h-[85vh] place-content-center overflow-hidden container mx-auto px-4 md:px-0">
    <h2 class="z-10 text-center whitespace-pre-wrap text-4xl sm:text-5xl lg:text-6xl tracking-tight font-bold">
      Conecta tu negocio al <br /> <TextHighlight class="bg-gradient-to-r from-cyan-400 to-teal-300 dark:from-cyan-600 dark:to-teal-600 mt-1 md:mt-2">mundo digital</TextHighlight>
    </h2>
    <p class="z-10 text-center text-md md:text-xl lg:text-2xl text-black dark:text-white my-4 font-light leading-4">
      Creamos experiencias digitales simples, efectivas <br class="hidden md:inline-block" />  y memorables que se adaptan a tus objetivos
    </p>
    <div class="z-10 mt-4 flex justify-center gap-x-2">
      <Button as="a" href="/#contact" class="transition-transform md:hover:scale-105 w-1/2 md:w-auto dark:text-white" aria-label="Ir a contacto">
        <span class="hidden md:inline">
          Empieza ahora
        </span>
        <span class="md:hidden">
          Empezar
        </span>
      </Button>
      <Button as="a" href="/#services" severity="contrast" class="w-1/2 md:w-auto bg-surface-0 dark:bg-surface-950 hover:bg-surface-50 hover:dark:bg-surface-900" aria-label="Ir a servicios" outlined>
        <span class="hidden md:inline">
          Ver servicios
        </span>
        <span class="md:hidden">
          Servicios
        </span>
      </Button>
    </div>

    <InteractiveGridPattern :class="[
      '[mask-image:radial-gradient(700px_circle_at_center,white,transparent)]',
      'inset-0 h-[200%] skew-y-12',
    ]" :squares="[40, 16]" squares-class-name="hover:fill-primary-300" />
  </div>
</template>