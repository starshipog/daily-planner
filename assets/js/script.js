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

    var hour9 = document.getElementById("hour-9");
    var hour10 = document.getElementById("hour-10");
    var hour11 = document.getElementById("hour-11");
    var hour12 = document.getElementById("hour-12");
    var hour1 = document.getElementById("hour-1");
    var hour2 = document.getElementById("hour-2");
    var hour3 = document.getElementById("hour-3");
    var hour4 = document.getElementById("hour-4");
    var hour5 = document.getElementById("hour-5");


    hour9.addEventListener("click", function(event) {
      event.preventDefault();
      localStorage.setItem()
    })

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

    var currentHour = dayjs();

    // for 9am
    if (currentHour = hour9) {
      hour9.style.color = "red";
    } else if (currentHour > hour9) {
      hour9.style.color = "grey";
    } else {
      hour9.style.color = "green";
    }

    

    if (currentHour = hour10) {
      hour10.style.color = "red";
    } else if (currentHour > hour10) {
      hour10.style.color = "grey";
    } else {
      hour10.style.color = "green";
    }




    if (currentHour = hour11) {
      hour11.style.color = "red";
    } else if (currentHour > hour11) {
      hour11.style.color = "grey";
    } else {
      hour11.style.color = "green";
    }




    
    if (currentHour = hour12) {
      hour12.style.color = "red";
    } else if (currentHour > hour12) {
      hour12.style.color = "grey";
    } else {
      hour12.style.color = "green";
    }




    if (currentHour = hour1) {
      hour1.style.color = "red";
    } else if (currentHour > hour1) {
      hour1.style.color = "grey";
    } else {
      hour1.style.color = "green";
    }





    if (currentHour = hour2) {
      hour2.style.color = "red";
    } else if (currentHour > hour2) {
      hour2.style.color = "grey";
    } else {
      hour2.style.color = "green";
    }




    if (currentHour = hour3) {
      hour3.style.color = "red";
    } else if (currentHour > hour3) {
      hour3.style.color = "grey";
    } else {
      hour3.style.color = "green";
    }



    if (currentHour = hour4) {
      hour4.style.color = "red";
    } else if (currentHour > hour4) {
      hour4.style.color = "grey";
    } else {
      hour4.style.color = "green";
    }


    if (currentHour = hour5) {
      hour5.style.color = "red";
    } else if (currentHour > hour5) {
      hour5.style.color = "grey";
    } else {
      hour5.style.color = "green";
    }
    
    
    
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    
    //
    
    // TODO: Add code to display the current date in the header of the page.
    var today = dayjs();
    $('#currentDay').text(today.format('dddd, MMMM D, YYYY h:mm A'));
  });

