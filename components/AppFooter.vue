<template>
  <footer class="bg-gradient-to-b from-transparent to-primary-200 dark:to-primary-950">
    <div class="py-4 md:py-6 container mx-auto">
      <div class="flex flex-col-reverse md:grid md:grid-cols-4 gap-1 sm:gap-x-4">
        <div class="col-span-1 md:col-span-2 px-4">
          <div class="flex justify-center md:justify-start">
            <AppLogo imgClassName="h-16 md:h-20" />
          </div>
          <div class="flex flex-col text-gray-700 dark:text-gray-200 gap-y-1 my-6 text-center md:text-start">
            <a href="https://maps.app.goo.gl/DKYsFcWt9iRjnkxi6" target="_blank" rel="noopener noreferrer" class="hover:text-primary-500">
              Zapopan, Jalisco, México
            </a>
            <a href="mailto:contacto@redplug.com.mx" target="_blank" class="hover:text-primary-500 underline">
              contacto@redplug.com.mx
            </a>
            <div>
              Todos los derechos reservados &copy; {{ new Date().getFullYear() }} Red Plug
            </div>
          </div>
          <div class="my-8 md:my-12 flex justify-center gap-x-8 text-3xl text-gray-700 dark:text-gray-400 md:w-1/2">
            <a href="https://www.linkedin.com/company/red-plug" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Icon name="cib:linkedin" class="hover:text-primary-500" />
            </a>
            <a href="https://github.com/red-plug" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Icon name="cib:github" class="hover:text-primary-500" />
            </a>
            <a href="https://www.instagram.com/redplugmx/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Icon name="cib:instagram" class="hover:text-primary-500" />
            </a>
          </div>
        </div>
        <div class="col-span-1 md:col-span-2 grid grid-cols-2 gap-x-1 sm:gap-x-4 px-4 sm:px-8 md:px-0">
          <div class="col-span-1">
            <nav class="grid grid-cols-1 justify-items-center md:flex md:flex-col opacity-75">
              <h3 class="font-serif uppercase font-medium opacity-60 mb-2">
                Servicios
              </h3>
              <NuxtLink to="/#welcome" class="mb-2 hover:underline hover:text-primary-500">
                Inicio
              </NuxtLink>
              <NuxtLink href="/#projects" class="mb-2 hover:underline hover:text-primary-500">
                Proyectos
              </NuxtLink>
              <NuxtLink to="/blog" class="mb-2 hover:underline hover:text-primary-500">
                Blog
              </NuxtLink>
              <NuxtLink href="/#contact" class="mb-2 hover:underline hover:text-primary-500">
                Contacto
              </NuxtLink>
            </nav>
          </div>
          <div class="col-span-1">
            <nav class="grid grid-cols-1 justify-items-center md:flex md:flex-col opacity-75">
              <h3 class="font-serif uppercase font-medium opacity-60 mb-2">
                Organización
              </h3>
              <NuxtLink to="/nosotros" class="mb-2 hover:underline hover:text-primary-500">
                Nosotros
              </NuxtLink>
              <NuxtLink to="/aviso-de-privacidad" class="mb-2 hover:underline hover:text-primary-500">
                Aviso de Privacidad
              </NuxtLink>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>