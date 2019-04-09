(function() {
    function buildQuiz() {
      // we'll need a place to store the HTML output
      const output = [];
  var i;
      for(i = 0; i < myQuestions.length; i++){
        $('#next').click(function(){
            $('#quiz').empty();
            console.log(myQuestions[i].answers)
            for(letter in myQuestions[i]) {
                $('#quiz').append(
                    `<label>
                      <input type="radio" name="question${questionNumber}" value="${letter}">
                      ${letter} :
                      ${currentQuestion.answers[letter]}
                    </label>`
                  );
            }
          
        })
      }
      // for each question...
      myQuestions.forEach((currentQuestion, questionNumber) => {
        // we'll want to store the list of answer choices
        const answers = [];
  
        // and for each available answer...
        for (letter in currentQuestion.answers) {
          // ...add an HTML radio button
         
          
        }
  
        // add this question and its answers to the output
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join("")} </div>`
        );
      });
  
      // finally combine our output list into one string of HTML and put it on the page
      quizContainer.innerHTML = output.join("");
    }
  
    
    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");
    const myQuestions = [
      {
        question: "Who is the strongest?",
        answers: {
          a: "Superman",
          b: "The Terminator",
          c: "Waluigi, obviously"
        },
        correctAnswer: "c"
      },
      {
        question: "What is the best site ever created?",
        answers: {
          a: "SitePoint",
          b: "Simple Steps Code",
          c: "Trick question; they're both the best"
        },
        correctAnswer: "c"
      },
      {
        question: "Where is Waldo really?",
        answers: {
          a: "Antarctica",
          b: "Exploring the Pacific Ocean",
          c: "Sitting in a tree",
          d: "Minding his own business, so stop asking"
        },
        correctAnswer: "d"
      }
    ];
  
    // display quiz right away
    buildQuiz();
  
    // on submit, show results
  })();