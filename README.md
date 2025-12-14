# javascript vs typescript vs node 

## javascript vs typescript
Javascript è un linguaggio di programmazione che nasce per essere eseguito nei browser, quindi lato client, spesso affiancato a html e css per creare pagine web interattive. è interpretato, dinamico e debole tipizzato, il che significa che non richiede una fase di compilazione e permette una maggiore flessibilità nella gestione dei tipi di dati.

typescript è un superset di javascript  che aggiunge il supporto per i tipi statici e altre funzionalità avanzate. essendo un superset, tutto il codice javascript valido è anche valido in typescript. typescript viene compilato in javascript prima di essere eseguito, il che consente di individuare errori di tipo durante la fase di sviluppo, migliorando la qualità del codice e la manutenzione.

quindi essenzialmente typescript è un javascript con i tipi

cosa sono i tipi?
i tipi sono delle categorie che definiscono la natura dei dati che una variabile può contenere

in js le variabili si dichiarano con 
- var (vecchio modo, non più consigliato)
- let (modo moderno, variabile il cui valore può cambiare)
- const (modo moderno, variabile il cui valore non può cambiare)

``` javascript
let nome = "mario"; // stringa
let eta = 30; // numero
const isAdmin = true; // booleano
```
tutto nello stesso calderone del let o const 

mentre con ts possiamo specificare il tipo di dato che una variabile può contenere

``` typescript
let nome: string = "mario"; // stringa
let eta: number = 30; // numero
const isAdmin: boolean = true; // booleano
```


## node.js

e node.js cos'è?
un ambiente che ti permette di eseguire del codice javascript al di fuori del browser, quindi lato server.
Ciò apre nuove possibilità per lo sviluppo di diverse applicazioni: 

- semplici script per automatizzare compiti
- server web completi
- bot telegram 
- 


# get started with node.js
1. installa node.js dal sito ufficiale [https://nodejs.org/](https://nodejs.org/en/download)
2. crea una cartella per il tuo progetto e navigaci dentro tramite terminale
3. inizializza un nuovo progetto node.js con il comando `

``` bash
npm init -y # npm è il package manager di node.js che ti aiuta a gestire il progetto e le sue le librerie 
``` 

questo comando crea un file package.json con le impostazioni di default

a questo punto abbiamo capito che typescript è tipo javascript ma meglio, tanto vale usare typescript no?


cosi si installa typescript, e dei tools utili per lavorare con typescript in node.js
``` bash
npm install typescript ts-node @types/node --save-dev
``` 

crea un file tsconfig.json 


``` json
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

