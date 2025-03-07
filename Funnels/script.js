    document.addEventListener('DOMContentLoaded', function() {
        // Selecciona todos los elementos que tengan las clases para animar
        const animatedElements = document.querySelectorAll('.fade-in, .fade-in-up');
    
        // Opciones para el IntersectionObserver:
        // - threshold: porcentaje del elemento visible para disparar la animación.
        const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
        };
    
        // Crea el observador
        const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Si el elemento está visible (más del 20%)
            if (entry.isIntersecting) {
            entry.target.classList.add('appear');
            // Una vez animado, dejamos de observarlo
            observer.unobserve(entry.target);
            }
        });
        }, observerOptions);
    
        // Observa cada elemento animable
        animatedElements.forEach(el => {
        observer.observe(el);
        });
    });
    
    document.addEventListener('DOMContentLoaded', function() {
        // Elementos del modal y formulario
        var modal = document.getElementById('modalForm');
        var openBtn = document.getElementById('openFormBtn');
        var closeBtn = document.querySelector('.modal-content .close');
        var form = document.getElementById('contactForm');
    
        // Abrir el modal al hacer clic en el botón
        openBtn.addEventListener('click', function() {
        modal.style.display = 'block';
        });
    
        // Cerrar el modal al hacer clic en la "X"
        closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        });
    
        // Cerrar el modal si se hace clic fuera del contenido
        window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
        });
    
        // Al enviar el formulario
        form.addEventListener('submit', function(e) {
        e.preventDefault();
        var name = document.getElementById('name').value;
        var business = document.getElementById('business').value;
        var improve = document.getElementById('improve').value;
    
        // Genera el mensaje para WhatsApp
        var message = "Hola, soy " + name + ". Tengo un negocio de " + business + ". Me gustaría mejorar: " + improve;
        var whatsappUrl = "https://wa.me/523319428664?text=" + encodeURIComponent(message);
    
        // Cierra el modal
        modal.style.display = 'none';
    
        // Abre WhatsApp con el mensaje generado en una nueva pestaña
        window.open(whatsappUrl, '_blank');
        });
    });
    