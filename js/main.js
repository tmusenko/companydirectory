
// Global Variables

let employeeID;

let profile = {
    firstName: "",
    lastName: "",
    jobTitle: "",
    email: "",
    department: "",
    location: ""
}



$(document).ready(function () {
    buildTable();
})


function clearTable() {

    $('#dataBase').html(`
    <tbody>
        <tr id="tableHeader">
        
        
        
            <th scope="col">Name</th>
            <th scope="col" class="hideCell" id="departmentHeader">Department</th>
            <th scope="col" class="hideCell">Email</th>
            <th scope="col" class="hideCell" id="locationHeader">Location</th>
        </tr>
    </tbody>
    `)
}



function appendEntry(db, i, filterBy) {


    $('#dataBase tbody').append(`
        <tr onclick="loadProfile(${JSON.stringify(db[i]).split('"').join("&quot;")})">
           <th class="hideCell" id="id">${db[i].id}</th>
            <td><b>${db[i].lastName}</b>, ${db[i].firstName}</td>
            <td class=${(filterBy == "department") ? "" : "hideCell"}>${db[i].department}</td>
         
            <td class="hideCell" id="hideEm">${db[i].email}</td>
            
            <td class=${(filterBy == "location") ? "" : "hideCell"} id="hideLo">${db[i].location}</td>
            <td>
                                <div class="dropdown show">
                                    <a id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true"
                                        aria-expanded="false"><i class="fas fa-ellipsis-v"></i></a>

                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                        <button class="dropdown-item" data-toggle="modal" data-target="#exampleModal" onclick="edit()">Edit</button>
                                        <button class="dropdown-item" onclick="deleteEmployee()">Delete</button>
                                    </div>

                                </div>
            </td>
        </tr>
    `)

}

function sortList() {
  var list, i, switching, b, shouldSwitch;
  list = document.getElementById("allLocations");
  switching = true;
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    b = list.getElementsByTagName("OPTION");
    // Loop through all list items:
    for (i = 0; i < (b.length - 1); i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Check if the next item should
      switch place with the current item: */
      if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
        /* If next item is alphabetically lower than current item,
        mark as a switch and break the loop: */
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark the switch as done: */
      b[i].parentNode.insertBefore(b[i + 1], b[i]);
      switching = true;
    }
  }
}

function sortListD() {
  var list, i, switching, b, shouldSwitch;
  list = document.getElementById("allDepartments");
  switching = true;
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    b = list.getElementsByTagName("OPTION");
    // Loop through all list items:
    for (i = 1; i < (b.length - 1); i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Check if the next item should
      switch place with the current item: */
      if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
        /* If next item is alphabetically lower than current item,
        mark as a switch and break the loop: */
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark the switch as done: */
      b[i].parentNode.insertBefore(b[i + 1], b[i]);
      switching = true;
    }
  }
}

function sortListR() {
  var list, i, switching, b, shouldSwitch;
  list = document.getElementById("removeLocation");
  switching = true;
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    b = list.getElementsByTagName("OPTION");
    // Loop through all list items:
    for (i = 1; i < (b.length - 1); i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Check if the next item should
      switch place with the current item: */
      if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
        /* If next item is alphabetically lower than current item,
        mark as a switch and break the loop: */
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark the switch as done: */
      b[i].parentNode.insertBefore(b[i + 1], b[i]);
      switching = true;
    }
  }
}

function sortListRD() {
  var list, i, switching, b, shouldSwitch;
  list = document.getElementById("removeDepartment");
  switching = true;
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    b = list.getElementsByTagName("OPTION");
    // Loop through all list items:
    for (i = 1; i < (b.length - 1); i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Check if the next item should
      switch place with the current item: */
      if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
        /* If next item is alphabetically lower than current item,
        mark as a switch and break the loop: */
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark the switch as done: */
      b[i].parentNode.insertBefore(b[i + 1], b[i]);
      switching = true;
    }
  }
}

