#!/usr/bin/env node
// genBindings.ts

import fs from 'fs';

interface tPaxAppConfig {
	colorBg: string;
	colorTitle: string;
	libs: string[];
}
interface tTopPackageJson {
	name: string;
	version: string;
	paxApps: tPaxAppConfig;
}

const k_paxApps = 'paxApps';

function getPackageJson(jsonPath: string): tPaxAppConfig {
	let rObj: tPaxAppConfig = {
		colorBg: 'DarkCyan',
		colorTitle: 'aquamarine',
		libs: []
	};
	if (!jsonPath.endsWith('.json')) {
		console.log(`err129: ${jsonPath} has an unexpected file extension`);
		process.exit(1);
	}
	if (!fs.existsSync(jsonPath)) {
		console.log(`err134: file ${jsonPath} doesn't exist`);
		process.exit(1);
	}
	try {
		const fContentStr = fs.readFileSync(jsonPath, 'utf8');
		const packageJson = JSON.parse(fContentStr) as tTopPackageJson;
		if (k_paxApps in packageJson) {
			rObj = packageJson[k_paxApps];
		} else {
			console.log(`err142: JSON ${jsonPath} doesn't have the key '${k_paxApps}'`);
			process.exit(1);
		}
	} catch (err) {
		console.log(`err156: error by parsing ${jsonPath}`);
		console.log(err);
		process.exit(1);
	}
	return rObj;
}

console.log('genBindings.ts says hello!');
const cfg = getPackageJson('../../package.json');
console.log(cfg);
console.log('genBindings.ts says bye!');
