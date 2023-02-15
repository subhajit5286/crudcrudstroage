var form=document.getElementById('addForm')
var itemList = document.getElementById('items');
var i=0;
// Form submit event
form.addEventListener('submit', saveItem);
// Delete event
//itemList.addEventListener('click', removeItem);
//edit event
//itemList.addEventListener('click', editItem);

function saveItem(e){
    e.preventDefault();
    var str='User '+i++ +'-->';
    console.log(i)
    var newName = document.getElementById('name').value;
    var newEmail = document.getElementById('email').value;
    var li = document.createElement('li');
    // Add class
    li.className = 'list-group-item';
    li.id=i;
    // Add text node with input value
    li.appendChild(document.createTextNode(newName));
    li.appendChild(document.createTextNode('  '));
    li.appendChild(document.createTextNode(newEmail));
    // Create del button element
    var deleteBtn = document.createElement('button');
  
    // Add classes to del button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  
    // Append text node
    deleteBtn.appendChild(document.createTextNode('X'));
  
    // Append button to li
    li.appendChild(deleteBtn);
    var editBtn = document.createElement('button');
    editBtn.className = 'btn btn-warning btn-sm float-right warning';
    editBtn.appendChild(document.createTextNode('Edit'));
    li.appendChild(editBtn);
    // Append li to list
    itemList.appendChild(li);
    
    console.log(newName);
    console.log(newEmail);
    //localStorage.setItem("Name",newName);
    //localStorage.setItem("E-mail",newEmail);
    let form = {};
	form.name = newName;
	form.email = newEmail;
axios.post('https://crudcrud.com/api/0020e60e03ea48d8aa688b62ce3ac17c/addPostrequest/',form)
.then((res)=>{
  console.log(res)
})
.catch((err)=>{
  console.log(err)
})
}
window.addEventListener("DOMContentLoaded",()=>{
  axios.get('https://crudcrud.com/api/0020e60e03ea48d8aa688b62ce3ac17c/addPostrequest/')
  .then((response)=>{
    for(var i=0;i<response.data.length;i++){
      console.log(response.data[i]._id)
      var li = document.createElement('li');
    // Add class
    li.className = 'list-group-item';
    li.id=response.data[i]._id;
    // Add text node with input value
    li.appendChild(document.createTextNode(response.data[i].name));
    li.appendChild(document.createTextNode('  '));
    li.appendChild(document.createTextNode(response.data[i].email));
    // Create del button element
    var deleteBtn = document.createElement('button');
  
    // Add classes to del button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  
    // Append text node
    deleteBtn.appendChild(document.createTextNode('X'));
  
    // Append button to li
    li.appendChild(deleteBtn);
    var editBtn = document.createElement('button');
    editBtn.className = 'btn btn-warning btn-sm float-right warning';
    editBtn.appendChild(document.createTextNode('Edit'));
    li.appendChild(editBtn);
    // Append li to list
    itemList.appendChild(li);
    }
  })
  .catch((err)=>{
    console.log(err)
  })
})
// Remove item
/*function removeItem(e){
    if(e.target.classList.contains('delete')){
      if(confirm('Are You Sure?')){
        var li = e.target.parentElement;
        var idz=li.id;
        console.log(idz)
        itemList.removeChild(li);
        let f1 = window.localStorage.getItem(idz);
        window.localStorage.removeItem(idz)
        //console.log(JSON.parse(f1));
      }
    }
  }
  function editItem(e){
    if(e.target.classList.contains('warning')){
      
        var li = e.target.parentElement;
        var idz=li.id;
        console.log(idz)
        var name1=document.getElementById(idz);
        console.log(name1.firstChild.nextSibling.nextSibling.textContent)
        document.getElementById('name').value=name1.firstChild.textContent;
        document.getElementById('email').value=name1.firstChild.nextSibling.nextSibling.textContent;
        itemList.removeChild(li);
        let f1 = window.localStorage.getItem(idz);
        window.localStorage.removeItem(idz)
        //console.log(JSON.parse(f1));
      
    }
  } */