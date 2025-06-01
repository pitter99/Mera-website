fetch('/upload-endpoint', {
  method: 'POST',
  body: formData
})
function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.classList.toggle('show');
}

function searchPosts() {
  const input = document.getElementById('searchInput').value.toLowerCase();
  const posts = document.querySelectorAll('.blog-list article');

  posts.forEach(post => {
    const text = post.innerText.toLowerCase();
    post.style.display = text.includes(input) ? '' : 'none';
  });
}
app.post('/upload-endpoint', (req, res) => {
  // image upload logic
});
document.addEventListener("DOMContentLoaded", function () {
  const clickButton = document.getElementById("clickMe");
  const output = document.getElementById("output");
  const modeToggle = document.getElementById("modeToggle");

  clickButton.addEventListener("click", () => {
    const messages = ["Hello, world!", "You clicked me!", "Great job!", "Keep going!", "JavaScript Rocks!"];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    output.textContent = randomMessage;
  });

  modeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
});
