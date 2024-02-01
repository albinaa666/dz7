function showAnswer(questionNumber) {
    var answerId = "answer" + questionNumber;
    var answerElement = document.getElementById(answerId);

    if (answerElement.style.display === "none") {
        answerElement.style.display = "block";
        document.querySelector("button").textContent = "Скрыть ответ";
    } else {
        answerElement.style.display = "none";
        document.querySelector("button").textContent = "Показать ответ";
    }
}