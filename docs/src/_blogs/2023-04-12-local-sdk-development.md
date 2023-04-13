---
lang: en-US
published: 2023-04-23
keywords:
  - Local Development
  - SDK
  - Tutorial
description:
  content: Local SDK Development
  summary: Tutorial how do setup local SDK development on project
---

# Local Front SDK Development

<PostHeader/>

All frontend React application are using [sdk as API connector](https://www.npmjs.com/package/@escolalms/sdk) with TypeScript Definition

Working on this might be complicated as usually this is just imported as compiled npm package. There are some ways like [`npm link`](https://docs.npmjs.com/cli/v8/commands/npm-link) or `yarn link` to work on local packages, yet it's complicated with TypeScript ones. Here are two scripts that allows to work on `sdk` as natove typescript files.

Assuming you have `sdk` already in you `package.json` file, next to it I'm creating two bash scripts - one to switch to local version other to use compiled version from `npm`.

`switch_to_local_sdk.sh` file has `yarn` version of task.

```bash
#!/bin/sh
yarn remove "@escolalms/sdk"
yarn add jssha @escolalms/ts-models umi-request
git clone git@github.com:EscolaLMS/sdk.git
cp tsconfig.json.local tsconfig.json
echo "switched to local"
yarn && yarn dev
```

and `switch_to_prod_sdk.sh`

```bash
#!/bin/sh
yarn remove jssha @escolalms/ts-models umi-request
yarn add @escolalms/sdk
cp tsconfig.json.prod tsconfig.json
echo "switched to prod"
yarn && yarn dev
```

then I have two versions of `tsconfig` file as well

Note: those are `next.js` typescript configuration.

`tsconfig.json.local`

```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": false,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "@escolalms/sdk/lib/*": ["./sdk/src/*"]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    "./node_modules/@escolalms/ts-models/models.d.ts"
  ],
  "exclude": ["node_modules"]
}
```

`tsconfig.json.prod`

```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": false,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    "./node_modules/@escolalms/ts-models/models.d.ts"
  ],
  "exclude": ["node_modules"]
}
```

After launching script `switch_to_local_sdk.sh`

All imports like

```ts
import { API } from "@escolalms/sdk/lib";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import { CourseProgressItemElementStatus } from "@escolalms/sdk/lib/types/api";
```

would be taken from local `sdk` folder as typescript files instead of `node_modules/@escolalms/sdk`.

Once you know all changes in `sdk` are working fine you can switch ro production with `switch_to_prod_sdk.sh` before sending code to git repository.

You should also consider adding whole `sdk` folder into `.gitignore`

**Happy development!**

<Disqus/>
