var form = document.getElementById('addForm');   // to take the items entered by the user
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

//form submit event
form.addEventListener('submit', addTask);  //once the user clicks submit function addTask is called

// Add task
function addTask(e) {
    e.preventDefault();   //in order to prevent the normal default submission


    //get input from user
    var newTask = document.getElementById('item').value;

    //create new li element 
    var li = document.createElement('li');
    li.className = 'item';
    // creating checkbox element
    var checkbox = document.createElement('input');
    // Assigning the attributes
    // to created checkbox
    checkbox.type = "checkbox";
    checkbox.name = "List";
    checkbox.id = "list4";
    // console.log(checkbox.id);
    // creating label for checkbox
    var label = document.createElement('label');

    // assigning attributes for
    // the created label tag
    label.htmlFor = "list4";
    label.className = 'strikeThrough';
    label.appendChild(document.createTextNode(newTask));
    li.appendChild(checkbox);
    li.appendChild(label);
    //create delete button
    var button = document.createElement('button');
    //add class to delete btn
    button.className = 'btn-del border-radius';
    // add text node to button
    button.appendChild(document.createTextNode('Delete'));
    //append button to li
    li.appendChild(button);
    //append li to list
    itemList.appendChild(li);

}
//delete task
itemList.addEventListener('click', removeTask);    //delete event
function removeTask(e) {
    if (e.target.classList.contains('btn-del')) {
        if (confirm('Do you want to delete the task?')) {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}
// search
//filter event
filter.addEventListener('keyup', filterItems);
function filterItems(e) {
    var text = e.target.value.toLowerCase();
    console.log(text);
    // get li tasks
    var tasks = itemList.getElementsByTagName('li');
    console.log(tasks);
    // // convert to an array
    Array.from(tasks).forEach(function (task) {
        var itemName = task.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) > -1) {
            task.style.display = 'flex';
        } else {
            task.style.display = 'none';
        }
    });
}
