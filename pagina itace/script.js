/* =====================================
   JAVASCRIPT - PÁGINA WEB DEL ITACE
===================================== */

document.addEventListener("DOMContentLoaded", function () {

    console.log("¡Bienvenido a la página del ITACE!");

    // 1. MENÚ PRINCIPAL
    const enlacesMenu = document.querySelectorAll(".menu a");

    enlacesMenu.forEach(function (enlace) {
        enlace.addEventListener("click", function () {
            enlacesMenu.forEach(function (otroEnlace) {
                otroEnlace.classList.remove("activo");
            });

            this.classList.add("activo");
        });
    });

    // 2. ANIMACIÓN DE LAS SECCIONES
    const secciones = document.querySelectorAll("main .seccion");

    if ("IntersectionObserver" in window) {
        const observador = new IntersectionObserver(
            function (entradas) {
                entradas.forEach(function (entrada) {
                    if (entrada.isIntersecting) {
                        entrada.target.classList.add("visible");
                        observador.unobserve(entrada.target);
                    }
                });
            },
            { threshold: 0.12 }
        );

        secciones.forEach(function (seccion) {
            seccion.classList.add("revelar");
            observador.observe(seccion);
        });
    }

    // 3. BOTÓN PARA VOLVER ARRIBA
    const botonInicio = document.getElementById("volverArriba");

    if (botonInicio) {
        window.addEventListener("scroll", function () {
            botonInicio.classList.toggle(
                "visible",
                window.scrollY > 300
            );
        });

        botonInicio.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    // 4. DIRECTORIO DOCENTE
    const docentes = [
        {
            nombre: "Bertha Alicia Zapata Aldape",
            materias: "Matemáticas",
            semestres: "1 y 3",
            estudios: "Doctorado",
            experiencia: "2.5 años en ITACE",
            lugar: "C-6",
            area: "general"
        },
        {
            nombre: "Carlos Melecio Carmona Olivares",
            materias: "Módulo profesional de Diseño Gráfico e Inglés",
            semestres: "1 y 3",
            estudios: "Licenciatura en Diseño Gráfico y Maestría en Educación Básica",
            experiencia: "2 años en ITACE",
            lugar: "Laboratorio 2",
            area: "general"
        },
        {
            nombre: "Erik Ramírez Solís",
            materias: "Pensamiento Matemático",
            semestres: "1, 3 y 5",
            estudios: "Ingeniería Electromecánica y Maestría en Educación",
            experiencia: "21 años en ITACE",
            lugar: "C-3",
            area: "general"
        },
        {
            nombre: "Grecia Ávalos Ramos",
            materias: "Lengua y Comunicación",
            semestres: "1 y 3",
            estudios: "Licenciatura y maestría; especialidades por confirmar",
            experiencia: "3 años en ITACE",
            lugar: "B-1",
            area: "general"
        },
        {
            nombre: "Sandra Catalina Silva Camacho",
            materias: "Comunicación",
            semestres: "Por confirmar",
            estudios: "Maestría en Metodología de la Enseñanza",
            experiencia: "25 años en ITACE",
            lugar: "B-4",
            area: "general"
        },
        {
            nombre: "Liliana Rosas Pacheco",
            materias: "Humanidades, Pensamiento Filosófico, Conciencia Histórica, Lengua y Comunicación y Formación Socioemocional",
            semestres: "1 y 5",
            estudios: "Licenciatura en Pedagogía, posgrado en Educación y Doctorado en Educación",
            experiencia: "5 años en ITACE",
            lugar: "A-8",
            area: "general"
        },
        {
            nombre: "Karla Valeria Morán Lerma",
            materias: "Pensamiento Filosófico, Ciencias Sociales y Cultura Digital",
            semestres: "1 y 3",
            estudios: "Maestría; especialidad por confirmar",
            experiencia: "33 años en ITACE",
            lugar: "A-6",
            area: "general"
        },
        {
            nombre: "Benjamín Limón Martínez",
            materias: "Informática, Programación, Inteligencia Artificial y Cultura Digital",
            semestres: "1, 3 y 5; por confirmar según materia",
            estudios: "Administración en Productividad y Calidad; Maestría en Educación",
            experiencia: "5 años en ITACE",
            lugar: "Laboratorio 5",
            area: "programacion"
        },
        {
            nombre: "Isidro de León Flores",
            materias: "Educación Física Premilitar",
            semestres: "1, 3 y 5",
            estudios: "Licenciatura en Psicopedagogía y Pedagogía",
            experiencia: "29 años en ITACE",
            lugar: "Explanada",
            area: "general"
        },
        {
            nombre: "Norma Elena Torres Quiñones",
            materias: "Ciencias Naturales e IT",
            semestres: "1, 3 y 5",
            estudios: "Ingeniería Química y Maestría en Docencia",
            experiencia: "26 años en ITACE",
            lugar: "C-5",
            area: "general"
        },
        {
            nombre: "Luis Enrique Lerma Martínez",
            materias: "Formación Socioemocional, Lengua y Comunicación, Conciencia Histórica y áreas de Mantenimiento Petrolero e Industrial",
            semestres: "1, 3 y 5",
            estudios: "Pedagogía/Docencia e Ingeniería Petrolera",
            experiencia: "33 años en ITACE",
            lugar: "B-2",
            area: "mantenimiento"
        },
        {
            nombre: "Brenda Itzel Herrera García",
            materias: "Informática, Cultura Digital e Inteligencia Artificial",
            semestres: "1 y 3",
            estudios: "Técnica en Informática, Ingeniería en Sistemas Computacionales y Maestría en Educación",
            experiencia: "4 años en ITACE",
            lugar: "Laboratorio 2 y 5",
            area: "programacion"
        },
        {
            nombre: "Walter Allan Barrera Cerda",
            materias: "Comunicación, Inglés III y club de Rondalla",
            semestres: "1, 2 y 3 en club; Inglés III",
            estudios: "Ingeniería Industrial y Administración",
            experiencia: "13 años en ITACE",
            lugar: "A-2",
            area: "general"
        },
        {
            nombre: "Gerardo de la Rosa Ortega",
            materias: "Inglés",
            semestres: "5",
            estudios: "Licenciatura en Contaduría",
            experiencia: "No especificada",
            lugar: "A-4",
            area: "general"
        },
        {
            nombre: "Erika Aidé Pérez Abrego",
            materias: "Ciencias Naturales y Humanidades",
            semestres: "3 y 5",
            estudios: "Ingeniería Industrial en Sistemas y Maestría en Educación",
            experiencia: "No especificada",
            lugar: "A-1",
            area: "general"
        },
        {
            nombre: "Samuel Gonzales de la Fuente",
            materias: "Pensamiento Filosófico, Ciencias Sociales y Estudios Literarios",
            semestres: "1, 3 y 5",
            estudios: "Licenciatura en Administración de Empresas y carrera técnica en Ebanistería",
            experiencia: "No especificada",
            lugar: "C-7",
            area: "administracion"
        },
        {
            nombre: "Laura Esmeralda Heredia Blanco",
            materias: "Ciencias; especialidad en Física y Química",
            semestres: "1, 3 y 5",
            estudios: "Biología",
            experiencia: "No especificada",
            lugar: "A-7",
            area: "general"
        },
        {
            nombre: "Felipe Hernández González",
            materias: "Electrónica, Semiconductores, Lengua y Comunicación y Conciencia Histórica",
            semestres: "3 y 5",
            estudios: "Ingeniería en Electrónica",
            experiencia: "No especificada",
            lugar: "Laboratorio de Electronica",
            area: "electronica"
        },
        {
            nombre: "Yuridia Lizbeth Cepeda Ramos",
            materias: "Inglés y Temas Selectos de Matemáticas II",
            semestres: "No especificados",
            estudios: "Ingeniería Industrial, Licenciatura en Matemáticas, Maestría en Educación e Innovación Educativa; cursa Doctorado en Educación",
            experiencia: "No especificada",
            lugar: "A-5",
            area: "general"
        },
        {
            nombre: "Juan Pablo Torres Adame",
            materias: "Programación, Cultura Digital, club de Robótica y cursos sabatinos de Excel",
            semestres: "1, 3 y 5",
            estudios: "Licenciatura en Información Administrativa y Maestría en Ciencias de la Enseñanza",
            experiencia: "No especificada",
            lugar: "No especificado",
            area: "programacion"
        },
        {
            nombre: "Romualdo Guadalupe de la Cruz",
            materias: "Pensamiento Matemático y áreas de Mantenimiento Industrial e Instalaciones Petroleras",
            semestres: "1 y 3",
            estudios: "Mantenimiento Industrial y Mantenimiento en Instalaciones Petroleras",
            experiencia: "No especificada",
            lugar: "No especificado",
            area: "mantenimiento"
        },
        {
            nombre: "Ulises Solís Rieboles",
            materias: "Ciencias Naturales I, III y V",
            semestres: "1, 3 y 5",
            estudios: "Químico Farmacéutico Biólogo; maestrías en Análisis Clínicos y Educación; cursa Doctorado en Educación",
            experiencia: "No especificada",
            lugar: "A-9",
            area: "general"
        },
        {
            nombre: "Trinidad Hernades Barrera",
            materias: "Ciencias Naturales, Experimentales y Tecnología I, III y V",
            semestres: "1, 3 y 5",
            estudios: "Biología",
            experiencia: "No especificada",
            lugar: "C-7",
            area: "general"
        },
        {
            nombre: "Mildred Yasmín Reyes Norberto",
            materias: "Temas Selectos de Matemáticas II",
            semestres: "5",
            estudios: "Ingeniería Química y Maestría en Docencia",
            experiencia: "No especificada",
            lugar: "C-1",
            area: "general"
        }
    ];

    const campoBusqueda = document.getElementById("buscarDocente");
    const filtroArea = document.getElementById("filtroArea");
    const listaDocentes = document.getElementById("listaDocentes");
    const contadorDocentes = document.getElementById("contadorDocentes");

    // Convierte el texto a minúsculas y permite buscar sin acentos
    function normalizar(texto) {
        return texto
            .toLocaleLowerCase("es")
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");
    }

    // Nombre visible de cada área
    function nombreArea(area) {
        const nombres = {
            programacion: "Programación y tecnología",
            mantenimiento: "Mantenimiento",
            administracion: "Administración",
            electronica: "Electrónica",
            general: "Área general"
        };

        return nombres[area] || "Área por confirmar";
    }

    // Crea una tarjeta para cada docente encontrado
    function crearParrafo(etiqueta, valor) {
        const parrafo = document.createElement("p");
        const negrita = document.createElement("strong");

        negrita.textContent = etiqueta + ": ";
        parrafo.appendChild(negrita);
        parrafo.appendChild(document.createTextNode(valor));

        return parrafo;
    }

    function renderizarDocentes() {
        if (!campoBusqueda || !filtroArea || !listaDocentes) {
            return;
        }

        const consulta = normalizar(campoBusqueda.value.trim());
        const areaElegida = filtroArea.value;

        const filtrados = docentes.filter(function (docente) {
            const contenido = normalizar([
                docente.nombre,
                docente.materias,
                docente.estudios,
                docente.semestres,
                docente.experiencia,
                docente.area
            ].join(" "));

            const coincideTexto = contenido.includes(consulta);

            const coincideArea =
                areaElegida === "todas" ||
                docente.area === areaElegida;

            return coincideTexto && coincideArea;
        });

        listaDocentes.replaceChildren();

        filtrados.forEach(function (docente) {
            const tarjeta = document.createElement("article");
            tarjeta.className = "docente-card";

            const nombre = document.createElement("h3");
            nombre.textContent = docente.nombre;

            const area = document.createElement("span");
            area.className = "docente-area";
            area.textContent = nombreArea(docente.area);

            tarjeta.appendChild(nombre);
            tarjeta.appendChild(area);
            tarjeta.appendChild(
                crearParrafo("Materias/actividades", docente.materias)
            );
            tarjeta.appendChild(
                crearParrafo("Semestres", docente.semestres)
            );
            tarjeta.appendChild(
                crearParrafo("Formación", docente.estudios)
            );
            tarjeta.appendChild(
                crearParrafo("Experiencia", docente.experiencia)
            );
            tarjeta.appendChild(
                crearParrafo("Salón/lugar", docente.lugar)
            );

            listaDocentes.appendChild(tarjeta);
        });

        if (contadorDocentes) {
            contadorDocentes.textContent =
                "Se encontraron " + filtrados.length +
                " de " + docentes.length + " docentes.";
        }

        if (filtrados.length === 0) {
            const mensaje = document.createElement("p");
            mensaje.className = "sin-resultados";
            mensaje.textContent =
                "No se encontraron docentes. Intenta con otro nombre o área.";

            listaDocentes.appendChild(mensaje);
        }
    }

    if (campoBusqueda) {
        campoBusqueda.addEventListener("input", renderizarDocentes);
    }

    if (filtroArea) {
        filtroArea.addEventListener("change", renderizarDocentes);
    }

    renderizarDocentes();

    // 5. AÑO AUTOMÁTICO EN EL PIE DE PÁGINA
    const anioActual = document.getElementById("anioActual");

    if (anioActual) {
        anioActual.textContent = new Date().getFullYear();
    }

    // 6. FORMULARIO DE CONTACTO DE DEMOSTRACIÓN
    const formularioContacto = document.getElementById("formContacto");
    const respuestaContacto = document.getElementById("respuestaContacto");

    if (formularioContacto && respuestaContacto) {
        formularioContacto.addEventListener("submit", function (evento) {
            evento.preventDefault();

            if (!formularioContacto.checkValidity()) {
                formularioContacto.reportValidity();
                return;
            }

            respuestaContacto.textContent =
                "Prueba completada. Este formulario es demostrativo y no envió tus datos.";

            formularioContacto.reset();
        });
    }

});