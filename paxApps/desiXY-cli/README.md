desiXY-cli
==========


Presentation
------------

*desiXY-cli* is the *generic command line interface* application for *design-libraries*.
It is a *nodejs* package exposing a *design-library* as CLI.

If you want to publish it, please, rename the package-name with a name closer to your design-library-name.

*desiXU-cli* is part of [parame\_paxApps](https://github.com/charlyoleg2/parame_paxApps).
*parame\_paxApps* is an helper repository of [parmetrix](https://charlyoleg2.github.io/parametrix/) for generating automatically the frontends (cli, ui and uis) of a design-library.


Workflow
--------

*paxApps* is intended to be used by scripts of a *design-library*.

```bash
degit https://github.com/charlyoleg2/parame_paxApps/paxApps paxApps
patch -p0 -Nt < scr/patchPaxApps.patch
shx rm -f paxApps/desiXY-cli/package.json.rej paxApps/desiXY-uis/package.json.rej
```


Requirements
------------

- [node](https://nodejs.org) > 20.10.0
- [npm](https://docs.npmjs.com/cli) > 10.1.0


Installation
------------

```bash
npm i -D desiXY-cli
```


Usage
-----

```bash
npx desiXY-cli
npx desiXY-cli --help
```


Usage without installation
--------------------------

The command below are only valid if you have publish the package. As mentionned before, please rename this package before publishing.

```bash
npx --package=desiXY-cli desiXY-cli
npx --package=desiXY-cli desiXY-cli --help
```


Development
-----------

```bash
git clone https://github.com/charlyoleg2/parame_paxApps
cd parame_paxApps
npm install
npm run ci
npm -w desiXY-cli run run
```

