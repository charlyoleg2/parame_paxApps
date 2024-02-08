#!/usr/bin/env node
// desiXY-cli.ts

import type { tAllPageDef } from 'geometrix';
import { geom_cli } from 'geomcli';
import packag from '../package.json';
import {
	myCircleDef,
	myRectangleDef
} from 'desi01';

const designList: tAllPageDef = {
	'myGroup1/myCircle': myCircleDef,
	'myGroup1/myRectangle': myRectangleDef
};

//console.log('desiXY-cli says hello');
await geom_cli(process.argv, designList, packag, 'output');
//console.log('desiXY-cli says bye');
