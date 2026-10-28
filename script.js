// ==========================================
// 1. DEFINICIÓN DE VARIABLES
// ==========================================

const centerName = "Centro Psi";
const centerDescription = "Acompañamos cada etapa del aprendizaje y el bienestar. Trabajamos con obras sociales y particulares.";

// Lista actualizada según la gráfica de Admisiones 2026
const services = [
  { id: 1, title: "Psicopedagogía", desc: "Evaluación y acompañamiento integral en procesos de aprendizaje." },
  { id: 2, title: "Psicología", desc: "Atención individual y grupal para promover el bienestar emocional." },
  { id: 3, title: "Acompañamiento Terapéutico", desc: "Asistencia y contención personalizada en la vida cotidiana del paciente." },
  { id: 4, title: "Fonoaudiología", desc: "Prevención, evaluación y tratamiento de alteraciones en la comunicación y el lenguaje." },
  { id: 5, title: "Nutrición", desc: "Planes alimentarios personalizados orientados a la salud integral." },
  { id: 6, title: "Apoyo Escolar", desc: "Acompañamiento pedagógico para fortalecer el rendimiento académico." },
  { id: 7, title: "Talleres Terapéuticos", desc: "Espacios grupales diseñados específicamente para niños, adolescentes y adultos mayores." }
];

const professionalsList = [
  { 
    id: 1, 
    name: "Da Silva Cyntia", 
    specialty: "Lic. en Psicopedagogía", 
    photo: "pic/cyntia_dasilva.jpeg" , // <-- Solo la ruta entre comillas
    bio: "Especializada en orientación y apoyo psicopedagógico, enfocada en potenciar los procesos de aprendizaje y brindar herramientas a niños, adolescentes, adultos y familias.",
  },
  { 
    id: 2, 
    name: "Gazzo Valeria", 
    specialty: "Lic. en Psicología", 
    photo: "pic/gazzo_valeria.jpeg", 
    bio: "Enfocada en el abordaje clínico para el manejo del bienestar emocional, terapia vincular y herramientas prácticas para el crecimiento personal.",
  },

  { 
    id: 3, 
    name: "Bunziak Dayana", 
    specialty: "Lic. En Nutrición", 
    photo: "pic/bunziak_dayana.jpeg", 
    bio: "Acompañamiento nutricional adaptado a cada estilo de vida, promoviendo una relación saludable con la alimentación y el cuidado personal.",
  },

  { 
    id: 4, 
    name: "Biffi Gartner Rocío Michelle", 
    specialty: "Lic. En Psicología", 
    photo: "pic/biffi_gartner.jpeg", 
    bio: "Especializada en psicología clínica, ofrece un acompañamiento profundo en procesos de autoconocimiento y terapia vincular. Su objetivo principal es ayudar a los pacientes a identificar patrones de conducta, superar cuadros de ansiedad y estrés, y construir relaciones más sanas tanto consigo mismos como con su entorno.",
  },

  { 
    id: 5, 
    name: "Sergio Fernan González ", 
    specialty: "Prof. En enseñanzas técnicas - Docente de apoyo a la inclusión", 
    photo: "pic/gonzales_sergio.jpeg", 
    bio: "Especializado en el acompañamiento a la trayectoria escolar y la integración educativa. Su labor se centra en brindar apoyo a la inclusión, facilitando herramientas pedagógicas adaptadas que potencien las capacidades de cada estudiante y promuevan un entorno de aprendizaje accesible y equitativo.",
  },

  { 
    id: 6, 
    name: "Ana Belén Ham", 
    specialty: "Lic. En Psicopedagogía", 
    photo: "pic/ham_ana.jpeg", 
    bio: "Dedicada a la evaluación, diagnóstico y tratamiento de problemáticas vinculadas al aprendizaje. Trabaja de manera articulada con instituciones educativas y el entorno familiar para crear un espacio de contención y superación de obstáculos académicos.",
  },

  { 
    id: 7, 
    name: "Valeria Karuchek ", 
    specialty: "Lic. En Fonoaudiología", 
    photo: "pic/valeria_karuchek.jpeg", 
    bio: "Especializada en la prevención, evaluación y tratamiento de alteraciones en la comunicación, el lenguaje, el habla y la audición. Su enfoque terapéutico busca brindar herramientas funcionales para mejorar la calidad de vida y la expresión de cada paciente.  ",
  },
];

