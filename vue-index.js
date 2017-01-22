
var example1;

window.onload = function () {
  
console.time('vue');
var t0 = performance.now();
$.material.init();

  example1 = new Vue({
  el: '#example-1',
  data: {
    items: [
    ]
  }
});

var noOfItems = 5000;
for (var index = 0; index < noOfItems; index++) {
 example1.items.push({ message: 'Magic ' + index });
}

console.timeEnd('vue');
var t1 = performance.now();
var timeTaken = $('#result-text').text("Render: " + noOfItems + " items in " + Math.round(t1-t0) + "ms");
}