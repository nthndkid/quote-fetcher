// document.getElementById("quote").textContent = data.content;
// document.getElementById("author").textContent = `-${data.author}`;

const toggleBtn = document.getElementById('theme-toggle');
const root = document.documentElement;

// load theme 
if (localStorage.getItem('theme') === 'dark'){
    root.classList.add('dark');
} else {
  root.classList.remove('dark');
}

// toggle theme
if (toggleBtn) {
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

