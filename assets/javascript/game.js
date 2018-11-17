
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
    {
    que: "Which NBA team won the most titles in the 90s?", 
    a1: "New York Knicks",
    a2: "Portland Trailblazers",
    a3: "Chicago Bulls",
    a4: "Los Angeles Lakers"
    },
    {
    que: "Which Group released the hit song, “Smells Like Teem Spirit”?", 
    a1: "No Doubt",
    a2: "The Offspring",
    a3: "Backstreet Boys",
    a4: "Nirvana"
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
        // var newDiv = $("<div class = 'restart'>");
        // newDiv.append(`<button data-value = 'startagain'> Start Game </button>`);
        // $("#display").append(newDiv);
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
        // Show the time in display  tag.
        //  after 30 seconds hits zero...
        if (time === 0) {
            time = 30;
          stop(); //  ...run the stop function.
          queCount++;
          displayQuestion();
          run();
          //  Alert the user that time is up.
          //alert("Time Up!");
        };
        $("#display").text(`Time Remaining : ${time} Seconds`);
        
      };
    function stop() {
        clockRunning = false;
        clearInterval(intervalId);
      };

    //   function Msg1(){
    //     document.getElementById('#ansbutton1').innerHTML = quizQuestions[queCount].a1;
    //   }
    
    
      function displayQuestion(){
        if(queCount <= quizQuestions.length){
          $("#quenumber").empty();
          // $("#display").text(`Time Remaining : ${time} Seconds`)
          // document.querySelector("#quenumber").innerHTML = quizQuestions[queCount].que;
          // document.querySelector("#ansbutton1").innerHTML = quizQuestions[queCount].a1;
          // $("#ansbutton1").attr("data-answer", quizQuestions[i].a1);
          // document.querySelector("#ansbutton2").innerHTML = quizQuestions[queCount].a2;
          // $("#ansbutton2").attr("data-answer", quizQuestions[i].a2);
          // document.querySelector("#ansbutton3").innerHTML = quizQuestions[queCount].a3;
          // $("#ansbutton3").attr("data-answer", quizQuestions[i].a3);
          // document.querySelector("#ansbutton4").innerHTML = quizQuestions[queCount].a4;
          // $("#ansbutton4").attr("data-answer", quizQuestions[i].a4);
          var newDiv = $("<div class = 'question'>");
          newDiv.append(`<p> ${quizQuestions[queCount].que}</p>`);
          newDiv.append(`<button data-value = '${quizQuestions[queCount].a1}'> ${quizQuestions[queCount].a1} </button>`);
          newDiv.append(`<br>`);
          newDiv.append(`<button data-value = '${quizQuestions[queCount].a2}'> ${quizQuestions[queCount].a2} </button>`);
          newDiv.append(`<br>`);
          newDiv.append(`<button data-value = '${quizQuestions[queCount].a3}'> ${quizQuestions[queCount].a3} </button>`);
          newDiv.append(`<br>`);
          newDiv.append(`<button data-value = '${quizQuestions[queCount].a4}'> ${quizQuestions[queCount].a4} </button>`);
          $("#quenumber").append(newDiv);

        }else{
          document.querySelector("#quenumber").innerHTML = "Game Over";
          //document.querySelector("#score").innerHTML = "Final Score " + score + " out of " + questions.length;
        }
      };


$(document).on("click","#startgame",function(){
        $(this).hide();
        $("#display").text(`Time Remaining : ${time} Seconds`).show();
        // $("#ansbutton1").show();
        // $("#ansbutton2").show();
        // $("#ansbutton3").show();
        // $("#ansbutton4").show();
        console.log("clicked");
        run();
        console.log("run");
        //displayQuestion();
        //displayAns();
        console.log("displayQuestion");
        $(".button").on("click", function(){

        });      

});

if(queCount === quizQuestions.length){
  displayQuestion().hide();
  $("#display").empty();
  var newDiv = $("<div class = 'restart'>");
  newDiv.append(`<button data-value = 'startagain'> Start Game </button>`);
  $("#display").append(newDiv);
};

});