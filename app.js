var ulElement = document.getElementById('list');

function additems(){
    var input = document.getElementById("todoInput");
    if(input.value){
        var liElement = document.createElement("li");
        var liText = document.createTextNode(input.value);
        liElement.appendChild(liText);
        ulElement.appendChild(liElement);

        var delBtnElement = document.createElement("button");
        var delBtnText = document.createTextNode("Delete");
        delBtnElement.appendChild(delBtnText);
        liElement.appendChild(delBtnElement);
        delBtnElement.setAttribute("onclick","deletesingleItem(this)");

        var editbtnElement = document.createElement("button");
        var editbtnText = document.createTextNode("Edit");
        editbtnElement.appendChild(editbtnText);
        liElement.appendChild(editbtnElement);
        editbtnElement.setAttribute("onclick","editItem(this)");
        console.log(liElement);
        input.value = "";
    }else{
        alert("FIll the Field..");
    };
};

function deleteallitems(){
    ulElement.innerHTML = "";
};

function deletesingleItem(e){
     e.parentNode.remove();
};

function editItem(e){
    var updateVal = prompt("Enter Updated Value...");

    e.parentNode.firstChild.nodeValue = updateVal;
}