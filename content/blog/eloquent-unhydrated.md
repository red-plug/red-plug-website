---
title: '[Open Source] Eloquent Unhydrated'
description: 'Optimiza al máximo tus queries en Laravel sin dejar de usar modelos'
image: '/images/blog/eloquent-unhydrated/1.webp'
tags: ['Open Source', 'Laravel']
weight: 5
publishedAt: '2025-07-01T09:00:00+00:00'
authorName: 'Andrés López'
authorUrl: 'https://github.com/andreslqr'
authorImage: 'https://avatars.githubusercontent.com/u/113704516'
---

Hemos creado un pequeño paquete para Laravel 12.x para realizar consultas a bases de datos en poco tiempo.

Muchos desarrolladores a la hora de tratar con miles y millones de datos suelen optar por el Query Builder en vez de Eloquent.

Ya que Eloquent suele tardar bastante debido a los procesos de hidratación (Casting, scoping, eager loading).

Si tu no requieres de este proceso de hidratación y solo quieres obtener la información de base de datos pero sin dejar las ventajas de Eloquent, puedes omitir este proceso con `red-plug/eloquent-unhydrated`, aquí algunas comparaciones:


```php
use App\Models\User;
use Illuminate\Support\Benchmark;

Benchmark::dd([
    'With hydration' => fn () => User::limit(5000)->get(), // 48.448 ms
    'Without hydration' => fn () => User::limit(5000)->getUnhydrated(), // 5.386 ms
]);
```

## Instalación

Para instalar este paquete solo tienes que usar composer:

```bash
composer require red-plug/eloquent-unhydrated
```

## Uso

Puedes acceder a nuevos métodos en todas tus consultas:

```php
use App\Models\User;

$users = User::getUnhydrated();
 
foreach ($users as $user) {
    echo $user->name;
}
```

Incluso paginar:
```php
use App\Models\User;

public function index(): View
{
    return view('user.index', [
        'users' => User::paginateUnhydrated(15)
    ]);
}
```

```php
use App\Models\User;

public function index(): View
{
    return view('user.index', [
        'users' => User::simplePaginateUnhydrated(15)
    ]);
}
```

```php
use App\Models\User;

$users = User::where('votes', '>', 100)->cursorPaginateUnhydrated(15);
```

## Contribución

Las pull request son bienvenidas. Para cambios mayores, por favor abre primero un [issue en Github](https://github.com/red-plug/packages-eloquent-unhydrated/issues) para comenzar el diálogo acerca de lo que quieres cambiar.

Asegurate de pasar los tests antes de proponer nuevo código.

## Licencia

[MIT](https://github.com/red-plug/packages-eloquent-unhydrated/blob/main/LICENSE.md)