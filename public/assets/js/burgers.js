// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

  $(".eat").on("click", function(event) {
    var id = $(this).data("id");
 

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT"
     
    }).then(
      function() {
        console.log("changed burger "+ id + "to devoured", );
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });


  $("#new").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger= {
      burger_name: $("#bn").val().trim(),
      devoured:"0"
    
    };

    // Send the POST request.
    $.ajax("/api/newburgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new Burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".delete-cat").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/cats/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted cat", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});