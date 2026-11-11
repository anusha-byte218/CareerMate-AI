document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("chatForm");
    const input = document.getElementById("userInput");
    const messages = document.getElementById("chatMessages");

    function addMessage(text, sender) {
        const message = document.createElement("div");
        message.className = sender;
        message.textContent = text;
        messages.appendChild(message);
        messages.scrollTop = messages.scrollHeight;
    }

    function getAnswer(question) {
        const q = question.toLowerCase();

        if (q.includes("resume")) {
            return "To build a strong resume, include your education, technical skills, projects, achievements and contact information.";
        }

        if (q.includes("interview")) {
            return "Common interview questions: 1. Tell me about yourself. 2. What are your strengths? 3. Why should we hire you? 4. Explain your final-year project.";
        }

        if (q.includes("aptitude")) {
            return "Practice percentages, profit and loss, ratios, time and work, averages and logical reasoning.";
        }

        if (q.includes("java")) {
            return "Java topics to learn: Variables, data types, loops, arrays, strings, classes, objects and OOP concepts.";
        }

        if (q.includes("python")) {
            return "Start Python with variables, data types, conditions, loops, functions, lists and dictionaries.";
        }

        if (q.includes("coding")) {
            return "Start coding with basic programs: palindrome, factorial, Fibonacci series, prime numbers and array problems.";
        }

        if (q.includes("placement")) {
            return "Prepare for placements by improving your resume, aptitude, coding, communication and interview skills.";
        }

        if (q.includes("hr")) {
            return "HR questions include: Tell me about yourself, your strengths, weaknesses and career goals.";
        }

        if (q.includes("project")) {
            return "Explain your project objective, technologies used, features, implementation and future improvements.";
        }

        if (q.includes("hello") || q.includes("hi")) {
            return "Hello! Welcome to CareerMate-AI. Ask me about resumes, interviews, aptitude or coding!";
        }

        return "I can help with resumes, interviews, aptitude, Java, Python, coding and placements. Please ask a related question!";
    }

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const question = input.value.trim();

        if (!question) return;

        addMessage(question, "user-message");
        input.value = "";

        const answer = getAnswer(question);

        setTimeout(() => {
            addMessage(answer, "bot-message");
        }, 500);
    });
});
// Aptitude Quiz

const quizQuestions = [
    {
        question: "What is 20% of 150?",
        options: ["20", "25", "30", "35"],
        answer: "30"
    },
    {
        question: "Find the next number: 2, 4, 8, 16, ?",
        options: ["20", "24", "32", "36"],
        answer: "32"
    },
    {
        question: "If 5 pens cost ₹50, what is the cost of 1 pen?",
        options: ["₹5", "₹10", "₹15", "₹20"],
        answer: "₹10"
    },
    {
        question: "Which is the odd one out?",
        options: ["Apple", "Mango", "Carrot", "Banana"],
        answer: "Carrot"
    },
    {
        question: "What is 12 × 8?",
        options: ["86", "92", "96", "108"],
        answer: "96"
    }
];

let currentQuestion = 0;
let score = 0;
let selected = false;

function loadQuestion() {
    const question = quizQuestions[currentQuestion];

    document.getElementById("question").textContent =
        question.question;

    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";

    question.options.forEach(option => {
        const button = document.createElement("button");

        button.textContent = option;

        button.onclick = function () {
            if (selected) return;

            selected = true;

            if (option === question.answer) {
                score++;
                button.style.background = "#a7f3d0";
            } else {
                button.style.background = "#fecaca";
            }

            document.querySelectorAll("#options button")
                .forEach(btn => btn.disabled = true);
        };

        optionsDiv.appendChild(button);
    });
}

function nextQuestion() {
    if (!selected) {
        alert("Please select an answer!");
        return;
    }

    currentQuestion++;
    selected = false;

    if (currentQuestion < quizQuestions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById("question").textContent =
        "Quiz Completed!";

    document.getElementById("options").innerHTML = "";

    document.getElementById("nextBtn").style.display = "none";

    const percentage = Math.round(
        (score / quizQuestions.length) * 100
    );

    document.getElementById("result").textContent =
        `Your Score: ${score}/${quizQuestions.length} (${percentage}%)`;

    document.getElementById("restartBtn").style.display = "inline-block";
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    selected = false;

    document.getElementById("result").textContent = "";
    document.getElementById("nextBtn").style.display = "inline-block";
    document.getElementById("restartBtn").style.display = "none";

    loadQuestion();
}

// Start quiz
document.addEventListener("DOMContentLoaded", loadQuestion);
