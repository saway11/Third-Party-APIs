// To include today's date

const todayDate = moment().format ('DDDD, MMMM Do YYYY');
$("#currentDay").html(todayDate);

$(document).ready(function (){
    //save btn click listener
    $(".saveBtn").on("click", function (){
        // Get nearby values of the description in Jquery
        const text = $(this).siblings(".description").val();
        const time = $(this).parent().atrr("id");
    })
    localStorage.setItem(time, text);
})

function timeTracker() {
    const timeNow = moment ().hour();

    $(".time-block").each(function (){
        const blockTime = parseInt($(this).attr("id").split("hour")[1]);

        if (blockTime < timeNow) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        } else if (blockTime === timeNow){
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        } else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }






    })
}

