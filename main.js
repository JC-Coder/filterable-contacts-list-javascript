// Get input element
let filterInput = document.querySelector('.filter-input');

// Add event listener 
filterInput.addEventListener('keyup', filterNames);

function filterNames(){
    // Get value of input 
    let filterValue = filterInput.value.toUpperCase();

    //Get all collection items 
    let items = document.querySelectorAll('.collection-item');

    // loop through collection items 
    for (let i = 0; i < items.length; i++) {
        let item = items[i].innerHTML.toUpperCase();
        // if matches
        if(item.indexOf(filterValue) > -1){
            items[i].style.display = '';
        }else{
            items[i].style.display = 'none';
        }
    }
};