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
