const toggleBtn = document.getElementById('theme-toggle');
const root = document.documentElement;

// toggle theme buttong
if (toggleBtn) {
    // load theme 
    if (localStorage.getItem('theme') === 'dark'){
        root.classList.add('dark');
    } else {
    root.classList.remove('dark');
    }

    // change theme
    toggleBtn.addEventListener('click', () => {
        root.classList.toggle('dark');
        
        console.log("working")
        if (root.classList.contains('dark')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    })
}

const quoteText = document.getElementById("quote");
const quoteAuthor = document.getElementById("author");
const getQuoteBtn = document.getElementById("get-quote");
const spinner = document.getElementById('loading-spinner');

// get quote by default
async function fetchQuote() {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();

    quoteText.textContent = data.content;
    quoteAuthor.textContent = `- ${data.author}`;
}

// load async func to get quote
window.addEventListener('DOMContentLoaded', fetchQuote)

// process to fetch quote
if (getQuoteBtn) {
    getQuoteBtn.addEventListener("click", async() => {
        getQuoteBtn.disabled = true;
        getQuoteBtn.textContent = "Loading...";
        spinner.classList.remove('hidden');


        try {
            // fetch quote from api
            const response = await fetch("https://api.quotable.io/random");
            const data = await response.json();
            console.log(data);

            // display the fetched quote
            quoteText.textContent = data.content;
            quoteAuthor.textContent = `- ${data.author}`;
        } catch (error) {
            console.log(error);
            quoteText.textContent = "Failed to fetch quote, Please try again later!";
            quoteAuthor.textContent = "-----";
        } finally {
            spinner.classList.add('hidden');
        }

        getQuoteBtn.textContent = "Get Quote";
        getQuoteBtn.disabled = false;
    });
}

const copyQuoteBtn = document.getElementById("copy-quote");

// copy quote process
if (copyQuoteBtn) {
    copyQuoteBtn.addEventListener('click', () => {
        const fullQuote = `${quoteText.textContent} ${quoteAuthor.textContent}`;
        const copyBtnContent = copyQuoteBtn.innerHTML;

        navigator.clipboard.writeText(fullQuote);
        copyQuoteBtn.textContent = "Copied to clipboard!";

        setTimeout(() => {
            copyQuoteBtn.innerHTML = copyBtnContent;
        }, 2000);

    });
}
