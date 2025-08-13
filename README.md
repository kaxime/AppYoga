# 🧘‍♀️ Yoga Schedule App

![React](https://img.shields.io/badge/React-18-blue?logo=react) 
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript) 
![Vite](https://img.shields.io/badge/Vite-6.3-purple?logo=vite) 
![Node.js](https://img.shields.io/badge/Node.js-20-green?logo=node.js) 
![Express](https://img.shields.io/badge/Express-5.1-lightgrey?logo=express) 
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15-blue?logo=postgresql) 
![TypeORM](https://img.shields.io/badge/TypeORM-0.3-orange?logo=typeorm) 

Plataforma web para **agendar rutinas de yoga**, con registro de usuarios, asignación de turnos y cancelación de citas.  
Incluye **frontend** y **backend** en el mismo repositorio, desarrollados con **React**, **TypeScript**, **Express** y **PostgreSQL**.

---

## ✨ Características principales

- 👤 **Registro y login** de usuarios.  
- 📅 **Visualización** de horarios disponibles.  
- 📝 **Reserva** de turnos para clases de yoga.  
- ❌ **Cancelación** de citas antes de la fecha programada.  
- ⏳ **Restricción** para evitar reservar en fechas pasadas.  

---

## 🛠️ Tecnologías utilizadas

**🎨 Frontend**
- ⚛️ [React](https://react.dev/) — Librería para la interfaz de usuario.  
- 🔀 [React Router DOM](https://reactrouter.com/) — Navegación entre páginas.  
- ⚡ [Vite](https://vitejs.dev/) — Bundler rápido para desarrollo.  
- 🔗 [Axios](https://axios-http.com/) — Peticiones HTTP al backend.  
- ✍️ [TypeScript](https://www.typescriptlang.org/) — Tipado estático.

**⚙️ Backend**
- 🚀 [Node.js](https://nodejs.org/) + [Express](https://expressjs.com/) — Servidor y API REST.  
- 🗄️ [PostgreSQL](https://www.postgresql.org/) — Base de datos relacional.  
- 🛠️ [TypeORM](https://typeorm.io/) — ORM para manejar la base de datos.  
- 🌐 [CORS](https://www.npmjs.com/package/cors) — Configuración de acceso entre dominios.  
- 🔐 [Dotenv](https://www.npmjs.com/package/dotenv) — Variables de entorno.  
- 📜 [Reflect Metadata](https://www.npmjs.com/package/reflect-metadata) — Soporte para decoradores en TypeScript.

---

## 📂 Estructura del proyecto

```plaintext
.
├── backend/        # Lógica del servidor y base de datos
├── frontend/       # Aplicación cliente con React + TypeScript
└── README.md

```
## ⚙️ Instalación y uso

1. **Clonar el repositorio**
```bash
   git clone https://github.com/usuario/nombre-proyecto.git
```
2. **Instalar dependencias del backend**
```bash
cd backend
npm install
```

3. **Instalar dependencias del frontend**
```bash
cd ../frontend
npm install
```

4. **Configurar variables de entorno**

- Crear un archivo .env en backend/ con tus credenciales de base de datos y JWT.
- (Ejemplo)
```bash
DB_HOST=localhost
DB_USER=usuario
DB_PASSWORD=contraseña
DB_NAME=yoga_app
JWT_SECRET=secret_key
```

5. **Levantar el backend**
```bash
npm run start
```

6. **Levantar el frontend**
```bash
   npm run dev
```



