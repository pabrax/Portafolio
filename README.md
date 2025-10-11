# Portafolio de Desarrollador

Un portafolio moderno y responsivo construido con Next.js 15, React 18 y Tailwind CSS.

## Características

- Diseño moderno y responsivo
- Tema oscuro/claro con toggle dinámico
- Animaciones suaves y efectos visuales
- Completamente responsivo
- Optimizado para rendimiento con Next.js
- Componentes reutilizables con Radix UI
- TypeScript para mayor robustez

## Tecnologías

- **Framework:** Next.js 15 (App Router)
- **Frontend:** React 18, TypeScript
- **Estilos:** Tailwind CSS
- **Componentes UI:** Radix UI
- **Iconos:** Lucide React
- **Tema:** next-themes
- **Animaciones:** Tailwind CSS + CSS personalizado

## Instalación

```bash
# Clonar el repositorio
git clone <tu-repositorio>

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build

# Ejecutar en producción
npm start
```

## Estructura del Proyecto

```
portafolio/
├── app/
│   ├── components/          # Componentes React
│   │   ├── ui/             # Componentes UI base
│   │   ├── theme-toggle.tsx # Toggle de tema
│   │   └── ...             # Secciones del portafolio
│   ├── globals.css         # Estilos globales
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx           # Página principal
│   └── providers.tsx      # Providers (tema, etc.)
├── public/                # Archivos estáticos
├── next.config.js         # Configuración de Next.js
├── tailwind.config.js     # Configuración de Tailwind
└── tsconfig.json         # Configuración de TypeScript
```

## Personalización

El portafolio está diseñado para ser fácilmente personalizable:

1. **Contenido:** Edita los componentes en `app/components/`
2. **Estilos:** Modifica `app/globals.css` y `tailwind.config.js`
3. **Tema:** Ajusta las variables CSS en `globals.css`
4. **Componentes:** Agrega nuevos componentes en `app/components/`

## Responsive Design

El portafolio está optimizado para todos los dispositivos:
- Mobile (320px+)
- Tablet (768px+)
- Desktop (1024px+)
- Large screens (1280px+)