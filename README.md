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

   The npm project lives in `src/`, so run commands from there:

   ```bash
   cd src
   npm install
   ```

3. **Edit an example script**

   Pick one of the example folders under `src/` (e.g. [src/light_turned_on_by_switch/Clu_OnInit.ts](src/light_turned_on_by_switch/Clu_OnInit.ts)) and replace the example Object IDs with the actual IDs from your Grenton project. You can find them in Object Manager by double-clicking on an object in the objects tree and copying the value from the **Id** field.

4. **Build**

   ```bash
   npm run build
   ```

   This compiles every example under `src/` to Lua and produces a bundled file for each at `dist/<example>/Clu_OnInit_bundle.lua`. To build a single example instead, run its individual bundle script, e.g. `npm run bundle:light_turned_on_by_switch`.

5. **Deploy to the CLU**

   - Open Grenton Object Manager and navigate to the script that runs on the **OnInit** event (create one if it doesn't exist).
   - Copy the contents of the relevant `dist/<example>/Clu_OnInit_bundle.lua` and paste them into the script editor.
   - Save the project and send it to the CLU.

## Available scripts

Run from `src/`.

| Command | Description |
|---|---|
| `npm run build` | Compile all examples and bundle each into its own Lua file |
| `npm run compile` | Compile TypeScript to Lua only (no bundle) |
| `npm run bundle:all` | Bundle every already-compiled example |
| `npm run bundle:<example>` | Bundle a single example, e.g. `npm run bundle:log_errors` |
| `npm run clean` | Remove the `dist/` directory |

## Project structure

```
grenton-ts-template/
├── src/
│   ├── light_turned_on_by_calendar/
│   │   └── Clu_OnInit.ts
│   ├── light_turned_on_by_presence_sensor/
│   │   └── Clu_OnInit.ts
│   ├── light_turned_on_by_switch/
│   │   └── Clu_OnInit.ts
│   ├── log_errors/
│   │   └── Clu_OnInit.ts
│   ├── module_versions/
│   │   └── Clu_OnInit.ts
│   ├── remote_communication/
│   │   └── Clu_OnInit.ts
│   ├── user_variables/
│   │   └── Clu_OnInit.ts
│   ├── tsconfig.json
│   └── package.json
├── dist/                              # compiled + bundled output (generated)
│   └── <example>/
│       ├── Clu_OnInit.lua             # Compiled Lua
│       └── Clu_OnInit_bundle.lua      # Bundled Lua — this is what you deploy
└── LICENSE
```

Each folder under `src/` is a standalone example script with its own `Clu_OnInit.ts` entry point. `npm run build` compiles all of them and bundles each into its own `dist/<example>/Clu_OnInit_bundle.lua`.

## Key dependencies

- **[grenton-ts](https://www.npmjs.com/package/grenton-ts)** — TypeScript type definitions and wrappers for Grenton objects
- **[typescript-to-lua](https://typescripttolua.github.io/)** — Compiles TypeScript to Lua 5.1
- **[luabundler](https://github.com/nicholasgasior/luabundler)** — Bundles Lua modules into a single file
- **[lua-types](https://github.com/TypeScriptToLua/lua-types)** — Lua 5.1 standard library type definitions

## License

MIT © rpaczkow
