<template>
  <section class="w-screen h-screen flex justify-center items-center bg-gradient-to-br from-transparent to-primary-100 dark:to-primary-950 px-2" v-if="contact">
    <div class="z-10 border border-primary-500 rounded-lg w-full max-w-md lg:max-w-lg xl:max-w-2xl bg-white/20 dark:bg-black/20 shadow-lg backdrop-blur-sm p-4">
      <div class="flex portrait:flex-col landscape:flex-row items-center gap-4">
        <img :src="contact.image" :alt="contact.name" class="rounded-full w-28 h-28 sm:w-32 sm:h-32 lg:w-40 lg:h-40 xl:w-56 xl:h-56 object-cover portrait:-mt-20 mb-4 border border-primary-800 dark:border-primary-200" />
        <div class="w-full landscape:mt-4">
          <h1 v-text="contact.name + ' ' + contact.lastName" class="text-center font-serif text-3xl font-medium text-gray-900 dark:text-gray-100"></h1>
          <h2 v-text="contact.role" class="text-center text-xl mt-1 font-extralight text-gray-900 dark:text-gray-200"></h2>
          
          <div class="flex justify-center mt-6 text-lg">
            <div>
              <a v-if="contact.number" class="hover:underline hover:text-primary flex items-center" :href="`tel:${contact.number}`">
                <Icon name="heroicons:phone" class="text-primary-500 dark:text-primary-300 mr-1" />
                <span v-text="contact.number"></span>
              </a>
              <a class="hover:underline hover:text-primary flex items-center mt-4" :href="`mailto:${contact.email}`">
                <Icon name="heroicons:envelope" class="text-primary-500 dark:text-primary-300 mr-1" />
                <span v-text="contact.email"></span>
              </a>
            </div>
          </div>
          <div class="flex justify-evenly mt-8">
            <Button as="a" :href="contact.linkedin" target="_blank" class="shadow-sm" type="button" severity="secondary" aria-label="LinkedIn" rounded>
              <template #icon>
                  <Icon name="cib:linkedin" class="text-[#0E76A8]" />
              </template>
            </Button>
            <Button as="a" :href="contact.github" target="_blank" class="shadow-sm" type="button" severity="secondary" aria-label="GitHub" rounded>
              <template #icon>
                  <Icon name="cib:github" class="text-[#000]" />
              </template>
            </Button>
            <Button v-if="contact.twitter" as="a" :href="contact.twitter" target="_blank" class="shadow-sm" type="button" severity="secondary" aria-label="Twitter" rounded>
              <template #icon>
                  <Icon name="cib:twitter" class="text-[#08A0E9]" />
              </template>
            </Button>
            <Button v-if="contact.calendly" as="a" :href="contact.linkedin" target="_blank" class="shadow-sm" type="button" severity="secondary" aria-label="Calendly" rounded>
              <template #icon>
                  <Icon name="heroicons:calendar" class="text-primary-500" />
              </template>
            </Button>
          </div>
          <div class="flex justify-center w-full portrait:-mb-10 mt-8">
            <Button size="large" class="bg-primary-500 hover:bg-primary-600 text-white portrait:w-full"  aria-label="Guardar contacto" raised rounded @click="saveContact">
              Guardar Contacto
            </Button>
          </div>
        </div>
      </div>
    </div>
    <div class="absolute bottom-0 left-0 w-full h-20 flex justify-center items-center">
      <AppLogo />
    </div>
    <div class="absolute top-0 left-0 w-full h-20 flex justify-center items-center">
      <AppLogo />
    </div>
    <div class="h-32 w-32 absolute left-52 md:left-80 top-36">
      <svg class="fill-primary-500" id="10015.io" viewBox="0 0 480 480" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" >
        <path d="M368,280Q335,320,301,357.5Q267,395,201,408.5Q135,422,101.5,362.5Q68,303,107.5,254.5Q147,206,149,146Q151,86,211,74Q271,62,303.5,110.5Q336,159,368.5,199.5Q401,240,368,280Z" />
      </svg>
    </div>
    <div class="h-32 w-32 absolute right-52 md:right-72 bottom-36">
      <svg class="fill-primary-500" id="10015.io" viewBox="0 0 480 480" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" >
        <path d="M386,312Q412,384,346,424.5Q280,465,212.5,435Q145,405,92.5,359Q40,313,41.5,240.5Q43,168,82.5,101.5Q122,35,198,40.5Q274,46,330,81.5Q386,117,373,178.5Q360,240,386,312Z" />
      </svg>
    </div>
    <div class="h-32 w-32 absolute left-24 md:left-72 top-72">
      <svg class="fill-primary-500" id="10015.io" viewBox="0 0 480 480" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" >
        <path d="M393.5,268.5Q328,297,329.5,368Q331,439,274,421Q217,403,157.5,403.5Q98,404,86.5,346Q75,288,54,233.5Q33,179,81.5,146Q130,113,176.5,119Q223,125,267.5,104Q312,83,357.5,109Q403,135,431,187.5Q459,240,393.5,268.5Z" />
      </svg>
    </div>
  </section>
</template>
<script setup lang="ts">
const route = useRoute()

const { name } = route.params

const { data: contact } = await useAsyncData(`team/${name}`, () => queryCollection('team').where('id', '=', `team/team/${name}.json`).first())


const saveContact = async () => {
  let data = contact.value

  if(data == null) {
    return
  }

  let vcard = 'BEGIN:VCARD\n'

  vcard += 'VERSION:3.0\n'
  vcard += `N:${data.lastName};${data.name};;;\n`
  vcard += `FN:${data.name} ${data.lastName}\n`
  vcard += `ORG:Red Plug\n`
  vcard += `TITLE:${data.role}\n`
  vcard += `URL;TYPE=Work:https://redplug.com.mx\n`
  if(data.number) {
    vcard += `TEL;TYPE=CELL:${data.number}\n`
  }
  vcard += `EMAIL;TYPE=INTERNET:${data.email}\n`
  vcard += `PHOTO;TYPE=JPEG;VALUE=URI:${data.image}\n`
  vcard += `X-SOCIALPROFILE;TYPE=linkedin:${data.linkedin}\n`

  if(data.calendly) {
    vcard += `X-SOCIALPROFILE;TYPE=calendly:${data.calendly}\n`
  }

  vcard += 'END:VCARD'

  let blob = new Blob([vcard], { type: "text/vcard" });
  let url = URL.createObjectURL(blob);

  let newLink = document.createElement('a');
  newLink.download = `${data.lastName} ${data.name}` + ".vcf";
  newLink.textContent = data.name;
  newLink.href = url;
  
  newLink.click();

  newLink.remove();
}

if (contact.value == null) {
  throw createError({
    statusCode: 404,
    statusMessage: `Page not found: ${route.path}`,
    fatal: true,
  })
}

definePageMeta({
  layout: false,
})

useSeoMeta({
  title: `Red Plug | ${contact.value.name} ${contact.value.lastName}`,
  ogTitle: `Red Plug | ${contact.value.name} ${contact.value.lastName}`,
  description: `Conoce a ${contact.value.name} ${contact.value.lastName}, ${contact.value.role} en Red Plug`,
  ogDescription: `Conoce a ${contact.value.name} ${contact.value.lastName}, ${contact.value.role} en Red Plug`,
  ogImage: contact.value.image,
})

useHead({
  meta: [
    { name: 'robots', content: 'noindex,nofollow' }
  ]
})
</script>