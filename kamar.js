// ============================================
// KAMAR - JavaScript
// Interatividade, Animações e Funcionalidades
// ============================================

// Dados dos Projetos
const projects = {
    1: {
        title: 'Identidade Visual Nexora',
        category: 'branding',
        client: 'Nexora Tech',
        year: 2023,
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663450939264/JrqjbrBtoiyEU6PxaBBsBW/kamar-portfolio-2-CF8ctLvV6bQRufgsMpxjVV.webp',
        description: 'Desenvolvimento completo de identidade visual para startup de tecnologia.',
        fullDescription: 'Desenvolvimento completo de identidade visual para startup de tecnologia. Incluiu criação de logo geométrico, paleta de cores, tipografia, e brand guidelines detalhados.',
        technologies: ['Adobe Illustrator', 'Figma', 'Brand Strategy'],
        results: [
            'Logo reconhecido em 3 mercados',
            'Aumento de 45% em brand recall',
            'Aplicação em 50+ materiais'
        ]
    },
    2: {
        title: 'Website StartupTech',
        category: 'website',
        client: 'StartupTech',
        year: 2024,
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663450939264/JrqjbrBtoiyEU6PxaBBsBW/kamar-portfolio-3-DKEUotndZkZnLJHgEkRuWh.webp',
        description: 'Design e desenvolvimento web responsivo com foco em conversão.',
        fullDescription: 'Website moderno e responsivo para startup de tecnologia. Desenvolvido com foco em conversão, incluindo seções de serviços, portfólio, blog e formulário de contato integrado.',
        technologies: ['React', 'Tailwind CSS', 'Next.js', 'Vercel'],
        results: [
            'Aumento de 120% em leads',
            'Tempo de carregamento: 1.2s',
            'Score SEO: 98/100'
        ]
    },
    3: {
        title: 'Campanha Digital Luxe Brand',
        category: 'design',
        client: 'Luxe Brand Co.',
        year: 2023,
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663450939264/JrqjbrBtoiyEU6PxaBBsBW/kamar-portfolio-1-MuBE4iGnQS5AZari7SAg6k.webp',
        description: 'Design de interface e UX para campanha digital.',
        fullDescription: 'Campanha digital completa para marca de luxo. Incluiu design de interface, UX research, prototipagem e implementação de sistema de design.',
        technologies: ['Figma', 'Adobe XD', 'Prototyping', 'UX Research'],
        results: [
            'Engajamento: +85%',
            '500k impressões',
            'Taxa de conversão: 12%'
        ]
    },
    4: {
        title: 'Logo Design Tech Company',
        category: 'logo',
        client: 'TechCorp Solutions',
        year: 2024,
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663450939264/JrqjbrBtoiyEU6PxaBBsBW/kamar-portfolio-2-CF8ctLvV6bQRufgsMpxjVV.webp',
        description: 'Identidade visual moderna e minimalista.',
        fullDescription: 'Criação de logo minimalista e moderno para empresa de tecnologia. Desenvolvimento de variações, aplicações e guia de uso.',
        technologies: ['Adobe Illustrator', 'Inkscape', 'Logo Design'],
        results: [
            'Logo aprovado em primeira versão',
            'Aplicação em 20+ materiais',
            'Reconhecimento de marca: 90%'
        ]
    },
    5: {
        title: 'E-commerce Premium',
        category: 'website',
        client: 'Premium Store',
        year: 2023,
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663450939264/JrqjbrBtoiyEU6PxaBBsBW/kamar-portfolio-3-DKEUotndZkZnLJHgEkRuWh.webp',
        description: 'Plataforma de vendas online com integração de pagamento.',
        fullDescription: 'Desenvolvimento de plataforma e-commerce completa com integração de pagamento, gestão de inventário e dashboard administrativo.',
        technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        results: [
            'Vendas: +200% no primeiro mês',
            'Usuários ativos: 5000+',
            'Ticket médio: R$ 450'
        ]
    },
    6: {
        title: 'Redesign de Aplicativo',
        category: 'design',
        client: 'AppFlow Inc.',
        year: 2024,
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663450939264/JrqjbrBtoiyEU6PxaBBsBW/kamar-portfolio-1-MuBE4iGnQS5AZari7SAg6k.webp',
        description: 'Interface mobile moderna com foco em usabilidade.',
        fullDescription: 'Redesign completo de aplicativo mobile com foco em usabilidade, acessibilidade e modernização visual. Incluiu testes com usuários.',
        technologies: ['Figma', 'Framer', 'User Testing', 'iOS/Android'],
        results: [
            'Satisfação do usuário: 4.8/5',
            'Redução de erros: 60%',
            'Aumento de retenção: 35%'
        ]
    },
    7: {
        title: 'Sistema de Design Corporativo',
        category: 'branding',
        client: 'Corporate Group',
        year: 2023,
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663450939264/JrqjbrBtoiyEU6PxaBBsBW/kamar-portfolio-2-CF8ctLvV6bQRufgsMpxjVV.webp',
        description: 'Design system completo com componentes reutilizáveis.',
        fullDescription: 'Criação de design system corporativo com componentes reutilizáveis, tokens de design e documentação completa para equipe de desenvolvimento.',
        technologies: ['Figma', 'Design Tokens', 'Component Library'],
        results: [
            'Redução de tempo de desenvolvimento: 40%',
            'Consistência visual: 100%',
            'Componentes reutilizáveis: 150+'
        ]
    },
    8: {
        title: 'Campanha de Marketing Visual',
        category: 'design',
        client: 'Marketing Pro',
        year: 2024,
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663450939264/JrqjbrBtoiyEU6PxaBBsBW/kamar-portfolio-3-DKEUotndZkZnLJHgEkRuWh.webp',
        description: 'Materiais de marketing integrados para múltiplos canais.',
        fullDescription: 'Campanha de marketing visual completa com design de banners, posts para redes sociais, flyers e materiais impressos.',
        technologies: ['Adobe Creative Suite', 'Canva Pro', 'Social Media'],
        results: [
            'Alcance: 2M impressões',
            'Engajamento: 15%',
            'Conversão: 8%'
        ]
    }
};

