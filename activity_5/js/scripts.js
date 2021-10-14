/**
 * Author: Danielle Leslie
 */

(function (){

//Package Data Array
var data = [
    {
        name: 'git-time-machine',
        description: 'This tool shows you a visual plot of commits in your current file over time. You can click on the timeplot, or hover over it and see all of the commits for a specific time range. You can also view the git-diff between the current version and the previous version, once a selection is made. ',
        author: 'littlebee',
        url: 'https://atom.io/packages/git-time-machine',
        downloads: 429611,
        stars: 1052,
        price: 0.00,
        selector:'p1' 
    },
    {
        name: 'pane-layout-plus',
        description: 'The Pane Layout Plus package allows you to easily organize and control the distribution of multiple panes in Atom. This package has shortcuts to jump between columns, and set column layouts.',
        author: 'chemoish',
        url: 'https://atom.io/packages/pane-layout-plus',
        downloads: 34127,
        stars: 63,
        price: 0.00,
        selector:'p2' 
    }
];

// (Atom) Package Constructor function
function Package(data){
    this.name = data.name;
    this.description = data.description;
    this.author = data.author;
    this.url = data.url;
    this.downloads = data.downloads;
    this.stars = data.stars;
    this.selector = data.selector;

this.getFormattedDownloads = function(){
    return this.downloads.toLocaleString();
};

this.getFormattedStars = function(){
    return this.stars.toLocaleString();
};
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
        authEl = getEl(selector + '-author'),
        downloadEl = getEl(selector + '-downloads'),
        starsEl = getEl(selector + '-stars');

        // package data DOM elements
        nameEl.textContent = package.name;
        descEl.textContent = package.description;
        authEl.textContent = package.author;
        downloadEl.textContent = package.getFormattedDownloads();
        starsEl.textContent = package.getFormattedStars();
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