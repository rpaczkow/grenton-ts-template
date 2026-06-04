# grenton-ts-template

A TypeScript starter template for writing [Grenton](https://grenton.com/) CLU scripts using [TypeScript-to-Lua](https://typescripttolua.github.io/) (TSTL).

Write your automation logic in TypeScript with full type safety and IDE support, then compile it to Lua 5.1 for deployment on a Grenton CLU.

## How it works

```
TypeScript → TSTL compiler → Lua  → luabundler → single bundled Lua file
```

## Requirements

- [Node.js](https://nodejs.org/) (v18+)
- [Grenton Object Manager](https://grenton.com/) (for deploying scripts to the CLU)

## Getting started

1. **Clone the repository**

   ```bash
   git clone https://github.com/rpaczkow/grenton-ts-template.git
   cd grenton-ts-template
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Edit the example script**

   Open [src/Clu_OnInit.ts](src/Clu_OnInit.ts) and replace the example Object IDs with the actual IDs from your Grenton project. You can find them in Object Manager by double-clicking on an object in the objects tree and copying the value from the **Id** field.

4. **Build**

   ```bash
   npm run build
   ```

   This compiles TypeScript to Lua and produces a single bundled file at `dist/Clu_OnInit_bundle.lua`.

5. **Deploy to the CLU**

   - Open Grenton Object Manager and navigate to the script that runs on the **OnInit** event (create one if it doesn't exist).
   - Copy the contents of `dist/src/Clu_OnInit_bundle.lua` and paste them into the script editor.
   - Save the project and send it to the CLU.

## Available scripts

| Command | Description |
|---|---|
| `npm run build` | Compile TypeScript and bundle into a single Lua file |
| `npm run compile` | Compile TypeScript to Lua only (no bundle) |
| `npm run bundle:clu` | Bundle the compiled Lua (requires a prior compile) |
| `npm run clean` | Remove the `dist/` directory |

## Project structure

```
grenton-ts-template/
├── src/
│   └── Clu_OnInit.ts      # Main script — runs on CLU OnInit event
├── dist/
│   ├── Clu_OnInit.lua          # Compiled Lua
│   └── Clu_OnInit_bundle.lua   # Bundled Lua — this is what you deploy
├── tsconfig.json
└── package.json
```

## Key dependencies

- **[grenton-ts](https://www.npmjs.com/package/grenton-ts)** — TypeScript type definitions and wrappers for Grenton objects
- **[typescript-to-lua](https://typescripttolua.github.io/)** — Compiles TypeScript to Lua 5.1
- **[luabundler](https://github.com/nicholasgasior/luabundler)** — Bundles Lua modules into a single file
- **[lua-types](https://github.com/TypeScriptToLua/lua-types)** — Lua 5.1 standard library type definitions

## License

MIT © rpaczkow
