// Retrieve the console results
let result = JSON.parse(localStorage.getItem('result'));
console.log(result);
console.log(result.Stator);
// Get a reference to the table body
var tbody = document.querySelector('#results-table tbody');

// Loop through the results object and add a row for each part
for (var part in result) {
  const { possibility, detail, suggestion } = result[part];

  // Create a new table row
  var row = document.createElement('tr');
  row.className = 'border-b dark:border-neutral-500';

  // Create a cell for the part name
  var partCell = document.createElement('td');
  partCell.className = 'whitespace-nowrap px-6 py-2 font-medium border-r';
  partCell.textContent = part;
  row.appendChild(partCell);

  // Create a cell for the possibility
  var possibilityCell = document.createElement('td');
  possibilityCell.className = 'whitespace-nowrap px-6 py-2 font-medium border-r';
  possibilityCell.textContent = (possibility * 100).toFixed(2) + '%';
  row.appendChild(possibilityCell);

  // Create a cell for the detail
  var detailCell = document.createElement('td');
  detailCell.className = 'whitespace-nowrap px-6 py-2 font-medium border-r';
  detailCell.textContent = detail;
  row.appendChild(detailCell);

  // Create a cell for the suggestion
  var suggestionCell = document.createElement('td');
  suggestionCell.className = 'whitespace-nowrap px-6 py-2 font-medium border-r';
  suggestionCell.textContent = suggestion;
  row.appendChild(suggestionCell);

  // Add the row to the table body
  tbody.appendChild(row);
}

var buttonElements = document.querySelectorAll('.btn-primary');
for (var i = 0; i < buttonElements.length; i++) {
  buttonElements[i].addEventListener('click', function () {
    var currentRow = this.parentNode.parentNode;
    var currentTd = currentRow.getElementsByTagName('td')[0].innerText;
    var imageElement = document.querySelector('img');
    if (currentTd === 'Propeller Wear and Tear') {
      imageElement.src = 'image/drilltool-propellers.png';
    } else if (currentTd === 'Drill Anomaly') {
      imageElement.src = 'image/ll.png';
    }
  });
}
