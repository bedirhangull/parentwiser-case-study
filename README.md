
# ParentWiser case study
About Project: The project lists students on the main screen.  You can also add students, delete students and edit student information.






Tech stacks:
 - Expo CLI
 - Expo Router / Drawer
 - Openapi typescript 
 - Hero icons for icons
 - Native Wind


## About Git


| Branch |   commit message  | Description                |
| :-------- | :------- | :------------------------- |
| `component` | `(component):` | If you want a create component 
| `fix` | `(fix):` | For fix the bugs
| `structure` | `(structure):` | Changes about sturctures like folder sturcture, changes about documentation etc.
| `pages` | `(page):` | For create a new page
| `documentation` | `(documentation):` | For changes about documentation
| `feature` | `(feature):` | for new adding new feature like CRUD operations

#### Commit Message


| Parameter |      | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Tag`      | `:` | <YOUR_COMMIT_MESSAGE>|


## Some scripts

For ios

```bash
  npm run ios
```

For android

```bash
  npm run android
```

For generate new services if any changes

```bash
  npm run generate:apis
```


## Add the new service

- run the generate api script with npm

- You can use the newly developed services by making the requirements in the api file inside the service folder. 


## Component Arhictecture

![alt text](https://iili.io/JRS3271.png)

## Color References

- Primary ![#FEAF00](https://placehold.co/15x15/FEAF00/FEAF00.png) `#FEAF00`
- Dark ![#0F172A](https://placehold.co/15x15/0F172A/0F172A.png) `#0F172A`
- lighGray ![#6B7280](https://placehold.co/15x15/1589F0/6B7280.png) `#6B7280`
- somberRed ![#FF0000](https://placehold.co/15x15/FF0000/FF0000.png) `#FF0000`
## Font Family References


| Font |   Type  | Font in Tailwindcss                |
| :-------- | :------- | :------------------------- |
| `montRegular` | `Regular` | font-montRegular 
| `montBold` | `Bold` | font-montBold
| `montSemiBold` | `Semi Bold` | font-montSemiBold


## Font Sizes References


| Font Size |   Type  | Value                |
| :-------- | :------- | :------------------------- |
| `text-xs` | `px` | 12 
| `text-sm` | `px` | 14
| `text-base` | `px` | 16
| `text-2xl` | `px` | 24





## Font Family References


| Font |   Type  | Font in Tailwindcss                |
| :-------- | :------- | :------------------------- |
| `montRegular` | `Regular` | font-montRegular 
| `montBold` | `Bold` | font-montBold
| `montSemiBold` | `Semi Bold` | font-montSemiBold


## Font Sizes References


| Font Size |   Type  | Value                |
| :-------- | :------- | :------------------------- |
| `text-xs` | `px` | 12 
| `text-sm` | `px` | 14
| `text-base` | `px` | 16
| `text-2xl` | `px` | 24




## Absolute paths

The absolute path values used in this project are defined as follows. These definitions are used to provide easier access to modules and files.

| Path Alias    | Absolute Path                   | Usage                                        | Directory                           |
| :------------ | :------------------------------ | :------------------------------------------- | :---------------------------------- |
| `@components` | `app/components/index`          | `import { button } from "@components"`       | `app/components/index.ts`           |
| `@api`        | `app/services/api`               | `import { userApi } from "@api"`             | `app/services/api.ts`               |
| `@colors`     | `app/constants/colors`           | `import COLORS from "@colors"`                                          | `app/constants/colors`               |
| `@layout`     | `app/layout`                     | `import { Header } from "@layout"`                                            | `app/layout/index.ts`                        |
| `@utils`      | `app/utils`                      | `import { MenuItems } from "@utils"`                                            | `app/utils/index.ts`                         |

