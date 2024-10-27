'use strict';

const mainTable = document.querySelector('table');
const allRows = [...mainTable.rows];

for (let i = 0; i < allRows.length; i++) {
  const cells = [...allRows[i].cells];

  const copy = cells[1].cloneNode(true);

  cells[cells.length - 1].before(copy);
}
