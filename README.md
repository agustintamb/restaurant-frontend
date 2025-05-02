# Bodegón Argentino - Documentación

## Descripción General

Bodegón Argentino es un sitio web para un restaurante tradicional argentino que ofrece una experiencia digital completa para sus clientes. El sitio actúa como landing page informativa y ademas como plataforma para explorar la carta del restaurante, diseñado con una estética que refleja la calidez y autenticidad de un clásico bodegon argentino.

## Características Principales

### 1. Página Principal (Home)

- **Carrusel de Imágenes**: Muestra fotografías atractivas del local y platos destacados
- **Sección "Nuestra Historia"**: Información sobre el origen y trayectoria del restaurante
- **Sección CTA**: Dos botones visibles para el usuario de manera que pueda generar una reserva o ir al menu.
- **Preguntas Frecuentes**: Respuestas a las dudas más comunes de los clientes
- **Formulario de Contacto**: Permite realizar reservas o consultas directamente desde el sitio

### 2. Carta Interactiva

- **Exploración Completa**: Muestra todos los productos disponibles en el restaurante
- **Filtrado por Categorías**: Permite filtrar platos por entrantes, ensaladas, platos principales, pastas, postres, bebidas, etc.
- **Subcategorías**: Algunas categorías como "Platos Principales" contienen subcategorías (carnes rojas, carnes blancas, pescados)
- **Vista Detallada**: Al hacer clic en un producto se accede a una página con información detallada, incluyendo ingredientes, alérgenos y precio

### 3. Sistema de Ruteo

El sitio utiliza un sistema de ruteo que permite:

- Navegar directamente a categorías específicas: `/menu/:categoria`
- Ver productos específicos con su detalle: `/menu/:categoria/:producto`
- Navegar entre productos relacionados
- Mantener coherencia visual y funcional al acceder por URL directa o navegación interna

**Ejemplo**: Acceder a `/menu/platos-principales/bife-de-chorizo` mostrará directamente el detalle del producto "Bife de Chorizo" dentro de su categoría.

## Tecnologías Utilizadas

- **Frontend**: React, TypeScript, Styled Components
- **Ruteo**: React Router
- **Estilos**: Variables CSS y Styled Components
- **Diseño Responsivo**: Adaptado para dispositivos móviles y desktop

## Estructura de Datos

De momento.. el sitio utiliza datos de prueba (mocks) almacenados en archivos JSON con esta estructura:

```json
{
  "categories": [
    {
      "id": "entrantes",
      "name": "Entrantes"
    },
    // Otras categorías...
    {
      "id": "platos-principales",
      "name": "Platos Principales",
      "subcategories": [
        {
          "id": "carnes-rojas",
          "name": "Carnes Rojas"
        }
        // Otras subcategorías...
      ]
    }
  ],
  "products": [
    {
      "id": "empanadas-carne",
      "categoryId": "entrantes",
      "name": "Empanadas de Carne",
      "description": "Clásicas empanadas argentinas...",
      "ingredientes": ["Carne picada", "Cebolla", "..."],
      "alergenos": ["Gluten", "Huevo"],
      "precio": 1200,
      "img": "https://placehold.co/600x400?text=Empanadas+de+Carne"
    }
    // Otros productos...
  ]
}
```

## Integración con Backend (Futuro)

El sitio está diseñado para conectarse fácilmente a un backend. Cuando el backend esté desarrollado:

1. La estructura de datos actual permitirá mantener la misma interfaz de usuario
2. Los archivos JSON mock se reemplazarán por llamadas a API
3. El sistema de ruteo se mantendrá, permitiendo enlaces directos a productos y categorías

## Instrucciones para levantar el proyecto localmente:

Clonar el repositorio en la carpeta deseada:

```bash
git clone https://github.com/GonzalezTam/restaurant-frontend.git
```

Ingresar a la carpeta del proyecto:

```bash
cd restaurant-frontend
```

Para instalar las dependencias del proyecto, ejecutar el siguiente comando:

```bash
npm install
```

Para correr el proyecto, ejecutar el siguiente comando:

```bash
npm run dev
```
