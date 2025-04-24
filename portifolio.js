document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;
    const form = document.getElementById("contact-form");
    const notification = document.getElementById("notification");
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.querySelector(".menu");

    // Configuração do Particles.js
    const loadParticles = () => {
        particlesJS("particles-js", {
            particles: {
                number: {
                    value: 100, // Número de partículas
                    density: {
                        enable: true,
                        value_area: 800, // Densidade das partículas
                    },
                },
                color: {
                    value: "#333333", // Cor das partículas
                },
                shape: {
                    type: "circle", // Formato das partículas
                },
                opacity: {
                    value: 0.5,
                    random: true, // Opacidade aleatória
                },
                size: {
                    value: 3,
                    random: true, // Tamanho aleatório
                },
                line_linked: {
                    enable: true,
                    distance: 150, // Distância entre partículas conectadas
                    color: "#333333",
                    opacity: 0.4,
                    width: 1,
                },
                move: {
                    enable: true,
                    speed: 2, // Velocidade de movimento
                    direction: "none",
                    random: false,
                    straight: false,
                    out_mode: "out", // Partículas saem da tela
                    bounce: false,
                },
            },
            interactivity: {
                detect_on: "canvas", // Detecta interatividade no canvas
                events: {
                    onhover: {
                        enable: true,
                        mode: "grab", // Conecta partículas ao passar o mouse
                    },
                    onclick: {
                        enable: true,
                        mode: "push", // Adiciona partículas ao clicar
                    },
                },
                modes: {
                    grab: {
                        distance: 200, // Distância para interação
                        line_linked: {
                            opacity: 1, // Opacidade da linha ao interagir
                        },
                    },
                    repulse: {
                        distance: 100, // Distância para repelir partículas
                        duration: 0.4,
                    },
                    push: {
                        particles_nb: 4, // Número de partículas adicionadas ao clicar
                    },
                },
            },
            retina_detect: true, // Suporte para telas retina
        });
    };

    // Alternar tema com transição premium
    themeToggle.addEventListener("click", () => {
        const body = document.body;

        // Obtém a posição do botão de alternância de tema
        const themeToggleRect = themeToggle.getBoundingClientRect();
        const circleOriginTop = themeToggleRect.top + themeToggleRect.height / 2;
        const circleOriginLeft = themeToggleRect.left + themeToggleRect.width / 2;

        // Define as variáveis CSS para a origem do círculo
        body.style.setProperty('--circle-origin-top', `${circleOriginTop}px`);
        body.style.setProperty('--circle-origin-left', `${circleOriginLeft}px`);

        // Adiciona a classe de transição
        body.classList.add("theme-transition");

        // Alterna o tema
        body.classList.toggle("light-mode");

        // Remove a classe de transição após a animação
        setTimeout(() => {
            body.classList.remove("theme-transition");
        }, 1500); // Ajusta para 1.5s, igual à duração da animação no CSS

        // Verifica se o tema é claro e carrega partículas
        if (body.classList.contains("light-mode")) {
            loadParticles();
        } else {
            const particlesContainer = document.getElementById("particles-js");
            particlesContainer.innerHTML = ""; // Remove partículas no tema escuro
        }
    });

    // Alternar menu em dispositivos móveis
    menuToggle.addEventListener("click", () => {
        menu.classList.toggle("active"); // Alterna a classe do menu
        const menuIcon = menuToggle.querySelector("i");

        // Alterna entre os ícones
        if (menu.classList.contains("active")) {
            menuIcon.classList.remove("fa-bars");
            menuIcon.classList.add("fa-xmark"); // Ícone de fechar
        } else {
            menuIcon.classList.remove("fa-xmark");
            menuIcon.classList.add("fa-bars"); // Ícone de menu
        }
    });

    // Função para exibir notificação
    const showNotification = (message) => {
        const notificationMessage = notification.querySelector(".notification-message");
        notificationMessage.textContent = message;

        notification.classList.remove("hidden");
        notification.classList.add("visible");

        // Remove a notificação após 3 segundos
        setTimeout(() => {
            notification.classList.remove("visible");
            notification.classList.add("hidden");
        }, 3000);
    };

    // Botão "Minha Jornada" - Exibe notificação apenas uma vez
    const journeyButton = document.querySelector(".cta-button");
    const hasSeenNotification = sessionStorage.getItem("hasSeenNotification");

    journeyButton.addEventListener("click", () => {
        if (!hasSeenNotification) {
            showNotification("Bem-vindo à minha jornada!");
            sessionStorage.setItem("hasSeenNotification", "true");
        }
    });

    // Animação ao rolar a página
    const fadeElements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });

    fadeElements.forEach(el => observer.observe(el));

    // Animação para os textos <li> e <p>
    const textElements = document.querySelectorAll(
        '.skills-card li, .about-card li, .skills-card p, .about-card p, .certification-card p, .experience-card p'
    );

    const textObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    textElements.forEach(el => textObserver.observe(el));

    // Adiciona botões para navegar no carrossel
    const carousel = document.querySelector('.certifications-carousel');
    const nextButton = document.createElement('button');
    const prevButton = document.createElement('button');

    nextButton.textContent = '>';
    prevButton.textContent = '<';

    nextButton.addEventListener('click', () => {
        carousel.scrollBy({ left: 300, behavior: 'smooth' });
    });

    prevButton.addEventListener('click', () => {
        carousel.scrollBy({ left: -300, behavior: 'smooth' });
    });

    carousel.parentElement.append(prevButton, nextButton);

    // Formulário de contato
    if (!form) {
        console.error("Formulário não encontrado!");
        return;
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Impede o envio real do formulário

        const submitButton = form.querySelector(".submit-button");
        const buttonText = submitButton.querySelector(".button-text");
        const spinner = submitButton.querySelector(".spinner");

        // Ativa o estado de carregamento
        submitButton.classList.add("loading");
        buttonText.textContent = "Enviando...";
        spinner.classList.remove("hidden");

        // Exibe a notificação de "Enviando mensagem"
        showNotification("Enviando mensagem...");

        // Simula o envio do formulário
        setTimeout(() => {
            // Atualiza a notificação para "Mensagem enviada com sucesso!"
            showNotification("Mensagem enviada com sucesso!");

            // Reseta o formulário e o botão
            form.reset();
            submitButton.classList.remove("loading");
            buttonText.textContent = "Enviar Mensagem";
            spinner.classList.add("hidden");
        }, 2000); // Simula um atraso de 2 segundos
    });

    const resumeButton = document.querySelector(".resume-button");

    // Adiciona funcionalidade ao botão "Meu Currículo"
    resumeButton.addEventListener("click", () => {
        window.open("meu-curriculo.pdf", "_blank"); // Substitua "meu-curriculo.pdf" pelo caminho do seu arquivo
    });

    // Botão de Voltar ao Topo
    const backToTopButton = document.getElementById("back-to-top");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTopButton.classList.add("visible");
        } else {
            backToTopButton.classList.remove("visible");
        }
    });

    backToTopButton.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Carregar partículas automaticamente se o tema começar como claro
    if (body.classList.contains("light-mode")) {
        loadParticles();
    }

    // Scroll suave e alinhado ao clicar no menu
    document.querySelectorAll('.menu a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Impede o comportamento padrão do link
            const targetId = link.getAttribute('href').substring(1); // Obtém o ID da seção
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight; // Altura do cabeçalho fixo
                const h2Element = targetElement.querySelector('h2'); // Seleciona o <h2> dentro da seção

                // Calcula o deslocamento para o <h2>, garantindo que ele fique no topo
                const offset = h2Element
                    ? h2Element.getBoundingClientRect().top + window.scrollY - headerHeight
                    : targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;

                window.scrollTo({
                    top: offset,
                    behavior: 'smooth' // Scroll suave
                });
            }
        });
    });

    // Animação de entrada para as seções
    const sections = document.querySelectorAll('section');

    const sectionObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => sectionObserver.observe(section));
});

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");

    if (!form) {
        console.error("Formulário não encontrado!");
        return;
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Impede o envio real do formulário

        const submitButton = form.querySelector(".submit-button");
        const buttonText = submitButton.querySelector(".button-text");
        const buttonIcon = submitButton.querySelector(".button-icon");

        // Estado: Enviando...
        submitButton.classList.add("loading");
        buttonText.textContent = "Enviando...";
        buttonIcon.classList.remove("hidden"); // Exibe o ícone

        // Simula o envio do formulário
        setTimeout(() => {
            // Estado: Sucesso
            submitButton.classList.remove("loading");
            submitButton.classList.add("success");
            buttonText.textContent = "Enviado";
            buttonIcon.innerHTML = '<i class="fa-solid fa-check"></i>'; // Ícone de sucesso

            // Reseta o botão após 3 segundos
            setTimeout(() => {
                submitButton.classList.remove("success");
                buttonText.textContent = "Enviar Mensagem";
                buttonIcon.classList.add("hidden"); // Oculta o ícone novamente
                buttonIcon.innerHTML = '<i class="fa-solid fa-spinner"></i>'; // Volta ao ícone inicial
            }, 3000);
        }, 2000); // Simula um atraso de 2 segundos
    });
});

