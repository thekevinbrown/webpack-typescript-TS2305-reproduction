# TS-Loader Build Error

To reproduce:

1. Clone the repo
2. `yarn`
3. `yarn build:tsc` => Success
4. `yarn build:webpack` => Error

## Error Output
```
❯ yarn build:webpack
yarn run v1.22.1
$ webpack
Hash: 53c9b05c76683b63c208
Version: webpack 4.42.0
Time: 1302ms
Built at: 03/17/2020 12:33:31 PM
 2 assets
Entrypoint main = index.js
[0] ./packages/b/src/index.ts 133 bytes {0} [built] [1 error]
[1] ./packages/a/lib/index.js 236 bytes {0} [built]
[2] ./packages/a/lib/some/index.js 238 bytes {0} [built]
[3] ./packages/a/lib/some/folder/index.js 236 bytes {0} [built]
[4] ./packages/a/lib/some/folder/test.js 145 bytes {0} [built]

ERROR in /Users/kevin/development/webpack-typescript-TS2305-reproduction/packages/b/src/index.ts
./packages/b/src/index.ts
[tsl] ERROR in /Users/kevin/development/webpack-typescript-TS2305-reproduction/packages/b/src/index.ts(1,10)
      TS2305: Module '"../../../../../../../Users/kevin/development/webpack-typescript-TS2305-reproduction/packages/a/lib"' has no exported member 'Test'.
error Command failed with exit code 2.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
