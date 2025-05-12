Here's a clean and minimal boilerplate structure and guide for integrating **React components inside a Hugo project** using **Vite + TypeScript**. This setup gives you the performance of Hugo with the interactivity of React.

---

## 🧱 Project Structure

```
my-hugo-site/
├── assets/
├── content/
├── layouts/
│   └── partials/
│       └── react-widget.html       <-- Embed point
├── static/
│   └── js/
│       └── (bundled React code here)
├── react-app/                      <-- Vite + React project
│   ├── index.html (optional)
│   ├── src/
│   │   └── main.tsx
│   │   └── components/
│   │       └── Widget.tsx
│   └── vite.config.ts
├── config.toml
```

---

## 🚀 Step-by-Step Guide

### ✅ 1. Create React App Inside Hugo

Navigate to your Hugo root and run:

```bash
npm create vite@latest react-app -- --template react-ts
cd react-app
npm install
```

---

### ✅ 2. Edit `vite.config.ts`

Modify the `vite.config.ts` to **output the bundled file to Hugo’s `static/js/`**:

```ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: '../static/js',
    emptyOutDir: true,
    rollupOptions: {
      input: './src/main.tsx',
      output: {
        entryFileNames: 'bundle.js',
      },
    },
  },
});
```

> This ensures Hugo can serve the React app at `/js/bundle.js`.

---

### ✅ 3. Create a Simple React Widget

**`react-app/src/components/Widget.tsx`**

```tsx
export function Widget() {
  return (
    <div style={{ padding: "1rem", background: "#eef" }}>
      Hello from <strong>React!</strong>
    </div>
  );
}
```

**`react-app/src/main.tsx`**

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Widget } from './components/Widget';

const root = document.getElementById('react-root');
if (root) {
  ReactDOM.createRoot(root).render(<Widget />);
}
```

---

### ✅ 4. Add a Hugo Partial to Load React

**`layouts/partials/react-widget.html`**

```html
<div id="react-root"></div>
<script src="/js/bundle.js" defer></script>
```

---

### ✅ 5. Add Partial to Your Layout

In your `layouts/_default/baseof.html` or any specific layout, include:

```go
{{ partial "react-widget.html" . }}
```

---

### ✅ 6. Build React App

From inside the `react-app` directory:

```bash
npm run build
```

This creates `static/js/bundle.js` for Hugo to use.

---

### ✅ 7. Run Hugo

In the Hugo root:

```bash
hugo server
```

You should now see your React component rendering inside a Hugo page!

---

## ✅ Bonus Tips

* Use `npm run dev` in `react-app` with proxy to Hugo for dev HMR.
* Keep React small (widgets, forms, dashboards) — let Hugo handle content.

---

Would you like me to generate this project structure as a GitHub repo or zip file?
