// CareerMate-AI - JavaScript

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("chatForm");
    const input = document.getElementById("userInput");
    const messages = document.getElementById("chatMessages");

    if (!form || !input || !messages) {
        console.error("Chat elements not found. Check your HTML IDs.");
        return;
    }

    function addMessage(text, sender) {
        const message = document.createElement("div");
        message.className = sender;
        message.textContent = text;
        messages.appendChild(message);
        messages.scrollTop = messages.scrollHeight;
    }

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const question = input.value.trim();

        if (!question) return;

        addMessage(question, "user-message");
        input.value = "";

        let answer = "Welcome to CareerMate-AI! I can help you prepare for placements.";

        const q = question.toLowerCase();

        if (q.includes("resume")) {
            answer = "I can help you improve your resume. Add your skills, projects and education.";
        } else if (q.includes("interview")) {
            answer = "Let's practice! Tell me your technical subject or interview topic.";
        } else if (q.includes("aptitude")) {
            answer = "Practice aptitude topics like percentages, ratios, time and work, and reasoning.";
        } else if (q.includes("java")) {
            answer = "Start with Java basics, OOP concepts, arrays, strings and coding problems.";
        } else if (q.includes("placement")) {
            answer = "Prepare your resume, aptitude, coding skills and communication for placements.";
        }

        setTimeout(() => {
            addMessage(answer, "bot-message");
        }, 500);
    });
});
