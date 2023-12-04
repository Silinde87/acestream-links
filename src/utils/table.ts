import { TLink } from '../types/links';

export const generateTable = (links: TLink[]): void => {
	const tableDiv = document.getElementById('linksTable');
	const table = document.createElement('table');
	table.classList.add('links-table');

	const thead = document.createElement('thead');
	const headerRow = document.createElement('tr');
	const headerName = document.createElement('th');
	headerName.textContent = 'Name';
	const headerHash = document.createElement('th');
	headerHash.textContent = 'Hash';
	headerRow.appendChild(headerName);
	headerRow.appendChild(headerHash);
	thead.appendChild(headerRow);
	table.appendChild(thead);

	const tbody = document.createElement('tbody');
	links.forEach((link) => {
		const row = document.createElement('tr');
		const cellName = document.createElement('td');
		cellName.textContent = link.name;
		const cellHash = document.createElement('td');
		const linkHash = document.createElement('a');
		linkHash.href = link.hash;
		linkHash.textContent = link.hash;
		cellHash.appendChild(linkHash);
		row.appendChild(cellName);
		row.appendChild(cellHash);
		tbody.appendChild(row);
	});
	table.appendChild(tbody);

	tableDiv && tableDiv.appendChild(table);
};
