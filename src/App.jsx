import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { 
  Menu, X, Linkedin, Mail, ArrowUpRight, ArrowLeft,
  Github, Phone, Globe, ChevronDown, Play, MousePointer2, ArrowDown,
  CheckCircle, Layers, PenTool, Cpu, Award, Users
} from 'lucide-react';

// --- TRANSLATIONS / TRADUÇÕES ---
const translations = {
  en: {
    nav: { home: "Home", about: "About", portfolio: "Portfolio", contact: "Contact" },
    hero: {
      hello: "Hello,",
      myName: "My name is",
      role: ["Instructional Design", "Learning Experience Design", "VR & AR production", "Front-end development (HTML5, CSS, React)", "Learning Strategy", "ADDIE", "SCORM", "LMS"],
      cta: "Access my portfolio",
      badge1: "Instructional",
      badge2: "Designer"
    },
    about: {
      title: "About Me",
      p1: "Instructional Designer with over 10 years of experience creating visual and immersive learning experiences. I combine a background in 3D design, animation, and digital media with instructional strategy to make complex content engaging and easy to understand.",
      p2: "Passionate about exploring AI, storytelling, and emerging technologies to design learning that connects, inspires, and delivers real impact.",
      p3: "My expertise spans from managing full e-learning production pipelines to designing characters and environments for immersive applications.",
      skillsTitle: "Core Competencies"
    },
    work: {
      title: "Selected Work",
      subtitle: "Showcase of digital learning experiences, simulations, and interactive storytelling.",
      viewDetails: "View Details",
      backToWork: "Back to Portfolio"
    },
    contact: {
      title: "Let's work together.",
      subtitle: "Whether you have a specific project in mind or just want to chat about educational technology and design, I'd love to hear from you.",
      email: "Email",
      linkedin: "LinkedIn",
      github: "GitHub",
      phone: "Phone"
    },
    footer: {
      rights: "All rights reserved.",
      privacy: "Privacy Policy"
    },
    modal: { // Mantido como referência para as chaves usadas na ProjectPage
      challenge: "The Challenge",
      solution: "The Solution",
      results: "Results",
      tools: "Tools Used",
      launch: "Launch Project"
    }
  },
  pt: {
    nav: { home: "Início", about: "Sobre", portfolio: "Portfólio", contact: "Contato" },
    hero: {
      hello: "Olá,",
      myName: "Meu nome é",
      role: ["Design Instrucional", "Design de Experiência de Aprendizagem", "Produção de VR & AR", "Desenvolvimento Front-end (HTML5, CSS, React)", "Estratégia de Aprendizagem", "ADDIE", "SCORM", "LMS"],
      cta: "Acessar meu portfólio",
      badge1: "Designer",
      badge2: "Instrucional"
    },
    about: {
      title: "Sobre Mim",
      p1: "Designer Instrucional com mais de 10 anos de experiência criando experiências de aprendizagem visuais e imersivas. Combino formação em design 3D, animação e mídia digital com estratégia instrucional para tornar conteúdos complexos engajadores e fáceis de entender.",
      p2: "Apaixonado por explorar IA, storytelling e tecnologias emergentes para projetar aprendizado que conecta, inspira e entrega impacto real.",
      p3: "Minha experiência abrange desde o gerenciamento de pipelines completos de produção de e-learning até o design de personagens e ambientes para aplicações imersivas.",
      skillsTitle: "Principais Competências"
    },
    work: {
      title: "Trabalhos Selecionados",
      subtitle: "Mostruário de experiências de aprendizagem digital, simulações e storytelling interativo.",
      viewDetails: "Ver Detalhes",
      backToWork: "Voltar ao Portfólio"
    },
    contact: {
      title: "Vamos trabalhar juntos.",
      subtitle: "Se você tem um projeto específico em mente ou apenas quer conversar sobre tecnologia educacional e design, adoraria ouvir você.",
      email: "E-mail",
      linkedin: "LinkedIn",
      github: "GitHub",
      phone: "Telefone"
    },
    footer: {
      rights: "Todos os direitos reservados.",
      privacy: "Política de Privacidade"
    },
    modal: {
      challenge: "O Desafio",
      solution: "A Solução",
      results: "Resultados",
      tools: "Ferramentas Usadas",
      launch: "Ver Projeto"
    }
  },
  es: {
    nav: { home: "Inicio", about: "Sobre mí", portfolio: "Portafolio", contact: "Contacto" },
    hero: {
      hello: "Hola,",
      myName: "Mi nombre es",
      role: ["Diseño Instruccional", "Diseño de Experiencias de Aprendizaje", "Producción VR y AR", "Desarrollo Front-end (HTML5, CSS, React)", "Estrategia de Aprendizaje", "ADDIE", "SCORM", "LMS"],
      cta: "Ver mi portafolio",
      badge1: "Diseñador",
      badge2: "Instruccional"
    },
    about: {
      title: "Sobre Mí",
      p1: "Diseñador Instruccional con más de 10 años de experiencia creando experiencias de aprendizaje visuales e inmersivas. Combino formación en diseño 3D, animación y medios digitales con estrategia instruccional para hacer que contenidos complejos sean atractivos y fáciles de entender.",
      p2: "Apasionado por explorar la IA, la narración y las tecnologías emergentes para diseñar aprendizajes que conecten, inspiren y generen un impacto real.",
      p3: "Mi experiencia abarca desde la gestión de pipelines completos de producción de e-learning hasta el diseño de personajes y entornos para aplicaciones inmersivas.",
      skillsTitle: "Competencias Principales"
    },
    work: {
      title: "Trabajos Seleccionados",
      subtitle: "Muestra de experiencias de aprendizaje digital, simulaciones y narración interactiva.",
      viewDetails: "Ver Detalles",
      backToWork: "Volver al Portafolio"
    },
    contact: {
      title: "Trabajemos juntos.",
      subtitle: "Si tienes un proyecto específico en mente o simplemente quieres conversar sobre tecnología educativa y diseño, me encantaría escucharte.",
      email: "Correo",
      linkedin: "LinkedIn",
      github: "GitHub",
      phone: "Teléfono"
    },
    footer: {
      rights: "Todos los derechos reservados.",
      privacy: "Política de Privacidad"
    },
    modal: {
      challenge: "El Desafío",
      solution: "La Solución",
      results: "Resultados",
      tools: "Herramientas",
      launch: "Ver Proyecto"
    }
  }
};

