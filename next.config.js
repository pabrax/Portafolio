/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuración moderna de imágenes para Next.js 15
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  
  // Reducir logging para desarrollo más limpio
  logging: {
    level: 'warn', // Solo mostrar warnings y errores
  },
  
  // Configuración experimental
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  
  // Configuración del compilador
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
}

module.exports = nextConfig