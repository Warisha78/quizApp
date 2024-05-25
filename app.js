

  const firebaseConfig = {
    apiKey: "AIzaSyA-x8Pm4B3Jw_XOXyZXeiAxEpPIQQ6_0eM",
    authDomain: "quizappdata-40583.firebaseapp.com",
    projectId: "quizappdata-40583",
    storageBucket: "quizappdata-40583.appspot.com",
    messagingSenderId: "532085929879",
    appId: "1:532085929879:web:1f2fb5840edf73cf52f6d2",
    measurementId: "G-LS2BNJVL42"
  };

  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);

// firebase.database().ref("userResult")
var questions = [
  {
    question: " I like ___ blue T-shirt over there better than ___ red one.",
    option1: "the,the",
    option2: "an,the",
    option3: "X.the",
    corrAnswer: " the,the"
  },
  {
    question: " Their car does 150 miles __ hour.",
    option1: "a",
    option2: "an",
    option3: "X",
    corrAnswer: "an"
  }, {
    question: " Where's ___  USB drive I lent you last week?",
    option1: "a",
    option2: "X",
    option3: "the",
    corrAnswer: "the"
  }, {
    question: "Do you still live in ___ Bristol?",
    option1: "a",
    option2: "an",
    option3: "X",
    corrAnswer: "X"
  }, {
    question: "Is your mother working in ___ old office building?",
    option1: "an",
    option2: "a",
    option3: "X",
    corrAnswer: "an"
  }, {
    question: " Carol's father works as __ electrician.",
    option1: "X",
    option2: "a",
    option3: "an",
    corrAnswer: "an"
  }, {
    question: " The tomatoes are 99 pence __ kilo.",
    option1: "a",
    option2: "an",
    option3: "X",
    corrAnswer: "a"
  }, {
    question: " What do you usually have for __ breakfast? ",
    option1: "a",
    option2: "X",
    option3: "the",
    corrAnswer: "X"
  }, {
    question: " Ben has __ terrible headache.",
    option1: "a",
    option2: "an",
    option3: "X",
    corrAnswer: "a"
  }, {
    question: "After this tour you have ___ whole afternoon free to explore the city.",
    option1: "a",
    option2: "an",
    option3: "the",
    corrAnswer: "the"
  }
]

var ques = document.getElementById("ques");
var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var opt3 = document.getElementById("opt3");
var timer = document.getElementById("timer");
var index = 0;
var score = 0;
var min = 2;
var sec = 0;
var timerInterval;

timerInterval = setInterval(function () {
  timer.innerHTML = `${min}:${sec < 10 ? "0" + sec : sec}`;
  --sec;
  if (sec < 0) {
    --min;
    sec = 59;
    if (min < 0) {
      clearInterval(timerInterval);
      min = 2;
      sec = 0;
      nextQuestion();
    }
  }
}, 1200);

function nextQuestion() {
  var getOptions = document.getElementsByName("option");

  for (var i = 0; i < getOptions.length; i++) {
    if (getOptions[i].checked) {
      var selectedValue = getOptions[i].value;
      var selectedQues = questions[index - 1].question;
      var selectedAns = questions[index - 1][`option${selectedValue}`];
      var correctAnswer = questions[index - 1]["corrAnswer"];

      if (selectedAns == correctAnswer) {
        score++;
      }
    }

    getOptions[i].checked = false;
  }
  btn.disabled = true;

  // if (index > questions.length - 1) {
  //   clearInterval(timerInterval);
  //   Swal.fire({
  //     title: "Good job!",
  //     text: "your percentage is: " + ((score / questions.length) * 100).toFixed(2),
  //     icon: "success",
  //   }).then(() => {
  //     window.location.href = "index.html";
  //   });
  // } else {
  //   ques.innerText = questions[index].question;
  //   opt1.innerText = questions[index].option1;
  //   opt2.innerText = questions[index].option2;
  //   opt3.innerText = questions[index].option3;
  //   index++;
  //   min = 2;
  //   sec = 0;
  // }
  if (index > questions.length - 1) {
    clearInterval(timerInterval);
    const percentage = (score / questions.length) * 100;
    if (percentage >= 30) {
        Swal.fire({
            title: "Good job!",
            text: "Your percentage is: " + percentage.toFixed(2),
            icon: "success",
        }).then(() => {
            window.location.href = "index.html";
        });
    } else {
        Swal.fire({
            title: "Oops!",
            text: "Your percentage is below 30%. You need to study more!",
            icon: "error",
        }).then(() => {
            window.location.href = "index.html";
        });
    }
} else {
    ques.innerText = questions[index].question;
    opt1.innerText = questions[index].option1;
    opt2.innerText = questions[index].option2;
    opt3.innerText = questions[index].option3;
    index++;
    min = 2;
    sec = 0;
}

  
}

function target() {
  var btn = document.getElementById("btn");

  btn.disabled = false;
}