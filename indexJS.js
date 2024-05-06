async function fetchQuestions() {
    try {
        const response = await fetch("https://opentdb.com/api.php?amount=10&category=17&difficulty=easy");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error fetching questions:", error);
    }
}
function displayQuestions(data) {
    const questionContainer = document.getElementById("question");
    questionContainer.innerHTML = "";

    data.results.forEach((question, index) => {
        const questionHTML = `
            <div class="question">
                <p><strong>Question ${index + 1}:</strong> ${question.question}</p>
                <p><strong>Correct Answer:</strong> ${question.correct_answer}</p>
                <p><strong>Incorrect Answers:</strong> ${question.incorrect_answers.join(", ")}</p>
            </div>
        `;
        questionContainer.innerHTML += questionHTML;
    });
}

fetchQuestions();
