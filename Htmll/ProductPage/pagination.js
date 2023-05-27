var currentPage = 1;
var itemsPerPage = 3;
var items = document.getElementsByClassName('card');
var prevBtn = document.getElementById('prevBtn');
var nextBtn = document.getElementById('nextBtn');

function displayItems(){
    var startIndex = (currentPage - 1) * itemsPerPage;
    var endIndex = startIndex + itemsPerPage;
}

//hide 
for (var count = 0;count < items.length; count++){
    items[count].style.display = 'none';
}

//display items
for (var count = startIndex; count < endIndex; count++){
    if (items[count]){
        items[count].style.display = 'block';
    }
}
function goToPrevPage(){
    if (currentPage > 1){
        currentPage--;
        displayItems();
    }
}

// Go to next page
function goToNextPage() {
    if (currentPage < Math.ceil(items.length / itemsPerPage)) {
      currentPage++;
      displayItems();
    }
}
// Add event listeners to pagination buttons
prevButton.addEventListener('click', goToPrevPage);
nextButton.addEventListener('click', goToNextPage);

// Initial function call
displayItems();

