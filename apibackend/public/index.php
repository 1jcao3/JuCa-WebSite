<?php

use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;

define('LARAVEL_START', microtime(true));

// Composer autoload
require __DIR__.'/../vendor/autoload.php';

// Configuración personalizada
$app = Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        api: __DIR__.'/../routes/api.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware) {
        // Agregar middleware aquí si es necesario
    })
    ->withExceptions(function (Exceptions $exceptions) {
        // Manejar excepciones aquí si es necesario
    })
    ->create();

// Manejo de la solicitud
$response = $app->handle(
    $request = Illuminate\Http\Request::capture()
);

$response->send();

$app->terminate();
