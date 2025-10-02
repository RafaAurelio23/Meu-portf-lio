// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Header background on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(35, 37, 38, 0.95)';
    } else {
        header.style.background = 'rgba(35, 37, 38, 0.9)';
    }
});

// Form submission
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Formatar o corpo do email em português
    const subject = encodeURIComponent('Nova mensagem do Portfolio');
    const body = encodeURIComponent(
        `Olá,\n\n` +
        `Você recebeu uma nova mensagem através do formulário de contato do seu portfolio.\n\n` +
        `INFORMAÇÕES DO CONTATO:\n` +
        `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n` +
        `Nome: ${name}\n` +
        `Email: ${email}\n\n` +
        `MENSAGEM:\n` +
        `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n` +
        `${message}\n\n` +
        `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n` +
        `Esta mensagem foi enviada automaticamente pelo formulário de contato do portfolio.\n` +
        `Data: ${new Date().toLocaleString('pt-BR')}`
    );
    
    // Abrir cliente de email com os dados preenchidos
    window.location.href = `mailto:nexusfourtech@gmail.com?subject=${subject}&body=${body}`;
    
    // Mostrar mensagem de sucesso
    alert('Seu cliente de email será aberto para enviar a mensagem!');
    e.target.reset();
});

// Project cards animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
        }
    });
}, observerOptions);

document.querySelectorAll('.project-card').forEach(card => {
    card.style.opacity = '0';
    observer.observe(card);
});