/* Parallax Technologies — shared header + footer (single source of truth) */
(function () {
  'use strict';

  var NAV = '' +
  '<header class="nav" id="nav"><div class="container nav__inner">' +
    '<a href="index.html" class="brand" aria-label="Parallax Technologies home">' +
      '<img class="brand__logo" src="assets/img/logo.png" alt="Parallax Technologies" width="159" height="31" /></a>' +
    '<nav class="nav__links" id="navLinks" aria-label="Primary">' +
      '<a href="index.html">Home</a>' +
      '<div class="nav__item">' +
        '<button class="nav__drop" aria-expanded="false">About<span class="caret"></span></button>' +
        '<div class="nav__menu">' +
          '<a href="about.html">Who We Are</a>' +
          '<a href="team.html">Our Team</a>' +
          '<a href="awards.html">Awards</a>' +
          '<a href="csr.html">CSR</a>' +
        '</div></div>' +
      '<div class="nav__item">' +
        '<button class="nav__drop" aria-expanded="false">Services<span class="caret"></span></button>' +
        '<div class="nav__menu">' +
          '<a href="services-erp.html">ERP Solutions</a>' +
          '<a href="services-outsourcing.html">Dedicated IT Outsourcing</a>' +
          '<a href="services-custom.html">Custom Software Development</a>' +
        '</div></div>' +
      '<div class="nav__item">' +
        '<button class="nav__drop" aria-expanded="false">Products<span class="caret"></span></button>' +
        '<div class="nav__menu">' +
          '<a href="storemate.html">StoreMate&trade;</a>' +
          '<a href="curfox.html">Curfox&trade;</a>' +
        '</div></div>' +
      '<a href="projects.html">Portfolio</a>' +
      '<div class="nav__item">' +
        '<button class="nav__drop" aria-expanded="false">More<span class="caret"></span></button>' +
        '<div class="nav__menu">' +
          '<a href="faq.html">FAQ</a>' +
          '<a href="blog.html">Blog</a>' +
          '<a href="gallery.html">Gallery</a>' +
          '<a href="vacancies.html">Vacancies</a>' +
        '</div></div>' +
      '<a href="contact.html" class="nav__cta">Talk to us</a>' +
    '</nav>' +
    '<button class="nav__toggle" id="navToggle" aria-label="Toggle menu" aria-expanded="false"><span></span><span></span><span></span></button>' +
  '</div></header>';

  var FOOTER = '' +
  '<footer class="footer"><div class="container footer__grid">' +
    '<div class="footer__brand">' +
      '<a href="index.html" class="wordmark">PARALLAX<span>.</span></a>' +
      '<p>A tech-smart company with 10+ years of experience helping businesses improve operations through innovative, reliable technology solutions.</p>' +
      '<div class="social" aria-label="Social links">' +
        '<a href="#" aria-label="Facebook">Fb</a><a href="#" aria-label="Twitter">X</a><a href="#" aria-label="LinkedIn">in</a><a href="#" aria-label="Instagram">Ig</a><a href="#" aria-label="YouTube">YT</a></div>' +
    '</div>' +
    '<div class="footer__col"><h4>Company</h4><a href="about.html">About Us</a><a href="team.html">Team</a><a href="awards.html">Awards</a><a href="csr.html">CSR</a><a href="vacancies.html">Careers</a></div>' +
    '<div class="footer__col"><h4>Services</h4><a href="services-erp.html">ERP Solutions</a><a href="services-outsourcing.html">IT Outsourcing</a><a href="services-custom.html">Custom Software</a><a href="projects.html">Portfolio</a></div>' +
    '<div class="footer__col"><h4>Products &amp; More</h4><a href="curfox.html">Curfox&trade;</a><a href="storemate.html">StoreMate&trade;</a><a href="blog.html">Blog</a><a href="faq.html">FAQ</a><a href="gallery.html">Gallery</a></div>' +
  '</div>' +
  '<div class="container footer__bottom"><span>&copy; 2025 Parallax Technologies &mdash; All Rights Reserved.</span><span>parallaxtec.com</span></div></footer>';

  function inject(id, html) {
    var el = document.getElementById(id);
    if (el) el.outerHTML = html;
  }
  inject('site-header', NAV);
  inject('site-footer', FOOTER);

  /* Active link highlighting */
  var current = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  if (!current) current = 'index.html';
  var links = document.querySelectorAll('.nav__links a');
  links.forEach(function (a) {
    var href = (a.getAttribute('href') || '').toLowerCase();
    if (href === current) {
      a.classList.add('is-active');
      var item = a.closest('.nav__item');
      if (item) { var btn = item.querySelector('.nav__drop'); if (btn) btn.classList.add('is-active'); }
    }
  });

  /* Sticky background */
  var nav = document.getElementById('nav');
  function onScroll() { if (window.scrollY > 20) nav.classList.add('is-stuck'); else nav.classList.remove('is-stuck'); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* Mobile menu toggle */
  var toggle = document.getElementById('navToggle');
  var navLinks = document.getElementById('navLinks');
  toggle.addEventListener('click', function () {
    var open = navLinks.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.classList.toggle('is-x', open);
  });

  /* Dropdowns: hover on desktop (CSS), click/tap on mobile (JS) */
  document.querySelectorAll('.nav__drop').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      if (window.innerWidth > 880) return; // desktop uses hover
      e.preventDefault();
      var item = btn.closest('.nav__item');
      var open = item.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', String(open));
    });
  });

  /* Close mobile menu when a real link is tapped */
  navLinks.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      navLinks.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.classList.remove('is-x');
    }
  });
})();
