// Responsive Navbar (Mobile)
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

if (menuIcon && navbar) {
  menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
  });
}

// Active Link Highlight on Scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.sidebar-nav a, .navbar a');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');

    if (scrollY >= top - 60 && scrollY < top + height - 60) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('active');
        }
      });
    }
  });
});

// Fade-in on Scroll (Skills, Certs, Projects)
function animateOnScroll(selector, className = 'fade-in') {
  const elements = document.querySelectorAll(selector);
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(className);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  elements.forEach(el => observer.observe(el));
}

window.addEventListener('DOMContentLoaded', () => {
  const fadeSelectors = [
    '.skills-grid .skill-card',
    '.certifications-grid .cert-card',
    '.project-gallery img'
  ];

  fadeSelectors.forEach(selector => {
    document.querySelectorAll(selector).forEach((el, i) => {
      el.style.opacity = 0;
      el.style.transform = 'translateY(30px)';
      el.style.transitionDelay = `${0.1 + i * 0.1}s`;
      el.classList.add('fade-in-trigger');
    });
  });

  animateOnScroll('.fade-in-trigger', 'fade-in');
});

// Typing Animations

// Name
window.addEventListener('load', () => {
  const nameTarget = document.getElementById('animated-text');
  const nameText = "Hello, I'm Gemar Alegre";
  let i = 0;

  function typeNext() {
    if (i < nameText.length) {
      nameTarget.textContent += nameText.charAt(i++);
      setTimeout(typeNext, 80);
    }
  }
  typeNext();
});

// Description
window.addEventListener('load', () => {
  const descTarget = document.getElementById('my-description');
  const descText = "I am a Full Stack Software Engineer specializing in the MERN stack. I'm passionate about building modern, responsive web applications and continuously expanding my technical skills. With a strong foundation in problem-solving and adaptability gained from my experience in the BPO industry, I bring a unique perspective to development. I thrive in dynamic environments and am driven by creativity, continuous learning, and a deep enthusiasm for innovation in the ever-evolving tech landscape";
  let i = 0;

  function typeDesc() {
    if (i < descText.length) {
      descTarget.textContent += descText.charAt(i++);
      setTimeout(typeDesc, 20);
    }
  }
  typeDesc();
});

// Title Switcher
(() => {
  const titleEl = document.getElementById("my-title");
  const roles = ["Software Engineer", "Web Developer"];
  let index = 0;

  setInterval(() => {
    titleEl.style.opacity = 0;
    setTimeout(() => {
      index = (index + 1) % roles.length;
      titleEl.textContent = roles[index];
      titleEl.style.opacity = 1;
    }, 500);
  }, 3000);
})();

// Contact Prompt Modal
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('contactPrompt');
  const openBtn = document.getElementById('openContactPrompt');
  const closeBtn = document.getElementById('closePrompt');
  const form = document.getElementById('contactFormPrompt');
  const successModal = document.getElementById('successModal'); // Ensure this exists in HTML

  // Open Modal
  openBtn.addEventListener('click', e => {
    e.preventDefault();
    modal.style.display = 'flex';
  });

  // Close Modal
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    form.reset();
  });

  // Close if clicked outside
  window.addEventListener('click', e => {
    if (e.target === modal) {
      modal.style.display = 'none';
      form.reset();
    }
  });

  // Submit Form
  form.addEventListener('submit', e => {
    e.preventDefault();

    const name = document.getElementById('namePrompt').value.trim();
    const email = document.getElementById('emailPrompt').value.trim();
    const message = document.getElementById('messagePrompt').value.trim();

    if (!name || !email || !message) {
      alert('Please fill in all fields.');
      return;
    }

    // Simulate form processing
    setTimeout(() => {
      form.reset();
      modal.style.display = 'none';
      successModal.style.display = 'flex';

      // Auto-close after 3 seconds
      setTimeout(() => {
        successModal.style.display = 'none';
      }, 3000);
    }, 1000);
  });
});
