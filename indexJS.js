function fetchData() {
    const apiUrl = 'https://opentdb.com/api.php?amount=1&category=17&difficulty=easy';

    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const dataContainer = document.getElementById('data-container');

        data.results.forEach((question, index) => {
            const questionElement = document.createElement('p');
            questionElement.textContent = `${index + 1}. ${question.question}`;
            dataContainer.appendChild(questionElement);

            const answerInput = document.createElement('input');
            answerInput.setAttribute('type', 'text');
            answerInput.setAttribute('placeholder', 'Your answer...');
            answerInput.setAttribute('id', 'answer-input');
            answerInput.classList.add('answer-input');
            dataContainer.appendChild(answerInput);
        });
    })
    .catch(error => {
        console.error('Error fetching data:', error);

    });
    document.getElementById('next').addEventListener('click', function() {
    document.getElementById('data-container').innerHTML = '';

    fetchData();});
}

window.onload = fetchData;

function login(){
    var username = prompt("Enter your username:");
    var password = prompt("Enter your password:");
    alert("Username: " + username + "\nPassword: " + password);
}

function submit(){
    var submitQ = prompt("Add a Question:");
    var Qanswer = prompt("Answer the Question:");
    alert("Username: " + username + "\nPassword: " + password);
}
