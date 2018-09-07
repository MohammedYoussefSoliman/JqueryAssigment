// Activating the links to pages' sections


$("header a").click(function(){
	var Selected = $(this).attr("href");
	var SectionTop = $(Selected).offset().top;

	$("html").animate({scrollTop: SectionTop},2000); /*msh 3arf leh al transition msh sha3'al ask mentor*/
})

// offset() this function gets the cords of the selected element this cord could be specified be the element position.

// $(selector).animate({params},speed,callback);

//The scrollTop() method sets or returns the vertical scrollbar position for the selected elements.


// aside slidding

// Closing:

$("#closer").click(function(){

	var sidebar = $("aside").css("display","none");
	var opener = $("#opener").css("margin-left","15px");
	$("aside").animate({sidebar},2000);
	$("#opener").animate({opener},2000);
})

// Opening

$("#opener").click(function(){

	var sidebar = $("aside").css("display","block");
	var opener = $("#opener").css("margin-left","275px");
	$("aside").animate({sidebar},2000);
	$("#opener").animate({opener},2000);
})

/* still msh 3arf leh al transition msh sha3'al ask mentor :( */

// Slidding album section
// $(selector).slideDown(speed,callback);

// $("#album p").slideToggle(2000)

    $("#album h3").click(function(){
        
        $(this).next().toggle(500);
        $("#album p").not($(this).next()).slideUp(500);
    });


// counter
function counter (){
var Current = new Date();
var NowYear = Current.getFullYear();

var s = Current.getMilliseconds()/1000;
var m = Current.getMinutes();
var h = Current.getHours();
var d = Current.getDay();
console.log(s+" "+m+" "+h+" "+d) /*da 2zay da*/
var currenTime = Current.getTime();


var event = new Date(2018,10,21);
var T = event-Current;

var Sec = Math.floor(T/1000);
var Minut= Math.floor(Sec/60);
var Hour= Math.floor(Minut/60);
var Day = Math.floor(Hour/24);

Sec%=60; /* 3shan nazhar bs al mtba2y mn al seconds with the relation to Minuts*/
Minut%=60;
Hour%=24;
Day = Day-30;

Sec = (Sec<10) ? "0"+Sec:Sec;
Minut = (Minut<10) ? "0"+Minut:Minut;
Hour = (Hour<10) ? "0"+Hour:Hour;
Day = (Day<10) ? "0"+Day:Day;
// DOM vars
var Seconds = document.getElementById("Seconds");
var Minuts = document.getElementById("Minuts")
var Hours = document.getElementById("Hours")
var Days = document.getElementById("Days")

Seconds.innerHTML = "<h5>"+  Sec + " Seconds"+"</h5>";
Minuts.innerHTML = "<h5>"+  Minut + " Minuts"+"</h5>";
Hours.innerHTML = "<h5>"+  Hour + " Hours"+"</h5>";
Days.innerHTML = "<h5>"+  Day + " Days"+"</h5>";


// Source:https://www.youtube.com/watch?v=NJVJRFF-Y6U
setTimeout(counter, 1000);
} counter ()

// limited text

$(function(){
    
    var maxLen =100;
    
    $("textarea").keyup(function(){ // this de 3ayda 3la al event
        
        var length=$(this).val().length;
        var remainings = maxLen - length;
        
        
        if(remainings<=0)
            {
                 $("#char").text("your available character finished");
                
            }
        else{
        
        $("#char").text(remainings);
        }
        
    });

    
});


/*
var maxLen = 10;
        console.log("Start");
        $('#send-txt').keyup(function(){
            var Length = $("#send-txt").val().length;
            var AmountLeft = maxLen - Length;
            $('#txt-length-left').html(AmountLeft);
            if(Length >= maxLen){
                alert("LONG");
            }



        });
        */