import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/index.js',
        format: 'esm',
        sourcemap: true,
      },
      {
        file: 'dist/index.cjs',
        format: 'cjs',
        sourcemap: true,
        exports: 'named',
      },
    ],
    external: ['axios', 'p-limit', 'tslib'],
    plugins: [
      resolve({
        preferBuiltins: true,
      }),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        declaration: true,
        declarationMap: true,
        declarationDir: 'dist',
      }),
    ],
  },
  {
    input: 'src/ddragon/urls.ts',
    output: [
      {
        file: 'dist/ddragon/urls.js',
        format: 'esm',
        sourcemap: true,
      },
      {
        file: 'dist/ddragon/urls.cjs',
        format: 'cjs',
        sourcemap: true,
        exports: 'named',
      },
    ],
    external: [],
    plugins: [
      resolve(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        declaration: true,
        declarationMap: true,
        declarationDir: 'dist/ddragon',
      }),
    ],
  },
];
