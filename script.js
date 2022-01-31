let selectedRow = null;
function onFormSubmit() {
  var formData = readFormData();
  if (selectedRow == null) {
    insertNewRecord(formData);
  } else {
    updateFormData(formData);
  }
  resetForm();
  uncheckAll();
}
 
function foodchoices(){
  let res = []
  var inputs = document.querySelectorAll(".check");
    for (var i = 0; i < inputs.length; i++) { 
      if(inputs[i].checked) {
        res.push(inputs[i].id)
      }
    } 
    return res.join(',')  
};
function readFormData() {
  const formData = {};
  formData["firstname"] = document.getElementById("firstname").value;
  formData["lastname"] = document.getElementById("lastname").value;
  formData["gender"] = document.getElementById("gender").value;
  console.log(foodchoices())
  formData["foodchoices"]= foodchoices();
  formData["address"] = document.getElementById("address").value;
  formData["pincode"] = document.getElementById("pincode").value;
  formData["state"] = document.getElementById("state").value;
  formData["country"] = document.getElementById("country").value;
  return formData;
  console.log(formData);
}
function insertNewRecord(data) {
  let table = document.getElementById("table").getElementsByTagName("tbody")[0];
 
  //insert row
  var newRow = table.insertRow(table.length);
  let cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.firstname;
  let cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.lastname;
  let cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.gender;
  let cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.foodchoices;
  let cell5 = newRow.insertCell(4);
  cell5.innerHTML = data.address;
  let cell6 = newRow.insertCell(5);
  cell6.innerHTML = data.pincode;
  let cell7 = newRow.insertCell(6);
  cell7.innerHTML = data.state;
  let cell8 = newRow.insertCell(7);
  cell8.innerHTML = data.country;
  let cell9 = newRow.insertCell(8);
  cell9.innerHTML = `
    <button class="btn btn-primary" onClick="event.preventDefault(); onEdit(this)">Edit</button>
    <button class="btn btn-primary" onClick="event.preventDefault(); onDelete(this)">Delete</button>
  
    `;
}
function resetForm() {
  document.getElementById("firstname").value = "";
  document.getElementById("lastname").value = "";
  document.getElementById("gender").value = "";
  document.getElementById('Biryani').checked = false;
  document.getElementById('pizza').checked = false;
  document.getElementById('burger').checked = false;
  document.getElementById('cake').checked = false;
  document.getElementById('pulav').checked = false;
  document.getElementById("address").value = "";
  document.getElementById("pincode").value = "";
  document.getElementById("state").value = "";
  document.getElementById("country").value = "";
  selectedRow = null;
}
function uncheckAll() {
  
  var inputs = document.querySelectorAll('.check');
  for (var i = 0; i < inputs.length; i++) {
     if(inputs[i].checked) {
      inputs[i].checked= false;
     };
  }
// window.onload = function() {
//   window.addEventListener('load', uncheckAll, false);
}
//on clicking edit bring the data into form
  function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("firstname").value = selectedRow.cells[0].innerHTML;
    console.log(document.getElementById('firstname'))
    document.getElementById("lastname").value = selectedRow.cells[1].innerHTML;
    document.getElementById("gender").value = selectedRow.cells[2].innerHTML;
    let checkboxValues = selectedRow.cells[3].innerHTML.split(',')
    var inputs = document.querySelectorAll('.check');
    console.log('checkboxValues', checkboxValues)   
    for (var i = 0; i < inputs.length; i++) { 
      console.log(inputs[i])  
      if(checkboxValues.includes(inputs[i].id)) {
        inputs[i].checked = true
      }
    }   
    document.getElementById("address").value = selectedRow.cells[4].innerHTML;
    document.getElementById("pincode").value = selectedRow.cells[5].innerHTML;
    document.getElementById("state").value = selectedRow.cells[6].innerHTML;
    document.getElementById("country").value = selectedRow.cells[7].innerHTML;
  }
 
function updateFormData(formData) {
  selectedRow.cells[0].innerHTML = formData.firstname;
  selectedRow.cells[1].innerHTML = formData.lastname;
  selectedRow.cells[2].innerHTML = formData.gender;
  selectedRow.cells[3].innerHTML = formData.foodchoices;
  selectedRow.cells[4].innerHTML = formData.address;
  selectedRow.cells[5].innerHTML = formData.pincode;
  selectedRow.cells[6].innerHTML = formData.state;
  selectedRow.cells[7].innerHTML = formData.country;
}
function onDelete(td) {
  if (confirm("Are you sure you want to delete?")) {
    row = td.parentElement.parentElement;
    document.getElementById("table").deleteRow(row.rowIndex);
    resetForm();
  }
}