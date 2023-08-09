const quizDB=[
{
question:"Q1: Which crop is sow on the largest area in india?",
a:"Rice",
b:"Wheat",
c:"Sugarcane",
d:"Maize",
ans:"ans1"
},

{
question:"Q2:Eritrea, which became the 182nd member of the United Nations in 1993, is on the continent of?",
a:" Asia",
b:"Africa",
c:"Europe",
d:"Australia",
ans:"ans2"
},

{
question:"Q3:  Which of the following personalities gave ‘The Laws of Heredity’?",
a:" Robert Hook",
b:"G.J. Mendel",
c:"Charles Darwin",
d:"William Harvey",
ans:"ans2"
},

{
question:"Q4:Garampani sanctuary is located at?",
a:"Junagarh, Gujarat",
b:"Diphu, Assam",
c:"Kohima, Nagaland",
d:"Gangtok, Sikkim",
ans:"ans2"
},

{
question:"Q5:Who is known as “The Saint of Gutters”?",
a:"Baba Amte",
b:"Mother Teresa",
c:"Anna Hazare",
d:"None of these",
ans:"ans2"
},

{
question:"Q6:For which of the following disciplines is Nobel Prize awarded?",
a:"Physics and Chemistry",
b:"Physiology or Medicine",
c:"Literature, Peace and Economics",
d:"All of these",
ans:"ans4"
},

{
question:"Q7: Grand Central Terminal, Park Avenue, New York is the world’s?",
a:"largest railway station",
b:"highest railway station",
c:"longest railway station",
d:"None of these",
ans:"ans1"
},

{
question:"Q8: Name the person who was also known as Deshbandhu?",
a:"S. Radhakrishnan",
b:"G.K. Gokhale",
c:"Chittaranjan Das",
d:"Madan Mohan Malviya",
ans:"ans3"
},

{
question:"Q9:FFC stands for?",
a:"Foreign Finance Corporation",
b:"Film Finance Corporation",
c:" Federation of Football Council",
d:"None of the above",
ans:"ans2"
}

];

const question=document.querySelector('.question');
const option1=document.querySelector('#option1');
const option2=document.querySelector('#option2');
const option3=document.querySelector('#option3');
const option4=document.querySelector('#option4');
const submit=document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore');

let questionCount=0;
let score=0;

const loadQuestion = () => {

const questionList = quizDB[questionCount];
question.innerText = questionList.question;

option1.innerText = questionList.a;
option2.innerText = questionList.b;
option3.innerText = questionList.c;
option4.innerText = questionList.d;
}
loadQuestion();


const getCheckAnswer = () => {
let answer;
answers.forEach((curAnsElem) => {
if(curAnsElem.checked){
answer = curAnsElem.id;
}
})
return answer;
};

const deselectAll = () =>{
answers.forEach((curAnsElem) => curAnsElem.checked = false);
}

submit.addEventListener('click',() => {
const checkedAnswer = getCheckAnswer();
console.log(checkedAnswer);

if(checkedAnswer == quizDB[questionCount].ans){
score++;
};

questionCount++;

deselectAll();

if(questionCount < quizDB.length){
loadQuestion();
}else{
showScore.innerHTML = `
<h3>You Scored ${score}/${quizDB.length}</h3>
<button class="btn" onclick="location.reload()">Play Again</button>

<a href='feedbackpage.html'>
<button class="btn1">Exit</button>
`;


showScore.classList.remove('scoreArea');
}

});

