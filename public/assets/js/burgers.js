// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

  $(".eat").on("click", function(event) {
    var id = $(this).data("id");
    var state =$(this).data("devoured");
    var data = {
      id :id,
      state: state
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id + "/"+ state, {
      type: "PUT",
      data: data
     
    }).then(
      function() {
        console.log("changed burger "+ id + "to devoured", );
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });


  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger= {
      name: $("#bn").val().trim(),
      data: "0"
    
    };

    
 console.log("got submit" + newBurger);
    // Send the POST request.
    $.ajax("/api/new", {
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

  
});