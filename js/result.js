// Retrieve the console results
let result = JSON.parse(localStorage.getItem('result'));

// Get a reference to the table body
var tbody = document.querySelector('#results-table tbody');

// Loop through the results object and add a row for each item
for (var item in result) {
  // Create a new table row
  var row = document.createElement('tr');
  row.className = "border-b dark:border-neutral-500"

  // Create a cell for the item name
  var itemCell = document.createElement('td');
  itemCell.textContent = item;
  itemCell.className = "whitespace-nowrap px-6 py-2 font-medium border-r"
  row.appendChild(itemCell);

  // Create a cell for the percentage
  var percentageCell = document.createElement('td');
  percentageCell.className = "whitespace-nowrap px-6 py-2 font-medium border-r"
  percentageCell.textContent = (result[item].possibility * 100).toFixed(2) + '%';
  row.appendChild(percentageCell);
  
  // Create a cell for the detail
  var detailCell = document.createElement('td');
  detailCell.textContent = result[item].detail;
  detailCell.className = "whitespace-nowrap px-6 py-2 font-medium border-r"
  row.appendChild(detailCell);

 // Create a cell for the suggestion
 var suggestionCell = document.createElement('td');
 suggestionCell.textContent = result[item].suggestion;
 suggestionCell.className = "whitespace-nowrap px-6 py-2 font-medium"
 row.appendChild(suggestionCell);

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
