# <h1 align="center">Progress Bar</h1>

**Introduction**:

A progress bars demo composed of multiple bars with one set of controls that can control each bar on the fly.

**Demo**: 

http://www.progress-bar.com.s3-website-ap-southeast-2.amazonaws.com

Table of Contents
-----------------
- [About](#about)
  - [Features](#features)
  - [Build With](#build-with)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Contact Me](#contact-me)

About
-------------

### Features

- Read data from the endpoint
- Multiple bars
- One set of controls that can control each bar on the fly
- Will not go under 0
- Can go over limit (defined in API), but limit the bar itself and change its colour
- Display usage amount in the center
- With test code based on TDD
- Implement a responsive solution: testing it on mobile, tablet, etc. Getting it working nicely.
- Animate the bar change, it works well when taps buttons quickly.

### Build with

* [React.js, TypeScript, Scss, etc]

Getting Started
---------------

The easiest way to get started is to clone the repository:

```bash
# Get the latest snapshot
git clone https://github.com/NemoW1991/progress-bar.git

# Change directory
cd progress-bar

In the project directory, you can run:

# Install dependencies
npm install
yarn add

# Then simply start the app
npm start
yarn start

# Also simply test the app
npm test
yarn test

# Also simply build the app
npm run build
yarn build
```

Project Structure
-----------------

| Name                                     | Description                                                    |
| ---------------------------------------- | -------------------------------------------------------------- |
| **public**/                              | Static assets.                                                 |
| **public**/index.html                    | Place static html here.                                        |
| **src/components**/                      | Folder for components.                                         |
| **src/components/Progress**/             | Component for Progress.                                        |
| **src/components/Select**/               | Component for Select.                                          |
| **src/components/Button**/               | Component for Button.                                          |
| **src/components/Progress**/index.tsx    | The component file for rendering the Progress bars.            |
| **src/components/Select**/index.tsx      | The component file for rendering the Select.                   |
| **src/components/Button**/index.tsx      | The component file for rendering the Button.                   |
| **src/components/Progress**/index.scss   | The style file for Progress file.                              |
| **src/components/Select**/index.scss     | The style file for Select file.                                |
| **src/components/Button**/index.scss     | The style file for Button file.                                |
| **src/jest**/Progress.js                 | Test for rendering the Progress bar.                           |
| **src/jest**/Select.js                   | Test for rendering the Select.                                 |
| **src/jest**/Button.js                   | Test for rendering the Button.                                 |
| **src/jest**/View.js                     | Test for rendering the Application page                        |
| **src/view**/                            | Folder for View page.                                          |
| **src/lib**/                             | Folder for data and service.                                   |
| **src/lib/api**/                         | File for api config.                                           |
| **src/lib/constants**/                   | Folder for constant.                                           |
| **src/lib/types**/                       | File for type.                                                 |
| **src**/App.tsx                          | The main application file.                                     |
| **src**/App.scss                         | The style file for application file.                           |
| **src**/index.tsx                        | The entry point file.                                          |
| **src**/setupTests.js                    | File for Test setting up.                                      |
| .gitignore                               | File or/and folder ignored by git.                             |
| .prettierrc                              | File for rendering one row of pixel image with map method.     |
| package.json                             | File for metadata and dependency list.                         |
| tsconfig.json                            | Typescript config                                              |
| yarn.lock                                | File for exact versions of NPM dependencies in package.json.   |
| README.md                                | Documentation for instruction.                                 |


Contact Me :smile:
---------------

E_mail: lya.hwang.au@gmail.com

Program Link: https://github.com/NemoW1991/prograss-bar

Demo: http://www.progress-bar.com.s3-website-ap-southeast-2.amazonaws.com
      