import { babel } from '@rollup/plugin-babel'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import external from 'rollup-plugin-peer-deps-external'
import { terser } from 'rollup-plugin-terser'
import postcss from 'rollup-plugin-postcss'

export default [
	{
		input: './src/index.js',
		output: [
			{
				file: 'dist/cjs/index.js',
				format: 'cjs',
			},
			{
				file: 'dist/esm/index.js',
				format: 'es',
				exports: 'named',
			}
		],
		plugins: [
			postcss({
				plugins: [],
				minimize: true,
			}),
			babel({
				exclude: 'node_modules/**',
				presets: ['@babel/preset-react'],
				babelHelpers: 'bundled',
			}),
			external(),
			nodeResolve(),
			terser(),
		]
	}
]
