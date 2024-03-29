# Image processing module

[![swagger](https://img.shields.io/badge/documentation-swagger-green)](https://escolalms.github.io/Images/)
[![codecov](https://codecov.io/gh/EscolaLMS/Images/branch/main/graph/badge.svg?token=NRAN4R8AGZ)](https://codecov.io/gh/EscolaLMS/Images)
[![phpunit](https://github.com/EscolaLMS/Images/actions/workflows/test.yml/badge.svg)](https://github.com/EscolaLMS/Courses/actions/workflows/test.yml)
[![downloads](https://img.shields.io/packagist/dt/escolalms/images)](https://packagist.org/packages/escolalms/images)
[![downloads](https://img.shields.io/packagist/v/escolalms/images)](https://packagist.org/packages/escolalms/images)
[![downloads](https://img.shields.io/packagist/l/escolalms/images)](https://packagist.org/packages/escolalms/images)
[![Maintainability](https://api.codeclimate.com/v1/badges/7dfeae0462e3599797bf/maintainability)](https://codeclimate.com/github/EscolaLMS/Images/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/7dfeae0462e3599797bf/test_coverage)](https://codeclimate.com/github/EscolaLMS/Images/test_coverage)

## What does it do

The package creates resized images from source by given parameters. This is a headless approach so the backend doesn't know the requested sizes before frontend requests any. 

The input images are stored by Laravel in any of available disk (local storage/s3/any bucket). Once a resized version is requested a cached version in created and returend. Below are examples to show the overall idea. 

The initial resize is done by [Intervention/image](https://github.com/Intervention/image) with `GD` driver. That can be [configured](http://image.intervention.io/getting_started/configuration). 

After inital resized all the images are optimized with [image-optimizer](https://packagist.org/packages/spatie/image-optimizer).

For best results binaries must [be installed](https://github.com/spatie/image-optimizer#optimization-tools). EscolaLMS prepared [Docker Images](https://hub.docker.com/r/escolalms/php) are available for development (tag `work`) and production (tag `prod`).

## Installation

- `composer require escolalms/images`
- `php artisan migrate`

## Database

- `image_caches` - table for saving the original and resized image path

| id | path | hash\_path | created\_at | updated\_at |
| :--- | :--- | :--- | :--- | :--- |
| 1 | avatars/1/avatar.jpg | imgcache/68840270724ee4ff0b481f4fbd2299e13dfe2447.jpg | 2022-05-05 11:29:04 | 2022-05-05 11:29:04 |
| 3 | avatars/4/avatar4.jpg | imgcache/d0f1ab43ae7f2924682b2ce734a24fa7066a8ea7.jpg | 2022-05-05 11:30:49 | 2022-05-05 11:30:49 |
| 2 | avatars/2/avatar2.jpg | imgcache/94c6c83db6562161d38620a74e4e07fb3d9e39ed.jpg | 2022-05-05 11:30:39 | 2022-05-05 11:30:39 |

## Examples

### Default. One image as `302` redirect result . 

Basic resize is made by URL API call which redirects to new created file 

Example `GET` call 

- `http://localhost/api/images/img?path=test.jpg&w=100` call should return resized image to width 100px
- checks if file exsitis 
- if not, creates one with availabe libraries 
- returns 302 redirect 
- example `http://localhost/storage/imgcache/891ee133a8bb111497d494d4c91fe292d9d16bb3.jpg` (assuming you're using local disk storage, in case of s3 location origin would differ)

### Resizing many images at once. JSON array as a result. 

Example `POST` call like 

```bash
POST /api/images/img HTTP/1.1
Host: localhost:1000
Content-Type: application/json
Content-Length: 212

{
  "paths": [{
    "path": "tutor_avatar.jpg",
    "params": {
      "w": 100
    }
  }, {
    "path": "tutor_avatar.jpg",
    "params": {
      "w": 200
    }
  }, {
    "path": "tutor_avatar.jpg",
    "params": {
      "w": 300
    }
  }]
} 
```

generates following result

```json
[
  {
    "url": "http://localhost/storage/imgcache/3421584c40d270d0fa7ef0c31445a1565db07cb4.jpg",
    "path": "imgcache/3421584c40d270d0fa7ef0c31445a1565db07cb4.jpg",
    "hash": "3421584c40d270d0fa7ef0c31445a1565db07cb4"
  },
  {
    "url": "http://localhost/storage/imgcache/7efc528c2cc7b57d79a42f80d2c1891b517cabfe.jpg",
    "path": "imgcache/7efc528c2cc7b57d79a42f80d2c1891b517cabfe.jpg",
    "hash": "7efc528c2cc7b57d79a42f80d2c1891b517cabfe"
  },
  {
    "url": "http://localhost/storage/imgcache/5db4f572d8c8b1cb6ad97a3bffc9fd6c18b56cc3.jpg",
    "path": "imgcache/5db4f572d8c8b1cb6ad97a3bffc9fd6c18b56cc3.jpg",
    "hash": "5db4f572d8c8b1cb6ad97a3bffc9fd6c18b56cc3"
  }
] 
```

## Hashing algorithm 

There is simple algorithm to guess the result image URL. This allows frontend application to know the processed URL without calling API. As follows 

```php 
$path = 'test.jpg';
$params = ['w'=>100];

$hash = sha1($path.json_encode($params));
```

then result URL would be  

```php
$output_file = $url_prefix.$hash.$extension;
```

## Endpoint 

There is API endpoints documentation [![swagger](https://img.shields.io/badge/documentation-swagger-green)](https://escolalms.github.io/Images/)

## Tests

Run `./vendor/bin/phpunit` to run tests.

Test details
[![codecov](https://codecov.io/gh/EscolaLMS/Images/branch/main/graph/badge.svg?token=NRAN4R8AGZ)](https://codecov.io/gh/EscolaLMS/Images)
[![phpunit](https://github.com/EscolaLMS/Images/actions/workflows/test.yml/badge.svg)](https://github.com/EscolaLMS/Courses/actions/workflows/test.yml)

## Events

This package extends `filesystem`.

```
$this->app->extend('filesystem', function ($service, $app) {
    return new CustomFilesystemManager($app);
});
```

1. `FileDeleted` - The event is dispatched when you use `delete` method on the `Storage` facade.
2. `FileStored` - The event is dispatched when you use `put`, `putFile` or `putFileAs` method.

## Listeners

This package listens for `FileDeleted` and `FileStored` events and removes the resized images from the given path.

## How to use this on frontend

Below is our totally **headless** approach on generating images

The following example tries to achives 2 purposes
- generate image on fly, frontend decide what sizes are needed
- images are not served by API

The idea is that since we know tha hashing algoritm for cached images we can guess that the URL will be like.
If that URL is throwing 404 then we're calling the API endpoint to generate one.
Fortunately this endpoint creates an requested image, caches it and returns redirect which is good for image src.

A major disadvantage of this approach is that first user once will get 404 in networking and experince few seconds delay before image is rendered after not founded.

```html
<script type="text/javascript" src="sha1.js"></script>
<script>
  // Initial variables 
  const imgPath = "tutor_avatar.jpg";
  const imgPrefix = "http://localhost/storage/imgcache";
  const apiUrl = "http://localhost/api/images/img";
  const rndWith = Math.round(Math.random() * 1000);
  const params = { w: rndWith.toString() }; // random width params
  // super important that all param values are strings 
  // hash from { w: 100 } is different then { w: "100" }
			
  // stright forward helper to convert obejct to URL query params 
  const paramsToUrl = (params) =>
    Object.entries(params)
      .map((e) => e.join("="))
      .join("&");

  /** 
   * @param string path, example "tutor_avatar.jpg"
   * @param array params, example { w: "100" } or { w: "100", h: "10" }
   * @return Image 
   */ 
  const getImage = (path, params) => {
    const hash = SHA1(path + JSON.stringify(params));
    const url = `${imgPrefix}/${hash}.${path.split(".").pop()}`;
    const imgApiUrl = `${apiUrl}/?path=${imgPath}&${paramsToUrl(params)}`;
    const image = new Image();
    image.src = url;
    image.onerror = () => {
      if (image.src != imgApiUrl) {
        // the cached version does not exists yet, lets call API to create one and redirect.
        image.src = imgApiUrl;
      }
    };

    return image;
  };

  document.body.appendChild(getImage(imgPath, params));
</script> 
```

Working example is availabe in [doc](https://github.com/EscolaLMS/Images/tree/main/doc) folder.
