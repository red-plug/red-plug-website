## El blog

El blog es una sección importante de nuestra organización es un sitio donde podemos almacenar y compartir nuestro conocimiento con otros integrandes de Red Plug y/o público en general, sientete libre de agregar el contenido que desees tomando en cuenta que ese contenido te pertenece y el blog de Red Plug es solo un canal de comunicación. Recuerda añadirte como autor a cada entrada de blog que redactes


## Como escribir una entrada de blog

El blog funciona mediante markdown, por lo tanto no requieres escribir código para publicar una entrada, estos archivos se crean en la carpeta `content/`, dale un nombre reconocible y no ambiguo.

Las imágenes relacionadas a tu entrada de blog así como la imagen de portada, deben de estar en formato `.webp` para no impactar negativamente en el seo de la página.

Las imagenes relacionadas a tu entrada de blog deben de encontrarse en la carpeta `public/images/blog/el-nombre-de-tu-entrada-de-blog/`

Tu entrada de blog debe de tener metadata correcta:

```md
---
title: 'Carlos Alfonso Stylist'
ogTitle: 'Carlos Alfonso Stylist'
description: 'Un sitio web moderno y lleno de estilo que representa y enseña lo mejor del buen vestir'
ogDescription: 'Un sitio web moderno y lleno de estilo que representa y enseña lo mejor del buen vestir'
image: '/images/blog/carlos-alfonso-stylist-portfolio/1.webp'
ogImage: '/images/blog/carlos-alfonso-stylist-portfolio/1.webp'
tags: ['Proyecto']
weight: 1
publishDate: '2024-12-05T09:00:00+00:00'
authorName: 'Andrés López'
authorLink: 'https://github.com/andreslqr'
authorImage: 'https://avatars.githubusercontent.com/u/113704516?v=4'

sitemap:
  loc: /blog/carlos-alfonso-stylist-portfolio
  lastmod: 2024-12-06
  changefreq: yearly
  priority: 0.8

--- 
```
* El **title** es el valor que aparece en la pestaña
* El **ogTitle** es el valor que aparece cuando compartes por alguna red social
* La **description** es el valor que aparece en los resultados de Google
* La **ogDescription** es el valor que aparece cuando compartes por alguna red social
* La **image** es la imagen que aparece como portada en el sitio web
* La **ogImage** es la imagen que aparece cuando compartes por alguna red social
* Las tags es la manera en que filtra el contenido, algunos ejemplos
    - 'Proyecto' // se utiliza para anunciar la publicación de un nuevo sitio web de algún cliente
    - 'Laravel' // se utiliza para compartir conocimientos relacionado a Laravel
    - 'FilamentPHP' // se utiliza para compartir conocimiento relacionado a Filament PHP
    - 'PHP'  // se utiliza para compartir conocimiento relacionado a PHP
    - 'Nuxt.js' // se utiliza para compartir conocimiento relacionado a Nuxt
    - 'Javascript' // se utiliza para compartir conocimiento relacionado a Javascript
    - 'SQL' // se utiliza para compartir conocimiento relacionado a SQL
Puedes usar cualquier tag que indexe de manera adecuada el contenido solo recuerda no duplicar tags si ya alguien más uso alguna parecida ejemplo usar 'Filament' cuando alguien ya uso 'FilamentPHP'
* El **weight** es el modo en que se ordenara la entrada de blog en relación al resto, intenta usar un nuevo +1 superior a la entrada de blog que tenga más alto este valor
* El **publishDate** es el valor de la fecha de publicación siguiendo el [formato ISO 8601](https://es.wikipedia.org/wiki/ISO_8601#Fechas_y_horas_conjuntas)
* el **authorName** es tu nombre (es la manera de referir contenido como tuyo)
* el **authorLink** es el link a tu imagen principal, puede ser tu portfolio, alguna red social o tu GitHub
* el **authorImage** es tu imagen, si no quieres usar una real puedes usar la de ti GitHub, solo inspecciona la página de GitHub de tu perfil y busca tu imagen (es tu ID de GitHub: https://avatars.githubusercontent.com/u/{ID})
* El **sitemap** integra las opciones para añadirlo al sitemap de manera automática
    - El **loc** es la url, recuerda que tiene que ser '/blog/' + elNombreDeTuArchivoMarkdown
    - El **lasmod** debe de ser la fecha de publicación en [formato ISO 8601 simple](https://es.wikipedia.org/wiki/ISO_8601#Fecha_del_calendario)
    - el **changefreq** debe de ser always, hourly, daily, weekly, monthly, yearly o never
    - el **priority** debe de ser siempre 0.8 para mantener todas las entradas de blog al mismo nivel en los resultados de Google

Si quieres más control sobre el contenido dale una leída a la [documentación de Nuxt Content](https://content.nuxt.com/usage/markdown#introduction)
(hasta puedes usar componentes de Vue en tus entradas).

Una vez que hayas terminado tu entrada de blog solo haz un commit que incluya el markdown, las imagenes y cualquier otra cosa que requiera la entrada (por ejemplo componentes) una vez que subas el commit automáticamente comenzará la autopublicación y lo podrás ver en https://redplug.com.mx/blog en pocos minutos.

Nuevamente todo el contenido que generes te pertence a ti, y justo para eso sirve el autor ya que le dara visbilidad a quien lo escribe y no a la organización misma, esto con la idea de darte una plataforma donde puedas compartir tus ideas sin necesidad de pagar por un blog/plataforma/hosting etc.

