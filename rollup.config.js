import baber from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import {terser} from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import image from 'rollup-plugin-img'

export default [
    {
        input: './src/index.js',
        output: [
            {
                file: 'dist/index.js',
                format: 'cjs',
            },
            {
                file: 'dist/index.es.js',
                format: 'es',
                exports: 'named',
            }
        ],
        plugins:[
            postcss({
                plugins: [],
                minimize: true   
               }),
            baber({
                exclude: 'node_modules/**',
                presets: ['@babel/preset-react']
            }),
            image({
                limit: 100000,
              }),
            external(),
            resolve(),
            terser(),
        ]
    }
]