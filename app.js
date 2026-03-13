// Navigation
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Modal
function openModal() {
    document.getElementById('diagnosticModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('diagnosticModal').classList.remove('active');
    document.body.style.overflow = '';
}

// Close modal on outside click
const modal = document.getElementById('diagnosticModal');
if (modal) {
    modal.addEventListener('click', (e) => {
        if (e.target.id === 'diagnosticModal') {
            closeModal();
        }
    });
}

// Form submission
const diagnosticForm = document.getElementById('diagnosticForm');
if (diagnosticForm) {
    diagnosticForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        
        // Store in localStorage
        localStorage.setItem('diagnosticData', JSON.stringify({
            ...data,
            submittedAt: new Date().toISOString()
        }));
        
        // Show success
        document.getElementById('formSuccess').style.display = 'block';
        e.target.style.display = 'none';
        
        console.log('Form submitted:', data);
    });
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});