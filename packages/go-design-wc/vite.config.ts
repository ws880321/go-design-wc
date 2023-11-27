import { fileURLToPath, URL } from 'node:url'
import { readdirSync } from 'node:fs'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import dts from 'vite-plugin-dts'
import { c } from 'vitest/dist/reporters-5f784f42.js'

const genInput = () => {
    const target: any = {}
    const dir = readdirSync('./src/components')
    dir.forEach((name) => {
        target[`components/${name}`] = fileURLToPath(
            new URL(`./src/components/${name}/index.ts`, import.meta.url)
        )
    })
    return target
}

// https://vitejs.dev/config/
export default defineConfig({
    appType: 'custom',
    publicDir: false,
    plugins: [
        vue(),
        vueJsx(),
        dts({
            outDir: 'types'
        })
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    build: {
        target: 'es2017',
        lib: {
            entry: fileURLToPath(new URL('./src/index.ts', import.meta.url)),
            name: 'go-design',
            fileName: (format) => {
                if (format === 'es') return 'go-design.js'
                return 'go-design.cjs'
            }
        },
        rollupOptions: {
            // treeshake: false,
            // input: {
            //     'go-design': fileURLToPath(new URL('./src/index.ts', import.meta.url)),
            //     ...genInput()
            // },
            output: {
                // interop: 'auto',
                // format: 'es',
                // entryFileNames: '[name].js',
                // assetFileNames: (assetInfo) => {
                //     if (assetInfo.name === 'go-design.css') return 'style.css'

                //     return 'assets/[name][extname]'
                // },
                exports: 'named'
            }
        },

        cssTarget: 'chrome61'
    }
})
