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
- **Filtrado por Categorías**: Permite filtrar platos por la categoria a la que pertenece.
- **Subcategorías**: Algunas categorías como "Platos Principales" podrian contienen subcategorías (carnes rojas, carnes blancas, pescados)
- **Vista Detallada**: Al hacer clic en un producto se accede a una página con información detallada, incluyendo ingredientes, alérgenos y precio

### 3. Sistema de Ruteo

El sitio utiliza un sistema de ruteo que permite:

- Navegar directamente a categorías específicas: `/menu/:categoria`
- Ver productos específicos con su detalle: `/menu/:categoria/:producto`
- Navegar entre productos relacionados
- Mantener coherencia visual y funcional al acceder por URL directa o navegación interna

**Ejemplo**: Acceder a `/menu/platos_principales/bife_de_chorizo` mostrará directamente el detalle del producto "Bife de Chorizo" dentro de su categoría.

## Tecnologías Utilizadas

- **Frontend**: React, TypeScript, Styled Components
- **Estado Global**: Redux Toolkit
- **Peticiones HTTP**: Axios
- **Ruteo**: React Router
- **Estilos**: Variables CSS y Styled Components
- **Diseño Responsivo**: Adaptado para dispositivos móviles y desktop

## Arquitectura y Backend

El sitio está completamente integrado con un backend REST API que maneja:

### Gestión de Estado

- **Redux Toolkit** para el manejo centralizado del estado
- **Async Thunks** para operaciones asíncronas

### Servicios API

El frontend se comunica con el backend a través de servicios especializados:

- **ServiceBase**: Clase base con configuración de Axios e interceptores
- **MenuService**: Gestiona categorías, subcategorías y platos
- **ContactService**: Maneja formularios de contacto

## Estructura del Proyecto

```
src/
├── app/           # Configuración de Redux store
├── components/    # Componentes reutilizables
├── features/      # Slices de Redux por feature
├── hooks/         # Hooks personalizados
├── pages/         # Páginas principales de la aplicación
├── service/       # Servicios para comunicación con API
├── types/         # Definiciones de tipos TypeScript
└── utils/         # Utilidades y constantes
```

## Configuración del Entorno

### Variables de Entorno

Crear un archivo `.env.development` basado en `.env.example`:

```bash
VITE_API_URL=http://localhost:8000/api  # URL del backend
VITE_BASE_URL=http://localhost:5173     # URL del frontend
```

### Backend Requerido

El frontend requiere un backend REST API con los siguientes endpoints:

- Categorías y subcategorías
- Platos con ingredientes y alérgenos
- Sistema de contacto

## Instrucciones para levantar el proyecto localmente:

Clonar el repositorio en la carpeta deseada:

```bash
git clone https://github.com/agustintamb/restaurant-frontend.git
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
