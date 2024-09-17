let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

addToDoButton.addEventListener('click', function(){
    var paragragh = document.createElement('P')
    paragragh.classList.add('paragragh-styling')
    paragragh.innerText= inputField.value
    toDoContainer.appendChild(paragragh);
    inputField.value = "";
    paragragh.addEventListener('click', function(){
        paragragh.style.textDecoration = "line-through";
    })

    paragragh.addEventListener('dblclick', function(){
        paragragh.removeChild(paragragh);
    })

})