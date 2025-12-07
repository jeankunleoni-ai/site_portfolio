import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { 
  Menu, X, Linkedin, Mail, ArrowUpRight, ArrowLeft,
  Github, Phone, Globe, ChevronDown, Play, MousePointer2, ArrowDown,
  CheckCircle, Layers, PenTool, Cpu, Award, Users, Maximize2, Minimize2, ExternalLink,
  Target, Lightbulb, Zap, BarChart3, Layout
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
      backToWork: "Back to Portfolio",
      underConstruction: "(This section is under construction)"
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
    modal: {
      context: "Context & Opportunity",
      audience: "Audience & Needs",
      approach: "Approach & Design Strategy",
      solution: "Developed Solution",
      impact: "Expected / Demonstrated Impact",
      tools: "Tools Used",
      launch: "Launch Project",
      closeProject: "Close Project",
      loading: "Loading Project..."
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
      backToWork: "Voltar ao Portfólio",
      underConstruction: "(Esta seção está em construção)"
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
      context: "Contexto e Oportunidade",
      audience: "Público e Necessidades",
      approach: "Abordagem / Estratégia de Design",
      solution: "Solução Desenvolvida",
      impact: "Impacto Esperado / Demonstrado",
      tools: "Ferramentas Usadas",
      launch: "Ver Projeto",
      closeProject: "Fechar Projeto",
      loading: "Carregando Projeto..."
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
      backToWork: "Volver al Portafolio",
      underConstruction: "(Esta sección está en construcción)"
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
      context: "Contexto y Oportunidad",
      audience: "Público y Necesidades",
      approach: "Enfoque / Estrategia de Diseño",
      solution: "Solución Desarrollada",
      impact: "Impacto Esperado / Demostrado",
      tools: "Herramientas",
      launch: "Ver Proyecto",
      closeProject: "Cerrar Proyecto",
      loading: "Cargando Proyecto..."
    }
  }
};

