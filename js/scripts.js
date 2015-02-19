var Ticket = {
  movie: "Wall-E",
  time: "high Noon",
  age: "Adult",
  cost: function() {
    var total = 12;
    if (this.age === "senior") {
      total = total - 2;
    } else {
      total
    }
    return total;
  }

};


$(document).ready(function() {
  $("form#ticketForm").submit(function(event) {
    event.preventDefault();
  var inputtedMovie = $("select#movie").val();
  var inputtedTime = $("select#times").val();
  var inputtedDiscount = $("select#discount").val();



  inputtedMovie = $("input#movie").val("");
  inputtedTime = $("input#times").val("");
  });
});



// <script>
//   $(function() {
//     $( "#movie" ).selectmenu();
//   });
// </script>
