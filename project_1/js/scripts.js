/**
 * Author: Danielle Leslie
 */


(function (){

//Package Data Array
var data = [
    {
        name: 'wisconsin humane society',
        description: 'The Wisconsin Humane Society (WHS) is a private nonprofit organization whose mission is to make a difference for animals and the people who love them.',
        url: 'https://www.wihumane.org/about-us',
        selector:'p1' 
    },
    {
        name: 'the womens center',
        description: 'Founded in 1977, The Women’s Center serves all        impacted  by domestic abuse, sexual violence, child abuse, and trafficking.',
        url: 'https://twcwaukesha.org/',
        selector:'p2'   
    }
];

// (Atom) Package Constructor function
function Package(data){
    this.name = data.name;
    this.description = data.description;
    this.url = data.url;
    this.selector  = data.selector;
}

/****************************************
 ********* Utility Functions ************
 ****************************************/
// Return today's date, formatted
var getTodaysDate = function(){
    var today = new Date();
    return today.toDateString();
}

// Return DOM element ID
var getEl = function (id) {
    return document.getElementById(id);
}

// Reference to DOM elements
var writePackageInfo = function(package){
    var selector = package.selector,
        nameEl = getEl(selector + '-name'),
        descEl = getEl(selector + '-description'),
        urlEl = getEl(selector + '-url');


// package data DOM elements
        nameEl.textContent = package.name;
        descEl.textContent = package.description;
        urlEl.href = package.url;

}

// Date
    dateEl = getEl('date');
    dateEl.textContent = getTodaysDate();


// For loop
for (var i = 0; i < data.length; i++) {
    var package = new Package(data[i]);
    writePackageInfo(package);
}
}());