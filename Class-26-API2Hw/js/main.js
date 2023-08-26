// Add event listener to the button
document.querySelector('button').addEventListener('click', getQuestion);

// Function to fetch and display a question
function getQuestion() {
    // Declare and initialize the currentQuestionIndex variable
    let currentQuestionIndex = 0;

    

    fetch('https://opentdb.com/api.php?amount=50')
    .then(res => res.json())
    .then(data => { 
        console.log(data.results);
        const questions = data.results.map(result => result.question);
        const answers = data.results.map(result => result.correct_answer);

        // Check if there are more questions to display
        if (currentQuestionIndex < questions.length) {
            // Display the current question
            document.querySelector('h3').innerText = questions[currentQuestionIndex];
            
            // Store the correct answer in a custom attribute on the buttonAnswer element
            document.querySelector('.buttonAnswer').setAttribute('data-correct-answer', answers[currentQuestionIndex]);
            
            // Increment the question index for the next click
            currentQuestionIndex++;
        } else {
            document.querySelector('h3').innerText = "You completed all the trivia questions!";
        }
    })
    .catch(err => {
        console.log(`error ${err}`);
    });
}

// Add event listener to the "Answer!" button
document.querySelector('.buttonAnswer').addEventListener('click', giveAnswer);

// Function to display the correct answer
function giveAnswer() {
    // Retrieve the correct answer from the custom attribute
    const correctAnswer = document.querySelector('.buttonAnswer').getAttribute('data-correct-answer');
    document.querySelector('p').innerText = correctAnswer;
}






//  document.querySelector('button').addEventListener('click', getQuestion);

// function getQuestion() {
    
//     let currentQuestionIndex = 0;
    
//     fetch('https://opentdb.com/api.php?amount=10&category=26')
//     .then(res => res.json())
//     .then(data => { 
//         console.log(data);
//         const questions = data.results.map(result => result.question);
//         const answers = data.results.map(result => result.correct_answer);
//   //new
//     if (currentQuestionIndex < questions.length){
//         document.querySelector('h3').innerText = questions[currentQuestionIndex];
//     // // Store the correct answer in a custom attribute on the buttonAnswer element
//         document.querySelector('.buttonAnswer').setAttribute('data-correct-answer', answers[currentQuestionIndex]);
//         currentQuestionIndex++
//     } else {
//         document.querySelector('h3').innerText = "You completed all the trivia questions!";
//     }            
        
//     })
//     .catch(err => {
//         console.log(`error ${err}`);
//     });
//  }




//  document.querySelector('.buttonAnswer').addEventListener('click', giveAnswer);

//  function giveAnswer() {
//      // Retrieve the correct answer from the custom attribute
//      const correctAnswer = document.querySelector('.buttonAnswer').getAttribute('data-correct-answer');
//      document.querySelector('p').innerText = correctAnswer;
// }