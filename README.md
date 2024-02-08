Parame_paxApps
==============


Presentation
------------

This is the monorepo that contains the following *javascript* packages:

1. desi01: a simple library of 3D-parts using *geometrix*
2. desiXY-ui: the generic *sveltekit* app to be used by other *geometrix design libraries*
3. desiXY-cli: the *nodejs* cli to be used by other *geometrix design libraries*

A public instance of *desiXY-ui* is available on that [github-page](https://charlyoleg2.github.io/parame_paxApps/).
The *code source* is available on [github](https://github.com/charlyoleg2/parame_paxApps).


Packages details
----------------

| id | package name        | lib or app | browser env | nodejs env |
|----|---------------------|------------|-------------|------------|
| 1  | desi01              | lib        | yes         | yes        |
| 2  | paxApps/desiXY-ui   | app        | yes         |            |
| 3  | paxApps/desiXY-cli  | app        |             | yes        |


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


