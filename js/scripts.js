$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var inputs = ["grocery1", "grocery2", "grocery3", "grocery4"];
    var array = [];
    var array2 = [];
    inputs.map(function(input) {
      var list = $("input#" + input).val().toUpperCase();
      array.push(list);
      array = array.sort(); //not 100% sure if this is correct
      // return array.toUpperCase();
      });


      // var array2 = array.map(function(caps) {
      //   caps.toUpperCase();
      //   // return caps;
      // });


      // var array3 = array2.sort();
    console.log(array2);
    });
  });






// $("h1").click(function() {
//
//   var input = $("input#grocery").val();
//   list.push(input);
//   console.log(list);
