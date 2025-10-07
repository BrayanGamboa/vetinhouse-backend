# VetInHouse Backend API

Sistema de gestión veterinaria desarrollado con arquitectura limpia/hexagonal utilizando Node.js, TypeScript, PostgreSQL y Hapi.js.

## Tabla de Contenidos

- [Características](#características)
- [Tecnologías](#tecnologías)
- [Arquitectura](#arquitectura)
- [Requisitos Previos](#requisitos-previos)
- [Instalación](#instalación)
- [Configuración](#configuración)
- [Uso](#uso)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [API Documentation](#api-documentation)
- [Docker](#docker)
- [Scripts Disponibles](#scripts-disponibles)
- [Convenciones](#convenciones)
- [Testing](#testing)
- [Contribuir](#contribuir)

## Características

- Arquitectura limpia/hexagonal
- TypeScript para type safety
- PostgreSQL como base de datos principal
- Documentación automática con Swagger/OpenAPI
- Logging estructurado con Pino
- Autenticación JWT
- Soporte para múltiples repositorios (PostgreSQL, MongoDB, In-Memory)
- Dockerizado para facilitar el despliegue
- Hot-reload en desarrollo con Nodemon

## Tecnologías

- **Runtime**: Node.js 18+ (LTS)
- **Lenguaje**: TypeScript 5.x
- **Framework Web**: Hapi.js v20+
- **Base de Datos**: PostgreSQL 15+
- **ORM**: Sequelize v6
- **Autenticación**: JWT (hapi-auth-jwt2)
- **Documentación**: Swagger/OpenAPI (hapi-swagger)
- **Logging**: Pino (hapi-pino)
- **Testing**: Jest
- **Containerización**: Docker & Docker Compose

## Arquitectura

El proyecto sigue los principios de **Arquitectura Limpia (Clean Architecture)** y **Arquitectura Hexagonal (Ports & Adapters)**:

```
lib/
├── application/          # Lógica de aplicación
│   ├── use_cases/       # Casos de uso del negocio
│   ├── schemas/         # Validación con Joi
│   └── utilities/       # Utilidades compartidas
├── domain/              # Entidades del dominio
│   └── user/
│       ├── User.ts
│       └── UserRepository.ts
├── infrastructure/      # Implementaciones técnicas
│   ├── config/         # Configuración
│   ├── orm/            # Modelos de Sequelize
│   ├── repositories/   # Implementaciones de repositorios
│   │   ├── postgres/
│   │   ├── mongo/
│   │   └── in_memory/
│   ├── security/       # JWT, encriptación
│   └── webserver/      # Servidor Hapi
└── interfaces/         # Capa de presentación
    ├── controllers/    # Controladores HTTP
    ├── routes/         # Definición de rutas
    └── serializers/    # Formateo de respuestas
```

## Requisitos Previos

- Node.js v18 o superior
- PostgreSQL v15 o superior
- Docker y Docker Compose (opcional)
- npm o yarn

## Instalación

### Instalación Local

```bash
# Clonar el repositorio
git clone https://github.com/BrayanGamboa/vetinhouse-backend.git
cd vetinhouse-backend

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env
# Editar .env con tus configuraciones
```

### Instalación con Docker

```bash
# Clonar el repositorio
git clone https://github.com/BrayanGamboa/vetinhouse-backend.git
cd vetinhouse-backend

# Configurar variables de entorno
cp .env.example .env

# Construir y levantar contenedores
docker-compose up --build
```

## Configuración

Crear archivo `.env` en la raíz del proyecto:

```env
# Server
PORT=3000
HOST=localhost
NODE_ENV=development

# Database
DATABASE_DIALECT=postgres
DATABASE_URI=postgres://username:password@localhost:5432/vetinhouse

# Or use separate parameters
DB_NAME=vetinhouse
DB_USER=postgres
DB_PASS=your_password
DB_HOST=localhost
DB_PORT=5432

# JWT
JWT_SECRET=your_super_secret_key_change_in_production
JWT_EXPIRES_IN=24h

# Logging
LOG_LEVEL=info
```

## Uso

### Desarrollo Local

```bash
# Modo desarrollo con hot-reload
npm run dev

# Compilar TypeScript
npm run build

# Ejecutar versión compilada
npm start
```

### Con Docker

```bash
# Levantar servicios
docker-compose up

# Detener servicios
docker-compose down

# Reconstruir desde cero
docker-compose down -v
docker-compose up --build
```

El servidor estará disponible en: `http://localhost:3000`

## Estructura del Proyecto

```
vetinhouse-backend/
├── lib/
│   ├── application/
│   │   ├── schemas/
│   │   │   ├── auth/
│   │   │   ├── mix/
│   │   │   └── services/
│   │   ├── use_cases/
│   │   └── utilities/
│   ├── domain/
│   │   ├── user/
│   │   ├── role/
│   │   └── service/
│   ├── infrastructure/
│   │   ├── config/
│   │   │   ├── constants.ts
│   │   │   ├── environment.ts
│   │   │   └── service-locator.ts
│   │   ├── orm/
│   │   │   └── sequelize/
│   │   │       ├── models/
│   │   │       └── sequelize.ts
│   │   ├── repositories/
│   │   │   ├── postgres/
│   │   │   ├── mongo/
│   │   │   └── in_memory/
│   │   ├── security/
│   │   └── webserver/
│   │       └── server.ts
│   └── interfaces/
│       ├── controllers/
│       ├── routes/
│       │   ├── auth/
│       │   ├── mix/
│       │   └── services/
│       └── serializers/
├── index.ts
├── package.json
├── tsconfig.json
├── Dockerfile
├── docker-compose.yml
└── .env
```

## API Documentation

La documentación interactiva de la API está disponible a través de Swagger UI:

**URL**: `http://localhost:3000/documentation`

### Endpoints Principales

#### Authentication
- `POST /api/v1/auth/register` - Registrar nuevo usuario
- `POST /api/v1/auth/login` - Iniciar sesión

#### Users
- `GET /api/v1/users` - Listar usuarios
- `GET /api/v1/users/{id}` - Obtener usuario por ID
- `PATCH /api/v1/users/{id}` - Actualizar usuario
- `DELETE /api/v1/users/{id}` - Eliminar usuario

#### Document Types
- `GET /api/v1/document_type` - Listar tipos de documento
- `POST /api/v1/document_type` - Crear tipo de documento
- `GET /api/v1/document_type/{id}` - Obtener por ID
- `PATCH /api/v1/document_type/{id}` - Actualizar
- `DELETE /api/v1/document_type/{id}` - Eliminar

#### Services
- `GET /api/v1/services` - Listar servicios veterinarios
- `POST /api/v1/services` - Crear servicio
- `GET /api/v1/services/{id}` - Obtener por ID
- `PATCH /api/v1/services/{id}` - Actualizar
- `DELETE /api/v1/services/{id}` - Eliminar

## Docker

### Dockerfile

El proyecto usa Alpine Linux para imágenes ligeras:

```dockerfile
FROM node:lts-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev"]
```

### Docker Compose

Incluye servicio de API y opcionalmente PostgreSQL:

```yaml
services:
  api:
    build: .
    container_name: vetinhouse-backend
    ports:
      - "3000:3000"
    volumes:
      - .:/app
      - /app/node_modules
    env_file:
      - .env
```

## Scripts Disponibles

```json
{
  "dev": "nodemon --exec ts-node index.ts",
  "build": "tsc",
  "start": "node dist/index.js",
  "test": "jest",
  "test:watch": "jest --watch",
  "lint": "eslint . --ext .ts",
  "lint:fix": "eslint . --ext .ts --fix"
}
```

## Convenciones

### Nombres de Archivos y Carpetas
- **Carpetas**: `snake_case` (ej: `use_cases`, `repositories`)
- **Archivos de casos de uso**: verbo + sustantivo (ej: `create_pet.js`)
- **Repositorios**: sufijo `_repository_postgres` (ej: `auth_user_repository_postgres.ts`)

### Código
- **Métodos**: `camelCase`
- **Clases del dominio**: Atributos en `snake_case` reflejando la DB
- **Interfaces**: PascalCase con prefijo `I` opcional

### HTTP Status Codes
- `200` - OK
- `201` - Created
- `204` - No Content
- `400` - Bad Request
- `401` - Unauthorized
- `404` - Not Found
- `422` - Unprocessable Entity
- `500` - Internal Server Error
- `503` - Service Unavailable

### Repositorios
Todos los repositorios deben implementar:
- `persist(entity)` - Crear
- `merge(entity)` - Actualizar
- `remove(id)` - Eliminar
- `get(id)` - Obtener por ID
- `find()` - Obtener todos
- `getByFilter(filter)` - Buscar con filtros
- `updateDynamic(id, data)` - Actualización parcial


## Ramas de Desarrollo

- `main` - Producción (protegida)
- `develop` - Entorno de pruebas
- `dev_brayan` - Desarrollo activo

### Workflow
1. Desarrollar en `dev_brayan`
2. Merge a `develop` para pruebas
3. Merge a `main` cuando esté listo para producción

## Autor

**Brayan Gamboa**
- GitHub: [@BrayanGamboa](https://github.com/BrayanGamboa)

## Contacto

Para preguntas o soporte, contactar a través del repositorio de GitHub.

---

**Nota**: Este proyecto está en desarrollo activo. La API puede sufrir cambios sin previo aviso.