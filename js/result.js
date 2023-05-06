// Retrieve the console results
let result = JSON.parse(localStorage.getItem('result'));
console.log(result);
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
  itemCell.className = "whitespace-nowrap px-6 py-1 font-medium border-r"
  row.appendChild(itemCell);

  // Create a cell for the percentage
  var percentageCell = document.createElement('td');
  percentageCell.className = "whitespace-nowrap px-6 py-1 font-medium border-r"
  percentageCell.textContent = (result[item].possibility * 100).toFixed(2) + '%';
  if (result[item].is_faulty === 0) {
    percentageCell.style.color = "green";
  } else if (result[item].is_faulty === 1) {
    percentageCell.style.color = "red";
  }
  row.appendChild(percentageCell);
  

  // Create a cell for the view button
  var viewCell = document.createElement('td');
  viewCell.className = "whitespace-nowrap px-6 py-1 font-medium border-r";
  row.appendChild(viewCell);
  var viewButton = document.createElement('button');
  viewButton.className = "btn btn-primary bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded";
  viewButton.textContent = "View";
  
  // Create button onclick event for all part details to be reflected in right container when button is clicked
  viewButton.setAttribute('data-part-name', item);
  viewButton.addEventListener('click', function(event) {

  var partName = event.target.getAttribute('data-part-name');
  document.querySelector("#part-name").textContent = partName;

  var failureProbability = result[partName].possibility * 100;
  document.querySelector("#failure-probability").innerHTML = failureProbability.toFixed(2) + "%";

  var partDetail = result[partName].detail;
  document.querySelector("#part-detail").textContent = partDetail;

  var partSuggestion = result[partName].suggestion;
  document.querySelector("#part-suggestion").textContent = partSuggestion;

  if (result[partName].is_faulty === 0) {
    document.querySelector("#failure-probability").style.color = "green";
  } else if (result[partName].is_faulty === 1) {
    document.querySelector("#failure-probability").style.color = "red";
  }
  });

  viewCell.appendChild(viewButton);

  // Add the row to the table body
  tbody.appendChild(row);
}

var buttonElements = document.querySelectorAll('.btn-primary');
for (var i = 0; i < buttonElements.length; i++) {
  buttonElements[i].addEventListener('click', function() {
    var currentRow = this.parentNode.parentNode;
    var currentTd = currentRow.getElementsByTagName('td')[0].innerText;

    // Change tool parts image when button is clicked
    var imageElement = document.querySelector('#toolpart');
    if (currentTd === 'Chuck Drill') {
      imageElement.src = 'image/hand_drill_parts/chuck_drill.png';
    } else if (currentTd === 'Stator') {
      imageElement.src = 'image/hand_drill_parts/stator.png';
    } else if (currentTd === 'Chuck Key') {
      imageElement.src = 'image/hand_drill_parts/chuck_key.png';
    } else if (currentTd === 'Cable Handle') {
      imageElement.src = 'image/hand_drill_parts/cable_handle.png';
    } else if (currentTd === 'Motor') {
      imageElement.src = 'image/hand_drill_parts/motor.png';
    } else if (currentTd === 'Top Brush') {
      imageElement.src = 'image/hand_drill_parts/top_brush.png';
    } else if (currentTd === 'Right Body') {
      imageElement.src = 'image/hand_drill_parts/right_body.png';
    } else if (currentTd === 'Rubber Grip') {
      imageElement.src = 'image/hand_drill_parts/rubber_grip.png';
    } else if (currentTd === 'Switch') {
      imageElement.src = 'image/hand_drill_parts/switch.png';
    } else if (currentTd === 'Rotor') {
      imageElement.src = 'image/hand_drill_parts/rotor.png';
    } else if (currentTd === 'Low Brush') {
      imageElement.src = 'image/hand_drill_parts/low_brush.png';
    } else if (currentTd === 'Left Body') {
      imageElement.src = 'image/hand_drill_parts/left_body.png';
    }

    // Highlight tool parts image when button is clicked
    var imageToolElement = document.querySelector('#tool');
    if (currentTd === 'Chuck Drill') {
      imageToolElement.src = 'image/hand_drill/chuck_drill.png';
    } else if (currentTd === 'Stator') {
      imageToolElement.src = 'image/hand_drill/stator.png';
    } else if (currentTd === 'Chuck Key') {
      imageToolElement.src = 'image/hand_drill/chuck_key.png';
    } else if (currentTd === 'Cable Handle') {
      imageToolElement.src = 'image/hand_drill/cable_handle.png';
    } else if (currentTd === 'Motor') {
      imageToolElement.src = 'image/hand_drill/motor.png';
    } else if (currentTd === 'Top Brush') {
      imageToolElement.src = 'image/hand_drill/top_brush.png';
    } else if (currentTd === 'Right Body') {
      imageToolElement.src = 'image/hand_drill/right_body.png';
    } else if (currentTd === 'Rubber Grip') {
      imageToolElement.src = 'image/hand_drill/rubber_grip.png';
    } else if (currentTd === 'Switch') {
      imageToolElement.src = 'image/hand_drill/switch.png';
    } else if (currentTd === 'Rotor') {
      imageToolElement.src = 'image/hand_drill/rotor.png';
    } else if (currentTd === 'Low Brush') {
      imageToolElement.src = 'image/hand_drill/low_brush.png';
    } else if (currentTd === 'Left Body') {
      imageToolElement.src = 'image/hand_drill/left_body.png';
    }
  });
}
