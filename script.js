//To print itemJsonArray in webpage under your list
function Update() {
    itemsJsonArray = JSON.parse(localStorage.getItem('itemsJson'))
    let tablebody = document.getElementById("tablebody")
    let str = "";
    itemsJsonArray.forEach((element, index) => {
        str +=
            `<tr>
            <th scope="row">${index + 1}</th>
            <td>${element[0]}</td>
            <td>${element[1]}</td>
            <td>${element[2]}</td>
            <td><button class="btn btn-primary btn-sm" onclick="deleted(${index})">Delete</button></td>
        </tr>`;
    });
    tablebody.innerHTML = str;
}

//To take input and update local storage
function getAndUpdate() {
    tit = document.getElementById('title').value;
    topic = document.getElementById('topic').value;
    desc = document.getElementById('description').value;
    if (localStorage.getItem('itemsJson') == null) {
        itemsJsonArray = [];
        itemsJsonArray.push([tit, topic, desc]);
        localStorage.setItem('itemsJson', JSON.stringify(itemsJsonArray))
    }
    else {
        itemsJsonArray = JSON.parse(localStorage.getItem('itemsJson'))
        itemsJsonArray.push([tit, topic, desc]);
        localStorage.setItem('itemsJson', JSON.stringify(itemsJsonArray))
    }
    Update()
}

//When "Add to list" button is clicked
add = document.getElementById("add");
add.addEventListener("click", getAndUpdate);

//"Update" called whenever page refresh
Update()

//To delete the row at given index
function deleted(itemIndex) {
    itemsJsonArray = JSON.parse(localStorage.getItem('itemsJson'))
    itemsJsonArray.splice(itemIndex, 1)
    localStorage.setItem('itemsJson', JSON.stringify(itemsJsonArray))
    //To print updated itemJsonArray in webpage under your list
    Update()
}

//To clear complete list
//CHK WHY ITS NOT WORKING ,ERROR:itemjsonarray null
// function clearAll()
// {
//     console.log(`${localStorage.getItem("itemJson")}`)
//     // localStorage.clear();
//     console.log(`${localStorage.getItem("itemJson")}`)
//     Update();
// }