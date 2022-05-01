
let newInput = document.getElementById("myInput");
let newW = document.getElementById("great");


function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
  newW.style = "display:block";
}

function filterFunction() {
  var input, filter, ul, li, option, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("option");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}

function saveCity() {
  newInput2 = newInput.value;
  let html = `<div id="ggg" style="display:flex"><option class="Great">${newInput2}</option><button id="btn"onclick="deleteE()">
      <img id="pict" src="images/delete8.svg"></button></div>`;
  newW.insertAdjacentHTML("beforeend", html);
  sortCities();
}


newInput.addEventListener("dblclick", saveCity);
newInput.addEventListener("click", function () {
  newW.style = "display:block";
});
newW.addEventListener("click", function (e) {
  if (e.target.classList.contains("Great")) {
    newW.style = "display:none";
    newInput.value = e.target.value;
  }
});

function deleteE() {
  const element = document.getElementById("ggg");
  element.remove();
}


function sortCities() {
  let cities = [];
  newW.querySelectorAll(".Great").forEach(e => { cities.push(e.textContent) });
  cities.sort((a,b) => {if(a[0].toUpperCase() > b[0].toUpperCase())
     return 1 
     else 
     return -1});
  newW.innerHTML = "";
  cities.forEach(city => {
    const html = `<div id="ggg" style="display:flex"><option class="Great">${city}</option><button id="btn"onclick="deleteE()">
    <img id="pict" src="images/delete8.svg"></button></div> `;
    newW.insertAdjacentHTML("beforeend", html);
  });
}












// let key = "5";
// const obj = {
//   [key]: [{name:"david", age: 5},{name: "shola", age: 305}, {name: "Yuri", age: 56 }]
// };
// console.log(obj[5][0].name + ' ' + obj[5][1].age);

// let fn5 = "text";
// const obj = {
//   [fn5](text) {return text},
// };
// console.log(obj.text("yes"));