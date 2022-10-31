/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_URL: 'http://92.255.183.197:3000/api'
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}