const contactEmail = "contacto@centropsi.com";
// Actualizado con el teléfono de la imagen
const contactPhone = "3754-435077"; 
const contactAddress = "Av. Siempre Viva 742, Buenos Aires"; // Podés actualizar esto cuando tengas la dirección real
const openingHours = "Lunes a Viernes de 09:00 a 19:00 hs.";
const mapEmbed = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.016887489458!2d-58.381555!3d-34.603722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM2JzEzLjQiUyA1OMKwMjInNTMuNiJX!5e0!3m2!1ses!2sar!4v1680000000000!5m2!1ses!2sar" loading="lazy"></iframe>';

// ==========================================
// 2. LÓGICA DE EJECUCIÓN
// ==========================================

document.addEventListener('DOMContentLoaded', () => {

  // A. Menú Hamburguesa en todas las páginas
  const burger = document.getElementById('burger-menu');
  const navLinks = document.getElementById('nav-links');

  if (burger && navLinks) {
    burger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  // B. Inyección en Página de Servicios
  const servicesGrid = document.getElementById('services-grid');
  if (servicesGrid) {
    services.forEach(service => {
      servicesGrid.innerHTML += `
        <div class="service-card">
          <h3>${service.title}</h3>
          <p>${service.desc}</p>
          <a href="profesionales.html" class="service-btn">Especialistas disponibles →</a>
        </div>
      `;
    });
  }

  // C. Inyección en Página de Profesionales (Diseño estilo imagen)
  const professionalsGrid = document.getElementById('professionals-grid');
  if (professionalsGrid) {
    professionalsList.forEach(prof => {
      professionalsGrid.innerHTML += `
        <div class="person-card">
          <div class="avatar-wrapper">
            <img src="${prof.photo}" alt="${prof.name}">
          </div>
          <h3>${prof.name}</h3>
          <div class="role">${prof.specialty}</div>
          <p class="bio">${prof.bio}</p>
        
        </div>
      `;
    });
  }

  // D. Inyección y Formulario en Página de Contacto
  const infoAddress = document.getElementById('info-address');
  if (infoAddress) {
    document.getElementById('info-address').textContent = "Irigoyen 88, N3315 Leandro N. Alem";
    document.getElementById('info-phone').textContent = contactPhone;
    document.getElementById('info-email').textContent = contactEmail;
    document.getElementById('info-hours').textContent = openingHours;
    document.getElementById('map-container').innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3535.486805342919!2d-55.324511699999995!3d-27.609436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f885fb3baf297f%3A0x91c7904e04323ba0!2sCentro%20Psi!5e0!3m2!1ses-419!2sar!4v1787955499045!5m2!1ses-419!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>`;

    const contactForm = document.getElementById('contact-form');
    const formFeedback = document.getElementById('form-feedback');

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      if (name.length < 3) {
        formFeedback.textContent = "Ingresa tu nombre completo.";
        formFeedback.className = "form-feedback error";
        return;
      }

      if (!email.includes('@')) {
        formFeedback.textContent = "Ingresa un email válido.";
        formFeedback.className = "form-feedback error";
        return;
      }

      if (message.length < 5) {
        formFeedback.textContent = "El mensaje debe ser más detallado.";
        formFeedback.className = "form-feedback error";
        return;
      }

      formFeedback.textContent = "¡Gracias! Tu mensaje fue enviado exitosamente.";
      formFeedback.className = "form-feedback success";
      contactForm.reset();

      setTimeout(() => { formFeedback.textContent = ""; }, 4000);
      const telefonoWhatsApp = "5493754435077"; // Tu número real
    
   const textoMensaje = `Hola, mi nombre es *${name}*%0AMi email es: *${email}*%0A%0A*Consulta:*%0A${message}`;

    const urlWhatsApp = `https://wa.me/${telefonoWhatsApp}?text=${textoMensaje}`;
    
    window.open(urlWhatsApp, '_blank');
    });
    
  }
});

