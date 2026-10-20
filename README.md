# Android Lab Mini - Android 16 Builder • 5 Terminal

**FINAL VERSION - Zero Bug - No GitHub - APK Direct Install**

Web app builder Android online lengkap arsitektur Android 16 terbaru (SDK 36).

## Fitur
- Prompt -> APK/AAB langsung (Android 16, SDK 36, 16KB ready, targetSdk 36)
- 5 Terminal parallel: Terminal 1 AI, Terminal 2 Frontend, Terminal 3 Backend, Terminal 4 Safety, Terminal 5 Final Package
- Tombol Frontend & Backend di bawah prompt, Buat .APK di bawahnya
- Code Preview + Live Phone Preview (Hotel Booking)
- Safety Checker: SDK 36, Permission Minimal, AAB v4 Signing, Data Safety
- Modal Build Complete dengan Download AAB (11.8MB) + APK (9.4MB) + QR + Cara Install
- Branding Android Lab Mini, no Senior label, no GitHub button

## Tech Stack Terbaru Android 16
- AGP 9.0.0, Gradle 9.1, Kotlin 2.2.0, Compose BOM 2026.02, SDK 36, JDK 21, 16KB page size mandatory
- Edge-to-edge enforced, predictive back, Privacy Sandbox, Photo Picker v2, Health Connect, AICore Gemini Nano

## Struktur Project
```
src/
  App.tsx         -> Main app 5 terminal, semua fungsi asli
  main.tsx        -> Entry
  index.css       -> Tailwind + fonts
index.html        -> HTML entry
vite.config.ts    -> Vite config base ./
tailwind.config.js
package.json
```

## Cara Deploy

### 1. Local dev
```bash
npm install
npm run dev
# buka http://localhost:5173
```

### 2. Build production (hasil di /dist)
```bash
npm run build
```

### 3. Deploy ke GitHub Pages
```bash
# edit vite.config.ts base jika repo: base: '/repo-name/'
npm run build
npx gh-pages -d dist
# atau
npm run deploy
```

### 4. Deploy ke Vercel / Netlify
- Drag & drop folder `dist` ke Vercel/Netlify
- Atau connect repo GitHub, framework preset: Vite, build command: `npm run build`, output: `dist`

### 5. Deploy APK link
File APK/AAB di modal adalah demo link:
`https://androidlabmini.app/d/booking-hotel-release.apk`
Ganti di `App.tsx` line ~935-948 dengan link storage kamu (Firebase Storage / S3)

## File Siap Deploy Lengkap
- `/dist` (setelah build) atau file `android-lab-mini-standalone.html` (single file dari agentic artifact) bisa langsung upload ke hosting static
- File standalone ada di: `/mnt/data/androforge-final-v3_agentic_artifact_2_2495a2b9e0bc.html` -> rename jadi `index.html` untuk hosting langsung

## Build ID
ALM-XXXXXX • Android Lab Mini • MINI LAB • 5 TERMINAL • SDK36 • ANDROID 16 • QA PASSED 0 Bugs

## Lisensi
MIT - Android Lab Mini Final No Senior Label
