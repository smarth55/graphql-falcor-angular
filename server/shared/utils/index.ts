import { readFile, writeFile } from 'fs';
import * as denodeify from 'denodeify';

export const readFilePromise = (denodeify(readFile) as (...args: any[]) => Promise<any>);
export const writeFilePromise = (denodeify(writeFile) as (...args: any[]) => Promise<any>);