document.addEventListener("DOMContentLoaded", () => {
  const headerContent = `
  <nav class="navbar navbar-expand-lg bg-body-tertiary nav">
  
  <div class="container-fluid">
      <a class="navbar-brand" href="index.html">
      <img src="../../assets/logo-for-reach-02-1.png">

    </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarScroll">
        <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
          <li class="nav-item">
            <a class="nav-link" id="home-link" href="/index.html">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="register-link" href="/src/pages/registerPage.html">Register</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="download-link" href="">Download</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" id="services-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Services
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="">Prepaid Plans</a></li>
              <li><a class="dropdown-item" href="">Add-ons</a></li>
              <li><a class="dropdown-item" href="">Top-Up</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="">International Services</a></li>
            </ul>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input style="color: #555; border-radius: 50px!important;" class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
        </form>
      </div>
    </div>
  </nav>
  `;

  document.querySelector("header").innerHTML = headerContent;

  const navLinks = document.querySelectorAll(".nav-link");

  // Load the active link from local storage or set Home as default
  const activeLink = localStorage.getItem("activeNavLink");
  if (activeLink) {
    navLinks.forEach((link) => {
      if (link.getAttribute("href") === activeLink) {
        link.classList.add("active");
      }
    });
  } else {
    // Set "Home" as default active link
    const homeLink = document.querySelector("#home-link");
    if (homeLink) {
      homeLink.classList.add("active");
      localStorage.setItem("activeNavLink", homeLink.getAttribute("href"));
    }
  }

  // Add click event listeners to update the active link
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      if (this.getAttribute("href") === "#") {
        e.preventDefault();
      }
      localStorage.setItem("activeNavLink", this.getAttribute("href"));
      navLinks.forEach((nav) => nav.classList.remove("active"));
      this.classList.add("active");
    });
  });
});