// --- PROJECTS DATA ---
const getProjects = (lang) => {
  const isPt = lang === 'pt';
  const isEs = lang === 'es';

  return [
    {
      id: 1,
      title: isPt ? "Tour Interativo 3D em Restaurante" : isEs ? "Recorrido Interactivo 3D en Restaurante" : "Interactive 3D Restaurant Tour",
      category: isPt ? "Aprendizagem Imersiva" : isEs ? "Aprendizaje Inmersivo" : "Immersive Learning",
      image: "https://placehold.co/1920x1080/f59e0b/white?text=Restaurant+Tour",
      tags: ["Three.js", "Blender", "Interactive"],
      desc: isPt ? "Um tour 3D baseado em navegador para integração de funcionários." : isEs ? "Un recorrido 3D basado en navegador para la incorporación de personal." : "A browser-based 3D walkthrough for staff onboarding.",
      details: {
        challenge: isPt ? "Alta rotatividade e tempo limitado para orientação no local dificultavam o treinamento de segurança." : isEs ? "La alta rotación y el tiempo limitado dificultaban la capacitación en seguridad." : "High turnover and limited time for on-site orientation made safety training difficult.",
        solution: isPt ? "Criação de um gêmeo digital 3D da cozinha do restaurante onde os usuários podem clicar em hotspots para aprender protocolos." : isEs ? "Creación de un gemelo digital 3D de la cocina donde los usuarios aprenden protocolos." : "Created a web-based 3D twin of the restaurant kitchen where users can click hotspots to learn safety protocols.",
        result: isPt ? "Redução de 40% no tempo de orientação e melhoria nas pontuações de conformidade de segurança." : isEs ? "Reducción del 40% en el tiempo de orientación y mejora en el cumplimiento." : "Reduced on-site orientation time by 40% and improved safety compliance scores."
      }
    },
    {
      id: 2,
      title: isPt ? "Simulação 3D de Higiene das Mãos" : isEs ? "Simulación 3D de Higiene de Manos" : "3D Hand Hygiene Simulation",
      category: isPt ? "Treinamento em Saúde" : isEs ? "Formación Sanitaria" : "Healthcare Training",
      image: "https://placehold.co/1920x1080/10b981/white?text=Hand+Hygiene",
      tags: ["Simulation", "3D Animation", "Gamification"],
      desc: isPt ? "Simulação 3D interativa para técnicas de higiene das mãos da OMS." : isEs ? "Simulación interactiva 3D para técnicas de higiene de manos de la OMS." : "Interactive 3D simulation for WHO hand hygiene techniques.",
      details: {
        challenge: isPt ? "Conformidade inconsistente da equipe hospitalar com protocolos de higiene." : isEs ? "Cumplimiento inconsistente de los protocolos por parte del personal." : "Inconsistent compliance with protocols.",
        solution: isPt ? "Simulação de módulo duplo para prática de movimentos e tempo corretos." : isEs ? "Simulación de doble módulo para practicar movimientos y tiempos." : "Dual-module simulation for practice.",
        result: isPt ? "Técnica padronizada entre departamentos." : isEs ? "Técnica estandarizada entre departamentos." : "Standardized technique across departments."
      }
    },
    {
      id: 3,
      title: isPt ? "Simulação de Software Hospitalar" : isEs ? "Simulación de Software Hospitalario" : "Hospital Software Simulation",
      category: isPt ? "Treinamento de Sistemas" : isEs ? "Entrenamiento de Sistemas" : "System Training",
      image: "https://placehold.co/1920x1080/3b82f6/white?text=Software+Sim",
      tags: ["Storyline", "Software Sim", "UX"],
      desc: isPt ? "Simulação de alta fidelidade de software EMR para prática sem riscos." : isEs ? "Simulación de alta fidelidad de software EMR para práctica sin riesgos." : "High-fidelity EMR software simulation for risk-free practice.",
      details: {
        challenge: isPt ? "Treinamento no sistema real apresentava riscos aos dados." : isEs ? "El entrenamiento en el sistema real presentaba riesgos de datos." : "Training on live system posed data risks.",
        solution: isPt ? "Réplica pixel-perfect da interface com modos guiado e teste." : isEs ? "Réplica exacta de la interfaz con modos guiado y de prueba." : "Pixel-perfect interface replica.",
        result: isPt ? "Zero erros de dados durante o treinamento." : isEs ? "Cero errores de datos durante el entrenamiento." : "Zero data errors during training."
      }
    },
    {
      id: 4,
      title: isPt ? "Cenário de Branching de Cibersegurança" : isEs ? "Escenario de Ciberseguridad" : "Cybersecurity Branching Scenario",
      category: isPt ? "Baseado em Cenário" : isEs ? "Basado en Escenarios" : "Scenario-Based",
      image: "https://placehold.co/1920x1080/6366f1/white?text=Cyber+Security",
      tags: ["Branching", "Gamification", "Decision Making"],
      desc: isPt ? "Treinamento narrativo de segurança contra phishing." : isEs ? "Entrenamiento narrativo de seguridad contra phishing." : "Narrative-driven security training against phishing.",
      details: {
        challenge: isPt ? "Treinamento seco era ignorado pela equipe." : isEs ? "El entrenamiento aburrido era ignorado por el personal." : "Dry training was ignored.",
        solution: isPt ? "Jogo narrativo afetando o 'Medidor de Risco'." : isEs ? "Juego narrativo que afecta el 'Medidor de Riesgo'." : "Narrative game affecting 'Risk Meter'.",
        result: isPt ? "Taxas de engajamento dobradas." : isEs ? "Tasas de participación duplicadas." : "Doubled engagement rates."
      }
    },
    {
      id: 5,
      title: isPt ? "Gestão de Tempo Gamificada" : isEs ? "Gestión del Tiempo Gamificada" : "Time Management Gamified",
      category: isPt ? "Soft Skills" : isEs ? "Habilidades Blandas" : "Soft Skills",
      image: "https://placehold.co/1920x1080/ec4899/white?text=Time+Management",
      tags: ["Storytelling", "Gamification", "Scenario"],
      desc: isPt ? "Cenário de ramificação para priorizar tarefas urgentes vs importantes." : isEs ? "Escenario ramificado para priorizar tareas urgentes vs importantes." : "Branching scenario for prioritizing urgent vs important tasks.",
      details: {
        challenge: isPt ? "Gestores lutavam para priorizar." : isEs ? "Los gerentes luchaban para priorizar." : "Managers struggled to prioritize.",
        solution: isPt ? "Dia de trabalho caótico simulado com consequências." : isEs ? "Día de trabajo caótico simulado con consecuencias." : "Simulated chaotic workday with consequences.",
        result: isPt ? "Habilidades de priorização melhoradas." : isEs ? "Habilidades de priorización mejoradas." : "Improved prioritization skills."
      }
    },
    {
      id: 6,
      title: isPt ? "Cenário de Boas Práticas de IA" : isEs ? "Mejores Prácticas de IA" : "AI Best Practices Scenario",
      category: isPt ? "Tecnologia Emergente" : isEs ? "Tecnología Emergente" : "Emerging Tech",
      image: "https://placehold.co/1920x1080/8b5cf6/white?text=AI+Ethics",
      tags: ["AI", "Ethics", "Light Gamification"],
      desc: isPt ? "Guia sobre uso responsável de IA no trabalho." : isEs ? "Guía sobre el uso responsable de la IA en el trabajo." : "Guide on responsible AI usage in the workplace.",
      details: {
        challenge: isPt ? "Diretrizes pouco claras sobre uso de IA." : isEs ? "Pautas poco claras sobre el uso de la IA." : "Unclear guidelines on AI usage.",
        solution: isPt ? "Cenários destacando armadilhas comuns." : isEs ? "Escenarios que destacan errores comunes." : "Scenarios highlighting pitfalls.",
        result: isPt ? "Estabeleceu linha de base para adoção de IA." : isEs ? "Estableció una línea base para la adopción de IA." : "Established baseline for AI adoption."
      }
    }
  ];
};

