/*jslint browser: true*/
/*jslint devel: true */
/*eslint-env es6*/
/*global $, jQuery, document*/

(function () {
    "use strict";
    
    function buildSplash() {}
    
    function buildQuiz() {
        
        // to hold output HTML
        const output = [];
        
        // push question and number dropdown to quizContainer
        output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="dropdown">
            `
        )
            
        }
        
    }
    
    function showResult() {}
    
    // Show welcome screen
    buildSplash();
    
    // Button listeners
    startButton.addEventListener('click', buildQuiz);
    submitButton.addEventListener('click', showResult);
    
    /*
    TODO: Add share button for facebook.
    shareButton.addEventListener('click', share);
    */
    
    const quizImage     = document.getElementById("image");
    const quizContainer = document.getElementById("quiz");
    const startButton   = document.getElementById("startQuiz");
    const submitButton  = document.getElementById("submit");
    
    const quizQuestions = [
        {
            question: "How old are you?"
        }
    ];
});