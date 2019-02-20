// PROPARSER - Data parser and prop binder.

'use strict'

//Init Variables;
var menuData = [];

var appetizers = "";
var entrees = "";
var sides = "";
var specials = "";
var drinks = "";
var desserts = "";


//Grab Data Stuff
$.get("http://localhost/wildtiger-rnb/admin/getData.php", function (data) {
    menuData = JSON.parse(data);
    console.log(menuData);
    createItems(menuData);
}).fail(function () {
    //alert('could not get data')
});

//Sort data and add to DOM
function createItems(data) {
    for (var i in data) {
     

        if (data[i].category === "appetizers") {
            appetizers += DOMObj(data[i]);
        } else if (data[i].category === "entrees") {
            entrees += DOMObj(data[i]);
        } else if (data[i].category === "sides") {
            sides += DOMObj(data[i]);
        } else if (data[i].category === "specials") {
            specials += DOMObj(data[i]);
        } else if (data[i].category === "drinks") {
            drinks += DOMObj(data[i]);
        } else if (data[i].category === "desserts") {
            desserts += DOMObj(data[i]);
        }

    }

    $('#appetizers').append(appetizers);
    $('#entrees').append(entrees);
    $('#sides').append(sides);
    $('#specials').append(specials);
    $('#drinks').append(drinks);
    $('#desserts').append(desserts);
}

function DOMObj(data) {
    return `<div class="col-md-6">
                <div class="row">
                    <div class="col-10 menu-item p-0" id="item-${data.id}">
                        <span class="float-right  money p-0" style="background: white">$${data.price}</span>
                        <h4 class="item">${parseMenuString(data.name,"name")}</h4>
                        <p class="itemp">${parseMenuString(data.description,"desc")}</p>
                        <div class="d-none item-id">${data.id}</div>
                    </div>
                </div>
            </div>`;
}

//truncate strings
function parseMenuString(str, type) {
    let length = str.length;
    if (type === "name")
        length = 18;
    else if (type === "desc")
        length = 65;
    let trimmedStr = str.substring(0, length);
    if (trimmedStr.length < str.length)
        return trimmedStr + "...";
    return trimmedStr;

}

//dynamically update modal 
function setModal(el) {
    console.log(el.id);
    let elId = el.id;
    let id = parseInt($('#' + elId + '>.item-id').html());
    console.log(id)
    let data = menuData[id - 1];
    $('#modal-choice').html();
    $('#m-name').html(data["name"]);
    $('#m-price').html(data["price"]);
    $('#m-desc').html(data["description"])
    $('#m-img').attr("src", "admin/uploads/" + data["image"]);

}
