let lists = document.getElementsByClassName("list");
let rightbox = document.getElementById("right");
let leftbox = document.getElementById("left");
let resetButton = document.querySelector("button");

// Store the initial state of the left container
const initialLeftContent = leftbox.innerHTML;

// Add event listeners to the draggable items
function attachDragListeners() {
  for (let list of lists) {
    list.addEventListener("dragstart", function (e) {
      let selected = e.target;

      rightbox.addEventListener("dragover", function (e) {
        e.preventDefault();
      });

      rightbox.addEventListener("drop", function (e) {
        rightbox.appendChild(selected);
        selected = null;
      });
    });
  }
}

// Reset the state to the initial configuration
function resetState() {
  // Clear the right container
  rightbox.innerHTML = '';

  // Restore the initial content of the left container
  leftbox.innerHTML = initialLeftContent;

  // Reattach event listeners
  attachDragListeners();
}

// Add event listener to the reset button
resetButton.addEventListener("click", resetState);

// Attach initial event listeners
attachDragListeners();