function sortListN() {
  var list, i, switching, b, shouldSwitch;
  list = document.getElementById("selectE");
  switching = true;
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    b = list.getElementsByTagName("OPTION");
    // Loop through all list items:
    for (i = 1; i < (b.length - 1); i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Check if the next item should
      switch place with the current item: */
      if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
        /* If next item is alphabetically lower than current item,
        mark as a switch and break the loop: */
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark the switch as done: */
      b[i].parentNode.insertBefore(b[i + 1], b[i]);
      switching = true;
    }
  }
}



function buildTable() {

    $.ajax({
        type: 'GET',
        url: 'php/getAll.php',
        dataType: 'json',
        success: function (data) {



            var db = data.data;

            var totalEntries = 0;

            for (let i in db) {
                appendEntry(db, i)
                totalEntries++
            }

            $('#totalEntries').html(totalEntries)

        }
    })
}




function noDepartment(db, i, filterBy, searchText) {



    var filterQuery = $('.filterSelect:eq(1)').val()



    var strLength = searchText.length;

    if (db[i].location.toLowerCase() == filterQuery.toLowerCase() & (db[i].firstName.toLowerCase().slice(0, strLength) == searchText.toLowerCase() || db[i].lastName.toLowerCase().slice(0, strLength) == searchText.toLowerCase())) {
        appendEntry(db, i, filterBy)
        return 1;
    }
    return 0;
}

function department(db, i, filterBy, searchText) {

    var filterQuery = $('.filterSelect:eq(1)').val()

    var strLength = searchText.length;

    if ((db[i].department.toLowerCase()) == filterBy.toLowerCase() & db[i].location.toLowerCase() == filterQuery.toLowerCase() & (db[i].firstName.toLowerCase().slice(0, strLength) == searchText.toLowerCase() || db[i].lastName.toLowerCase().slice(0, strLength) == searchText.toLowerCase())) {
        appendEntry(db, i, filterBy)
        return 1;
    }
    return 0;
}





function noInfo(db, i, filterBy, searchText) {

    var filterQuery = $('.filterSelect:eq(1)').val()

    var strLength = searchText.length;

    if ((db[i].firstName.toLowerCase().slice(0, strLength) == searchText.toLowerCase() || db[i].lastName.toLowerCase().slice(0, strLength) == searchText.toLowerCase())) {
        appendEntry(db, i, filterBy)
        return 1;
    }
    return 0;
}

function someInfo(db, i, filterBy, searchText) {

    var filterQuery = $('.filterSelect:eq(1)').val()

    var strLength = searchText.length;

    if ((db[i].department.toLowerCase()) == filterBy.toLowerCase() & filterQuery == 'default' & (db[i].firstName.toLowerCase().slice(0, strLength) == searchText.toLowerCase() || db[i].lastName.toLowerCase().slice(0, strLength) == searchText.toLowerCase())) {
        appendEntry(db, i, filterBy)
        return 1;

    }
    return 0;

}








function search() {

    clearTable();

    var filterBy = $('.filterSelect:first').val()

    var filterQuery = $('.filterSelect:eq(1)').val()

    var searchText = $('#searchBar').val()


    $.ajax({
        type: 'GET',
        url: 'php/getAll.php',
        dataType: 'json',
        success: function (data) {

            var db = data.data;



            var numberOfEntries = 0;






            for (let i in db) {

                switch (filterQuery) {
                    case "default":

                        switch (filterBy) {
                            case "default":
                                numberOfEntries += noInfo(db, i, filterBy, searchText)

                                break;
                            default:
                                numberOfEntries += someInfo(db, i, filterBy, searchText)

                                break;
                        }
                        break;
                    case filterQuery:
                        switch (filterBy) {
                            case "default":

                                numberOfEntries += noDepartment(db, i, filterBy, searchText)

                                break;
                            default:
                                numberOfEntries += department(db, i, filterBy, searchText)

                                break;
                        }
                        break;
                }



            }



            $('#totalEntries').html(numberOfEntries)




        }
    })

}




function reset() {

    $('.filterSelect:first').val('default')
    $('.filterSelect:eq(1)').val('default')
    $('#searchBar').val("")




    clearTable()
    buildTable()
}


