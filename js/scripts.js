$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var inputs = ["grocery1", "grocery2", "grocery3", "grocery4"];
    var array = [];
    inputs.forEach(function(input) {
      var list = $("input#" + input).val().toUpperCase();
      array.push(list);
      array.sort();
      });
      array.forEach(function(answer) {
        $("#result").append("<li>" + answer + "</li>")
      });
    console.log(array);
    });
  });
