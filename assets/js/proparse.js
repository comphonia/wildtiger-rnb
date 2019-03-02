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
$.ajax({
    url: "https://comphonia.com/playground/wildtiger-rnb/admin/getData.php",
    type: 'GET',
    crossDomain: true,
    success: function (data) {
        menuData = JSON.parse(data);
        console.log(menuData);
        createItems(menuData);
    },
    cache: false
});

//Sort data and add to DOM
function createItems(data) {
    var starter = "",
        soup = "",
        salad = "",
        stir_fried = "",
        noodles = "",
        noodle_soup = "",
        curries = "",
        fried_rice = "";
    for (var i in data) {
        let foodtype = data[i].type;
        if (data[i].category === "appetizers") {
            switch (foodtype) {
                case "starter":
                    starter += DOMObj(data[i]);
                    break;
                case "soup":
                    soup += DOMObj(data[i]);
                    break;
                default:
                    break;
            }
        } else if (data[i].category === "entrees") {
            switch (foodtype) {
                case "stir-fried":
                    stir_fried += DOMObj(data[i]);
                    break;
                case "salad":
                    salad += DOMObj(data[i]);
                    break;
                case "noodles":
                    noodles += DOMObj(data[i]);
                    break;
                case "noodle-soup":
                    noodle_soup += DOMObj(data[i]);
                    break;
                case "curries":
                    curries += DOMObj(data[i]);
                    break;
                case "fried-rice":
                    fried_rice += DOMObj(data[i]);
                    break;
                default:
                    break;
            }
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

    $('#starter').append(starter);
    $('#soup').append(soup);
    $('#salad').append(salad);
    $('#stir-fried').append(stir_fried);
    $('#noodles').append(noodles);
    $('#noodle-soup').append(noodle_soup);
    $('#curries').append(curries);
    $('#fried-rice').append(fried_rice);

    $('#entrees').append(entrees);
    $('#sides').append(sides);
    $('#specials').append(specials);
    $('#drinks').append(drinks);
    $('#desserts').append(desserts);

    bindModal();
}

function DOMObj(data) {
    return (`<div class="col-md-6 wow slideInUp ">
                <div class="row">
                    <div class="col-11 menu-item p-0" id="item-${data.id}">
                        <span class="float-right  money mb-2" style="background: white">$${data.price}</span>
                        <h4 class="item">${parseMenuString(data.name,"name")}</h4>
                        <p class="itemp">${parseMenuString(data.description,"desc")}</p>
                        <div class="d-none item-id">${data.id}</div>
                    </div>
                </div>
            </div>`);
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
    //  console.log(el.id);
    let elId = el.id;
    let id = parseInt($('#' + elId + '>.item-id').html());
    //console.log(id)
    let data = menuData[id - 1];
    $('#modal-choice').html();
    $('#m-name').html(data["name"]);
    $('#m-price').html(data["price"]);
    $('#m-desc').html(data["description"])
    $('#m-img').attr("src", "admin/uploads/" + data["image"] + ".jpg");

}


//Modal
var body = document.querySelector("body");
var modal = document.querySelector("#modal");
var modalOverlay = document.querySelector("#modal-overlay");
var closeButton = document.querySelector("#close-button");


// toggleModal();

function toggleModal() {
    modal.classList.toggle("closed");
    modalOverlay.classList.toggle("closed");
    //   body.classList.toggle("modal-open");
}

closeButton.addEventListener("click", () => toggleModal());

modalOverlay.addEventListener("click", () => toggleModal());

function bindModal() {
    var menuItems = document.querySelectorAll(".menu-item");
    for (let i = 0; i < menuItems.length; i++) {
        menuItems[i].addEventListener("click", function () {
            setModal(this);
            toggleModal();
        });
    }
}
