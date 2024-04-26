Parame\_paxApps
===============


Presentation
------------

This is the monorepo that contains the following *javascript* packages:

1. desi01: a simple library of 3D-parts using *geometrix*
2. paxScr: an helper script for geenrated design-list for desiXY-cli and desiXY-ui
3. desiXY-cli: the *nodejs* app for presenting your *design library* in a command-line-interface
4. desiXY-ui: the generic *sveltekit* app for presenting your *design library* in a web-app
5. desiXY-uis: the *nodejs* app for serving your desiXY-ui locally when wou are offline

A public instance of *desiXY-ui* is available on that [github-page](https://charlyoleg2.github.io/parame_paxApps/).
The *code source* is available on [github](https://github.com/charlyoleg2/parame_paxApps).


Links
-----

- [desi01-ui](https://charlyoleg2.github.io/parame_paxApps/) : public instance of the UI
- [sources](https://github.com/charlyoleg2/parame_paxApps) : git-repository


Packages details
----------------

| id | package name        | lib or app | browser env | nodejs env |
|----|---------------------|------------|-------------|------------|
| 1  | desi01              | lib        | yes         | yes        |
| 2  | paxApps/paxScr      | app        |             | yes        |
| 3  | paxApps/desiXY-cli  | app        |             | yes        |
| 4  | paxApps/desiXY-ui   | app        | yes         |            |
| 5  | paxApps/desiXY-uis  | app        |             | yes        |


Prerequisite
------------

- [node](https://nodejs.org) version 20.10.0 or higher
- [npm](https://docs.npmjs.com/cli/v7/commands/npm) version 10.2.4 or higher


Getting started
---------------

```bash
git clone https://github.com/charlyoleg2/parame_paxApps
cd parame_paxApps
npm i
npm run ci
npm run preview
```

Other useful commands:
```bash
npm run clean
npm run ls-pkg
npm -w desi01 run check
npm -w desi01 run build
npm -w desiXY-ui run dev
```


