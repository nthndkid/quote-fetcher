# Quotify

> A simple, clean, and responsive Quote App built with HTML, Tailwind CSS, and vanilla JavaScript.

---

## Demo

You can try the app live by opening the `index.html` in your browser.

---

## Features

- Fetches random inspirational quotes from [Quotable API](https://api.quotable.io/random).
- Dark and light theme toggle with persistent theme preference saved in `localStorage`.
- Copy quote and author to clipboard with a friendly UI feedback.
- Responsive design powered by Tailwind CSS.
- Loading spinner displayed during quote fetching.
- Sticky header and footer for consistent navigation and branding.
- Google Fonts (Poppins, Inter) and Material Icons integration.

---

## Installation / Usage

1. Clone or download this repository:

   ```bash
   git clone https://github.com/nthndkid/quote-fetcher.git

2. Open index.html in any modern browser.

3.  Interact with the buttons to toggle theme, get new quotes, or copy the current quote.

---

## 🌟 Technologies Used

- **HTML5**
- **Tailwind CSS** (via CDN with runtime configuration)
- **Vanilla JavaScript**
- **Google Fonts** (Poppins, Inter)
- **Material Icons & Material Symbols**

---

## 📁 File Structure
    .
    ├── index.html        # Main HTML file
    ├── script.js         # JavaScript logic for theme, quotes, copy
    └── README.md       


---

## ⚙️ How It Works

- On page load, a random quote is fetched from the **Quotable API** and displayed.
- Clicking **Get Quote** fetches and displays a new quote.
- Clicking **Toggle Theme** switches between light and dark modes and remembers your preference.
- Clicking the **copy icon** copies the current quote and author to your clipboard with a feedback message.
- A **loading spinner** appears while fetching quotes to indicate progress.

---

## 🎨 Customization

- **Change fonts** by editing the Tailwind configuration inside the `<script>` tag in `index.html`.
- **Replace the quote source** by updating the API endpoint in `script.js`.
- **Modify styling and colors** easily using Tailwind CSS utility classes.

---

## 👨‍💻 Author

**nthndkid**  
GitHub: [https://github.com/nthndkid](https://github.com/nthndkid)

---

## 📄 License

**MIT License © 2025 nthndkid**

Feel free to **contribute**, **report issues**, or **request features**!
