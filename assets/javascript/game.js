
$(document).ready(function(){

    var quizQuestions = [
        { que: "What was the first full length CGI movie?", 
        a1: "The Toy Story",
        a2: "Monsters Inc",
        a3: "A Bug’s Life",
        a4: "Lion King"
    },
    { que: "Which of these is not a name of one of the spice girls?", 
        a1: "Sporty Spice",
        a2: "Fred Spice",
        a3: "Scary spice",
        a4: "Posh Spice"
    },
    { que: "Which NBA team won the most titles in the 90s?", 
    a1: "New York Knicks",
    a2: "Portland Trailblazers",
    a3: "Chicago Bulls",
    a4: "Los Angeles Lakers"
    },
    { que: "Which Group released the hit song, “Smells Like Teem Spirit”?", 
    a1: "No Doubt",
    a2: "The Offspring",
    a3: "Backstreet Boys",
    a4: "Nirvana"
    },
    { que: "Which popular Disney movie featured the song, “Circle of Life”?",
    a1: "Aladdin",
    a2: "Hercules",
    a3: "Mulan",
    a4: "The Lion King"
    },
    { que: "What does Doug’s best friend’s name?",
    a1: "Skeeter",
    a2: "Mark",
    a3: "Zach",
    a4: "Cody"
  }];

    var image = ["assets/images/loading.gif"];
    var rightAns = 0;
    var wrongAns = 0;
    var notAns = 0;
    var queCount = 0;
    var time = 30;
    var clockRunning = false;
    var intervalId;
    $("#display").text(`Time Remaining : ${time} Seconds`).hide();
    function resetGame(){
        $("#display").empty();
        var rightAns = 0;
        var wrongAns = 0;
        var notAns = 0;
        var queCount = 0;
        var time = 30;
        stop();
        run();
      };
    function run() {
        if(!clockRunning){
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
        displayQuestion();
        clockRunning = true;
        }
      };
    function decrement() {
        $("#display").empty();
        time--;
        if (time === 0) {
            time = 30;
          stop(); //  ...run the stop function.
          queCount++;
          displayQuestion();
          //run();
        };
        $("#display").text(`Time Remaining : ${time} Seconds`);
      };
    function stop() {
        clockRunning = false;
        clearInterval(intervalId);
      };
    
      function displayQuestion(){
        if(queCount < quizQuestions.length){
          $("#quenumber").empty();
          // $("#display").text(`Time Remaining : ${time} Seconds`)
          // document.querySelector("#quenumber").innerHTML = quizQuestions[queCount].que;
          // document.querySelector("#ansbutton1").innerHTML = quizQuestions[queCount].a1;
          var newDiv = $("<div class = 'question'>");
          newDiv.append(`<p> ${quizQuestions[queCount].que}</p>`);
          newDiv.append(`<button class = 'button' data-value = '${quizQuestions[queCount].a1}'> ${quizQuestions[queCount].a1} </button>`);
          newDiv.append(`<br>`);
          newDiv.append(`<button class = 'button' data-value = '${quizQuestions[queCount].a2}'> ${quizQuestions[queCount].a2} </button>`);
          newDiv.append(`<br>`);
          newDiv.append(`<button class = 'button' data-value = '${quizQuestions[queCount].a3}'> ${quizQuestions[queCount].a3} </button>`);
          newDiv.append(`<br>`);
          newDiv.append(`<button class = 'button' data-value = '${quizQuestions[queCount].a4}'> ${quizQuestions[queCount].a4} </button>`);
          $("#quenumber").append(newDiv);
        }
        else{
          $("#display").text(`Time Remaining : ${time} Seconds`).hide();
          stop();
          $("#display").empty();
          $("#quenumber").empty();
          $("#imgholder").empty();
          var newDiv1 = $("<div class = 'restart'>");
          newDiv1.append("<button id = 'startagain'> Start Game </button>");
          newDiv1.append("<br>");
          newDiv1.append(`<p>Right Answer : ${rightAns} </p>`);
          newDiv1.append(`<p>Wrong Answer : ${wrongAns} </p>`);
          $("#quenumber").append(newDiv1);
          console.log("question finish and div empty");
         }
      };

      function displayGif() {
        $("#imgholder").html("<img src='loading.gif' width='400px'>");
      }

$(document).on("click","#startgame",function(){
        $(this).hide();
        $("#display").text(`Time Remaining : ${time} Seconds`).show();
        run();
          $(document).on("click",".button", function(event){
            event.preventDefault();
            //$(this).attr("#data-id")
            var buttonVal = $(this).attr("data-value");
            //console.log($(this).attr("data-value"));
            console.log(buttonVal);
            if((buttonVal === "The Toy Story")||(buttonVal === "Fred Spice")||(buttonVal === "Chicago Bulls")
            ||(buttonVal === "Nirvana")||(buttonVal === "The Lion King")||(buttonVal === "Skeeter")){
              $("#quenumber").empty();
              $("#quenumber").text("Correct!!!");
              $("#imgholder").append("<img src='loading.gif' width='400px'>");
              rightAns++;
              time = 30;
              stop();
              setTimeout(run, 2000);
              $("#imgholder").empty();
              queCount++;
            }else{
              $("#quenumber").empty();
              $("#quenumber").text("Wrong!!!");
              $("#imgholder").append("<img src='loading.gif' width='400px'>");
              wrongAns++;
              time = 30;
              stop();
              setTimeout(run, 2000);
              $("#imgholder").empty();
              queCount++;
            };
          
        });      

});

$(document).on("click","#startagain", function(event){
  event.preventDefault();
  $(".restart").empty();
  $("#quenumber").empty();
  $("#imgholder").empty();
  $(this).empty(); 
  $(this).hide();
  time = 30;
  stop();       
  resetGame();
  run();
});
// if(queCount === quizQuestions.length){
//   //displayQuestion().hide();
//   $("#display").text(`Time Remaining : ${time} Seconds`).hide();
//   stop();
//   $("#display").empty();
//   $("#quenumber").empty();
//   $("#imgholder").empty();
//   var newDiv1 = $("<div class = 'restart'>");
//   newDiv1.append(`<button data-value = 'startagain'> Start Game </button>`);
//   $("#quenumber").append(newDiv1);
//   console.log("question finish and div empty");
// }; 

});