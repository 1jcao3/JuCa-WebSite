#!/bin/bash

# Inicia MySQL
service mysql start

# Espera a que MySQL esté listo
while ! mysqladmin ping -h"localhost" --silent; do
    sleep 1
done

# Crea la base de datos si no existe
mysql -e "CREATE DATABASE IF NOT EXISTS apibackend;"

# Ejecuta las migraciones de Laravel
php artisan migrate --force

# Inicia Apache
apache2-foreground