

let currentHour = (new Date()).getHours();
const colorcode = document.getElementsByClassName("textarea");
$('textarea').each(function(){
    let val = parseInt($(this).prop('id'));
    if(val < currentHour && val > currentHour-6){
        $(this).css('background-color','Gray');
    }else if(val === currentHour){
        $(this).css('background-color','Red');
    }else{
        $(this).css('background-color','Green');
    }
});

//save task to local storage:
var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  

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