
const footerContent =`
<div class="footer-48201"> 
  <div class="container">
    <div class="row">
      <div class="col-md-4 pr-md-5">
        <a href="#" class="footer-site-logo d-block mb-4"><img style="width: 60%;" src="../assets/logo-for-reach-02-1.png" alt=""></a>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quasi perferendis ratione perspiciatis accusantium.</p>
      </div>
      <div class="col-md">
        <ul class="list-unstyled nav-links">
          <li><a href="../../Home/index.html">Home</a></li>
          <li><a href="../..//Register/index.html">Register</a></li>
          <li><a href="#">Download</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
      <div class="col-md">
        <ul class="list-unstyled nav-links">
          <li><a href="#">Clients</a></li>
          <li><a href="#">Team</a></li>
          <li><a href="#">Career</a></li>
          <li><a href="#">Testimonials</a></li>
          <li><a href="#">Journal</a></li>
        </ul>
      </div>
      <div class="col-md">
        <ul class="list-unstyled nav-links">
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms &amp; Conditions</a></li>
          <li><a href="#">Partners</a></li>
        </ul>
      </div>
      <div class="col-md text-md-center">
        <ul class="social list-unstyled">
          <li><a href="#"><span class="fa-brands fa-instagram"></span></a></li>
          <li><a href="#"><span class="fa-brands fa-twitter"></span></a></li>
          <li><a href="#"><span class="fa-brands fa-facebook"></span></a></li>
          <li><a href="#"><span class="fa-brands fa-pinterest"></span></a></li>
          <li><a href="#"><span class="fa-brands fa-dribbble"></span></a></li>
        </ul>
        <p class=""><a href="#" class="btn btn-tertiary">Contact Us</a></p>
      </div>
    </div> 

    <div class="row ">
      <div class="col-12 text-center">
        <div class="copyright mt-5 pt-5">
          <p><small></small></p>
        </div>
      </div>
    </div> 
  </div>
 </div>    `;

document.querySelector('footer').innerHTML = footerContent;
  // Handle Active Links for Header and Footer
  const navLinks = document.querySelectorAll('.nav-link, .nav-links a');

  // Load the active link from local storage or set Home as default
  const activeLink = localStorage.getItem('activeNavLink');
  if (activeLink) {
    navLinks.forEach(link => {
      if (link.getAttribute('href') === activeLink) {
        link.classList.add('active');
      }
    });
  } else {
    // Set "Home" as default active link
    const homeLink = document.querySelector('#home-link');
    if (homeLink) {
      homeLink.classList.add('active');
      localStorage.setItem('activeNavLink', homeLink.getAttribute('href'));
    }
  }

  // Add click event listeners to update the active link
  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      if (this.getAttribute('href') === '#') {
        e.preventDefault(); 
      }
      localStorage.setItem('activeNavLink', this.getAttribute('href'));
      navLinks.forEach(nav => nav.classList.remove('active'));
      this.classList.add('active');
    });
  });
