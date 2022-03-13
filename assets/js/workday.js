// display the date time, format from moment js library
let currentDay = moment();
$("#currentDay").text(moment().format('dddd MMMM Do YYYY, h:mm a'));


let currentHour = (new Date()).getHours();
const colorcode = document.getElementsByClassName("textarea");
$('textarea').each(function(){


});

//save task to local storage when click on the save button

    // let saveTasks = function() {
    //     localStorage.setItem("tasks", JSON.stringify(tasks));
    //   };


$(".saveBtn").click(function() {    
    let value = $(this).siblings("textarea").val();
    localStorage.setItem('myVal', value);
})

const savedVal = localStorage.getItem('myVal')
$(this).siblings("textarea").val(savedVal);

  

// psuedo code

// display all of the blocks 
// display each bock with a business hour from 8  - 5
// display the current time at the top

// on the time blocks, display gray for time that is passed.
// write a function that compare the block time to the current time
    // then display correct color, gray for past, red for present, green for future

// make the blocks clickable
// function to allow user to enter an event on the block
// save the information to local storage when click on the Save button