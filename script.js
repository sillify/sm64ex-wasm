// Load posts from localStorage
let posts = JSON.parse(localStorage.getItem("posts")) || [];

function renderPosts() {
  const postsDiv = document.getElementById("posts");
  postsDiv.innerHTML = "";
  posts.forEach((post, index) => {
    const div = document.createElement("div");
    div.className = "post";
    div.innerHTML = `
      <p>${post.content}</p>
      <div class="timestamp">${post.time}</div>
    `;
    postsDiv.prepend(div); // newest first
  });
}

function addPost() {
  const content = document.getElementById("postContent").value.trim();
  if (content === "") return;
  
  const newPost = {
    content,
    time: new Date().toLocaleString()
  };
  posts.push(newPost);
  localStorage.setItem("posts", JSON.stringify(posts));
  document.getElementById("postContent").value = "";
  renderPosts();
}

// Initial render
renderPosts();
