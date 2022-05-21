const today = moment()
$("#currentDay").text(today.format('dddd MMM Do YYYY, h:mm:ss a'));



function hourUpdater() {
    var currentHour = moment().hours();

    $(".time-block").each(function() {
       let blockTime = parseInt($(this).attr("id").split("hour")[1]); 

       if (blockTime < currentHour) {
           $(this).removeClass("future");
           $(this).removeClass("present");
           $(this).addClass("past");
       }    
       else if (blockTime === currentHour) {
           $(this).removeClass("past");
           $(this).removeClass("future");
           $(this).addClass("present");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
        console.log(blockTime);
    });
}

$(".saveBtn").on("click", function() {
    let text = $(this).siblings(".text").val();
    let time = $(this).parent().attr("id");
    localStorage.setItem(time, text)
})

$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));