function loadProfile(profile) {

    $('#firstName').text(profile.firstName)
    $('#lastName').text(profile.lastName)
    $('#id').text(profile.id)

    $('#email').text(profile.email)
    $('#department').text(profile.department)
    $('#location').text(profile.location)
    



}


function addEmployee() {

    let departmentName = $('#addEmployeeDepartment').val()



    $.getJSON(`php/getAllDepartments.php`, function (departments) {
        let departmentID = departments.data.filter(dep => dep.name == departmentName)[0].id



        $.ajax({
            data: {
                'firstName': $('#addEmployeeFirstName').val(),
                'lastName': $('#addEmployeeLastName').val(),
                'jobTitle': $('#addEmployeeLocation').val(),
                'email': $('#addEmployeeEmail').val(),
                'departmentID': departmentID
            },
            url: 'php/insertEmployee.php',
            dataType: 'json',
            success: function (data) {





                clearTable()

                $('#addEmployeeFirstName').val("")
                $('#addEmployeeLastName').val("")
                // $('#addEmployeeLocation').find('option:eq(0)').prop('selected', true);

                $('#addEmployeeEmail').val("")
                $('#addEmployeeDepartment').find('option:eq(0)').prop('selected', true);

                $.ajax(buildTable());


            }
        })

    })

}


function deleteEmployee() {

    if (!e) var e = window.event;
    e.cancelBubble = true;
    if (e.stopPropagation) e.stopPropagation();

    employeeID = $(e.target).closest("tr").find("th").text()
    
    console.log(employeeID)



    $.ajax({
        data: { 'id': employeeID },
        url: 'php/deleteEmployeeByID.php',
        dataType: 'json',
        success: function (data) {
            
            console.log(data)


            clearTable()



            $.ajax(buildTable());


        }
    })
}

let departmentDropdown = $('.allDepartments');

departmentDropdown.empty();
departmentDropdown.append('<option selected="true" value="default">Choose the department</option>');
departmentDropdown.prop('selectedIndex', 0);


$.getJSON(`php/getAllDepartments.php`, function (departments) {

    $.each(departments.data, function (key, entry) {

        var depart = entry.name;
        departmentDropdown.append($('<option></option>').attr('value', depart).text(depart));


    })



})


let locationDropdown = $('.allLocations');

locationDropdown.empty();
locationDropdown.append('<option selected="true" value="default">Choose the location</option>');
locationDropdown.prop('selectedIndex', 0);

$.getJSON(`php/getAllLocations.php`, function (locations) {

    $.each(locations.data, function (key, entry) {

        var depart = entry.name;
        locationDropdown.append($('<option></option>').attr('value', depart).text(depart));
    })

})




function edit() {
    
   
    var nameE = $('#firstName').text()
    
    $("#nameE").val(nameE);
    
    var lastE = $('#lastName').text()
    
    $("#lastE").val(lastE);
    
    var emailE = $('#email').text()
    
    $("#emailE").val(emailE);
    
    var idE = $('#id').text()
    
    
    $('#idE').val(idE);
    
   
}




function updateLocation() {
    $.getJSON(`php/getAllDepartments.php`, function (departments) {
        let locationID = departments.data.filter(dep => dep.name == $('#department').val())[0].locationID

        $.getJSON(`php/getAllLocations.php`, function (locations) {
            let location = locations.data.filter(loc => loc.id == locationID)[0].name
            $('#location').text(location)

        })

    })

}




function show_confirmE() {
    $.confirm({
        title: '',
        content: 'Are you sure you wish to update the profile?',
        buttons: {
            YES: function () {
                saveProfile()
            },
            NO: function () {

            }
        }
    });
}

function saveProfile() {


    for (let i = 1; i < 5; i++) {
        let entry = $('#naujas').children().eq(i).children().eq(1).children().eq(0);
        let entryText = entry.val();
        let id = entry.attr('id')
       
       
        if (entryText) {
            profile[id] = entryText;
        }

        entry.replaceWith(`<span class='col-7 col-sm-6' id='${id}'>${profile[id]}</span>`)

    }



    editEmployee()

}