// Inicializa as partículas no tema claro
document.addEventListener("DOMContentLoaded", () => {
    const particlesContainer = document.getElementById("particles-js");

    if (particlesContainer) {
        loadParticles();
    } else {
        console.error("Contêiner de partículas não encontrado!");
    }
});

// Carregar partículas automaticamente no tema claro
if (document.body.classList.contains("light-mode")) {
    loadParticles();
}

document.addEventListener("DOMContentLoaded", () => {
    const aboutCards = document.querySelectorAll(".about-card");
    const prevButton = document.querySelector(".about-prev");
    const nextButton = document.querySelector(".about-next");
    let currentIndex = 0;

    const updateCards = () => {
        aboutCards.forEach((card, index) => {
            card.classList.remove("active");
            if (index === currentIndex) {
                card.classList.add("active");
            }
        });

        // Atualiza o estado dos botões
        prevButton.disabled = currentIndex === 0;
        nextButton.disabled = currentIndex === aboutCards.length - 1;
    };

    prevButton.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCards();
        }
    });

    nextButton.addEventListener("click", () => {
        if (currentIndex < aboutCards.length - 1) {
            currentIndex++;
            updateCards();
        }
    });

    // Inicializa os cards
    updateCards();
});

document.addEventListener("DOMContentLoaded", () => {
    const timelineItems = document.querySelectorAll(".timeline-item");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        },
        { threshold: 0.2 } // Exibe o card quando 20% dele estiver visível
    );

    timelineItems.forEach((item) => observer.observe(item));
});

document.addEventListener("DOMContentLoaded", () => {
    const introAnimation = document.getElementById("intro-animation");

    // Exibe a introdução por 5 segundos
    setTimeout(() => {
        introAnimation.style.opacity = "0";
        introAnimation.style.visibility = "hidden";
    }, 5000); // 5 segundos
});

document.addEventListener("DOMContentLoaded", () => {
    const introAnimation = document.getElementById("intro-animation");

    setTimeout(() => {
        introAnimation.style.display = "none";
    }, 2000); // Duração da animação (2 segundos)
});

document.addEventListener("DOMContentLoaded", () => {
    const loadingScreen = document.getElementById("loading-screen");

    // Exibe a introdução por 8 segundos
    setTimeout(() => {
        loadingScreen.style.opacity = "0";
        loadingScreen.style.visibility = "hidden";
    }, 8000); // 8 segundos
});
