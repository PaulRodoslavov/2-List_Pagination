/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Add variables that store DOM elements

const people = document.getElementsByClassName('student-item');
const search = document.querySelector('.page-header');
const page = document.querySelector('.page');
const navigation = document.createElement('UL');
let pagination = document.createElement("DIV");
let arrStudents = [...people];
const alert = document.createElement("DIV");
const studentDet = document.querySelectorAll('.student-item');

//variable for alert no match
alert.innerHTML = 'There is no match';
alert.classList.add('alert');

// function to hide all of the items in the list excpet for the ten

function hideList(arr) {
   for(let i = 10; i < arr.length; i++){
      arr[i].classList.add("hide");
   }
}
hideList(people);

// function to hide all of the items

function hideListAll (ell) {
   ell.forEach((item)=>{
      item.classList.add("hide");
   });

}


// function to show only 10 items

function showTenStudents(arr, num1) {

   alert.classList.add('hide');
   hideListAll (arr);

   // arr.forEach((item)=>{
   //    item.classList.add("hide");
   // });

   for(let i = num1 - 10; i < num1; i++){
      console.log(num1);
      if(arr[i]){
         arr[i].classList.remove('hide');
      }
   }
}

// Create and append the pagination links

pagination.classList.add('pagination');
for(let i = 1; i <= Math.ceil(people.length / 10); i++){
   let link = `<li><a href="#">${i}</a></li>`;
   navigation.innerHTML += link;
}
pagination.appendChild(navigation);
page.appendChild(pagination);

// logic to show particular items by clicking link

const navBar = document.querySelector('.pagination');
navBar.firstChild.firstChild.firstChild.classList.add('active');

navBar.addEventListener('click', (event) => {
   if(event.target.tagName === 'A'){
      const active = document.querySelector('.active');
      active.classList.remove("active");
      event.target.classList.add('active');
      showTenStudents(arrStudents, event.target.innerHTML + '0');
   }
});

// create serach field

const serachForm = `<div class="student-search">
                       <input id='input' placeholder="Search for students...">
                       <button id='search'>Search</button>
                    </div>`
search.innerHTML += serachForm;

// create function for search items

const searchId = document.querySelector('#search');


searchId.addEventListener('click',()=>{
   alert.classList.add('hide');
   const input = document.querySelector('#input').value;
   if (input.length > 0) {
      hideListAll(arrStudents);
      let match = 0;
      studentDet.forEach(el =>{
         let h3 = el.querySelector('h3').innerHTML;
         let found = h3.match(input);
         if(found) {
            el.classList.remove('hide');
            match++;
         }
      });
      if (!match) {
         alert.classList.remove('hide');
         search.appendChild(alert);
      }
   }
})
















// console.log(searchId);
