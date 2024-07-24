<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Paths
    |--------------------------------------------------------------------------
    |
    | Define los caminos para los que se permiten solicitudes CORS. Puedes usar
    | el comodín "*" para permitir CORS en todos los caminos o listar caminos
    | específicos.
    |
    */

    'paths' => ['api/*', 'sanctum/csrf-cookie'],

    /*
    |--------------------------------------------------------------------------
    | Allowed Methods
    |--------------------------------------------------------------------------
    |
    | Define los métodos que están permitidos cuando se realizan solicitudes CORS.
    | Puedes usar el comodín "*" para permitir todos los métodos.
    |
    */

    'allowed_methods' => ['*'],

    /*
    |--------------------------------------------------------------------------
    | Allowed Origins
    |--------------------------------------------------------------------------
    |
    | Define los orígenes que están permitidos para hacer solicitudes CORS. Puedes
    | usar el comodín "*" para permitir todos los orígenes. Alternativamente, puedes
    | especificar los dominios que deseas permitir.
    |
    */

    'allowed_origins' => ['*'], // Ajusta esto si necesitas orígenes específicos

    /*
    |--------------------------------------------------------------------------
    | Allowed Origins Patterns
    |--------------------------------------------------------------------------
    |
    | Define los patrones de origen que están permitidos para hacer solicitudes CORS.
    |
    */

    'allowed_origins_patterns' => [],

    /*
    |--------------------------------------------------------------------------
    | Allowed Headers
    |--------------------------------------------------------------------------
    |
    | Define los encabezados que están permitidos en las solicitudes CORS. Puedes
    | usar el comodín "*" para permitir todos los encabezados.
    |
    */

    'allowed_headers' => ['*'],

    /*
    |--------------------------------------------------------------------------
    | Exposed Headers
    |--------------------------------------------------------------------------
    |
    | Define los encabezados que están expuestos en las respuestas CORS.
    |
    */

    'exposed_headers' => [],

    /*
    |--------------------------------------------------------------------------
    | Max Age
    |--------------------------------------------------------------------------
    |
    | Define el tiempo máximo (en segundos) que los resultados de una solicitud
    | preflight pueden ser almacenados en caché por el navegador.
    |
    */

    'max_age' => 0,

    /*
    |--------------------------------------------------------------------------
    | Supports Credentials
    |--------------------------------------------------------------------------
    |
    | Define si las solicitudes CORS pueden incluir credenciales como cookies
    | o encabezados de autorización.
    |
    */

    'supports_credentials' => false,

];
