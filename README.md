## ELEV8TRIX

This is official repository for elev8trix

## [![GitHub Super-Linter](https://github.com/Elev8trix-hub/elev8trix-landing-page/actions/workflows/linter.yml/badge.svg)](https://github.com/marketplace/actions/super-linter)

#### Development site

###### [Elev8trix.com] (https://github.com/Elev8trix-hub/elev8trix-landing-page "_Not Available_)

#### Production site

###### [Elev8trix.com] (https://github.com/Elev8trix-hub/elev8trix-landing-page "_Not Available_")

---

### About this project

##### 1. Project Title

> ELEV8TRIX

##### 2. Project Description

> ` `

##### 3. How to Install and Run the Project

###### Get Started

- `yarn` is the package manager on this project, not `npm`, `pnpm` etc
- Pull requests should be scoped to one feature or fix, except for complex features and flows.
- All files created under the `component` folder should start with a capital letter.
- All folders should follow camel casing, no white space is permitted in its naming.
- Functions should follow camel casing e.g `addFiles`, class names should follow pascal casing e.g `AddFiles`
- Commit messages should carry their appropiate flag e.g feat, fix, chore etc. Here is a sample commit command `git commit -m "feat: added input components"`

###### To install project dependencies

```bash
    yarn or yarn install
```

###### To start the development server

```bash
yarn dev
```

###### To auto remove linting errors use

```bash
yarn lint:fix
```

##### 4. How to Use Project

> ` `

##### 5. Collaborator / Team Members

| NAME        | GitHub           | EMAIL ADDRESS           |
| ----------- | ---------------- | ----------------------- |
| Olumide Ojo | just-midemichael | olumide.m.ojo@gmail.com |

---

### Techonologies ![tools]

| S/N | NAME             | USE                              |
| --- | ---------------- | -------------------------------- |
| 1.  | Vite             | For hot module replacement (HMR) |
| 2.  | Axios            |                                  |
| 3.  | Tailwind CSS     |                                  |
| 4.  | SCSS/Sass        |                                  |
| 5.  | Redux            |                                  |
| 6.  | Context API      |                                  |
| 7.  | TypeScript       |                                  |
| 8.  | Prettier         |                                  |
| 9.  | Linter           |                                  |
| 10. | Material UI      |                                  |
| 11. | Formik           |                                  |
| 12. | Yup              |                                  |
| 13. | React Router DOM |                                  |
| 14. | React Icons      |                                  |
| 15. | Yarn             |                                  |

---

### Semantic Commit Messages

> Format: <type>(<scope>): <subject>

#### Example

```
feat: add hat wobble
^--^  ^------------^
|     |
|     +-> Summary in present tense.
|
+-------> Type: chore, docs, feat, fix, refactor, style, or test.
```

> More Examples:

- `build:` (update dependency)
- `feat:` (new feature for the user, not a new feature for build script)
- `fix:` (bugfix for the user, not a fix to a build script)
- `docs:` (changes to the documentation)
- `style:` (formatting, missing semi colons, etc; no production code change)
- `refactor:` (refactoring production code, eg. renaming a variable)
- `test:` (adding missing tests, refactoring tests; no production code change)
- `chore:` (updating grunt tasks etc; no production code change)
- `perf:` (A code change that improves performance)
- `revert:` (Revert something)
- `test:` (Adding missing tests or correcting existing tests)

---

### React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname
  }
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
