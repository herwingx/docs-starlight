# 📚 Herwingx Docs

Documentación personal de desarrollo con [Astro Starlight](https://starlight.astro.build/).

[![Deploy](https://img.shields.io/badge/🌐-docs.herwingx.dev-blue)](https://docs.herwingx.dev)
[![GitHub Pages](https://img.shields.io/badge/Hosted-GitHub%20Pages-181717?logo=github)](https://pages.github.com/)

---

## 🚀 Inicio Rápido

```bash
git clone https://github.com/herwingx/docs-starlight.git
cd docs-starlight
npm install
npm run dev
```

**URLs locales:**
- 📖 Docs: `http://localhost:4321`
- 🎛️ Admin: `http://localhost:4321/admin/`

---

## 📝 Crear Contenido

### Opción 1: Panel Admin (CMS)
1. Ve a `https://docs.herwingx.dev/admin/`
2. Login con GitHub
3. Crea/edita páginas visualmente
4. Los cambios se commitean automáticamente

### Opción 2: Archivos MDX
```bash
# Crear nueva página
touch src/content/docs/frontend/mi-guia.mdx
```

```mdx
---
title: Mi Guía
description: Descripción para SEO
---

# Contenido aquí
```

---

## 📦 Comandos

| Comando           | Descripción         |
| :---------------- | :------------------ |
| `npm run dev`     | Servidor desarrollo |
| `npm run build`   | Build producción    |
| `npm run preview` | Preview del build   |

---

## 🚀 Deploy (GitHub Pages)

### Configuración Inicial (una vez)

1. **Crear repositorio en GitHub:**
   ```bash
   gh repo create docs-starlight --public --source=. --push
   ```

2. **Habilitar GitHub Pages:**
   - Ve a `Settings > Pages`
   - Source: **GitHub Actions**

3. **Configurar dominio en Cloudflare:**
   - Tipo: `CNAME`
   - Name: `docs`
   - Target: `herwingx.github.io`

4. **Primer deploy:**
   ```bash
   git push origin main
   ```

### Deploy Automático
Cada push a `main` despliega automáticamente via GitHub Actions.

---

## 📱 PWA (Progressive Web App)

El sitio es instalable como app:

**En móvil:**
- Visita `docs.herwingx.dev`
- Menú → "Añadir a pantalla de inicio"

**En desktop:**
- Chrome/Edge muestran botón de instalación

---

## 🎛️ CMS (Sveltia CMS)

- **URL:** `https://docs.herwingx.dev/admin/`
- **Backend:** GitHub (OAuth)
- Los cambios se commitean al repo y despliegan automáticamente

---

## 🛠️ Tecnologías

- Astro 5.x + Starlight 0.37
- Sveltia CMS
- GitHub Pages
- PWA ready

---

MIT © [herwingx](https://github.com/herwingx)
