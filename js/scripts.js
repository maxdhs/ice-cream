$(document).ready(function() {
  $('button').click(function(event) {
    event.preventDefault();

    var flavors = ["Vanilla", "Chocolate", "Strawberry", "Coffee", "Mint", "Green Tea"];
    flavors.forEach(function(flavor){

      $("#myList").append("<li>" + flavor + "</li>");
    })



  });
});