// --- STYLES & FONTS ---
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Inter:wght@300;400;500;600&display=swap');
    
    :root {
      /* Palette */
      --primary-teal: #10b981;   
      --primary-cyan: #06b6d4;   
      --primary-blue: #3b82f6;   
      
      /* Backgrounds */
      --bg-light: #F8FAFC;        
      --text-dark: #0f172a;
      --header-island-bg: #1e293b;
    }

    html {
      scroll-behavior: smooth;
    }

    body {
      background-color: var(--bg-light);
      color: var(--text-dark);
      font-family: 'Inter', sans-serif;
      overflow-x: hidden;
      cursor: none; /* Default cursor hidden for custom one on desktop */
    }

    /* Mobile Optimization */
    @media (max-width: 768px) {
      body { cursor: auto !important; }
      .custom-cursor, .custom-cursor-dot { display: none !important; }
    }

    h1, h2, h3, h4, button, .font-display {
      font-family: 'Outfit', sans-serif;
    }

    /* --- CUSTOM CURSOR --- */
    .custom-cursor {
      position: fixed; width: 20px; height: 20px;
      border: 1px solid var(--primary-cyan); border-radius: 50%;
      pointer-events: none; z-index: 9999;
      transform: translate(-50%, -50%);
      transition: width 0.2s, height 0.2s, background-color 0.2s;
      mix-blend-mode: difference;
    }
    .custom-cursor.hovered {
      width: 50px; height: 50px;
      background-color: rgba(6, 182, 212, 0.2); border-color: transparent;
    }
    .custom-cursor-dot {
      position: fixed; width: 4px; height: 4px;
      background-color: var(--primary-teal); border-radius: 50%;
      pointer-events: none; z-index: 10000;
      transform: translate(-50%, -50%);
    }

    /* --- ANIMATIONS --- */
    @keyframes gradient-flow {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }

    .text-gradient-animated {
      background: linear-gradient(270deg, var(--primary-teal), var(--primary-cyan), var(--primary-blue), var(--primary-teal));
      background-size: 300% auto;
      -webkit-background-clip: text; -webkit-text-fill-color: transparent;
      background-clip: text; animation: gradient-flow 8s ease infinite; padding-bottom: 0.1em;
    }

    .fade-in-up {
      animation: fadeInUp 0.8s ease-out forwards;
      opacity: 0; transform: translateY(20px);
    }
    @keyframes fadeInUp {
      to { opacity: 1; transform: translateY(0); }
    }

    /* --- COMPONENTS --- */
    .btn-portfolio {
      position: relative; background: transparent;
      border: 2px solid var(--primary-cyan); border-radius: 9999px;
      color: #0f172a; font-weight: 600;
      transition: all 0.3s ease; overflow: hidden; z-index: 1; cursor: none;
    }
    .btn-portfolio::before {
      content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 100%;
      background: linear-gradient(270deg, var(--primary-teal), var(--primary-cyan));
      background-size: 200% auto; z-index: -1;
      transition: opacity 0.3s ease; opacity: 0; animation: gradient-flow 4s ease infinite;
    }
    .btn-portfolio:hover {
      color: white; border-color: transparent;
      transform: translateY(-2px); box-shadow: 0 4px 15px rgba(6, 182, 212, 0.4);
    }
    .btn-portfolio:hover::before { opacity: 1; }

    .wave-line {
      fill: none; stroke-width: 1.5; stroke-linecap: round;
      opacity: 0.7; stroke-dasharray: 2000; stroke-dashoffset: 2000;
      animation: drawLine 4s forwards ease-out;
      filter: drop-shadow(0px 2px 4px rgba(0,0,0,0.05));
    }
    @keyframes drawLine { to { stroke-dashoffset: 0; } }

    .glass-card {
      background: rgba(255, 255, 255, 0.8); backdrop-filter: blur(16px);
      border: 1px solid rgba(255, 255, 255, 0.6); border-radius: 16px;
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
    .glass-card:hover {
      transform: translateY(-8px) scale(1.01);
      box-shadow: 0 20px 40px rgba(6, 182, 212, 0.15);
      border-color: var(--primary-cyan); background: rgba(255, 255, 255, 0.95);
    }

    /* --- HEADER --- */
    .header-container {
      position: fixed; top: 0; left: 0; width: 100%; z-index: 50;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); padding-top: 1.5rem;
    }
    .header-container.scrolled { padding-top: 1rem; }
    .header-wrapper {
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      max-width: 1440px; width: 100%; margin: 0 auto; padding: 0 1.5rem;
    }
    .header-container.scrolled .header-wrapper { max-width: 900px; }

    .header-content {
      background-color: var(--header-island-bg); border-radius: 9999px;
      position: relative; display: flex; align-items: center; justify-content: space-between;
      box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3);
      border: 1px solid rgba(255,255,255,0.05); overflow: visible; /* Allow dropdown */
      transition: all 0.4s ease; padding: 0.75rem 2rem; height: 84px;
    }
    
    .header-gradient-border {
      position: absolute; bottom: 0; left: 10px; right: 10px; height: 2px;
      border-radius: 9999px; pointer-events: none;
      background: linear-gradient(90deg, var(--primary-teal), var(--primary-cyan), var(--primary-blue));
      opacity: 0.8;
    }

    .nav-item {
      color: #cbd5e1; font-weight: 500; font-size: 1rem;
      transition: all 0.3s; padding: 0.25rem 0; position: relative; cursor: none;
    }
    .nav-item:hover { color: white; }
    .nav-item.active { color: white; font-weight: 600; }
    .nav-item.active::after {
      content: ''; position: absolute; bottom: -4px; left: 50%; transform: translateX(-50%);
      width: 4px; height: 4px; background: var(--primary-teal); border-radius: 50%;
    }

    .cursor-blink {
      display: inline-block; width: 2px; height: 1.2em;
      background-color: var(--primary-teal); margin-left: 2px;
      animation: blink 1s step-end infinite; vertical-align: middle;
    }
    @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }

    /* Scroll Pill Button */
    .scroll-pill-btn {
      border: 2px solid #10b981; border-radius: 9999px; width: 36px; height: 58px;
      display: flex; justify-content: center; align-items: center; cursor: none;
      transition: all 0.3s ease; background: rgba(255,255,255,0.9);
      backdrop-filter: blur(4px); box-shadow: 0 4px 12px rgba(16, 185, 129, 0.2);
      animation: bounce-pill 2s infinite;
    }
    .scroll-pill-btn:hover {
      background: #10b981; border-color: #10b981; animation-play-state: paused;
    }
    .scroll-pill-btn:hover .scroll-arrow-icon { color: white; }
    .scroll-arrow-icon { color: #10b981; transition: color 0.3s; }
    
    @keyframes bounce-pill {
        0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
        40% {transform: translateY(10px);} 60% {transform: translateY(5px);}
    }

    /* Project Card */
    .project-card-green {
        border: 1px solid rgba(16, 185, 129, 0.3); transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
    .project-card-green:hover {
        border-color: var(--primary-teal); transform: translateY(-8px) scale(1.01);
        box-shadow: 0 20px 40px rgba(6, 182, 212, 0.15); background: rgba(255, 255, 255, 0.95);
    }
    
    .contact-box-green {
      border: 1px solid var(--primary-teal); background: rgba(255,255,255,0.6); transition: all 0.3s ease;
    }
    .contact-box-green:hover {
      background: rgba(255,255,255,0.95); transform: translateY(-5px);
      box-shadow: 0 10px 30px rgba(16, 185, 129, 0.2); border-color: var(--primary-cyan);
    }

    .skill-pill {
      background-color: rgba(16, 185, 129, 0.1); color: #0f766e;
      padding: 4px 12px; border-radius: 9999px; font-size: 0.85rem; font-weight: 600;
      border: 1px solid rgba(16, 185, 129, 0.2); display: inline-block;
      margin-right: 8px; margin-bottom: 8px;
    }
    
    /* UPDATED: Animated Gradient Badge for JL ID */
    .jl-badge {
        background: linear-gradient(270deg, var(--primary-teal), var(--primary-cyan), var(--primary-blue), var(--primary-teal));
        background-size: 300% auto;
        animation: gradient-flow 8s ease infinite;
        color: white; 
        padding: 0.35rem 0.85rem;
        border-radius: 0.5rem; 
        font-size: 0.875rem; 
        font-weight: 700;
        cursor: pointer; 
        transition: transform 0.2s, box-shadow 0.2s;
        display: inline-block;
        border: 1px solid rgba(255,255,255,0.1);
        text-shadow: 0 1px 2px rgba(0,0,0,0.1);
    }
    .jl-badge:hover { 
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba(6, 182, 212, 0.4);
    }

    .lang-dropdown {
      position: absolute; top: 100%; right: 0;
      background: #1e293b; border: 1px solid rgba(255,255,255,0.1);
      border-radius: 0.5rem; padding: 0.5rem; margin-top: 0.5rem;
      box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.5); z-index: 60;
      min-width: 140px;
    }
    .lang-option {
      display: flex; align-items: center; justify-content: space-between;
      gap: 0.5rem; padding: 0.5rem; color: #cbd5e1; font-size: 0.9rem;
      cursor: pointer; border-radius: 0.25rem; transition: all 0.2s;
    }
    .lang-option:hover { background: rgba(255,255,255,0.1); color: white; }
    .lang-option.active { color: var(--primary-teal); font-weight: 600; }

    /* Mobile Menu */
    .mobile-menu-overlay {
      position: fixed; top: 0; left: 0; width: 100%; height: 100vh;
      background: rgba(15, 23, 42, 0.95); backdrop-filter: blur(10px);
      z-index: 49; display: flex; flex-direction: column; justify-content: center; items-center;
      transition: opacity 0.3s ease, transform 0.3s ease;
      opacity: 0; pointer-events: none; transform: translateY(-20px);
    }
    .mobile-menu-overlay.open { opacity: 1; pointer-events: auto; transform: translateY(0); }
    .mobile-nav-item {
      font-size: 1.5rem; color: #e2e8f0; margin: 1.5rem 0; font-weight: 600;
      cursor: pointer; transition: color 0.3s;
    }
    .mobile-nav-item:hover { color: var(--primary-teal); }

    /* Project Page Specific */
    .project-page-header {
      height: 60vh; min-height: 400px; position: relative;
      background-attachment: fixed; background-size: cover; background-position: center;
    }
  `}</style>
);

// --- CUSTOM CURSOR ---
const CustomCursor = () => {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      if (cursorRef.current && dotRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
      }
    };
    const handleHover = () => cursorRef.current?.classList.add('hovered');
    const handleLeave = () => cursorRef.current?.classList.remove('hovered');

    window.addEventListener('mousemove', moveCursor);
    setTimeout(() => {
       document.querySelectorAll('a, button, .nav-item, .glass-card, .scroll-pill-btn, .contact-box-green, .project-card-green, .jl-badge, .mobile-nav-item, .lang-trigger, .lang-option').forEach(el => {
          el.addEventListener('mouseenter', handleHover);
          el.addEventListener('mouseleave', handleLeave);
      });
    }, 1000); 

    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <>
      <div ref={cursorRef} className="custom-cursor" />
      <div ref={dotRef} className="custom-cursor-dot" />
    </>
  );
};

// --- UTILS ---
const Reveal = ({ children, className = "", delay = 0 }) => {
  const ref = useRef(null);
  const [isVisible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); observer.disconnect(); }
    }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => { if (ref.current) observer.unobserve(ref.current); };
  }, []);

  return (
    <div ref={ref} className={`transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
};

