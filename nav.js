document.addEventListener("DOMContentLoaded", () => {
  const nav = `
    <nav class="global-nav">
      <div class="nav-container">
        index.htmlKylee</a>

        <div class="nav-links">
          about.htmlAbout Me</a>
          portfolio.htmlPortfolio</a>
          contact.htmlContact</a>
        </div>
      </div>
    </nav>
  `;

  document.body.insertAdjacentHTML("afterbegin", nav);

  const currentPage = window.location.pathname.split("/").pop();

  document.querySelectorAll(".nav-links a").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });
});
