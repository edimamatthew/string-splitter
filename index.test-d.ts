import {expectType} from 'tsd';
import splitString from './index.js';

expectType<Array<string>>(splitString("ABBCCDDEEBBAABB", "BB"));