const TypingEffect = ({ texts }) => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(50);

  useEffect(() => {
    setText('');
    setIndex(0);
    setIsDeleting(false);
  }, [texts]);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = texts[index];
      if (isDeleting) {
        setText(fullText.substring(0, text.length - 1));
        setSpeed(25);
      } else {
        setText(fullText.substring(0, text.length + 1));
        setSpeed(50);
      }

      if (!isDeleting && text === fullText) setTimeout(() => setIsDeleting(true), 1000); 
      else if (isDeleting && text === '') {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % texts.length);
      }
    };
    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, index, speed, texts]);

  return (
    <div className="text-lg md:text-xl text-slate-800 font-medium mt-6 flex items-center gap-3 h-8">
      <div className="flex items-center justify-center w-8 h-8 rounded bg-white/80 shadow-sm border border-slate-300">
         <Play size={12} className="fill-teal-600 text-teal-600 ml-0.5" />
      </div> 
      <p className="tracking-wide">{text}<span className="cursor-blink"></span></p>
    </div>
  );
};

// --- NAVIGATION ---
const Navigation = ({ activeSection, scrollToSection, lang, setLang, t }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setIsScrolled(true);
      else setIsScrolled(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLangSelect = (selectedLang) => {
    setLang(selectedLang);
    setLangDropdownOpen(false);
  };

  const handleMobileClick = (id) => {
    setMobileMenuOpen(false);
    scrollToSection(id);
  };

  const langOptions = [
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'pt', label: 'Português', flag: '🇧🇷' },
    { code: 'es', label: 'Español', flag: '🇪🇸' },
  ];

  const currentLang = langOptions.find(opt => opt.code === lang);

  return (
    <>
      <nav className={`header-container ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-wrapper">
          <div className="header-content">
              {/* Updated: jl-badge now has the animated class from GlobalStyles */}
              <div className="jl-badge" onClick={() => scrollToSection('hero')}>JL ID</div>
              
              <div className="hidden md:flex items-center">
                <a href="https://linkedin.com" target="_blank" className="bg-[#0077b5] rounded-md p-1.5 hover:opacity-90 transition-opacity mr-6"><Linkedin size={18} fill="white" stroke="none" /></a>
                <div className="w-px h-5 bg-slate-600 opacity-30 mr-6"></div>
                <div className="flex items-center gap-8">
                    {Object.entries(t.nav).map(([key, label]) => {
                        // UPDATED: Correct mapping for Home -> Hero
                        const sectionId = key === 'home' ? 'hero' : (key === 'portfolio' ? 'work' : key);
                        
                        const isActive = activeSection === sectionId;
                        return (
                            <button 
                              key={key} 
                              onClick={() => scrollToSection(sectionId)}
                              className={`nav-item ${isActive ? 'active' : ''}`}
                            >
                              {label}
                            </button>
                        );
                    })}
                </div>
                <div className="w-px h-5 bg-slate-600 opacity-30 ml-6 mr-6"></div>
                
                {/* Language Dropdown */}
                <div className="relative">
                    <div 
                      className="flex items-center gap-2 text-sm font-medium text-gray-400 cursor-pointer hover:text-white transition-colors lang-trigger"
                      onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                    >
                        <Globe size={16}/> <span>{currentLang.code.toUpperCase()}</span> <ChevronDown size={14}/>
                    </div>
                    {langDropdownOpen && (
                      <div className="lang-dropdown">
                        {langOptions.map(opt => (
                           <div key={opt.code} className={`lang-option ${lang === opt.code ? 'active' : ''}`} onClick={() => handleLangSelect(opt.code)}>
                              <span>{opt.flag}</span>
                              <span className='flex-1'>{opt.label}</span>
                           </div>
                        ))}
                      </div>
                    )}
                </div>
              </div>

              {/* Mobile Burger */}
              <button className="md:hidden text-slate-200 z-50 relative" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
              <div className="header-gradient-border"></div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${mobileMenuOpen ? 'open' : ''}`}>
         {Object.entries(t.nav).map(([key, label]) => (
            // UPDATED: Correct mapping for Mobile Home -> Hero
            <div key={key} className="mobile-nav-item" onClick={() => handleMobileClick(key === 'home' ? 'hero' : (key === 'portfolio' ? 'work' : key))}>
               {label}
            </div>
         ))}
         <div className="mt-8 flex gap-4">
            {langOptions.map(opt => (
                <button 
                  key={opt.code}
                  className={`px-4 py-2 rounded border transition-colors ${lang === opt.code ? 'bg-teal-600 border-teal-600 text-white' : 'border-slate-600 text-slate-400 hover:bg-slate-700'}`} 
                  onClick={() => handleLangSelect(opt.code)}
                >
                    {opt.flag} {opt.code.toUpperCase()}
                </button>
            ))}
         </div>
      </div>
    </>
  );
};

