#!/bin/bash

# Esperar a que la base de datos esté disponible
while ! nc -z mysql 3306; do
    sleep 1
done

# Ejecutar migraciones de Laravel
php artisan migrate --force

# Iniciar Apache
apache2-foreground
