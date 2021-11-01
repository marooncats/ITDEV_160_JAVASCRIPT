/**
 * Author: Danielle Leslie
 */

(function (){

//Package Data Array
var data = [
    {
        name: 'wisconsin humane society',
        description: 'Dogs',
        url: 'https://www.wihumane.org/about-us',
        //l1:'1',
        //l2:'2',
        //l3:'3',
        //l4:'4',
        //l5:'5',
        selector:'p1' 
    },
    {
            name: 'git-time-machine',
        description: 'This tool shows you a visual plot of commits in your current file over time. You can click on the timeplot, or hover over it and see all of the commits for a specific time range. You can also view the git-diff between the current version and the previous version, once a selection is made. ',
        url: 'https://www.wihumane.org/about-us',
        //l1:'1',
        //l2:'2',
        //l3:'3',
        //l4:'4',
        //l5:'5',
        selector:'p2'   
    }
];

// (Atom) Package Constructor function
function Package(data){
    this.name = data.name;
    this.description = data.description;
    this.url = data.url;
    //this.l1 = data.l1;
    //this.l2 = data.l2;
    //this.l3 = data.l3;
    //this.l4 = data.l4;
    //this.l5 = data.l5;
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
        //l1El = getEl(selector + '-l1'),
        //l2El = getEl(selector + '-l2'),
        //l3El = getEl(selector + '-l3'),
        //l4El = getEl(selector + '-l4'),
        //l5El = getEl(selector + '-l5');

// package data DOM elements
        nameEl.textContent = package.name;
        descEl.textContent = package.description;
        urlEl.href = package.url;
        //l1El.textContent = package.l1;
        //l2El.textContent = package.l2;
        //l3El.textContent = package.l3;
        //l4El.textContent = package.l4;
        //l5El.textContent = package.l5;
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