// --- PROJECTS DATA ---
function getProjects(lang) {
  const isPt = lang === 'pt';
  const isEs = lang === 'es';

  return [
    {
      id: 3,
      title: isPt ? "Healthy Sys – Eletronic Medical Record Simulation" : isEs ? "Healthy Sys – Simulación de Registro Médico Electrónico" : "Healthy Sys – Electronic Medical Record Simulation",
      category: isPt ? "Treinamento de Sistemas" : isEs ? "Entrenamiento de Sistemas" : "System Training",
      image: "/banners/hospital-sim.jpg",
      projectUrl: "/projects/hospital-sim/story.html", 
      tags: ["Storyline 360", "JavaScript", "HTML5/CSS", "UX Design"],
      desc: isPt ? "Simulação de alta fidelidade de software EMR para prática sem riscos." : isEs ? "Simulación de alta fidelidad de software EMR para práctica sin riesgos." : "High-fidelity EMR software simulation for risk-free practice.",
      details: {
        context: isPt 
          ? (
            <>
              O treinamento em sistemas de Prontuário Eletrônico (EMR) na área da saúde enfrenta frequentemente o dilema entre a passividade de vídeos demonstrativos e o risco inerente ao treinamento "on-the-job". No contexto de protocolos críticos como o da Sepse, onde a velocidade e a precisão no registro de dados são vitais, identificou-se a oportunidade de desenvolver um ambiente de "sandbox" seguro. O objetivo foi criar uma solução que permitisse aos profissionais de saúde praticar a navegação no sistema e a tomada de decisão clínica simultaneamente, eliminando riscos para pacientes reais e a necessidade complexa de instalação de softwares hospitalares pesados em máquinas de treinamento.
            </>
          ) 
          : isEs 
          ? "El entrenamiento en sistemas de Registro Médico Electrónico (EMR) enfrenta el dilema entre videos pasivos y el riesgo del entrenamiento en el trabajo. En protocolos críticos como Sepsis, la velocidad y precisión son vitales. Se identificó la oportunidad de desarrollar un entorno 'sandbox' seguro. El objetivo fue crear una solución que permitiera a los profesionales practicar la navegación y la toma de decisiones clínicas simultáneamente, eliminando riesgos para los pacientes y la necesidad de instalar software pesado."
          : "EMR training often faces a dilemma between passive videos and risky on-the-job training. In critical protocols like Sepsis, speed and data accuracy are vital. We identified an opportunity to develop a safe 'sandbox' environment. The goal was to create a solution allowing healthcare professionals to practice system navigation and clinical decision-making simultaneously, eliminating risks to real patients and the complex need to install heavy hospital software.",
        
        audience: isPt
          ? (
            <>
              <p className="mb-4">O projeto foi desenhado para enfermeiros, médicos residentes e estudantes de medicina que operam sob alta carga cognitiva durante emergências médicas.</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>O principal desafio desse público é a necessidade de dominar a interface do software "Healthy Sys" para que a tecnologia atue como facilitadora, e não como barreira, durante o atendimento crítico.</li>
                <li>A solução atende à necessidade urgente de prática repetitiva e interativa para automatizar o fluxo de registro de medicamentos, sinais vitais e notas de evolução, permitindo que o foco cognitivo do profissional permaneça prioritariamente na estabilização do paciente.</li>
              </ul>
            </>
          )
          : isEs
          ? "Diseñado para enfermeros, residentes y estudiantes de medicina bajo alta carga cognitiva. El desafío es dominar la interfaz 'Healthy Sys' para que la tecnología facilite, no obstaculice, la atención crítica. La solución aborda la necesidad de práctica repetitiva para automatizar el registro de datos, permitiendo que el foco permanezca en la estabilización del paciente."
          : "Designed for nurses, residents, and medical students operating under high cognitive load. The challenge is mastering the 'Healthy Sys' interface so technology acts as an enabler, not a barrier, during critical care. The solution meets the urgent need for repetitive practice to automate data entry, allowing the professional's cognitive focus to remain on patient stabilization.",
        
        approach: isPt
          ? (
            <>
              <p className="mb-4">A estratégia adotada fundamenta-se na teoria da <strong>Aprendizagem Situada</strong> combinada com técnicas de <strong>Andaimagem (Scaffolding)</strong>.</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Tecnicamente, optou-se pela utilização do software Articulate Storyline para criar a simulação de sistema e também utilização de HTML5 e CSS.</li>
                <li>O design instrucional foi estruturado em dois momentos distintos: um modo de "Prática Guiada", onde o sistema oferece suporte visual e feedback imediato para reduzir a frustração inicial na aprendizagem da interface, seguido por um modo de "Avaliação", onde os apoios são removidos (Fading).</li>
                <li>A interface foi desenhada de forma minimalista para reduzir a carga cognitiva estranha, garantindo que a atenção do aluno se concentre exclusivamente nos dados clínicos relevantes para a tomada de decisão.</li>
              </ul>
            </>
          )
          : isEs
          ? "Estrategia basada en Aprendizaje Situado y Andamiaje (Scaffolding). Se utilizó Articulate Storyline, HTML5 y CSS. Diseño instruccional estructurado en 'Práctica Guiada' con soporte visual y 'Evaluación' donde se retiran los apoyos (Fading). Interfaz minimalista para reducir la carga cognitiva extraña y enfocar la atención en datos clínicos relevantes."
          : "Strategy based on Situated Learning and Scaffolding. Used Articulate Storyline, HTML5, and CSS. Instructional design structured into 'Guided Practice' with visual support and 'Assessment' where supports are removed (Fading). Minimalist interface design to reduce extraneous cognitive load, ensuring attention remains on relevant clinical data.",
        
        solution: isPt 
          ? (
            <>
              <p className="mb-4">O produto final consiste em uma simulação de alta fidelidade do sistema hospitalar, operando através de um dashboard interativo que mimetiza a pressão de um turno real.</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>A solução incorpora um motor de cenários lógico desenvolvido em JavaScript capaz de validar inputs complexos, como a verificação cruzada de alergias medicamentosas, a precisão na dosagem de vasopressores e a sintaxe correta de notas de enfermagem.</li>
                <li>O usuário assume o papel de um profissional ativo, realizando desde o login e a triagem de alertas até o tratamento completo do paciente, culminando em um sistema de feedback que gera um relatório detalhado comparando as ações realizadas com o protocolo ideal.</li>
              </ul>
            </>
          )
          : isEs
          ? "Simulación de alta fidelidad con dashboard interactivo que imita un turno real. Motor lógico en JavaScript para validar entradas complejas (alergias, dosificación). El usuario asume un rol activo desde el inicio de sesión hasta el tratamiento, finalizando con un informe detallado comparativo con el protocolo ideal."
          : "High-fidelity simulation with an interactive dashboard mimicking a real shift. Logic engine built in JavaScript validates complex inputs (allergies, dosage). The user assumes an active role from login to treatment, culminating in a feedback system that generates a detailed report comparing actions against the ideal protocol.",
        
        impact: isPt 
          ? (
            <>
              <ul className="list-disc pl-5 space-y-2">
                <li>Diferente de vídeos interativos lineares, o código desenvolvido permite o rastreamento granular do comportamento do usuário, identificando não apenas o resultado final, mas o processo de decisão adotado.</li>
                <li>Além disso, a arquitetura modular do código comprova a escalabilidade do projeto, permitindo a adição de novos casos clínicos e especialidades através da simples atualização dos objetos de dados, sem a necessidade de reescrever a lógica da aplicação.</li>
              </ul>
            </>
          )
          : isEs
          ? "A diferencia de los videos lineales, permite un rastreo granular del comportamiento y proceso de decisión. La arquitectura modular prueba la escalabilidad, permitiendo añadir nuevos casos clínicos mediante la actualización de objetos de datos sin reescribir la lógica."
          : "Unlike linear videos, the code allows granular tracking of user behavior and decision processes. Modular architecture proves scalability, allowing new clinical cases to be added by simply updating data objects without rewriting application logic."
      }
    },
    {
      id: 4,
      title: isPt ? "Cortex Security OS: Treinamento de Cibersegurança" : isEs ? "Cortex Security OS: Entrenamiento de Ciberseguridad" : "Cortex Security OS: Cybersecurity Training",
      category: isPt ? ["Baseado em Cenário", "Simulação"] : isEs ? ["Basado en Escenarios", "Simulación"] : ["Scenario-Based", "Simulation"],
      image: "/banners/cybersecurity.jpg",
      projectUrl: "/projects/cybersecurity/index.html",
      tags: ["React", "HTML5", "CSS", "Figma", "Adobe Suite", "Chat GPT", "Google Gemini"],
      desc: isPt ? "Simulação de desktop corporativo para treinamento de segurança da informação com gamificação de consequências e dilemas reais." : isEs ? "Simulación de escritorio corporativo para capacitación en seguridad de la información con gamificación de consecuencias." : "Corporate desktop simulation for information security training with consequence gamification.",
      details: {
        context: isPt 
          ? "O treinamento tradicional de InfoSec geralmente sofre com baixo engajamento. A Solução: Desenvolvi o Cortex Security OS para preencher a lacuna entre teoria e prática, criando um ambiente de sandbox seguro onde o erro é instrutivo."
          : isEs 
          ? "La capacitación tradicional en Seguridad de la Información (InfoSec) a menudo sufre de bajas tasas de participación y retención. La Solución: Desarrollé Cortex Security OS para cerrar la brecha entre la teoría y la práctica, creando un entorno seguro ('sandbox') donde el error es permitido e instructivo."
          : "Traditional InfoSec training often suffers from low engagement. The Solution: I developed Cortex Security OS to bridge the gap between theory and practice, creating a safe sandbox environment where error is instructive.",
        
        audience: isPt 
          ? "Funcionários corporativos de vários níveis hierárquicos. O público tende a ver a segurança como um obstáculo à produtividade, com uma tendência natural a ignorar protocolos."
          : isEs
          ? "Empleados corporativos de diversos niveles jerárquicos. El público tiende a ver la seguridad como un obstáculo para la productividad y existe una tendencia natural a eludir los protocolos."
          : "Corporate employees of various hierarchical levels. The audience tends to view security as an obstacle to productivity, with a natural tendency to bypass protocols.",
        
        approach: isPt 
          ? "Utilizou-se uma abordagem de Aprendizagem Situada combinada com Gamificação Mecânica. Design de cenário interativo com interface diegética e mecânica de dupla consequência."
          : isEs
          ? "Utilicé un enfoque de Aprendizaje Situado combinado con Gamificación Mecánica. Diseño de escenarios interactivos con interfaz diegética y mecánica de doble consecuencia."
          : "Used a Situated Learning approach combined with Mechanical Gamification. Interactive scenario design with diegetic interface and double consequence mechanics.",
        
        solution: isPt 
          ? "O produto final é uma simulação web responsiva que imita um ambiente de desktop corporativo com interface imersiva e módulos interativos."
          : isEs
          ? "El producto final es una simulación web receptiva que imita un entorno de escritorio corporativo con interfaz inmersiva y módulos interactivos."
          : "The final product is a responsive web simulation that mimics a corporate desktop environment with immersive interface and interactive modules.",
        
        impact: isPt 
          ? "Este projeto serve como uma demonstração técnica e pedagógica. Oferece avaliação holística e aumenta o engajamento por meio da aprendizagem ativa."
          : isEs
          ? "Este proyecto sirve como una demostración técnica y pedagógica. Ofrece evaluación holística y aumenta el compromiso a través del aprendizaje activo."
          : "This project serves as a technical and pedagogical demonstration. Offers holistic assessment and increases engagement through active learning."
      }
    },
    {
      id: 6,
      title: isPt ? "Cenário de Boas Práticas de IA" : isEs ? "Mejores Prácticas de IA" : "AI Best Practices Scenario",
      category: isPt ? "Tecnologia Emergente" : isEs ? "Tecnología Emergente" : "Emerging Tech",
      image: "/banners/ai-ethics.jpg",
      projectUrl: "/projects/ai-ethics/index.html",
      tags: ["AI", "Ethics", "Light Gamification"],
      desc: isPt ? "Guia sobre uso responsável de IA no trabalho." : isEs ? "Guía sobre el uso responsable de la IA en el trabajo." : "Guide on responsible AI usage in the workplace.",
      details: {
        context: isPt 
          ? "Com a rápida adoção de ferramentas de IA, muitas empresas carecem de diretrizes claras sobre o uso ético e seguro." 
          : isEs ? "Con la rápida adopción de herramientas de IA, muchas empresas carecen de directrices claras sobre el uso ético y seguro." : "With rapid AI adoption, companies lacked clear guidelines on ethical and safe usage.",
        audience: isPt
          ? "Colaboradores que utilizam ferramentas de IA Generativa no dia a dia."
          : isEs ? "Empleados que utilizan herramientas de IA generativa a diario." : "Employees using Generative AI tools daily.",
        approach: isPt
          ? "Cenários interativos que apresentam dilemas éticos comuns no uso de IA."
          : isEs ? "Escenarios interactivos que presentan dilemas éticos comunes en el uso de la IA." : "Interactive scenarios presenting common ethical dilemmas in AI usage.",
        solution: isPt 
          ? "Módulo de microlearning com cenários ramificados focados em privacidade de dados e viés algorítmico." 
          : isEs ? "Módulo de microaprendizaje con escenarios ramificados centrados en la privacidad de los datos y el sesgo algorítmico." : "Microlearning module with branching scenarios focused on data privacy and algorithmic bias.",
        impact: isPt 
          ? "Estabelecimento de uma linha de base de conhecimento para adoção segura de IA." 
          : isEs ? "Establecimiento de una línea base de conocimiento para la adopción segura de la IA." : "Established a knowledge baseline for safe AI adoption."
      }
    },
    // --- UPDATED ID 5: Time Management with FULL DETAILS ---
    {
      id: 5,
      title: isPt ? "Time Management: The Professional Journey" : isEs ? "Time Management: The Professional Journey" : "Time Management: The Professional Journey",
      category: isPt ? "Soft Skills" : isEs ? "Habilidades Blandas" : "Soft Skills",
      image: "/banners/time-management.jpg",
      projectUrl: "/projects/time-management/index.html",
      tags: ["Adobe Captivate", "React", "HTML5", "Gamification", "Branching Scenarios"],
      desc: isPt ? "Simulação imersiva de um dia de trabalho caótico com foco em gestão de tempo e priorização." : isEs ? "Simulación inmersiva de un día de trabajo caótico centrada en la gestión del tiempo y la priorización." : "Immersive simulation of a chaotic workday focused on time management and prioritization.",
      details: {
        context: isPt 
          ? (
            <>
              Treinamentos corporativos tradicionais sobre gestão do tempo frequentemente falham ao focar excessivamente na teoria sem oferecer um ambiente seguro para a prática. No mundo real, a pressão por resultados, as interrupções constantes e a ansiedade social dificultam a aplicação fria de conceitos acadêmicos. Identifiquei a oportunidade de criar uma ferramenta que preenchesse essa lacuna entre o conhecimento teórico e a execução prática, simulando a pressão psicológica de um dia de trabalho intenso onde as consequências das más escolhas são sentidas imediatamente, mas sem riscos reais para o negócio.
            </>
          ) 
          : isEs 
          ? "La capacitación corporativa tradicional en gestión del tiempo a menudo falla al centrarse demasiado en la teoría sin ofrecer un entorno seguro para la práctica. En el mundo real, la presión por los resultados dificulta la aplicación de conceptos académicos. Identifiqué la oportunidad de crear una herramienta que cerrara la brecha entre la teoría y la práctica, simulando la presión psicológica de un día de trabajo intenso donde las consecuencias de las malas decisiones se sienten de inmediato, pero sin riesgos reales para el negocio."
          : "Traditional corporate time management training often fails by focusing too heavily on theory without offering a safe environment for practice. In the real world, pressure for results makes applying academic concepts difficult. I identified an opportunity to create a tool bridging the gap between theory and practice, simulating the psychological pressure of an intense workday where the consequences of poor choices are felt immediately, but without real business risks.",
        
        audience: isPt
          ? (
            <>
              <p className="mb-4">O público-alvo é composto por profissionais corporativos, de nível júnior a pleno, que operam em ambientes digitais de ritmo acelerado e alta demanda.</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Estes aprendizes frequentemente enfrentam sobrecarga cognitiva, dificuldade em estabelecer limites com colegas e gestores, e possuem uma tendência prejudicial à multitarefa, o que reduz a produtividade e aumenta o risco de burnout.</li>
                <li>A necessidade central não era apenas receber dicas de produtividade, mas desenvolver a assertividade comportamental e a capacidade analítica para filtrar urgências em tempo real, distinguindo ruído de prioridade.</li>
              </ul>
            </>
          )
          : isEs
          ? "El público objetivo son profesionales corporativos de nivel junior a medio en entornos de ritmo rápido. A menudo enfrentan sobrecarga cognitiva y dificultad para establecer límites. La necesidad central no era solo consejos de productividad, sino desarrollar asertividad conductual y capacidad analítica para filtrar urgencias en tiempo real, distinguiendo el ruido de la prioridad."
          : "The target audience consists of junior to mid-level corporate professionals operating in fast-paced environments. These learners often face cognitive overload and difficulty setting boundaries. The core need was not just productivity tips, but developing behavioral assertiveness and analytical capacity to filter urgencies in real-time, distinguishing noise from priority.",
        
        approach: isPt
          ? (
            <>
              <p className="mb-4">A estratégia central adotada foi a <strong>Aprendizagem Baseada em Cenários Ramificados</strong> combinada com elementos de <strong>Gamificação</strong>, fugindo da linearidade para oferecer uma narrativa onde o aprendiz assume o protagonismo das decisões.</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Do ponto de vista técnico e de design, optei por utilizar a ferramenta de autorica Adobe Captivate com algumas inserções de React+HTML5.</li>
                <li>Também foi adicionado um sistema de assets dinâmicos que adapta ilustrações com base no gênero escolhido pelo usuário e a implementação de um layout responsivo personalizado que simula um player de curso, garantindo acessibilidade e performance em diversos dispositivos.</li>
              </ul>
            </>
          )
          : isEs
          ? "La estrategia central fue el Aprendizaje Basado en Escenarios Ramificados combinado con Gamificación. Técnicamente, utilicé Adobe Captivate con inserciones de React+HTML5. Se añadió un sistema de activos dinámicos que adapta las ilustraciones según el género elegido y un diseño receptivo personalizado."
          : "The central strategy was Branching Scenario-Based Learning combined with Gamification. Technically, I used Adobe Captivate with React+HTML5 insertions. A dynamic asset system was added to adapt illustrations based on the chosen gender, along with a custom responsive layout.",
        
        solution: isPt 
          ? (
            <>
              <p className="mb-4">O produto final é uma simulação imersiva de um dia de trabalho, exportada inteiramente em um único arquivo HTML para maximizar a facilidade de distribuição e portabilidade.</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>A interface utiliza um design limpo e moderno com uma paleta de cores sóbria, oferecendo feedback visual imediato através de barras de progresso que reagem em tempo real às decisões do usuário nas métricas de Organização, Priorização e Comunicação.</li>
                <li>A experiência começa com a personalização do avatar para criar conexão emocional e segue com dilemas realistas, como e-mails urgentes e interrupções de colegas.</li>
                <li>Ao final, o sistema gera dinamicamente um certificado personalizado com um plano de ação baseado nas métricas específicas atingidas pelo aluno.</li>
              </ul>
            </>
          )
          : isEs
          ? "El producto final es una simulación inmersiva de un día de trabajo en un solo archivo HTML. La interfaz utiliza un diseño limpio con retroalimentación visual inmediata a través de barras de progreso. La experiencia incluye personalización de avatar y dilemas realistas. Al final, genera un certificado personalizado con un plan de acción basado en métricas."
          : "The final product is an immersive workday simulation exported as a single HTML file. The interface uses a clean design with immediate visual feedback via progress bars. The experience includes avatar customization and realistic dilemmas. Finally, it dynamically generates a personalized certificate with an action plan based on metrics.",
        
        impact: isPt 
          ? (
            <>
              <p className="mb-4">A implementação desta solução visa transformar a cultura operacional da companhia, deslocando o foco da "ocupação constante" para a "efetividade estratégica".</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Ao capacitar os colaboradores a distinguirem urgência de importância em um ambiente simulado e seguro, a organização pode esperar uma redução tangível no retrabalho e nos gargalos causados por falhas de comunicação ou alinhamento de prazos irreais.</li>
                <li>O treinamento atua diretamente na preservação do capital intelectual, mitigando riscos de burnout e turnover ao instrumentalizar as equipes para gerenciarem sua carga cognitiva de forma sustentável.</li>
              </ul>
            </>
          )
          : isEs
          ? "Esta solución busca transformar la cultura operativa hacia la 'efectividad estratégica'. Al capacitar a los empleados para distinguir la urgencia de la importancia, se espera una reducción en el retrabajo y los cuellos de botella. El entrenamiento ayuda a preservar el capital intelectual, mitigando el agotamiento y la rotación al equipar a los equipos para gestionar su carga cognitiva."
          : "This solution aims to transform operational culture towards 'strategic effectiveness'. By empowering employees to distinguish urgency from importance, the organization can expect reduced rework and bottlenecks. The training helps preserve intellectual capital, mitigating burnout and turnover risks by equipping teams to manage cognitive load sustainably."
      }
    },
    {
      id: 1,
      title: isPt ? "Tour Interativo 3D em Restaurante" : isEs ? "Recorrido Interactivo 3D en Restaurante" : "Interactive 3D Restaurant Tour",
      category: isPt ? "Aprendizagem Imersiva" : isEs ? "Aprendizaje Inmersivo" : "Immersive Learning",
      image: "/banners/restaurant-tour.jpg",
      projectUrl: "/projects/restaurant-tour/index.html",
      tags: ["Three.js", "Blender", "Interactive"],
      desc: isPt ? "Um tour 3D baseado em navegador para integração de funcionários." : isEs ? "Un recorrido 3D basado en navegador para la incorporación de personal." : "A browser-based 3D walkthrough for staff onboarding.",
      details: {
        context: isPt 
          ? "Alta rotatividade e tempo limitado para orientação presencial dificultavam o treinamento de segurança na cozinha." 
          : isEs ? "La alta rotación y el tiempo limitado para la orientación presencial dificultaban la capacitación en seguridad." : "High turnover and limited time for on-site orientation made kitchen safety training difficult.",
        audience: isPt
          ? "Novos funcionários de rede de restaurantes fast-food."
          : isEs ? "Nuevos empleados de una cadena de restaurantes de comida rápida." : "New hires for a fast-food restaurant chain.",
        approach: isPt
          ? "Criação de um gêmeo digital para exploração espacial antes do primeiro dia de trabalho."
          : isEs ? "Creación de un gemelo digital para la exploración espacial antes del primer día de trabajo." : "Creation of a digital twin for spatial exploration before the first day of work.",
        solution: isPt 
          ? "Tour 3D interativo rodando no navegador, com hotspots clicáveis revelando protocolos de segurança." 
          : isEs ? "Recorrido 3D interactivo en el navegador, con puntos de acceso en los que se puede hacer clic que revelan protocolos de seguridad." : "Interactive 3D browser-based tour with clickable hotspots revealing safety protocols.",
        impact: isPt 
          ? "Redução de 40% no tempo de orientação presencial e aumento na conformidade de segurança." 
          : isEs ? "Reducción del 40% en el tiempo de orientación presencial y aumento en el cumplimiento de la seguridad." : "Reduced on-site orientation time by 40% and increased safety compliance."
      }
    },
    {
      id: 2,
      title: isPt ? "Simulação 3D de Higiene das Mãos" : isEs ? "Simulación 3D de Higiene de Manos" : "3D Hand Hygiene Simulation",
      category: isPt ? "Treinamento em Saúde" : isEs ? "Formación Sanitaria" : "Healthcare Training",
      image: "/banners/hand-hygiene.jpg",
      projectUrl: "/projects/hand-hygiene/index.html",
      tags: ["Simulation", "3D Animation", "Gamification"],
      desc: isPt ? "Simulação 3D interativa para técnicas de higiene das mãos da OMS." : isEs ? "Simulación interactiva 3D para técnicas de higiene de manos de la OMS." : "Interactive 3D simulation for WHO hand hygiene techniques.",
      details: {
        context: isPt 
          ? "A conformidade com os protocolos de higiene da OMS era inconsistente entre os departamentos hospitalares." 
          : isEs ? "El cumplimiento de los protocolos de higiene de la OMS era inconsistente entre los departamentos hospitalarios." : "Compliance with WHO hygiene protocols was inconsistent across hospital departments.",
        audience: isPt
          ? "Todos os profissionais de saúde em contato com pacientes."
          : isEs ? "Todos los profesionales de la salud en contacto con pacientes." : "All healthcare professionals in contact with patients.",
        approach: isPt
          ? "Prática deliberada em ambiente virtual para memorização motora dos passos."
          : isEs ? "Práctica deliberada en un entorno virtual para la memorización motora de los pasos." : "Deliberate practice in a virtual environment for motor memorization of steps.",
        solution: isPt 
          ? "Simulação de módulo duplo (Tutorial + Desafio) focada nos movimentos e tempo corretos da lavagem." 
          : isEs ? "Simulación de doble módulo (Tutorial + Desafío) centrada en los movimientos y tiempos correctos de lavado." : "Dual-module simulation (Tutorial + Challenge) focused on correct washing movements and timing.",
        impact: isPt 
          ? "Padronização da técnica entre departamentos e aumento da conscientização." 
          : isEs ? "Estandarización de la técnica entre departamentos y aumento de la concienciación." : "Standardization of technique across departments and increased awareness."
      }
    }
  ];
}

