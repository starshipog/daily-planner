// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


$(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?

    var hour9El = document.getElementById("hour-9");
    var hour10El = document.getElementById("hour-10");
    var hour11El = document.getElementById("hour-11");
    var hour12El = document.getElementById("hour-12");
    var hour1El = document.getElementById("hour-1");
    var hour2El = document.getElementById("hour-2");
    var hour3El = document.getElementById("hour-3");
    var hour4El = document.getElementById("hour-4");
    var hour5El = document.getElementById("hour-5");

    var saved9 = localStorage.getItem("hour-9")


    hour9El.addEventListener("click", function(event) {
      event.preventDefault();
      localStorage.setItem("hour-9", saved9);
    })

    // $('.saveBtn').on('click', function (event) {
    //   event.preventDefault();
    //   var value = $(this).siblings('.description').val();
    //   var time = $(this).parent().attr('id');
    //   console.log(time, value);
    //   localStorage.setItem(time, value);
    // })

    //

    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time? (? FIGURE OUT WHY NOT WORKING)
    
    
  

    //pseudo
    // if currentHour > present (past)
    // set time to grey
    // else if currentHour = present
    // set time to red
    // else if currentHour < present (future)
    // set time to green



    var hour9 = hour9El.id.split('-')[1]
    var hour10 = hour10El.id.split('-')[1]
    var hour11 = hour11El.id.split('-')[1]
    var hour12 = hour12El.id.split('-')[1]
    var hour1 = hour1El.id.split('-')[1]
    var hour2 = hour2El.id.split('-')[1]
    var hour3 = hour3El.id.split('-')[1]
    var hour4 = hour4El.id.split('-')[1]
    var hour5 = hour5El.id.split('-')[1]

    var currentHour = dayjs().format('H');


    // for 9am
    if (currentHour == hour9) {
      hour9.style = "background-color: red";
    } else if (currentHour > hour9) {
      hour9El.style = "background-color: gray";
    } else {
      hour9.style = "background-color: green";
    }

    

    if (currentHour == hour10) {
      hour10.style = "background-color: red";
    } else if (currentHour > hour10) {
      hour10El.style = "background-color: gray";
    } else {
      hour10.style = "background-color: green";
    }




    if (currentHour == hour11) {
      hour11.style = "background-color: red";
    } else if (currentHour > hour11) {
      hour11El.style = "background-color: gray";
    } else {
      hour11.style = "background-color: green";
    }




    
    if (currentHour == hour12) {
      hour12.style = "background-color: red";
    } else if (currentHour > hour12) {
      hour12El.style = "background-color: gray";
    } else {
      hour12.style = "background-color: green";
    }




    if (currentHour == hour1) {
      hour1.style = "background-color: red";
    } else if (currentHour > hour1) {
      hour1El.style = "background-color: gray";
    } else {
      hour1.style = "background-color: green";
    }





    if (currentHour == hour2) {
      hour2.style = "background-color: red";
    } else if (currentHour > hour2) {
      hour2El.style = "background-color: gray";
    } else {
      hour2.style = "background-color: green";
    }




    if (currentHour = hour3) {
      hour3.style = "background-color: red";
    } else if (currentHour > hour3) {
      hour3El.style = "background-color: gray";
    } else {
      hour3.style = "background-color: green";
    }



    if (currentHour = hour4) {
      hour4.style = "background-color: red";
    } else if (currentHour > hour4) {
      hour4El.style = "background-color: gray";
    } else {
      hour4.style = "background-color: green";
    }


    if (currentHour = hour5) {
      hour5.style = "background-color: red";
    } else if (currentHour > hour5) {
      hour5El.style = "background-color: gray";
    } else {
      hour5.style = "background-color: green";
    }
    
    
    
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    
    //
    
    // TODO: Add code to display the current date in the header of the page.
    var today = dayjs();
    $('#currentDay').text(today.format('dddd, MMMM D, YYYY h:mm A'));
  });