function editEmployee() {

    $.getJSON(`php/getAllDepartments.php`, function (departments) {
        console.log(departments);
        console.log(profile.department);
       
        let departmentID = departments.data.filter(dep => dep.name == $('#selectE').text())[0].id

         
        

        $.ajax({
            data: {
                'id': parseInt($('#id').text()),
                'firstName': $('#nameE').text(),
                'lastName': $('#lastE').text(),
                'jobTitle': profile.location,
                'email': $('#emailE').text(),
                'departmentID': departmentID
            },
            url: 'php/updateEmployee.php',
            dataType: 'json',
            success: function (data) {

              

                clearTable()



                $.ajax(buildTable());
                window.location.reload();
            }
        })

    })
}

function addDepartment() {

    let departmentName = $('#addDepartment').val()
    let locationName = $('#newDepartment').val()

    console.log(departmentName);
    console.log(locationName);

    $.getJSON(`php/getAllLocations.php`, function (locations) {
        let locationID = locations.data.filter(loc => loc.name == locationName)[0].id

        $.ajax({
            data: {
                'name': departmentName,
                'locationID': locationID,
            },
            url: 'php/addDepartment.php',
            dataType: 'json',
            success: function (data) {

                $('#addDepartment').val("")
                $('#newDepartment').find('option:eq(0)').prop('selected', true);
                $('#locationM').modal('hide');
                window.location.reload();

            }
        })
    });

}

function removeDepartment() {

    let departmentName = $('#removeDepartment').val()

    $.getJSON(`php/getAllDepartments.php`, function (departments) {
        let departmentID = departments.data.filter(dep => dep.name == departmentName)[0].id

        $.ajax({
            data: {
                'id': departmentID
            },
            url: 'php/deleteDepartment.php',
            dataType: 'json',
            success: function (data) {

                $('#removeDepartment').find('option:eq(0)').prop('selected', true);
                $('#locationM').modal('hide');
                window.location.reload();
            }
        })

    });

}

function checkPC() {
    
      let departmentName = $('#removeDepartment').val()

    $.getJSON(`php/getAllDepartments.php`, function (departments) {
        let departmentID = departments.data.filter(dep => dep.name == departmentName)[0].id
    
          $.ajax({
            data: {
                'id': departmentID
            },
            url: 'php/check.php',
            dataType: 'json',
            success: function (data) {
                
            var pc = data.data[0].pc;
                
               
            if (pc == 0) {
              show_confirmD();  
            } else {
               swal("Sorry..the department is in use.", {
                       icon: "error",
                    });
            }
            }
        })
        
})

}

function show_confirmD() {
    $.confirm({
        title: '',
        content: 'Are you sure you wish to delete?',
        buttons: {
            YES: function () {
                removeDepartment()
            },
            NO: function () {

            }
        }
    });
}

function addLocation() {

    let locationName = $('#addLocation').val()

    $.ajax({
        data: {
            'name': locationName
        },
        url: 'php/addLocation.php',
        dataType: 'json',
        success: function (data) {

            $('#addLocation').val("");
            $('#locationM').modal('hide');
            window.location.reload();

        }
    })

}


function show_confirm() {
    $.confirm({
        title: '',
        content: 'Are you sure you wish to delete?',
        buttons: {
            YES: function () {
                removeLocation()
            },
            NO: function () {

            }
        }
    });
}

function removeLocation() {

    let locationName = $('#removeLocation').val();
    console.log(locationName)

    $.ajax({
        data: {
            'name': locationName
        },
        url: 'php/deleteLocation.php',
        dataType: 'json',
        success: function (data) {

            $('#removeLocation').find('option:eq(0)').prop('selected', true);
            $('#locationMD').modal('hide');
            window.location.reload();

        }
    })

}

function restartP() {
    window.location.reload();
}




function capitalizeFistLetter(word) {

    return word.charAt(0).toUpperCase() + word.slice(1);
}

function populateSelectOptions(category, selectID) {
    $(`#${selectID}`).empty();



    $.getJSON(`php/getAll${category}s.php`, function (category) {

        $.each(category.data, function (key, entry) {


            $(`#${selectID}`).append($('<option></option>').attr('value', entry.name).text(entry.name));
        })
    });
}