// --- STYLES & FONTS ---
function GlobalStyles() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Inter:wght@300;400;500;600&display=swap');
      
      :root {
        /* Palette */
        --primary-teal: #10b981;   
        --primary-cyan: #06b6d4;   
        --primary-blue: #3b82f6;   
        
        /* Backgrounds */
        --bg-light: #F8FAFC; 
        --bg-darker: #ededed;       
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

      /* Add scroll margin to sections so header doesn't cover content */
      section {
        scroll-margin-top: 100px;
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

      @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
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

      .iframe-loader {
          border: 4px solid rgba(255,255,255,0.1);
          border-left-color: var(--primary-teal);
          border-radius: 50%;
          width: 40px; height: 40px;
          animation: spin 1s linear infinite;
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
        position: absolute; bottom: 0; left: 2rem; right: 2rem; height: 2px;
        border-radius: 9999px; pointer-events: none;
        background: linear-gradient(90deg, var(--primary-teal), var(--primary-cyan), var(--primary-blue), var(--primary-teal));
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
}

// --- CUSTOM CURSOR ---
function CustomCursor() {
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
}

// --- UTILS ---
function Reveal({ children, className = "", delay = 0 }) {
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
}

function TypingEffect({ texts }) {
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
}

// --- REUSABLE SCROLL PILL ---
function ScrollPill({ targetId, onClick }) {
    return (
      <div className="flex justify-center w-full mt-12 pb-8">
          <div onClick={() => onClick(targetId)} className="scroll-pill-btn group" role="button">
              <ArrowDown size={24} className="scroll-arrow-icon" />
          </div>
      </div>
    );
}

// --- NAVIGATION ---
function Navigation({ activeSection, scrollToSection, lang, setLang, t }) {
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

  const sectionMap = {
      home: 'hero',
      about: 'about',
      portfolio: 'work',
      contact: 'contact'
  };

  return (
    <>
      <nav className={`header-container ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-wrapper">
          <div className="header-content">
              <div className="jl-badge" onClick={() => scrollToSection('hero')}>JL-ID</div>
              
              <div className="hidden md:flex items-center">
                <a href="https://www.linkedin.com/in/jean-leoni-213a2765/" target="_blank" className="bg-[#0077b5] rounded-md p-1.5 hover:opacity-90 transition-opacity mr-6"><Linkedin size={18} fill="white" stroke="none" /></a>
                <div className="w-px h-5 bg-slate-600 opacity-30 mr-6"></div>
                <div className="flex items-center gap-8">
                    {Object.entries(t.nav).map(([key, label]) => {
                        const targetSectionId = sectionMap[key];
                        const isActive = activeSection === targetSectionId;
                        return (
                            <button 
                              key={key} 
                              onClick={() => scrollToSection(targetSectionId)}
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
            <div key={key} className="mobile-nav-item" onClick={() => handleMobileClick(sectionMap[key])}>
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
}

// --- NEW PROJECT PAGE COMPONENT (Replaces Modal) ---
function ProjectPage({ project, onBack, t, onLaunchChange }) { 
  const [isLaunched, setIsLaunched] = useState(false);
  const [iframeLoading, setIframeLoading] = useState(true);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleLaunch = () => {
    setIsLaunched(true);
    setIframeLoading(true);
    onLaunchChange(true); // Hide custom cursor
  };

  const handleCloseProject = () => {
    setIsLaunched(false);
    onLaunchChange(false); // Show custom cursor
  };

  if (!project) return null;

  // Iframe View
  if (isLaunched) {
      return (
          // CORRECTION: Added 'cursor-auto' style to force cursor visibility and z-100 to wrapper
          // The header gets z-50 to ensure it's clickable
          <div className="fixed inset-0 z-[100] bg-black flex flex-col h-screen w-screen animate-fade-in" style={{ cursor: 'auto' }}>
              <div className="flex justify-between items-center bg-slate-900 px-6 py-3 border-b border-slate-800 shrink-0 relative z-50">
                  <div className="text-white font-bold flex items-center gap-3">
                      <span className="text-teal-500 font-display text-lg">{project.title}</span>
                  </div>
                  <div className="flex gap-4">
                      <button onClick={handleCloseProject} className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-md text-sm font-medium transition-colors border border-slate-700 cursor-pointer">
                          <X size={18} /> {t.modal.closeProject}
                      </button>
                  </div>
              </div>
              <div className="flex-grow relative w-full h-full bg-slate-900">
                  {iframeLoading && (
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-0">
                          <div className="iframe-loader mb-4"></div>
                          <p>{t.modal.loading}</p>
                      </div>
                  )}
                  {/* Note: The src points to 'project.projectUrl' which should be a path relative to the public folder in Vite */}
                  <iframe 
                      src={project.projectUrl} 
                      className="w-full h-full border-0 relative z-10" 
                      allowFullScreen 
                      onLoad={() => setIframeLoading(false)}
                      title={project.title}
                  />
              </div>
          </div>
      );
  }

  // Define section order for display - Icons Restored as per request
  const sections = [
    { key: 'context', icon: <Target size={24} className="text-teal-500" />, label: t.modal.context },
    { key: 'audience', icon: <Users size={24} className="text-cyan-500" />, label: t.modal.audience },
    { key: 'approach', icon: <Layout size={24} className="text-blue-500" />, label: t.modal.approach },
    { key: 'solution', icon: <Lightbulb size={24} className="text-amber-500" />, label: t.modal.solution },
    { key: 'impact', icon: <BarChart3 size={24} className="text-emerald-500" />, label: t.modal.impact },
  ];

  return (
    <div className="min-h-screen bg-slate-50 fade-in-up">
      {/* Hero Banner for Project */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/40 z-10"></div>
        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 z-20 flex flex-col justify-end pb-16 px-6 max-w-[1440px] mx-auto">
           {/* UPDATED: Category rendering logic to support arrays (multiple badges) */}
           <div className="flex flex-wrap gap-3 mb-4">
             {(Array.isArray(project.category) ? project.category : [project.category]).map((cat, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-md inline-block px-4 py-2 rounded-lg text-white/90 font-semibold border border-white/20">
                  {cat}
                </div>
             ))}
           </div>
           
           <h1 className="font-display font-bold text-4xl md:text-6xl text-white mb-6 max-w-4xl leading-tight">
             {project.title}
           </h1>
           {/* REMOVED: Tags block completely */}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[1000px] mx-auto px-6 py-20">
         <button onClick={onBack} className="flex items-center text-slate-500 hover:text-teal-600 transition-colors mb-12 group font-medium">
            <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform"/> {t.work.backToWork}
         </button>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="md:col-span-2 space-y-12">
               {sections.map((section, idx) => (
                 project.details && project.details[section.key] ? (
                   <Reveal key={section.key} delay={idx * 100}>
                     <div className="relative pl-6 border-l-4 border-slate-200 hover:border-teal-500 transition-colors duration-300">
                        <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                           {section.icon} {section.label}
                        </h3>
                        {/* Content render: handles string or React Node/JSX */}
                        <div className="text-lg text-slate-700 leading-relaxed">
                          {typeof project.details[section.key] === 'string' ? (
                             <p className="whitespace-pre-line">{project.details[section.key]}</p>
                          ) : (
                             project.details[section.key]
                          )}
                        </div>
                     </div>
                   </Reveal>
                 ) : null
               ))}
            </div>

            <div className="space-y-8">
               <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 sticky top-32">
                  <h4 className="font-bold text-slate-900 mb-6 uppercase text-sm tracking-wider border-b border-slate-100 pb-2">{t.modal.tools}</h4>
                  <div className="flex flex-wrap gap-2 mb-8">
                     {project.tags.map((tag,i) => (<span key={i} className="px-3 py-1.5 bg-slate-50 border border-slate-200 rounded text-sm text-slate-600 font-medium">{tag}</span>))}
                  </div>
                  <button onClick={handleLaunch} className="w-full py-4 bg-teal-600 hover:bg-teal-700 text-white rounded-xl font-bold transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 transform hover:-translate-y-1">
                     {t.modal.launch} <ArrowUpRight size={20}/>
                  </button>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}

function ProjectCard({ project, onClick, t }) {
  return (
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
}

// --- MAIN APP ---
export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedProjectId, setSelectedProjectId] = useState(null); // CHANGED: Store only ID
  const [view, setView] = useState('home'); 
  const [targetSection, setTargetSection] = useState(null);
  const [isIframeOpen, setIsIframeOpen] = useState(false); // UPDATED: State for iframe visibility
  
  // UPDATED: Language detection state initialization
  const [lang, setLang] = useState(() => {
    if (typeof window !== 'undefined') {
      const browserLang = navigator.language || navigator.userLanguage;
      if (browserLang.toLowerCase().startsWith('pt')) return 'pt';
      if (browserLang.toLowerCase().startsWith('es')) return 'es';
    }
    return 'en';
  });
  
  const t = translations[lang];

  // Derive the current project from the ID and the current list of translated projects
  const projects = getProjects(lang);
  const selectedProject = projects.find(p => p.id === selectedProjectId);

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
             // FIXED: Set active section to the actual section ID ('work' not 'portfolio')
             // This matches the updated logic in Navigation
             setActiveSection(section);
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [view]);
  
  const handleProjectClick = (project) => {
    setSelectedProjectId(project.id); // CHANGED: Save only ID
    setView('project');
  };

  const handleBackToWork = () => {
    setIsIframeOpen(false); // Ensure it's reset
    scrollToSection('work');
  };

  // Data dependent on language state
  const skillsList = ["Instructional Design", "E-Learning", "3D Animation", "Gamification", "Articulate 360", "Adobe Creative Suite", "Blender", "Unreal Engine", "LMS Management", "SCORM/xAPI", "AI Tools", "Agile"];
  const aboutParagraphs = [t.about.p1, t.about.p2, t.about.p3];

  return (
    <div className="min-h-screen relative bg-slate-50">
      <GlobalStyles />
      
      {/* UPDATED: Only render CustomCursor if iframe is closed */}
      {!isIframeOpen && <CustomCursor />}
      
      {/* Navigation remains visible in both views */}
      <Navigation activeSection={activeSection} scrollToSection={scrollToSection} lang={lang} setLang={setLang} t={t} />

      {view === 'home' ? (
        <div className="fade-in-up">
          {/* HERO - Background color updated to #ededed */}
          <section id="hero" className="relative h-screen min-h-[700px] flex items-center px-6 overflow-hidden" style={{ backgroundColor: 'var(--bg-darker)' }}>
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
            {/* Scroll Pill for Hero */}
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
            {/* Scroll Pill for About */}
            <ScrollPill targetId="work" onClick={scrollToSection} />
          </section>

          {/* WORK - Added scroll-margin-top via CSS in global styles to prevent header cut-off */}
          <section id="work" className="py-32 px-6 bg-white/60">
            <div className="max-w-[1440px] mx-auto">
               <Reveal className="mb-16 flex flex-col md:flex-row md:items-end justify-between border-b border-slate-300 pb-6 gap-4">
                 <div>
                    <h2 className="font-display font-bold text-4xl md:text-5xl text-slate-900 mb-2">
                      {t.work.title} <span className="text-xl md:text-2xl text-slate-500 font-normal ml-3">{t.work.underConstruction}</span>
                    </h2>
                    <p className="text-slate-600 text-lg">{t.work.subtitle}</p>
                 </div>
              </Reveal>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, i) => (<Reveal key={i} delay={i * 100}><ProjectCard project={project} onClick={handleProjectClick} t={t}/></Reveal>))}
              </div>
            </div>
            {/* Scroll Pill for Work */}
            <ScrollPill targetId="contact" onClick={scrollToSection} />
          </section>

          {/* CONTACT - Background color updated to #ededed */}
          <section id="contact" className="py-32 px-6 relative z-10" style={{ backgroundColor: 'var(--bg-darker)' }}>
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
                    <a href="https://www.linkedin.com/in/jean-leoni-213a2765/" target="_blank" rel="noopener noreferrer" className="contact-box-green glass-card p-8 flex flex-col items-center text-center group h-full justify-center cursor-none">
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
        <ProjectPage project={selectedProject} onBack={handleBackToWork} t={t} onLaunchChange={setIsIframeOpen} />
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