window.onload = function () {
     console.time('ko');
     var t0 = performance.now();
    $.material.init();

//#1 KO Observable array all items   
var data = {items : ko.observableArray([])};

//#2 Plain array
//var data = {items : []};

var noOfItems = 5000;
for (var index = 0; index < noOfItems; index++) {
    data.items.push({ message: 'Magic ' + index });
}

ko.applyBindings(data, document.getElementById('example-1'));

console.timeEnd('ko');
var t1 = performance.now();
var timeTaken = $('#result-text').text("Render: " + noOfItems + " items in " + Math.round(t1-t0) + "ms");
}