const infografiasList = [
  
  {
    id: 1,
    tipo: "imagen",
    archivo: "pic/turnos_psi.jpg",
    autor: "Centro Psi",
    avatar: "pic/logo_psi.jpg",
  },
  
  {
    id: 2,
    tipo: "imagen", // 'imagen' o 'video'
    archivo: "pic/infografia.png",
    autor: "Centro Psi",
    avatar: "pic/logo_psi.jpg",
  },
  
  {
    id: 3,
    tipo: "imagen",
    archivo: "pic/apoyo_esc.webp",
    autor: "Centro Psi",
    avatar: "pic/logo_psi.jpg",
  },

{
    id: 4,
    tipo: "imagen",
    archivo: "pic/ana_info.webp",
    autor: "Centro Psi",
    avatar: "pic/logo_psi.jpg",
  },

  {
    id: 5,
    tipo: "imagen",
    archivo: "pic/sergio_info.webp",
    autor: "Centro Psi",
    avatar: "pic/logo_psi.jpg",
  },

  {
    id: 6,
    tipo: "imagen",
    archivo: "pic/biffi_info.webp",
    autor: "Centro Psi",
    avatar: "pic/logo_psi.jpg",
  },

  {
    id: 7,
    tipo: "imagen",
    archivo: "pic/bunziak_info.webp",
    autor: "Centro Psi",
    avatar: "pic/logo_psi.jpg",
  },

  {
    id: 8,
    tipo: "imagen",
    archivo: "pic/carlos_info.webp",
    autor: "Centro Psi",
    avatar: "pic/logo_psi.jpg",
  },

  {
    id: 9,
    tipo: "imagen",
    archivo: "pic/cyntia_info.webp",
    autor: "Centro Psi",
    avatar: "pic/logo_psi.jpg",
  },

  {
    id: 10,
    tipo: "imagen",
    archivo: "pic/gazzo_info.webp",
    autor: "Centro Psi",
    avatar: "pic/logo_psi.jpg",
  },

  {
    id: 11,
    tipo: "imagen",
    archivo: "pic/karucheck_info.webp",
    autor: "Centro Psi",
    avatar: "pic/logo_psi.jpg",
  },
  
];

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("infografias-container");
  
  if (container) {
    container.innerHTML = infografiasList.map(item => `
      <div class="instagram-card">
          <!-- Cabecera del post (Avatar, Usuario) -->
          <div class="ig-header">
              <img src="${item.avatar}" alt="Avatar" class="ig-avatar">
              <span class="ig-username">${item.autor}</span>
          </div>

          <!-- Contenido multimedia (Foto o Video) -->
          <div class="ig-media-container">
              ${item.tipo === 'video' 
                ? `<video src="${item.archivo}" controls muted class="ig-media"></video>` 
                : `<img src="${item.archivo}" alt="Publicación" class="ig-media" onclick="abrirModal('${item.archivo}')">`
              }
          </div>

      </div>
      
      

    `).join("");
  }
});

function abrirModal(imagenSrc, titulo) {
  let modal = document.getElementById("modal-ig");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "modal-ig";
    modal.className = "modal-overlay";
    modal.innerHTML = `
      <div class="modal-content">
        <span class="cerrar-modal" onclick="cerrarModal()">&times;</span>
        <img id="modal-img" src="" alt="">
        <h4 id="modal-title"></h4>
      </div>
    `;
    document.body.appendChild(modal);
  }

  document.getElementById("modal-img").src = imagenSrc;
  document.getElementById("modal-title").textContent = titulo || "";
  modal.style.display = "flex";
}

function cerrarModal() {
  const modal = document.getElementById("modal-ig");
  if (modal) modal.style.display = "none";
}

