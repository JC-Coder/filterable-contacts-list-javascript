// Get the contacts div 
let contactsDiv = document.querySelector('.contacts');
let filterableItems = "";
let input = document.querySelector('.filter-input');

// Add all contacts title and contents in an array 
let items = [
    {
        title: 'A',
        contacts: ['Ade','Ada', 'Amaka']
    },
    {
        title: 'B',
        contacts: ['Bolu', 'Bola', 'Basit']
    },
    {
        title: 'C',
        contacts: ['Camela', 'Castro', 'Candy']
    },
    {
        title: 'D',
        contacts: ['Dayo', 'Dada', 'Damilola']
    }
];


// Get and display content in the array onto the html DOM

function createItems(){

    items.forEach(item => {
        // create a div to hold the title and contents
    let titleDiv = document.createElement('div');

        // add a class to the created div 
        titleDiv.setAttribute('class', 'items-div');

        // create a div to hold the title 
    let title = document.createElement('li');

        // add a class to the created title div 
        title.setAttribute('class', 'list-group-item fw-semibold collection-header');

        // append the title to the titleDiv 
        titleDiv.appendChild(title);

        // set the value of the title div by getting the value from the array
        title.innerHTML = item.title; 
        
        // apend the title to the contacts div container 
        contactsDiv.appendChild(titleDiv);  

        // create another array loop to fetch and display the content for each array title 
        item.contacts.forEach(item => {

            // create an element to hold each content
            let body = document.createElement('a');
            body.setAttribute('class', 'list-group-item text-primary collection-item');
            body.innerText = item; 

            // append each element to the titleDiv
            titleDiv.appendChild(body);

        });


    });

    filterInput();


}

createItems();

/* ----------------
    FILTER THROUGH CONTACTS FUNCTION 
------------------------ */

function filterInput(){
    filterableItems = document.querySelectorAll('.collection-item');
}

// filter items as user types 
input.addEventListener('keyup', () => {
    for (let i = 0; i < filterableItems.length; i++) {
        let filter_item = filterableItems[i].innerText.toLowerCase();

        if(filter_item.indexOf(input.value.toLowerCase()) > -1){
            filterableItems[i].style.display = '';
        }else {
            filterableItems[i].style.display = 'none';
        }
        
    }
});