// ============================================
// Menu Mobile
// ============================================
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Fechar menu ao clicar em um link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// ============================================
// Portfolio Filters
// ============================================
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');

        const filter = button.getAttribute('data-filter');

        // Filter items
        portfolioItems.forEach(item => {
            if (filter === 'all' || item.getAttribute('data-category') === filter) {
                item.style.display = 'block';
                setTimeout(() => {
                    item.style.animation = 'slideInUp 0.6s ease';
                }, 10);
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// ============================================
// Modal
// ============================================
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modalBody');

function openModal(projectId) {
    const project = projects[projectId];
    if (!project) return;

    // Build modal content
    const technologiesHTML = project.technologies
        .map(tech => `<span style="display: inline-block; background-color: #ede9e9; color: #000000; padding: 6px 12px; border-radius: 20px; margin-right: 8px; margin-bottom: 8px; font-size: 0.9rem;">${tech}</span>`)
        .join('');

    const resultsHTML = project.results
        .map(result => `<li style="color: #878787; margin-bottom: 0.5rem;"><span style="color: #f95d33; font-weight: bold; margin-right: 8px;">✓</span>${result}</li>`)
        .join('');

    const content = `
        <div style="padding: 2rem;">
            <h2 style="font-size: 2rem; margin-bottom: 1rem; color: #000000; font-family: 'Montserrat', sans-serif;">${project.title}</h2>
            
            <img src="${project.image}" alt="${project.title}" style="width: 100%; height: 400px; object-fit: cover; border-radius: 8px; margin-bottom: 2rem;">
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin-bottom: 2rem;">
                <div>
                    <h3 style="color: #000000; margin-bottom: 1rem; font-family: 'Montserrat', sans-serif;">Sobre o Projeto</h3>
                    <p style="color: #878787; line-height: 1.6;">${project.fullDescription}</p>
                    
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 1.5rem;">
                        <div>
                            <p style="color: #878787; font-size: 0.9rem; margin-bottom: 0.5rem;">Cliente</p>
                            <p style="font-weight: bold; color: #000000;">${project.client}</p>
                        </div>
                        <div>
                            <p style="color: #878787; font-size: 0.9rem; margin-bottom: 0.5rem;">Ano</p>
                            <p style="font-weight: bold; color: #000000;">${project.year}</p>
                        </div>
                    </div>
                </div>
                
                <div>
                    <h3 style="color: #000000; margin-bottom: 1rem; font-family: 'Montserrat', sans-serif;">Tecnologias</h3>
                    <div style="margin-bottom: 2rem;">${technologiesHTML}</div>
                    
                    <h3 style="color: #000000; margin-bottom: 1rem; font-family: 'Montserrat', sans-serif;">Resultados</h3>
                    <ul style="list-style: none; padding: 0;">${resultsHTML}</ul>
                </div>
            </div>
            
            <div style="border-top: 1px solid #d4d0d0; padding-top: 1.5rem;">
                <p style="color: #878787; margin-bottom: 1rem;">Interessado em um projeto similar?</p>
                <button class="btn-primary" onclick="closeModal()" style="cursor: pointer;">Solicitar Orçamento</button>
            </div>
        </div>
    `;

    modalBody.innerHTML = content;
    modal.classList.add('active');
}

function closeModal() {
    modal.classList.remove('active');
}

// Close modal when clicking outside
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// ============================================
// Form Handling
// ============================================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const message = contactForm.querySelector('textarea').value;

        // Here you would typically send the data to a server
        console.log('Form submitted:', { name, email, message });

        // Show success message
        alert('Obrigado! Sua mensagem foi enviada com sucesso. Entraremos em contato em breve!');
        
        // Reset form
        contactForm.reset();
    });
}

// ============================================
// Scroll Animations
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideInUp 0.8s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe service cards
document.querySelectorAll('.service-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.animationDelay = `${index * 0.1}s`;
    observer.observe(card);
});

// Observe testimonial cards
document.querySelectorAll('.testimonial-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.animationDelay = `${index * 0.1}s`;
    observer.observe(card);
});

// ============================================
// Smooth Scroll for Anchor Links
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// Button Actions
// ============================================
document.querySelectorAll('.btn-primary, .btn-secondary').forEach(button => {
    button.addEventListener('click', (e) => {
        // Check if it's a form submit button
        if (button.type !== 'submit') {
            // Redirect to WhatsApp or contact section
            const whatsappUrl = 'https://wa.me/5511999999999?text=Olá%20Kamar!%20Gostaria%20de%20solicitar%20um%20orçamento.';
            window.open(whatsappUrl, '_blank');
        }
    });
});

// ============================================
// Lazy Loading Images
// ============================================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img').forEach(img => imageObserver.observe(img));
}

// ============================================
// Initialize
// ============================================
console.log('Kamar website loaded successfully!');
