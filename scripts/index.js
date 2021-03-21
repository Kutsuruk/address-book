let phone = document.getElementById('phone')
let name = document.getElementById('name')
let email = document.getElementById('email')
let address = document.getElementById('address')
let addBtn = document.getElementById('add-btn')
let editBtn = document.getElementById('edit-btn')
let deleteBtn = document.getElementById('delete-btn')


addBtn.onclick = addNewRecordToTable

function addNewRecordToTable() {
    let recordData = {
        phone: phone.value,
        name: name.value,
        email: email.value,
        address: address.value,
        deleteBtn: deleteBtn,
        editBtn: editBtn,
    }


    let div = document.createElement('div')
    div.innerHTML = `
        <div id="phone-main">${recordData.phone}</div>
        <div id="name-main">${recordData.name}</div>
        <div id="email-main">${recordData.email}</div>
        <div id="address-main">${recordData.address}</div>
        <div id="operation-main">
            <button id="edit-btn" type="button">Edit</button>
            <span id="separator">|</span>
            <button id="delete-btn" type="button">Delete</button>
        </div>`

    document.getElementById('main').appendChild(div)
    document.getElementById('contact').reset()
}
