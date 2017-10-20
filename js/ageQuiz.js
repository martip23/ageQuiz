/*jslint browser: true*/
/*jslint devel: true */
/*eslint-env es6*/
/*global $, jQuery, document*/

$(document).ready(function () {
    "use strict";
    
    const quizImage     = document.getElementById("image");
    const quizContainer = document.getElementById("quiz");
    const startButton   = document.getElementById("startQuiz");
    const submitButton  = document.getElementById("submit");
    
    const quizQuestions = [
        {
            question: "How old are you?"
        }
    ];
        
    function buildSplash() {}
    
    function buildQuiz() {
        
        // to hold output HTML
        const output = [];
        
        // hold answer
        const answer = [];
        
        // add answer (in this case, one number list)
        answer.push(`<select id="numberList">`);
        for (var i=1;i<=100;i++) {
            answer.push(`<option `);
            answer.push(`val="` + i + `">` + i);
            answer.push(`</option>`);
        }
        answer.push(`</select>`);
        

        
        // push question and number dropdown to quizContainer
        output.push(
        `<div class="question"> ${quizQuestions[0]} </div>
        <div class="answers"> ${answer.join('')} </div>`
        );
        
        quizContainer.innerHTML = output.join('');
        }
        
    
    function showResult() {}
    
    // Show welcome screen
    // buildSplash();
    buildQuiz();
    
    // Button listeners
    startButton.addEventListener('click', buildQuiz);
    submitButton.addEventListener('click', showResult);
    
    /*
    TODO: Add share button for facebook.
    shareButton.addEventListener('click', share);
    */
});