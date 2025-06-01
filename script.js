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