// --- NEW PROJECT PAGE COMPONENT (Replaces Modal) ---
const ProjectPage = ({ project, onBack, t }) => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) return null;

  return (
    <div className="min-h-screen bg-slate-50 fade-in-up">
      {/* Hero Banner for Project */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/40 z-10"></div>
        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 z-20 flex flex-col justify-end pb-16 px-6 max-w-[1440px] mx-auto">
           <div className="bg-white/10 backdrop-blur-md inline-block px-4 py-2 rounded-lg text-white/90 font-semibold mb-4 w-max border border-white/20">
             {project.category}
           </div>
           <h1 className="font-display font-bold text-4xl md:text-6xl text-white mb-6 max-w-4xl leading-tight">
             {project.title}
           </h1>
           <div className="flex flex-wrap gap-2">
              {project.tags.map((tag,i) => (
                <span key={i} className="px-3 py-1 bg-teal-500/80 backdrop-blur-sm text-white rounded-full text-sm font-medium border border-teal-400/50">
                  {tag}
                </span>
              ))}
           </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[1000px] mx-auto px-6 py-20">
         <button onClick={onBack} className="flex items-center text-slate-500 hover:text-teal-600 transition-colors mb-12 group font-medium">
            <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform"/> {t.work.backToWork}
         </button>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="md:col-span-2 space-y-16">
               <Reveal>
                 <div className="relative pl-6 border-l-4 border-teal-500">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                       {t.modal.challenge}
                    </h3>
                    <p className="text-lg text-slate-700 leading-relaxed">{project.details?.challenge}</p>
                 </div>
               </Reveal>
               
               <Reveal delay={100}>
                 <div className="relative pl-6 border-l-4 border-cyan-500">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                       {t.modal.solution}
                    </h3>
                    <p className="text-lg text-slate-700 leading-relaxed">{project.details?.solution}</p>
                 </div>
               </Reveal>

               <Reveal delay={200}>
                 <div className="relative pl-6 border-l-4 border-blue-500">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                       {t.modal.results}
                    </h3>
                    <p className="text-lg text-slate-700 leading-relaxed">{project.details?.result}</p>
                 </div>
               </Reveal>
            </div>

            <div className="space-y-8">
               <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 sticky top-32">
                  <h4 className="font-bold text-slate-900 mb-6 uppercase text-sm tracking-wider border-b border-slate-100 pb-2">{t.modal.tools}</h4>
                  <div className="flex flex-wrap gap-2 mb-8">
                     {project.tags.map((tag,i) => (<span key={i} className="px-3 py-1.5 bg-slate-50 border border-slate-200 rounded text-sm text-slate-600 font-medium">{tag}</span>))}
                  </div>
                  <button className="w-full py-4 bg-teal-600 hover:bg-teal-700 text-white rounded-xl font-bold transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 transform hover:-translate-y-1">
                     {t.modal.launch} <ArrowUpRight size={20}/>
                  </button>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ project, onClick, t }) => (
  <div className="project-card-green glass-card overflow-hidden group cursor-none flex flex-col h-full" onClick={() => onClick(project)}>
    <div className="relative h-56 overflow-hidden border-b border-slate-200 flex-shrink-0">
      <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/5 transition-colors z-10"></div>
      <img src={project.image} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
    </div>
    <div className="p-6 flex-grow flex flex-col">
      <div className="flex flex-wrap gap-2 mb-3">
        {project.tags.slice(0,3).map((tag, i) => (
          <span key={i} className="px-2.5 py-1 bg-slate-50 border border-slate-200 rounded text-[10px] font-bold text-slate-600 uppercase tracking-wide">
            {tag}
          </span>
        ))}
      </div>
      <h3 className="font-display font-bold text-xl text-slate-900 mb-2 group-hover:text-teal-600 transition-colors">
        {project.title}
      </h3>
      <p className="font-sans text-sm text-slate-600 leading-relaxed mb-4 flex-grow line-clamp-3">
        {project.desc}
      </p>
      <button className="inline-flex items-center text-sm font-bold text-teal-700 hover:text-teal-800 group/link mt-auto">
        {t.work.viewDetails} <ArrowUpRight size={16} className="ml-1 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1"/>
      </button>
    </div>
  </div>
);

