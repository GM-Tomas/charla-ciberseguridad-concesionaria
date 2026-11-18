# Ciberseguridad Cotidiana · Charla Concesionaria (30 min)

Aplicación web interactiva construida con **Vite + React + TypeScript** para dar una charla de ciberseguridad corporativa de **30 minutos exactos** a una audiencia no técnica (ventas, administración, gestoría, posventa y recepción).

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FGM-Tomas%2Fcharla-ciberseguridad-concesionaria)

---

## Dos rutas principales

- **`/` — Presentación interactiva (15 slides · 30 minutos):**
  - Barra de progreso superior, indicador de bloque/tiempo y cronómetro interactivo de `30:00`.
  - **Notas del orador** activables con la tecla `N` (en pantalla) o `P` (modo presentador sincronizado en segunda pestaña).
  - Escenarios interactivos del día a día de una concesionaria y slide final con **código QR dinámico** hacia `/encuesta`.
- **`/encuesta` — Simulación educativa de Quishing (100% segura):**
  - Sin backend, sin `<form>`, sin almacenamiento y con campo `readOnly`.
  - Al primer toque/clic muestra al instante el cartel educativo **"¡ESTO ES QUISHING!"** con la URL actual y los 3 recordatorios clave.

---

## Cómo correrla localmente

```bash
npm install
npm run dev -- --host
```

- Abrí la URL local en tu navegador y presioná **`F`** para pantalla completa.
- Para probar el QR desde celulares en la misma red Wi-Fi, abrí la presentación usando la **IP local** que imprime Vite (`Network: http://192.168.x.x:5173`).

---

## Atajos de teclado

| Tecla | Acción |
|---|---|
| `→` / `Espacio` | Avanzar (`<Build>` paso a paso y siguiente slide) |
| `←` | Retroceder |
| `N` | Abrir / cerrar notas rápidas del orador |
| `P` | Abrir modo presentador sincronizado en nueva pestaña |
| `F` | Pantalla completa |
| `G` | Vista cuadrícula de todas las slides |
| `S` | Índice lateral |
| `A` | Anotar en pantalla |
| `H` | Ocultar/mostrar interfaz |

---

## Despliegue en Vercel

El proyecto ya incluye [`vercel.json`](./vercel.json) con rewrites SPA para `/` y `/encuesta`, más cabeceras de seguridad HTTP. Solo importá este repositorio en [vercel.com/new](https://vercel.com/new) y hacé clic en **Deploy**.
