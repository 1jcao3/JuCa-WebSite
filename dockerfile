# Usar la imagen oficial de PHP con Apache
FROM php:8.3-apache

# Instalar extensiones de PHP necesarias y herramientas adicionales
RUN apt-get update && \
    apt-get install -y \
    git \
    unzip \
    libzip-dev \
    && docker-php-ext-install pdo pdo_mysql zip

# Instalar Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Establecer el directorio de trabajo
WORKDIR /var/www/html

# Copiar el código de la aplicación al contenedor
COPY apibackend/ .
COPY apibackend /var/www/html
# Instalar dependencias de Composer
RUN composer install

# Establecer permisos para el almacenamiento y caché
RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache

RUN a2enmod rewrite
COPY apache-config.conf /etc/apache2/sites-available/000-default.conf
# Exponer el puerto que utilizará Apache
EXPOSE 8000

# Comando para ejecutar Apache
CMD ["apache2-foreground"]
