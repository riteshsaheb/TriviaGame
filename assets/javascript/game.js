
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
    function resetGame(){
        var rightAns = 0;
        var wrongAns = 0;
        var notAns = 0;
        var queCount = 0;
        var time = 31;
    };
    function run() {
        if(!clockRunning){
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
        // document.querySelector
        // que.attr("id = '#quenum'");
        clockRunning = true;
        }
      };
    function decrement() {
        $("#display").text(time);
        time--;
        // Show the time in display  tag.
        //var converted = timeConverter(time);
        //console.log(converted);
        //  Once number hits zero...
        if (time === 0) {
            time = 30;
          //  ...run the stop function.
          stop();
          queCount++;
          displayQuestion();
          run();
          //  Alert the user that time is up.
          //alert("Time Up!");
        }
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
          document.querySelector("#quenumber").innerHTML = quizQuestions[queCount].que;
          document.querySelector("#ansbutton1").innerHTML = quizQuestions[queCount].a1;
          //$("#ansbutton1").attr("data-buttonvalue", quizQuestions[i].a1);
          document.querySelector("#ansbutton2").innerHTML = quizQuestions[queCount].a2;
          document.querySelector("#ansbutton3").innerHTML = quizQuestions[queCount].a3;
          document.querySelector("#ansbutton4").innerHTML = quizQuestions[queCount].a4;
          
        }else{
          document.querySelector("#quenumber").innerHTML = "Game Over";
          //document.querySelector("#score").innerHTML = "Final Score " + score + " out of " + questions.length;
        }
      };

      //event.preventDefault();
    //   function displayAns(){
    //     if(queCount <= quizQuestions.length){
    //         for (var i = 0; i < 4; i++) {

    //             // For each iteration, we will create an imageCrystal
    //             var button = $("<button>");
    //             // First each crystal will be given the class ".crystal-image".
    //             // This will allow the CSS to take effect.
    //             button.addClass("button-image");
    //             // Each imageCrystal will be given a data attribute called data-crystalValue.
    //             // This data attribute will be set equal to the array value.
    //             button.attr("data-buttonvalue", quizQuestions[i].a1);
                
    //             button.attr("data-buttonvalue", quizQuestions[i].a2);
                
    //             button.attr("data-buttonvalue", quizQuestions[i].a3);
                
    //             button.attr("data-buttonvalue", quizQuestions[i].a4);
    //             $('button').text(data-buttonvalue);

    //             // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
    //             $("#queAns").append(button);
    //           }
    //     }else{
    //       document.querySelector("#quenumber").innerHTML = "Game Over";
    //       //document.querySelector("#score").innerHTML = "Final Score " + score + " out of " + questions.length;
    //     }
    //   };

$("#startgame").on("click", function(){
        $(this).hide();
        $("#ansbutton1").show();
        $("#ansbutton2").show();
        $("#ansbutton3").show();
        $("#ansbutton4").show();
        console.log("clicked");
        run();
        console.log("run");
        displayQuestion();
        //displayAns();
        console.log("displayQuestion");
        $(".button").on("click", function(){

        });

});


});