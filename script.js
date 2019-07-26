  // When click on the submit button call the function
  document.getElementById("submit").onclick = function(event) {
    event.preventDefault();
    makeGrid()
};

function makeGrid() {

    // Store the height
    const height = document.getElementById('inputHeight').value;
    // Store the width
    const width = document.getElementById('inputWidth').value;
    // Store the color 
    const color = document.getElementById('colorPicker').value;
    // Store the canvas
    const canvas = document.getElementById('pixelCanvas');
    // clear the canvas
    canvas.innerHTML = '';

    // Draw the grid and add listener
    for (let i = 0; i < height; i++) {
        let row = canvas.insertRow(i);
        for (let j = 0; j < width; j++) {
            let cell = row.insertCell(j);
            cell.addEventListener('click', function() {
                cell.style.backgroundColor = color;
            });
        }
    }
};