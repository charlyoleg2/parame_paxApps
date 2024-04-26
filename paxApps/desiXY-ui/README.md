desiXY-ui
=========


Presentation
------------

*desiXY-ui* is a *SvelteKit* app exposing the designs of some *design-libraries* in a UI.
This UI can be served by a static server (like github-page).
*desiXY-uis* uses also this UI.

*desiXU-ui* is part of [parame\_paxApps](https://github.com/charlyoleg2/parame_paxApps).
*parame\_paxApps* is an helper repository of [parmetrix](https://charlyoleg2.github.io/parametrix/) for generating automatically the frontends (cli, ui and uis) of a design-library.


Workflow
--------

*paxApps* is intended to be used bw scripts of a *design-library*.

```bash
degit https://github.com/charlyoleg2/parame_paxApps/paxApps paxApps
patch -p0 -Nt < scr/patchPaxApps.patch
shx rm -f paxApps/desiXY-cli/package.json.rej paxApps/desiXY-uis/package.json.rej
```


Requirements
------------

- [node](https://nodejs.org) > 20.10.0
- [npm](https://docs.npmjs.com/cli) > 10.1.0


Development
-----------

```bash
git clone https://github.com/charlyoleg2/parame_paxApps
cd parame_paxApps
npm install
npm run ci
npm run preview
```
