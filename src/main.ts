import { LINKS } from './data/links';
import { generateTable } from './utils/table';
import { validate } from './utils/validation';

window.document.addEventListener('DOMContentLoaded', () => validate() && generateTable(LINKS));
