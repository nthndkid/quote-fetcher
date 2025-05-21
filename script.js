// document.getElementById("quote").textContent = data.content;
// document.getElementById("author").textContent = `-${data.author}`;

const toggleBtn = document.getElementById('theme-toggle');
const root = document.documentElement;

// toggle theme
if (toggleBtn) {
    // load theme 
    if (localStorage.getItem('theme') === 'dark'){
        root.classList.add('dark');
    } else {
    root.classList.remove('dark');
    }

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

if (getQuoteBtn) {
    getQuoteBtn.addEventListener("click", async() => {
        getQuoteBtn.disabled = true;
        getQuoteBtn.textContent = "Loading...";

        try {
            const response = await fetch("https://api.quotable.io/random");
            const data = await response.json();
            console.log(data);

            quoteText.textContent = data.content;
            quoteAuthor.textContent = `- ${data.author}`;
        } catch (error) {
            console.log(error);
            quoteText.textContent = "Failed to fetch quote, Please try again later!";
            quoteAuthor.textContent = "-----";
        }

        getQuoteBtn.textContent = "Get Quote";
        getQuoteBtn.disabled = false;
    });
}
