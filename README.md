# JavaScript vs TypeScript vs Node.js

## JavaScript vs TypeScript

**JavaScript** è un linguaggio di programmazione che nasce per essere eseguito nei browser, quindi lato client, spesso affiancato a HTML e CSS per creare pagine web interattive. È interpretato, dinamico e debolmente tipizzato, il che significa che non richiede una fase di compilazione e permette una maggiore flessibilità nella gestione dei tipi di dati.

**TypeScript** è un superset di JavaScript che aggiunge il supporto per i tipi statici e altre funzionalità avanzate. Essendo un superset, tutto il codice JavaScript valido è anche valido in TypeScript. TypeScript viene compilato in JavaScript prima di essere eseguito, il che consente di individuare errori di tipo durante la fase di sviluppo, migliorando la qualità del codice e la manutenzione.

Quindi, essenzialmente, **TypeScript è JavaScript con i tipi**.

### Cosa sono i tipi?

I tipi sono delle categorie che definiscono la natura dei dati che una variabile può contenere.

In JavaScript le variabili si dichiarano con:
- `var` (vecchio modo, non più consigliato)
- `let` (modo moderno, variabile il cui valore può cambiare)
- `const` (modo moderno, variabile il cui valore non può cambiare)

```javascript
let nome = "mario"; // stringa
let eta = 30; // numero
const isAdmin = true; // booleano
```

Tutto nello stesso contenitore di `let` o `const`.

Mentre con TypeScript possiamo specificare il tipo di dato che una variabile può contenere:

```typescript
let nome: string = "mario"; // stringa
let eta: number = 30; // numero
const isAdmin: boolean = true; // booleano
```

## Node.js

**E Node.js cos'è?**

Un ambiente che ti permette di eseguire del codice JavaScript al di fuori del browser, quindi lato server.

Ciò apre nuove possibilità per lo sviluppo di diverse applicazioni:
- Semplici script per automatizzare compiti
- Server web completi
- Bot Telegram
- E molto altro

---

# Get Started with Node.js

## 1. Installa Node.js
Scarica Node.js dal sito ufficiale: [https://nodejs.org/](https://nodejs.org/en/download)

## 2. Crea e inizializza il progetto
Crea una cartella per il tuo progetto e navigaci dentro tramite terminale, poi inizializza un nuovo progetto Node.js:

```bash
npm init -y # npm è il package manager di Node.js che ti aiuta a gestire il progetto e le sue librerie
```

Questo comando crea un file `package.json` con le impostazioni di default.

## 3. Installa TypeScript

A questo punto abbiamo capito che TypeScript è tipo JavaScript ma meglio, tanto vale usare TypeScript, no?

Installa TypeScript e dei tool utili per lavorare con TypeScript in Node.js:

```bash
npm install typescript ts-node @types/node --save-dev
```

## 4. Configura TypeScript

Crea un file `tsconfig.json`:

```json
{
    "$schema": "https://www.schemastore.org/tsconfig",

    "compilerOptions": {
        /* === Runtime === */
        "target": "ES2020",
        "module": "NodeNext",
        "moduleResolution": "NodeNext",

        /* === Core Type Safety === */
        "strict": true,

        /* === Interop & sanity === */
        "esModuleInterop": true,
        "forceConsistentCasingInFileNames": true,

        /* === Build output === */
        "outDir": "dist",
        "rootDir": "src",
        "sourceMap": true,

        /* === Noise control === */
        "skipLibCheck": true
    },

    "include": ["src/**/*"],
    "exclude": ["node_modules", "dist"]
}
```

## 5. Crea il primo file

Crea una cartella `src` e al suo interno un file `index.ts` con un semplice "Hello World":

```typescript
console.log("Hello, Node.js with TypeScript!");
```

## 6. Esegui il codice

Per eseguire il file `index.ts` usa il comando:

```bash
npx ts-node src/index.ts
```

Per trasformare il codice TypeScript in JavaScript esegui:

```bash
tsc
```

Il codice compilato verrà salvato nella cartella `dist`.
