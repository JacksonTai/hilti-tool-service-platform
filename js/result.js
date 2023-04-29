// Retrieve the console results
const result = JSON.parse(localStorage.getItem('result'));

// Get a reference to the table body
var tbody = document.querySelector('#results-table tbody');

// Loop through the results object and add a row for each item
for (var item in result) {
  // Create a new table row
  var row = document.createElement('tr');

  // Create a cell for the item name
  var itemCell = document.createElement('td');
  itemCell.textContent = item;
  row.appendChild(itemCell);

  // Create a cell for the percentage
  var percentageCell = document.createElement('td');
  percentageCell.textContent = (result[item] * 100).toFixed(2) + '%';
  row.appendChild(percentageCell);

  // Add the row to the table body
  tbody.appendChild(row);
}

var buttonElements = document.querySelectorAll('.btn-primary');
for (var i = 0; i < buttonElements.length; i++) {
  buttonElements[i].addEventListener('click', function() {
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