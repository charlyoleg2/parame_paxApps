#!/usr/bin/env node
// genBindings.ts

import type { tAllPageDef } from 'geometrix';
import { checkImpPages } from 'geometrix';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import packag from '../package.json';
import fs from 'fs';
import path from 'path';

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

function write_file(fPath: string, fContent: string) {
	const dirPath = path.dirname(fPath);
	if (!fs.existsSync(dirPath)) {
		console.log(`err334: directory ${dirPath} doesn't exist`);
		process.exit(1);
	}
	try {
		fs.writeFileSync(fPath, fContent);
	} catch (err) {
		console.log(`err356: error by writing file ${fPath}`);
		console.log(err);
		process.exit(1);
	}
}

function generate_scss(iCfg: tPaxAppConfig) {
	const fPath = '../desiXY-ui/src/lib/gen_colors.scss';
	const fStr = `// gen_colors.scss
$colorBg: ${iCfg.colorBg};
$colorTitle: ${iCfg.colorTitle};
`;
	write_file(fPath, fStr);
}

async function import_libs(libs: string[]): Promise<string[]> {
	const rLines: string[] = [];
	const ulibs = new Set(libs);
	const lengthDiff = libs.length - ulibs.size;
	if (lengthDiff !== 0) {
		console.log(`err412: ${lengthDiff} duplicated in libs list`);
		process.exit(1);
	}
	for (const libName of ulibs) {
		try {
			const pages = (await import(libName)) as tAllPageDef;
			const [cErr, cMsg] = checkImpPages(pages);
			if (cErr) {
				console.log(`err412: error by importing ${libName}`);
				console.log(cMsg);
				process.exit(1);
			}
			for (const one of Object.keys(pages)) {
				rLines.push(`\t'${libName}/${one}': ${libName}.${one}`);
			}
		} catch (err) {
			console.log(`err456: error by importing ${libName}`);
			console.log(err);
			process.exit(1);
		}
	}
	return rLines;
}

function generate_designList(libs: string[], lines: string[], oPath: string) {
	let fStr = `// designList.ts

import type { tAllPageDef } from 'geometrix';
`;
	for (const onelib of libs) {
		fStr += `import * as ${onelib} from '${onelib}';\n`;
	}
	fStr += '\nconst designList: tAllPageDef = {\n';
	fStr += lines.join(',\n');
	fStr += '\n};\n\nexport { designList };\n';
	write_file(oPath, fStr);
}

async function generate_designList_ui(iCfg: tPaxAppConfig) {
	const fPath_ui = '../desiXY-ui/src/lib/designList.ts';
	const lines = await import_libs(iCfg.libs);
	generate_designList(iCfg.libs, lines, fPath_ui);
}

async function generate_designList_cli(iCfg: tPaxAppConfig) {
	const fPath_cli = '../desiXY-cli/src/designList.ts';
	const lines = await import_libs(iCfg.libs);
	generate_designList(iCfg.libs, lines, fPath_cli);
}

async function genBindings_cli(iArgs: string[]) {
	//const argv = await yargs(hideBin(iArgs))
	await yargs(hideBin(iArgs))
		.scriptName('genBindings')
		.version(packag.version)
		.usage('Usage: $0 <global-options> command <command-argument>')
		.example([
			['$0 --topPackage ../../pachage.json print-config', 'print the paxApps config'],
			['$0 generate-scss', 'create the scss file for the sveltekit app'],
			['$0 generate-cli-design-list', 'create the designList.ts for desiXY-cli'],
			['$0 generate-ui-design-list', 'create the designList.ts for desiXY-ui'],
			['$0 modify-cli-package', 'modify the package.json of desiXY-cli'],
			['$0 modify-ui-package', 'modify the package.json of desiXY-ui'],
			['$0 copy-svg', 'copy the svg for the sveltekit app'],
			['$0 all', 'does all modifs and copies']
		])
		.option('topPackage', {
			type: 'string',
			description: 'path to the package.json of Parame',
			default: '../../package.json'
		})
		.command('print-config', 'print the paxApps config of the top package.json', {}, (argv) => {
			const cfg = getPackageJson(argv.topPackage as string);
			console.log(cfg);
		})
		.command('generate-scss', 'create the file gen_colors.scss for desiXY-ui', {}, (argv) => {
			const cfg = getPackageJson(argv.topPackage as string);
			generate_scss(cfg);
		})
		.command('print-libs', 'print the content of libs', {}, async (argv) => {
			const cfg = getPackageJson(argv.topPackage as string);
			const lines = await import_libs(cfg.libs);
			console.log(lines);
		})
		.command(
			'generate-designList-ui',
			'create the file designList.ts for desiXY-ui',
			{},
			async (argv) => {
				const cfg = getPackageJson(argv.topPackage as string);
				await generate_designList_ui(cfg);
			}
		)
		.command(
			'generate-designList-cli',
			'create the file designList.ts for desiXY-cli',
			{},
			async (argv) => {
				const cfg = getPackageJson(argv.topPackage as string);
				await generate_designList_cli(cfg);
			}
		)
		.command(
			'all',
			'all preparations for binding desiXY-cli and desiXY-ui',
			{},
			async (argv) => {
				const cfg = getPackageJson(argv.topPackage as string);
				generate_scss(cfg);
				await generate_designList_ui(cfg);
				await generate_designList_cli(cfg);
			}
		)
		.demandCommand(1)
		.help()
		.strict()
		.parseAsync();
}

//console.log('genBindings.ts says hello!');
await genBindings_cli(process.argv);
//console.log('genBindings.ts says bye!');
