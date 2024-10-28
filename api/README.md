# Crowdfunding Backend

## Introducción

Este es el backend del proyecto de **Crowdfunding**. Proporciona una API para la gestión de proyectos, usuarios y contribuciones. El backend está desarrollado con **Node.js** y utiliza **MongoDB** como base de datos.

El propósito de este backend es facilitar la creación y gestión de campañas de crowdfunding, permitiendo a los usuarios registrarse, crear proyectos, contribuir a proyectos y mucho más.

---

## Requisitos Previos

Antes de comenzar, asegúrate de tener instaladas las siguientes herramientas:

- [Node.js](https://nodejs.org/) (versión recomendada: 14.x o superior)
- [npm](https://www.npmjs.com/) (normalmente viene junto con Node.js)
- [MongoDB](https://www.mongodb.com/) (versión recomendada: 4.x o superior)

---

## Tecnologías Utilizadas

Este proyecto utiliza las siguientes tecnologías en su backend:

- **Node.js**: Entorno de ejecución para JavaScript en el servidor.
- **Express**: Framework de Node.js para construir APIs REST.
- **MongoDB**: Base de datos NoSQL para almacenar datos de proyectos y usuarios.
- **Mongoose**: Librería ODM (Object Data Modeling) para MongoDB y Node.js.
- **Nodemon**: Herramienta de desarrollo para reiniciar el servidor automáticamente en cada cambio.
- **dotenv**: Módulo para manejar variables de entorno.

---

## Instalación y Configuración

### Paso 1: Clonar el Repositorio

```bash
git clone https://github.com/No-Country-simulation/c21-21-m-node-react.git
cd api/
```

### Paso 2: Instalar Dependencias

```bash
npm install
```

### Paso 3: Configurar Variables de Entorno

Crea un archivo .env en la raíz del proyecto y añade las siguientes variables de entorno proporcionadas por el equipo de desarrollo:

- **DB_CREDENTIAL** =
- **PORT** =
- **GOOGLE_OAUTH_URL** =

### Paso 4: Ejecutar el Servidor en Modo de Desarrollo

```bash
npm start
```

Al terminar, el servidor devería devolver lo siguiente en la consola de comando:

```bash
Connection to the DB succesfully!
El servidor esta corriendo en el puerto xxxxxxx
```

## Arquitectura del Proyecto

La estructura del proyecto sigue un esquema modular MVC, donde cada funcionalidad está organizada en controladores, rutas y modelos.

```bash
├── config/         # Configuración de la base de datos y otros servicios
├── controllers/    # Lógica de los controladores para manejar las solicitudes HTTP
├── middlewares/    # Funciones de middleware para procesar solicitudes y respuestas
├── models/         # Modelos de Mongoose que definen los esquemas de la base de datos
├── routes/         # Definición de las rutas del API
├── index.js        # Archivo principal para iniciar la aplicación
├── .env            # Archivo de configuración de las variables de entorno
└── package.json    # Dependencias y scripts de npm

```

## Endpoints del API

### **Usuarios**

#### 1. Registro de Usuarios

- **POST** `/user/auth/register`

  - **Descripción**: Permite registrar un nuevo usuario utilizando el servicio de autenticación de Google OAuth. Este endpoint verifica el token de Google, y si el usuario no existe, lo crea en la base de datos.
  - **Requisitos**:
    - Se necesita un token de autorización de Google en los headers de la solicitud.
    - Un rol opcional (role) en el cuerpo de la solicitud (req.body) que puede ser "inversor", "administrator" o "emprendedor".
  - **Headers**:
    - `Authorization: Bearer {googleOAuthToken}`
  - **Cuerpo (Body)**:
    ```json
    {
      "role": "inversor"
    }
    ```
  - **Respuesta Exitosa** (201):

    ```json
    {
      "message": "Usuario registrado con éxito!",
      "user": {
        "name": "Nombre del Usuario",
        "email": "correo@ejemplo.com",
        "profile_picture": "URL_de_imagen_perfil",
        "role": "inversor",
        "projects": []
      }
    }
    ```

  - **Errores Comunes**:
    - **403**: No se ha proporcionado un token de autorización.
    - **401**: Token de Google inválido.
    - **400**: El usuario ya está registrado.

#### 2. Obtener Perfil del Usuario

- **GET** `/user/profile`
  - **Descripción**: Obtiene el perfil del usuario autenticado. Este endpoint requiere que el usuario esté autenticado, verificando el token de Google OAuth.
  - **Headers**:
    - `Authorization: Bearer {googleOAuthToken}`
  - **Respuesta Exitosa** (200):
    ```json
    {
    "message": "Usuario encontrado.",
    "user": {
    "_id": "idDelUsuario",
    "name": "Nombre del Usuario",
    "email": "correo@ejemplo.com",
    "profile_picture": "URL_de_imagen_perfil",
    "role": "inversor",
    "projects": []
    }
    ```
  - **Errores Comunes**:
    - **404**: Usuario no encontrado.
    - **401**: Token de Google inválido.

#### 3. Obtener Todos los Usuarios

- **GET** `/user/allUsers`

  - **Descripción**: Recupera la lista de todos los usuarios registrados en el sistema. Este endpoint no tiene autenticación, pero puede ser modificado para ser accesible solo por administradores.
  - **Respuesta Exitosa** (200):

    ```json
    [
      {
        "_id": "idDelUsuario1",
        "name": "Nombre del Usuario 1",
        "email": "correo1@ejemplo.com",
        "profile_picture": "URL_de_imagen_perfil1",
        "role": "inversor",
        "projects": []
      },
      {
        "_id": "idDelUsuario2",
        "name": "Nombre del Usuario 2",
        "email": "correo2@ejemplo.com",
        "profile_picture": "URL_de_imagen_perfil2",
        "role": "emprendedor",
        "projects": ["idProyecto1"]
      }
    ]
    ```

  - **Errores Comunes**:
    - **500**: Error interno al obtener la lista de usuarios.

#### 4. Actualizar Perfil del Usuario

- **PUT** `/user/updateProfile`
  - **Descripción**: Permite actualizar el perfil del usuario autenticado. Solo se pueden actualizar los campos de nombre y foto de perfil.
  - **Headers**:
    - `Authorization: Bearer {googleOAuthToken}`
  - **Parámetros**:
    - `name` (string, obligatorio): El nuevo nombre del usuario.
    - `profile_picture` (string, obligatorio): La nueva URL de la imagen de perfil.
  - **Ejemplo de Solicitud**:
    ```json
    {
      "name": "Nuevo Nombre",
      "profile_picture": "Nueva_URL_de_imagen"
    }
    ```
  - **Respuesta Exitosa** (200):
    ```json
    {
      "_id": "idDelUsuario",
      "name": "Nuevo Nombre",
      "email": "correo@ejemplo.com",
      "profile_picture": "Nueva_URL_de_imagen",
      "role": "inversor",
      "projects": []
    }
    ```
  - **Errores Comunes**:
    - **400**: Faltan campos obligatorios como el nombre o la foto de perfil.
    - **500**: Error interno al actualizar el perfil.

### **Proyectos**

#### 1. Crear un Proyecto

- **POST** `/projects/createProject`
  - **Descripción**: Permite a un usuario crear un nuevo proyecto de crowdfunding. El campo `owner` debe ser el ID del usuario creador del proyecto.
  - **Requisitos**:
    - La imagen (`img`) se debe cargar como un archivo adjunto.
  - **Parámetros (Body)**:
    - `owner` (string, obligatorio): ID del usuario que crea el proyecto.
    - `name` (string, obligatorio): Nombre del proyecto.
    - `description` (string, obligatorio): Descripción detallada del proyecto.
    - `goal_amount` (number, obligatorio): Meta financiera del proyecto.
    - `deadline` (Date, opcional): Fecha límite para contribuciones.
    - `category` (string, obligatorio): Categoría del proyecto (e.g., fintech, health, tech, education, e-Commerce, other).
    - `status` (string, opcional): Estado del proyecto (opciones: active, inactive, pending, completed, rejected).
    - `bankDetails` (object, opcional): Información bancaria para el proyecto.
  - **Ejemplo de Solicitud**:
    ```json
    {
      "owner": "idDelUsuario",
      "name": "Proyecto Innovador",
      "description": "Este es un proyecto de tecnología revolucionaria.",
      "goal_amount": 10000,
      "deadline": "2024-12-31",
      "category": "tech",
      "status": "active",
      "bankDetails": {
        "accountHolder": "Nombre del titular",
        "accountNumber": "123456789",
        "bankName": "Banco Ejemplo",
        "swiftCode": "ABC123"
      }
    }
    ```
  - **Respuesta Exitosa** (201):
    ```json
    {
      "message": "Proyecto creado exitosamente",
      "project": {
        "_id": "idDelProyecto",
        "name": "Proyecto Innovador",
        "description": "Este es un proyecto de tecnología revolucionaria.",
        "category": "tech",
        "goal_amount": 10000,
        "current_amount": 0,
        "deadline": "2024-12-31",
        "creation_date": "2023-10-27",
        "img": "nombreDelArchivo.jpg",
        "status": "active",
        "bankDetails": {
          "accountHolder": "Nombre del titular",
          "accountNumber": "123456789",
          "bankName": "Banco Ejemplo",
          "swiftCode": "ABC123"
        }
      }
    }
    ```
  - **Errores Comunes**:
    - **400**: Faltan campos obligatorios.
    - **500**: Error en la creación del proyecto o al cargar la imagen.

#### 2. Obtener Todos los Proyectos

- **GET** `/projects/getProjects`
  - **Descripción**: Recupera una lista de todos los proyectos disponibles. Solo se devuelven los proyectos activos y no eliminados (borrado lógico).
  - **Respuesta Exitosa** (200):
    ```json
    [
      {
        "_id": "idDelProyecto1",
        "name": "Proyecto 1",
        "description": "Descripción del proyecto 1",
        "category": "fintech",
        "goal_amount": 5000,
        "current_amount": 2000,
        "deadline": "2024-12-01",
        "status": "active",
        "creation_date": "2023-09-15"
      },
      {
        "_id": "idDelProyecto2",
        "name": "Proyecto 2",
        "description": "Descripción del proyecto 2",
        "category": "health",
        "goal_amount": 10000,
        "current_amount": 5000,
        "deadline": "2024-12-31",
        "status": "pending",
        "creation_date": "2023-10-01"
      }
    ]
    ```
  - **Errores Comunes**:
    - **404**: No se encontraron proyectos activos.
    - **500**: Error al recuperar los proyectos.

#### 3. Obtener Proyecto por ID

- **GET** `/projects/getProject/:id`
  - **Descripción**: Recupera la información de un proyecto específico por su ID.
  - **Parámetros (URL)**:
    - `id` (string, obligatorio): ID del proyecto a buscar.
  - **Respuesta Exitosa** (200):
    ```json
    {
      "_id": "idDelProyecto",
      "name": "Proyecto Innovador",
      "description": "Este es un proyecto de tecnología revolucionaria.",
      "category": "tech",
      "goal_amount": 10000,
      "current_amount": 3000,
      "deadline": "2024-12-31",
      "creation_date": "2023-10-27",
      "status": "active",
      "img": "nombreDelArchivo.jpg"
    }
    ```
  - **Errores Comunes**:
    - **404**: Proyecto no encontrado.
    - **410**: Proyecto eliminado lógicamente.
    - **500**: Error interno del servidor.

#### 4. Actualizar Proyecto

- **PUT** `/projects/updateProject/:id`
  - **Descripción**: Permite actualizar los detalles de un proyecto existente. Solo se pueden actualizar campos específicos como nombre, descripción, meta financiera, fecha límite, etc.
  - **Parámetros (URL)**:
    - `id` (string, obligatorio): ID del proyecto a actualizar.
  - **Parámetros (Body)**: Campos del proyecto que se desean actualizar.
  - **Ejemplo de Solicitud**:
    ```json
    {
      "name": "Nuevo nombre del proyecto",
      "goal_amount": 15000,
      "deadline": "2025-01-15"
    }
    ```
  - **Respuesta Exitosa** (200):
    ```json
    {
      "message": "El proyecto se ha actualizado exitosamente!",
      "project": {
        "_id": "idDelProyecto",
        "name": "Nuevo nombre del proyecto",
        "goal_amount": 15000,
        "deadline": "2025-01-15",
        "status": "active"
      }
    }
    ```
  - **Errores Comunes**:
    - **404**: Proyecto no encontrado.
    - **500**: Error interno al actualizar el proyecto.

#### 5. Eliminar Proyecto (Borrado Lógico)

- **PATCH** `/projects/delete-project/:id`
  - **Descripción**: Realiza un borrado lógico de un proyecto por su ID. El proyecto no se elimina físicamente de la base de datos, pero se marca como eliminado.
  - **Parámetros (URL)**:
    - `id` (string, obligatorio): ID del proyecto a eliminar.
  - **Respuesta Exitosa** (200):
    ```json
    {
      "message": "Proyecto eliminado (lógicamente).",
      "project": {
        "_id": "idDelProyecto",
        "name": "Proyecto Innovador",
        "isDeleted": true,
        "deletedAt": "2024-12-15T00:00:00Z"
      }
    }
    ```
  - **Errores Comunes**:
    - **404**: Proyecto no encontrado.
    - **410**: El proyecto ya ha sido eliminado previamente.
    - **500**: Error interno al eliminar el proyecto.

### **Promociones**

#### 1. Crear una Promoción

- **POST** `/promotion/create`
  - **Descripción**: Permite crear una nueva promoción para un proyecto específico.
  - **Requisitos**:
    - Se debe proporcionar un `projectId` y un `userId` válidos.
  - **Parámetros (Body)**:
    - `title` (string, obligatorio): Título de la promoción.
    - `description` (string, obligatorio): Descripción de la promoción.
    - `img` (string, opcional): URL de la imagen de la promoción.
    - `post_date` (Date, obligatorio): Fecha en que se publica la promoción.
    - `projectId` (string, obligatorio): ID del proyecto al cual pertenece la promoción.
    - `userId` (string, obligatorio): ID del usuario que crea la promoción.
  - **Ejemplo de Solicitud**:
    ```json
    {
      "title": "Promoción de Fin de Año",
      "description": "Promoción especial para contribuyentes en diciembre.",
      "img": "https://imagen-promocion.com",
      "post_date": "2024-12-01",
      "projectId": "idDelProyecto",
      "userId": "idDelUsuario"
    }
    ```
  - **Respuesta Exitosa** (201):
    ```json
    {
      "_id": "idDeLaPromocion",
      "title": "Promoción de Fin de Año",
      "description": "Promoción especial para contribuyentes en diciembre.",
      "img": "https://imagen-promocion.com",
      "post_date": "2024-12-01",
      "project": "idDelProyecto",
      "user": "idDelUsuario"
    }
    ```
  - **Errores Comunes**:
    - **400**: Faltan campos obligatorios.
    - **500**: Error interno al crear la promoción.

#### 2. Obtener Todas las Promociones

- **GET** `/promotion/`
  - **Descripción**: Recupera una lista de todas las promociones disponibles.
  - **Respuesta Exitosa** (200):
    ```json
    [
      {
        "_id": "idDeLaPromocion1",
        "title": "Promoción de Fin de Año",
        "description": "Promoción especial para contribuyentes en diciembre.",
        "img": "https://imagen-promocion.com",
        "post_date": "2024-12-01",
        "project": "idDelProyecto1",
        "user": "idDelUsuario1"
      },
      {
        "_id": "idDeLaPromocion2",
        "title": "Promoción de Verano",
        "description": "Promoción especial para el verano.",
        "img": "https://imagen-promocion.com",
        "post_date": "2024-06-01",
        "project": "idDelProyecto2",
        "user": "idDelUsuario2"
      }
    ]
    ```
  - **Errores Comunes**:
    - **500**: Error interno al obtener las promociones.

#### 3. Obtener Promoción por ID

- **GET** `/promotion/:id`
  - **Descripción**: Recupera la información de una promoción específica por su ID.
  - **Parámetros (URL)**:
    - `id` (string, obligatorio): ID de la promoción.
  - **Respuesta Exitosa** (200):
    ```json
    {
      "_id": "idDeLaPromocion",
      "title": "Promoción de Fin de Año",
      "description": "Promoción especial para contribuyentes en diciembre.",
      "img": "https://imagen-promocion.com",
      "post_date": "2024-12-01",
      "project": "idDelProyecto",
      "user": "idDelUsuario"
    }
    ```
  - **Errores Comunes**:
    - **404**: Promoción no encontrada.
    - **500**: Error interno al obtener la promoción.

#### 4. Actualizar una Promoción

- **PUT** `/promotion/:id`
  - **Descripción**: Permite actualizar una promoción existente. Solo se actualizarán los campos enviados en el cuerpo de la solicitud.
  - **Parámetros (URL)**:
    - `id` (string, obligatorio): ID de la promoción a actualizar.
  - **Parámetros (Body)**: Campos de la promoción que se desean actualizar (solo se actualizarán los campos enviados).
  - **Ejemplo de Solicitud**:
    ```json
    {
      "title": "Nueva Promoción de Fin de Año"
    }
    ```
  - **Respuesta Exitosa** (200):
    ```json
    {
      "_id": "idDeLaPromocion",
      "title": "Nueva Promoción de Fin de Año",
      "description": "Promoción especial para contribuyentes en diciembre.",
      "img": "https://imagen-promocion.com",
      "post_date": "2024-12-01",
      "project": "idDelProyecto",
      "user": "idDelUsuario"
    }
    ```
  - **Errores Comunes**:
    - **400**: No se enviaron campos válidos para actualizar.
    - **404**: Promoción no encontrada.
    - **500**: Error interno al actualizar la promoción.

## Contribución

¡Gracias por tu interés en contribuir a este proyecto! A continuación, se describen los pasos para realizar contribuciones:

1. **Clona el repositorio**:

   - Clona este repositorio a tu máquina local usando el siguiente comando:
     ```bash
     git clone https://github.com/No-Country-simulation/c21-21-m-node-react.git
     ```

2. **Crea una nueva rama**:

   - Crea una nueva rama para tu funcionalidad o corrección de errores:
     ```bash
     git checkout -b feature/nueva-funcionalidad
     ```

3. **Realiza los cambios**:

   - Realiza tus cambios y asegúrate de probar tu código antes de confirmar los cambios.

4. **Confirma los cambios**:

   - Confirma los cambios utilizando un mensaje claro y descriptivo:
     ```bash
     git commit -m "Añade nueva funcionalidad de [descripción]"
     ```

5. **Envía los cambios a tu repositorio remoto**:

   - Envía los cambios a tu repositorio remoto en GitHub:
     ```bash
     git push origin feature/nueva-funcionalidad
     ```

6. **Abre un Pull Request**:
   - Desde GitHub, abre un nuevo Pull Request hacia la rama principal del proyecto y describe tus cambios detalladamente. El equipo de desarrollo revisará tu solicitud y se comunicará contigo si es necesario.

---

## Contacto

Si tienes preguntas o sugerencias sobre el proyecto, por favor contacta al equipo de desarrollo. Besos ✨

## Tareas Pendientes en el Backend

A continuación se describen las funcionalidades que aún deben ser implementadas o mejoradas en el backend:

1. **Manejo de Permisos (Administrador/Propietario del Proyecto)**:

   - Implementar un middleware o lógica dentro de los controladores que verifique si el usuario autenticado es un administrador o el propietario del proyecto antes de permitir acciones como editar o eliminar.
   - Aplicar esta verificación en los endpoints correspondientes.

2. **Asignación y Almacenamiento de Contribuciones (PayPal)**:

   - Implementar la integración de PayPal para manejar contribuciones desde el frontend.
   - Asegurarse de registrar correctamente los detalles de la contribución (monto, proyecto, usuario, etc.) en la base de datos una vez que PayPal confirme el pago.

3. **Corrección de Errores de Refactorización**:

   - Refactorizar el código donde sea necesario para corregir errores detectados previamente, como:
     - Variables no definidas.
     - Verificación de parámetros faltantes o erróneos.
     - Control de errores mejorado en las llamadas asíncronas.

4. **Insertar Datos en la Base de Datos**:

   - Crear un script de "seed" para poblar la base de datos con datos iniciales. Esto permitirá que el frontend tenga proyectos, usuarios y contribuciones para mostrar.
   - Asegurarse de que los datos insertados sigan el formato y las relaciones correctas entre usuarios, proyectos, contribuciones y promociones.

5. **Agregar Endpoints para el Administrador**:

   - Crear endpoints específicos para las acciones que solo puede realizar un administrador, como:
     - Ver todos los proyectos (incluso los eliminados).
     - Gestionar usuarios (banear, desactivar, etc.).
     - Aprobar o rechazar proyectos que estén en estado "pending".

6. **Mejorar la Seguridad Básica con Helmet**:

   - Implementar [Helmet](https://helmetjs.github.io/) para agregar encabezados HTTP de seguridad básica al backend y proteger la aplicación de vulnerabilidades comunes como ataques XSS, clickjacking, entre otros.

7. **Otras Mejoras**:
   - Revisar si existen áreas adicionales en las que se necesiten nuevas funcionalidades o mejorar la performance.
