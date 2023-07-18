# 💩 Typescript/Jest error with AntDesign.Pro 💩

> Jest does not support esm modules, and Ant Design uses them.

[https://ant.design/docs/react/use-with-create-react-app#Test-with-Jest](https://ant.design/docs/react/use-with-create-react-app#Test-with-Jest)

## Duplicating THE issue

See current status [![jest unit test](https://github.com/EscolaLMS/Ant-Design-Jest-Issue/actions/workflows/unit.yml/badge.svg)](https://github.com/EscolaLMS/Ant-Design-Jest-Issue/actions/workflows/unit.yml)

Run `yarn test` that gets you into

```bash
FAIL  src/components/not-working/index.test.tsx
  ● Test suite failed to run

    Jest encountered an unexpected token

    This usually means that you are trying to import a file which Jest cannot parse, e.g. it's not plain JavaScript.

    By default, if Jest sees a Babel config, it will use that to transform your files, ignoring "node_modules".

    Here's what you can do:
     • If you are trying to use ECMAScript Modules, see https://jestjs.io/docs/en/ecmascript-modules for how to enable it.
     • To have some of your "node_modules" files transformed, you can specify a custom "transformIgnorePatterns" in your config.
     • If you need a custom transformation specify a "transform" option in your config.
     • If you simply want to mock your non-JS modules (e.g. binary assets) you can stub them out with the "moduleNameMapper" config option.

    You'll find more details and examples of these config options in the docs:
    https://jestjs.io/docs/en/configuration.html

    Details:

    /Users/qunabu/Desktop/localhost/escola-lms/ts-antd-jest-issue/node_modules/antd/es/layout/style/index.js:1
    ({"Object.<anonymous>":function(module,exports,require,__dirname,__filename,global,jest){import '../../style/index.less';
                                                                                             ^^^^^^

    SyntaxError: Cannot use import statement outside a module

      at Runtime.createScriptFromCode (node_modules/jest-runtime/build/index.js:1350:14)
```

# 😒 💩 😒 💩 😒 💩 😒 💩 😒 💩 😒 💩

## Solution

- fix this to work with `jest`
- find other js testing framework that generates covarage reports
- all above is just for unit and integraion tests (e2e are fine)
