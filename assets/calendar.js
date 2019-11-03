
$(document).ready(function() {

//variable declarations for time shifts from 9:00am to 5:00pm;
var toHours = [
    {start:9,
    end:10,
    shift:"09-10"},
            {start:10,
            end:11,
            shift:"10-11"},
    {start:11,
    end:12,
    shift:"11-12"},
            {start:12,
            end:13,
            shift:"12-01"},
    {start:13,
    end:14,
    shift:"01-02"},
            {start:14,
            end:15,
            shift:"02-03"},
    {start:15,
    end:16,
    shift:"03-04"},
            {start:16,
            end:17,
            shift:"04-05"},
]

//declaring other variables
var joker = "";
var poker = "";
var eventText = [];
var timeShift = [];
var currentHour = moment().format("HH");                        //storing current time using moment.js
var toDay = moment().format("dddd, MMMM Do YYYY, hh:mm");       //selecting current day format of moment.js.



//displaing current date in the head section;
$("#currentDay").html('<span>'+ toDay+'</span>');


//calling calendar function.
calendar();



//creating calendar function.
function calendar() {
 
for (var i=0; i<toHours.length; i++) {

    var eventText = [];
    var timeShift = [];
    // var joker = "";
    // var poker = "";
    

    var newRow = $("<div>");
    $(".time-block").append(newRow);
    //newRow.attr("id", "row");
            
            if (toHours[i].start > currentHour || currentHour > 17) {

                //if Today's time is yet to come;
                newRow.attr("class", "future");
            }

            // if current time is matching with the row.
            else if (toHours[i].start == currentHour) {
                newRow.attr("class", "present");
            }
            
            //if the time is passed already.
            else if (toHours[i].start < currentHour) {
                newRow.attr("class", "past");

            }


        var newHour = $("<div>");
        newRow.append(newHour);
        newHour.attr("class", "hour");
        //newHour.attr("id", i);
        newHour.text(toHours[i].shift);
        //var timeShift = $(".hour").text();

                var newTextarea = $("<textarea>");
                newRow.append(newTextarea);
                newTextarea.attr("id", i);
                //var eventText = $("textarea").val();
                
                var newBt = $("<div>");
                newRow.append(newBt);
                newBt.attr("class", "saveBtn");
                newBt.attr("id", i);
                
                var img = $("<img>");
                $(newBt).append(img);

                img.attr("src", "assets/save.jpg");
                img.attr("width", "80%");
                img.attr("height", "80%");
          
        }

        createEvent();
       

    } //calendar function ending here;

                                        
           
    // create event and localstorage function.
            function createEvent (){
                
                $(".saveBtn" ).on("click", function() {    //eventlistener when save button is clicked.              
                   
                   
                   //selecting which saveBtn is clicked.
                    if ($(this).attr("id") == 0) { 
                        k = 0;
                    }
                    else if ($(this).attr("id") == 1) { 
                        k = 1;
                    }
                    else if ($(this).attr("id") == 2) { 
                        k = 2;
                    }
                    else if ($(this).attr("id") == 3) { 
                        k = 3;
                    }
                    else if ($(this).attr("id") == 4) { 
                        k = 4;
                    }
                    else if ($(this).attr("id") == 5) { 
                        k = 5;
                    }
                    else if ($(this).attr("id") == 6) { 
                        k = 6;
                    }
                    else if ($(this).attr("id") == 7) { 
                        k = 7;
                    }
                   

                        
                                if ($("#"+k).val()!== ""){    //if textarea is not empty do this function.
                                
                                    joker = $("#"+k).val();     //getting values of textarea events.
                                    poker = toHours[k].shift;   //getting time interval for selected textarea.
                                    
                                    event = {
                                        "toDo":joker,
                                        "shift":poker,
                                        "Date": moment().format("dddd, MM, YYYY")
                                     };
                                    
                                    
                                    eventStr = {"events":event};
                                    
                                    eventText.push(eventStr);
                                    
                                   
                                    }
                         
                        
                        localStorage.setItem("Event", JSON.stringify(eventText)); 
                    
                }) //eventlistener function closing.
                                
            }
     

}); //document.ready function ending here.