// --- MAIN APP ---
export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedProject, setSelectedProject] = useState(null);
  const [view, setView] = useState('home'); // 'home' | 'project'
  const [lang, setLang] = useState('en');
  const [targetSection, setTargetSection] = useState(null);
  
  const t = translations[lang];

  // Updated Scroll Logic to handle View Switching
  const scrollToSection = (id) => {
    if (view !== 'home') {
      setView('home');
      setTargetSection(id);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id === 'work' ? 'portfolio' : id);
    }
  };

  // Effect to handle delayed scrolling after view change
  useEffect(() => {
     if (view === 'home' && targetSection) {
        // Small delay to ensure DOM render
        const timer = setTimeout(() => {
           document.getElementById(targetSection)?.scrollIntoView({ behavior: 'smooth' });
           setActiveSection(targetSection === 'work' ? 'portfolio' : targetSection);
           setTargetSection(null);
        }, 100);
        return () => clearTimeout(timer);
     }
  }, [view, targetSection]);

  useEffect(() => {
    const handleScroll = () => {
      if (view !== 'home') return; // Don't track home sections if not in home view

      const sections = ['hero', 'about', 'work', 'contact'];
      const scrollPosition = window.scrollY + (window.innerHeight * 0.4); 
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section === 'work' ? 'portfolio' : section);
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [view]);
  
  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setView('project');
  };

  const handleBackToWork = () => {
    scrollToSection('work');
  };

  // Data dependent on language state
  const projects = getProjects(lang);
  const skillsList = ["Instructional Design", "E-Learning", "3D Animation", "Gamification", "Articulate 360", "Adobe Creative Suite", "Blender", "Unreal Engine", "LMS Management", "SCORM/xAPI", "AI Tools", "Agile"];
  const aboutParagraphs = [t.about.p1, t.about.p2, t.about.p3];

  return (
    <div className="min-h-screen relative bg-slate-50">
      <GlobalStyles />
      <CustomCursor />
      
      {/* Navigation remains visible in both views */}
      <Navigation activeSection={activeSection} scrollToSection={scrollToSection} lang={lang} setLang={setLang} t={t} />

      {view === 'home' ? (
        <div className="fade-in-up">
          {/* HERO */}
          <section id="hero" className="relative h-screen min-h-[700px] flex items-center px-6 overflow-hidden" style={{ backgroundColor: 'var(--bg-light)' }}>
            <svg className="absolute bottom-0 right-0 w-full md:w-[75%] h-auto max-h-[95vh] pointer-events-none z-0 opacity-60" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMaxYMax meet">
                <defs>
                <linearGradient id="gradAnimated" x1="0" y1="0" x2="100%" y2="0">
                    <stop offset="0%" stopColor="#10b981"><animate attributeName="stop-color" values="#10b981; #06b6d4; #3b82f6; #10b981" dur="4s" repeatCount="indefinite" /></stop>
                    <stop offset="100%" stopColor="#06b6d4"><animate attributeName="stop-color" values="#06b6d4; #3b82f6; #10b981; #06b6d4" dur="4s" repeatCount="indefinite" /></stop>
                </linearGradient>
                </defs>
                <path className="wave-line" d="M0,600 C150,500 250,450 450,500 C650,550 750,400 800,300" stroke="url(#gradAnimated)" strokeWidth="1.5" style={{animationDelay: '0ms'}} />
                <path className="wave-line" d="M0,600 C200,550 350,400 550,450 C750,500 780,300 800,200" stroke="url(#gradAnimated)" strokeWidth="1.5" style={{animationDelay: '200ms'}} />
                <path className="wave-line" d="M50,600 C250,500 400,350 600,400 C800,450 820,250 800,150" stroke="url(#gradAnimated)" strokeWidth="1.5" style={{animationDelay: '400ms'}} />
                <path className="wave-line" d="M100,600 C300,450 450,300 650,350 C850,400 850,200 800,100" stroke="url(#gradAnimated)" strokeWidth="1.5" style={{animationDelay: '600ms'}} />
            </svg>
            <div className="max-w-[1440px] w-full mx-auto grid grid-cols-1 md:grid-cols-2 relative z-10 h-full items-center">
              <div className="flex flex-col justify-center md:-mt-12">
                 <Reveal>
                    <h2 className="font-display font-bold text-3xl md:text-5xl lg:text-6xl text-[#10b981] mb-2 tracking-tight">{t.hero.hello}</h2>
                    <h2 className="font-display font-bold text-3xl md:text-5xl lg:text-6xl text-[#10b981] mb-4 tracking-tight">{t.hero.myName}</h2>
                    <h1 className="font-display font-extrabold text-5xl md:text-7xl lg:text-8xl mb-6 text-gradient-animated leading-[1] tracking-tighter whitespace-nowrap">Jean Leoni</h1>
                    <TypingEffect texts={t.hero.role} />
                    <div className="mt-12"><button onClick={() => scrollToSection('work')} className="btn-portfolio px-10 py-4 text-lg shadow-lg">{t.hero.cta}</button></div>
                 </Reveal>
              </div>
              <div className="hidden md:flex flex-col justify-center items-end md:-mt-12">
                 <Reveal delay={400}>
                    <div className="flex flex-col items-end text-right">
                       <h2 className="font-display font-bold text-5xl lg:text-6xl text-gradient-animated leading-tight tracking-tighter opacity-90 pb-2" style={{ textShadow: '0 4px 15px rgba(6, 182, 212, 0.1)' }}>{t.hero.badge1}<br/>{t.hero.badge2}</h2>
                       <div className="w-24 h-2 bg-gradient-to-r from-transparent to-teal-500 mt-4 rounded-full opacity-60"></div>
                    </div>
                 </Reveal>
              </div>
            </div>
            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20">
               <div onClick={() => scrollToSection('about')} className="scroll-pill-btn group" role="button"><ArrowDown size={24} className="scroll-arrow-icon" /></div>
            </div>
          </section>

          {/* ABOUT */}
          <section id="about" className="py-32 px-6 relative z-10 bg-white/40 backdrop-blur-sm">
            <div className="max-w-[1000px] mx-auto">
              <Reveal><div className="mb-12 flex items-center gap-4"><div className="w-12 h-1 bg-teal-500 rounded-full"></div><h2 className="font-display font-bold text-3xl md:text-4xl text-slate-900">{t.about.title}</h2></div></Reveal>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
                <Reveal>
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full opacity-70 blur transition duration-1000 group-hover:opacity-100"></div>
                    <img src="https://iili.io/fBYKQFj.png" alt="Jean Leoni" className="relative w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-white shadow-2xl" style={{ objectPosition: 'center 15%' }} />
                  </div>
                </Reveal>
                <div className="space-y-6 text-xl text-slate-700 leading-relaxed font-sans font-light flex-1">
                  {aboutParagraphs.map((para, i) => (<Reveal key={i} delay={i * 100}><p>{para}</p></Reveal>))}
                   <Reveal delay={400}>
                      <div className="pt-6">
                         <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2"><Cpu size={20} className="text-teal-600"/> {t.about.skillsTitle}</h4>
                         <div className="flex flex-wrap gap-2">{skillsList.map((skill, i) => <span key={i} className="skill-pill">{skill}</span>)}</div>
                      </div>
                   </Reveal>
                </div>
              </div>
            </div>
          </section>

          {/* WORK */}
          <section id="work" className="py-32 px-6 bg-white/60">
            <div className="max-w-[1440px] mx-auto">
               <Reveal className="mb-16 flex flex-col md:flex-row md:items-end justify-between border-b border-slate-300 pb-6 gap-4">
                 <div>
                    <h2 className="font-display font-bold text-4xl md:text-5xl text-slate-900 mb-2">{t.work.title}</h2>
                    <p className="text-slate-600 text-lg">{t.work.subtitle}</p>
                 </div>
              </Reveal>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {getProjects(lang).map((project, i) => (<Reveal key={i} delay={i * 100}><ProjectCard project={project} onClick={handleProjectClick} t={t}/></Reveal>))}
              </div>
            </div>
          </section>

          {/* CONTACT */}
          <section id="contact" className="py-32 px-6 relative z-10" style={{ backgroundColor: 'var(--bg-light)' }}>
            <div className="max-w-[1200px] mx-auto">
              <Reveal className="mb-16 text-center">
                <h2 className="font-display font-bold text-4xl md:text-6xl text-slate-900 mb-6">{t.contact.title}</h2>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto">{t.contact.subtitle}</p>
              </Reveal>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                 <Reveal key={1} delay={100}>
                    <a href="mailto:jean_leoni@hotmail.com" className="contact-box-green glass-card p-8 flex flex-col items-center text-center group h-full justify-center cursor-none">
                        <div className="p-4 bg-white rounded-2xl mb-6 text-slate-500 group-hover:text-teal-600 group-hover:scale-110 transition-all shadow-sm"><Mail size={24}/></div>
                        <h3 className="font-bold text-slate-900 mb-2">{t.contact.email}</h3>
                        <p className="text-sm text-slate-600">jean_leoni@hotmail.com</p>
                    </a>
                 </Reveal>
                 <Reveal key={2} delay={200}>
                    <a href="#" className="contact-box-green glass-card p-8 flex flex-col items-center text-center group h-full justify-center cursor-none">
                        <div className="p-4 bg-white rounded-2xl mb-6 text-slate-500 group-hover:text-teal-600 group-hover:scale-110 transition-all shadow-sm"><Linkedin size={24}/></div>
                        <h3 className="font-bold text-slate-900 mb-2">{t.contact.linkedin}</h3>
                        <p className="text-sm text-slate-600">Jean Leoni</p>
                    </a>
                 </Reveal>
                 <Reveal key={3} delay={300}>
                    <a href="#" className="contact-box-green glass-card p-8 flex flex-col items-center text-center group h-full justify-center cursor-none">
                        <div className="p-4 bg-white rounded-2xl mb-6 text-slate-500 group-hover:text-teal-600 group-hover:scale-110 transition-all shadow-sm"><Github size={24}/></div>
                        <h3 className="font-bold text-slate-900 mb-2">{t.contact.github}</h3>
                        <p className="text-sm text-slate-600">jeanleoni</p>
                    </a>
                 </Reveal>
                 <Reveal key={4} delay={400}>
                    <a href="tel:+5547991850992" className="contact-box-green glass-card p-8 flex flex-col items-center text-center group h-full justify-center cursor-none">
                        <div className="p-4 bg-white rounded-2xl mb-6 text-slate-500 group-hover:text-teal-600 group-hover:scale-110 transition-all shadow-sm"><Phone size={24}/></div>
                        <h3 className="font-bold text-slate-900 mb-2">{t.contact.phone}</h3>
                        <p className="text-sm text-slate-600">+55 47 99185-0992</p>
                    </a>
                 </Reveal>
              </div>
            </div>
          </section>
        </div>
      ) : (
        <ProjectPage project={selectedProject} onBack={handleBackToWork} t={t} />
      )}

      <footer className="py-12 bg-[#0f172a] text-slate-400 text-sm border-t border-slate-800 relative z-20">
        <div className="max-w-[1440px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p>© 2025 Jean Leoni. {t.footer.rights}</p>
          <div className="flex gap-8 mt-4 md:mt-0"><a href="#" className="hover:text-white transition-colors cursor-none">{t.footer.privacy}</a></div>
        </div>
      </footer>
    </div>
  );
}