# Fakturownia-Integration

Package for generate Fakturownia Integration from order

[![swagger](https://img.shields.io/badge/documentation-swagger-green)](https://escolalms.github.io/Fakturownia-Integration/)
[![codecov](https://codecov.io/gh/EscolaLMS/Fakturownia-Integration/branch/main/graph/badge.svg?token=O91FHNKI6R)](https://codecov.io/gh/EscolaLMS/Fakturownia-Integration)
[![Tests PHPUnit in environments](https://github.com/EscolaLMS/Fakturownia-Integration/actions/workflows/test.yml/badge.svg)](https://github.com/EscolaLMS/Fakturownia-Integration/actions/workflows/test.yml)
[![Maintainability](https://api.codeclimate.com/v1/badges/60eb83351d2d550c15cb/maintainability)](https://codeclimate.com/github/EscolaLMS/Fakturownia-Integration/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/60eb83351d2d550c15cb/test_coverage)](https://codeclimate.com/github/EscolaLMS/Fakturownia-Integration/test_coverage)
[![downloads](https://img.shields.io/packagist/dt/escolalms/Fakturownia-Integration)](https://packagist.org/packages/escolalms/Fakturownia-Integration)
[![downloads](https://img.shields.io/packagist/v/escolalms/Fakturownia-Integration)](https://packagist.org/packages/escolalms/Fakturownia-Integration)
[![downloads](https://img.shields.io/packagist/l/escolalms/Fakturownia-Integration)](https://packagist.org/packages/escolalms/Fakturownia-Integration)

## What does it do
This package is used to add invoices to Fakturownia after catch dispatched event `EscolaLms\Cart\Events\OrderPaid`.

[EscolaLms/Invoices](https://github.com/EscolaLMS/Invoices) package defined routing to generate PDF invoice on the same path.
The two packages cannot run in parallel.

## Installing
- `composer require escolalms/fakturownia-integration`
- `php artisan migrate`
- Create file `.env` and set to your account in <a href="https://fakturownia.pl" target="_blank">Fakturownia</a>
```
FAKTUROWNIA_HOST=
FAKTUROWNIA_TOKEN=
```

## Database
Add table `fakturownia_orders` and relation to table `order` from packed `escolalms/cart`


## Endpoints
All the endpoints are defined in [![swagger](https://img.shields.io/badge/documentation-swagger-green)](https://escolalms.github.io/Fakturownia-Integration/)

## Tests
Run `./vendor/bin/phpunit` to run tests. See [tests](https://github.com/EscolaLMS/Fakturownia-Integration/tree/main/tests) folder as it's quite good staring point as documentation appendix.

Test details [![codecov](https://codecov.io/gh/EscolaLMS/Fakturownia-Integration/branch/main/graph/badge.svg?token=O91FHNKI6R)](https://codecov.io/gh/EscolaLMS/Fakturownia-Integration) [![Tests PHPUnit in environments](https://github.com/EscolaLMS/Fakturownia-Integration/actions/workflows/test.yml/badge.svg)](https://github.com/EscolaLMS/Fakturownia-Integration/actions/workflows/test.yml)

## Events
This package does not dispatch any events.

## Listeners
- ImportInvoiceListener catch `EscolaLms\Cart\Events\OrderPaid` => add invoice to Fakturownia

## Permissions
The package uses the `cart_order_list` permission from the [Cart](https://github.com/EscolaLMS/Cart) package.
All permissions are defined in Cart package [seeder](https://github.com/EscolaLMS/Cart/blob/main/src/Enums/CartPermissionsEnum.php)
