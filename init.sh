#!/bin/sh

# Esperar a que la base de datos esté lista
until nc -z -v -w30 db 3306
do
  echo "Esperando a que la base de datos esté disponible..."
  sleep 5
done

# Ejecutar migraciones
echo "Ejecutando migraciones..."
php artisan migrate --force

# Ejecutar el servidor Apache
echo "Iniciando Apache..."
apache2-foreground
