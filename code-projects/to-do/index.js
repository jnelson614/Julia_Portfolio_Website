$(document).ready(function(){
//On Enter of input > Add LI
  $("#listInput").on("keydown",function search(e) {
      //if enter key is pressed
      if(e.keyCode == 13) {
        //to prevent blank li's added
        if($("input").val().length > 0){
          //build LI with input val & two buttons.
          $('#list').append($('<li>').append('<span class="listItem">'+ $(this).val() + '</span> <span class="hidden btnStyle delete"><a href="#delete">Delete</a></span>'));    // add this after the other span to put edit back in:  <span class="edit hidden btnStyle"><a  href="#edit">Edit</a></span>
          event.preventDefault();
          $("input").val("");
          //add the number of not completed lis to the page.
          $(".num").html($("li").not(".completed").length);
          //always focus on the input when user clicks off
          $("input").focus();
          //prevents no entry of data to remove entire list
        } else {
          event.preventDefault();
          $("input").focus();
        }
      }
  });

  //user clicks Add to list button
  $("#add").on("click", function (){
    //focus the input for the user after hit button
    $("input").focus();
    //if the user enters something
    if($("input").val() != "") {
      //add li to ul with buttons
      $('#list').append($('<li>').append($("input").val() + '<span><a class="delete" href="#delete">Delete</a></span>'));
      //add classes to li to hide buttons
      $("span").addClass("hidden").addClass("btnStyle");        event.preventDefault();
      //clear the input after finishing
      $("input").val("");
      //find the total to do items #
      $(".num").html($("li").not(".completed").length);
    }
  });

  //If user clicks a list item
  $("ul").on("click", "li", function (){
    //style it light gray & cross out
    $(this).css("color", "lightgray").css("text-decoration", "line-through");
    //add class completed
    $(this).addClass("completed");
    //clear the completed items from the total
    $(".num").html($("li").not(".completed").length);
  });

  //clear all items with completed class
  $(".clearCompleted").on("click", function (){
    $(".completed").fadeOut('fast', function() {
       $(this).remove();
     });
  });

  //clear entire list on button click
  $(".clearList").on("click", function (){
    $("li").fadeOut('fast', function() {
       $(this).remove();
     });
    //reset num of to do items
    $(".num").html("0");
  });

  //show the buttons when hovering over an LI
  $('ul').on('mouseover mouseout', "li", function(){
     $(this).find('.hidden').toggle();
     //find its children with class .editInLine and
     //toggle its display using 'toggle()'
   });

   //if delete button is clicked, delete that LI
   $(document).on("click", ".delete", function(){
     $(this).closest("li").fadeOut('fast', function() {
        $(this).remove();
      });
   });

   //if edit button is clicked, Make list item an input
   $(document).on("click", ".edit", function(){
     var $input = $('<input class="editText"></input>').val( $(".listItem").text());
     $(this).parent().find(".listItem").replaceWith( $input );
   });

//WORK IN PROGRESS...
   $(document).on("keydown", ".editText", function search(e) {
       //if enter key is pressed
       if(e.keyCode == 13) {
         $(".editText").replaceWith()
       }
   });



});
