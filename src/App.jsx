import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, X, Linkedin, Mail, ArrowUpRight, 
  Github, Phone, Globe, ChevronDown, Play, MousePointer2, ArrowDown,
  CheckCircle, Layers, PenTool, Cpu, Award, Users
} from 'lucide-react';

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
      cursor: none;
    }

    @media (max-width: 768px) {
      body { cursor: auto; }
      .custom-cursor, .custom-cursor-dot { display: none !important; }
    }

    h1, h2, h3, h4, button, .font-display {
      font-family: 'Outfit', sans-serif;
    }

    /* --- CUSTOM CURSOR --- */
    .custom-cursor {
      position: fixed;
      width: 20px;
      height: 20px;
      border: 1px solid var(--primary-cyan);
      border-radius: 50%;
      pointer-events: none;
      z-index: 9999;
      transform: translate(-50%, -50%);
      transition: width 0.2s, height 0.2s, background-color 0.2s;
      mix-blend-mode: difference;
    }
    .custom-cursor.hovered {
      width: 50px;
      height: 50px;
      background-color: rgba(6, 182, 212, 0.2);
      border-color: transparent;
    }
    .custom-cursor-dot {
      position: fixed;
      width: 4px;
      height: 4px;
      background-color: var(--primary-teal);
      border-radius: 50%;
      pointer-events: none;
      z-index: 10000;
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
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      animation: gradient-flow 8s ease infinite;
      padding-bottom: 0.1em;
    }

    /* --- COMPONENTS --- */
    .btn-portfolio {
      position: relative;
      background: transparent;
      border: 2px solid var(--primary-cyan);
      border-radius: 9999px;
      color: #0f172a;
      font-weight: 600;
      transition: all 0.3s ease;
      overflow: hidden;
      z-index: 1;
      cursor: none;
    }
    .btn-portfolio::before {
      content: '';
      position: absolute;
      top: 0; left: 0; width: 100%; height: 100%;
      background: linear-gradient(270deg, var(--primary-teal), var(--primary-cyan));
      background-size: 200% auto;
      z-index: -1;
      transition: opacity 0.3s ease;
      opacity: 0;
      animation: gradient-flow 4s ease infinite;
    }
    .btn-portfolio:hover {
      color: white;
      border-color: transparent;
      transform: translateY(-2px);
      box-shadow: 0 4px 15px rgba(6, 182, 212, 0.4);
    }
    .btn-portfolio:hover::before { opacity: 1; }

    .wave-line {
      fill: none;
      stroke-width: 1.5;
      stroke-linecap: round;
      opacity: 0.7;
      stroke-dasharray: 2000;
      stroke-dashoffset: 2000;
      animation: drawLine 4s forwards ease-out;
      filter: drop-shadow(0px 2px 4px rgba(0,0,0,0.05));
    }
    @keyframes drawLine { to { stroke-dashoffset: 0; } }

    .glass-card {
      background: rgba(255, 255, 255, 0.8);
      backdrop-filter: blur(16px);
      border: 1px solid rgba(255, 255, 255, 0.6);
      border-radius: 16px;
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
    .glass-card:hover {
      transform: translateY(-8px) scale(1.01);
      box-shadow: 0 20px 40px rgba(6, 182, 212, 0.15);
      border-color: var(--primary-cyan);
      background: rgba(255, 255, 255, 0.95);
    }

    /* --- HEADER --- */
    .header-container {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 50;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      padding-top: 1.5rem; /* Initial top padding */
    }
    
    /* Scrolled State: Island Mode */
    .header-container.scrolled {
      padding-top: 1rem;
    }
    
    /* Inner wrapper that changes width */
    .header-wrapper {
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      max-width: 1440px; /* Default full width constraint */
      width: 100%;
      margin: 0 auto;
      padding: 0 1.5rem;
    }
    
    .header-container.scrolled .header-wrapper {
      max-width: 900px; /* Contract to island width */
    }

    .header-content {
      background-color: var(--header-island-bg); 
      border-radius: 9999px; /* Always pill shaped in this design */
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;
      box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3);
      border: 1px solid rgba(255,255,255,0.05);
      overflow: hidden;
      transition: all 0.4s ease;
      /* Initial padding for 'Full' look */
      padding: 0.75rem 2rem; 
      height: 84px; /* +5% height from approx 80px */
    }
    
    /* Gradient Border Bottom */
    .header-content::after {
      content: '';
      position: absolute;
      bottom: 0; left: 10px; right: 10px; height: 2px;
      border-radius: 9999px;
      background: linear-gradient(90deg, var(--primary-teal), var(--primary-cyan), var(--primary-blue));
      opacity: 0.8;
    }

    .nav-item {
      color: #cbd5e1;
      font-weight: 500;
      font-size: 1rem;
      transition: all 0.3s;
      padding: 0.25rem 0;
      position: relative;
      cursor: none;
    }
    .nav-item:hover { color: white; }
    .nav-item.active { color: white; font-weight: 600; }
    .nav-item.active::after {
      content: '';
      position: absolute;
      bottom: -4px; left: 50%; transform: translateX(-50%);
      width: 4px; height: 4px; background: var(--primary-teal);
      border-radius: 50%;
    }

    .cursor-blink {
      display: inline-block;
      width: 2px; height: 1.2em;
      background-color: var(--primary-teal);
      margin-left: 2px;
      animation: blink 1s step-end infinite;
      vertical-align: middle;
    }
    @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }

    /* Scroll Pill Button - Synchronized Bounce */
    .scroll-pill-btn {
      border: 2px solid #10b981;
      border-radius: 9999px;
      width: 36px;
      height: 58px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: none;
      transition: all 0.3s ease;
      background: rgba(255,255,255,0.9);
      backdrop-filter: blur(4px);
      box-shadow: 0 4px 12px rgba(16, 185, 129, 0.2);
      animation: bounce-pill 2s infinite; /* Single animation on parent */
    }
    
    .scroll-pill-btn:hover {
      background: #10b981;
      border-color: #10b981;
      animation-play-state: paused; /* Pause bounce on hover */
    }
    
    .scroll-pill-btn:hover .scroll-arrow-icon { color: white; }

    .scroll-arrow-icon {
        color: #10b981;
        transition: color 0.3s;
        /* No separate animation, moves with parent */
    }
    
    @keyframes bounce-pill {
        0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
        40% {transform: translateY(10px);}
        60% {transform: translateY(5px);}
    }

    /* Contact Box Fixed Green Border */
    .contact-box-green {
      border: 1px solid var(--primary-teal); /* Fixed border color */
      background: rgba(255,255,255,0.6);
      transition: all 0.3s ease;
    }
    .contact-box-green:hover {
      background: rgba(255,255,255,0.95);
      transform: translateY(-5px);
      box-shadow: 0 10px 30px rgba(16, 185, 129, 0.2); /* Green shadow on hover */
      border-color: var(--primary-cyan); /* Optional: change border color on hover for effect */
    }
    
    /* Project Card Green Border */
    .project-card-green {
        border: 1px solid rgba(16, 185, 129, 0.3); /* Subtle green border */
        transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
    .project-card-green:hover {
        border-color: var(--primary-teal); /* Stronger green on hover */
        transform: translateY(-8px) scale(1.01);
        box-shadow: 0 20px 40px rgba(6, 182, 212, 0.15);
        background: rgba(255, 255, 255, 0.95);
    }

    /* Skills Tag Style */
    .skill-pill {
      background-color: rgba(16, 185, 129, 0.1);
      color: #0f766e;
      padding: 4px 12px;
      border-radius: 9999px;
      font-size: 0.85rem;
      font-weight: 600;
      border: 1px solid rgba(16, 185, 129, 0.2);
      display: inline-block;
      margin-right: 8px;
      margin-bottom: 8px;
    }
    
    /* JL ID Badge */
    .jl-badge {
        background-color: #475569; 
        color: white;
        padding: 0.35rem 0.85rem;
        border-radius: 0.5rem;
        font-size: 0.875rem;
        font-weight: 700;
        cursor: pointer;
        transition: background-color 0.2s;
        display: inline-block;
    }
    .jl-badge:hover {
        background-color: #64748b;
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
    document.querySelectorAll('a, button, .nav-item, .glass-card, .scroll-pill-btn, .contact-box-green, .project-card-green, .jl-badge').forEach(el => {
      el.addEventListener('mouseenter', handleHover);
      el.addEventListener('mouseleave', handleLeave);
    });

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

// --- TYPING EFFECT (Updated list & Speed) ---
const TypingEffect = () => {
  const words = [
    "Instructional Design", 
    "Learning Experience Design", 
    "VR & AR production", 
    "Front-end development (HTML5, CSS, React)", 
    "Learning Strategy", 
    "ADDIE", 
    "SCORM", 
    "LMS"
  ];
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  // 2x Speed: Normal typing ~50ms, Deleting ~25ms
  const [speed, setSpeed] = useState(50);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = words[index];
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
        setIndex((prev) => (prev + 1) % words.length);
      }
    };
    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, index, words, speed]);

  return (
    <div className="text-lg md:text-xl text-slate-800 font-medium mt-6 flex items-center gap-3 h-8">
      <div className="flex items-center justify-center w-8 h-8 rounded bg-white/80 shadow-sm border border-slate-300">
         <Play size={12} className="fill-teal-600 text-teal-600 ml-0.5" />
      </div> 
      <p className="tracking-wide">{text}<span className="cursor-blink"></span></p>
    </div>
  );
};

// --- NAVIGATION (FIXED SCROLL BEHAVIOR) ---
const Navigation = ({ activeSection, scrollToSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`header-container ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-wrapper">
        <div className="header-content">
            
            {/* Logo JL ID Box */}
            <div 
            className="jl-badge"
            onClick={() => scrollToSection('hero')}
            >
            JL ID
            </div>

            <div className="hidden md:flex items-center">
            
            {/* Social Icon */}
            <a href="https://linkedin.com" target="_blank" className="bg-[#0077b5] rounded-md p-1.5 hover:opacity-90 transition-opacity hover:-translate-y-0.5 mr-6" title="LinkedIn">
                <Linkedin size={18} fill="white" stroke="none" />
            </a>
            
            <div className="w-px h-5 bg-slate-600 opacity-30 mr-6"></div>

            <div className="flex items-center gap-8">
                {/* CORRECTED MENU ORDER: Home, About, Portfolio, Contact */}
                {['Home', 'About', 'Portfolio', 'Contact'].map((item) => {
                   const sectionId = item === 'Home' ? 'hero' : item === 'Portfolio' ? 'work' : item.toLowerCase();
                   const isActive = activeSection === sectionId;
                   return (
                    <button 
                    key={item}
                    onClick={() => scrollToSection(sectionId)}
                    className={`nav-item ${isActive ? 'active' : ''}`}
                    >
                    {item}
                    </button>
                   )
                })}
            </div>

            <div className="w-px h-5 bg-slate-600 opacity-30 ml-6 mr-6"></div>

            <div className="flex items-center gap-2 text-sm font-medium text-gray-400 cursor-pointer hover:text-white transition-colors">
                <Globe size={16}/> <span>EN</span> <ChevronDown size={14}/>
            </div>
            </div>

            <button className="md:hidden text-slate-200">
            <Menu size={28} />
            </button>

        </div>
      </div>
    </nav>
  );
};

// --- PROJECT MODAL ---
const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;
  return (
    <div className="fixed inset-0 z-[60] overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm transition-opacity" onClick={onClose} aria-hidden="true"></div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        
        <div className="inline-block align-bottom bg-white rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full border border-slate-200">
          <div className="relative h-80">
             <img className="w-full h-full object-cover" src={project.image} alt={project.title} />
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
             <button onClick={onClose} className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 rounded-full p-2 text-white transition-colors backdrop-blur-md">
               <X size={24} />
             </button>
             <div className="absolute bottom-6 left-8 right-8">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-teal-500/20 border border-teal-400/30 text-teal-100 rounded-full text-xs font-bold uppercase backdrop-blur-md">{tag}</span>
                  ))}
                </div>
                <h2 className="text-4xl font-display font-bold text-white mb-1">{project.title}</h2>
                <p className="text-slate-300 text-lg">{project.category}</p>
             </div>
          </div>
          
          <div className="p-8 sm:p-12 bg-white">
             <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="md:col-span-2 space-y-8">
                   <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2"><Play size={20} className="text-teal-500"/> The Challenge</h3>
                      <p className="text-slate-600 leading-relaxed">
                        {project.details?.challenge || "Description of the challenge and context for this project."}
                      </p>
                   </div>
                   <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2"><CheckCircle size={20} className="text-teal-500"/> The Solution</h3>
                      <p className="text-slate-600 leading-relaxed">
                         {project.details?.solution || "How we solved the problem using instructional design strategies and technology."}
                      </p>
                   </div>
                   <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2"><Award size={20} className="text-teal-500"/> Results</h3>
                      <p className="text-slate-600 leading-relaxed">
                         {project.details?.result || "Key metrics and outcomes achieved through this initiative."}
                      </p>
                   </div>
                </div>
                
                <div className="space-y-8">
                   <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                      <h4 className="font-bold text-slate-900 mb-4 uppercase text-sm tracking-wider">Tools Used</h4>
                      <div className="flex flex-wrap gap-2">
                         {project.tags.map((tag,i) => (
                            <span key={i} className="px-2 py-1 bg-white border border-slate-200 rounded text-xs text-slate-600">{tag}</span>
                         ))}
                      </div>
                   </div>
                   <button className="w-full py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-lg font-bold transition-colors flex items-center justify-center gap-2">
                      Launch Project <ArrowUpRight size={18}/>
                   </button>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const ProjectCard = ({ project, onClick }) => (
  <div className="project-card-green glass-card overflow-hidden group cursor-none flex flex-col h-full" onClick={() => onClick(project)}>
    <div className="relative h-56 overflow-hidden border-b border-slate-200 flex-shrink-0">
      <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/5 transition-colors z-10"></div>
      <img src={project.image} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-slate-900 shadow-sm z-20 border border-slate-100">
        {project.category}
      </div>
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
        View Details <ArrowUpRight size={16} className="ml-1 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1"/>
      </button>
    </div>
  </div>
);

// --- MAIN APP ---
export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedProject, setSelectedProject] = useState(null);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id === 'work' ? 'portfolio' : id);
  };

  // Fixed Scroll listener for active section highlight (Works for all sections)
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'work', 'contact'];
      // Better logic: find the section that covers the middle of the screen
      const scrollPosition = window.scrollY + (window.innerHeight / 2);

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            // Correctly map 'work' section to 'portfolio' menu item
            const mapId = section === 'work' ? 'portfolio' : section;
            setActiveSection(mapId);
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Updated Project List
  const projects = [
    {
      id: 1,
      title: "Interactive 3D Restaurant Tour",
      category: "Immersive Learning",
      image: "https://placehold.co/800x600/f59e0b/white?text=Restaurant+Tour",
      tags: ["Three.js", "Blender", "Interactive"],
      desc: "A browser-based 3D walkthrough for staff onboarding, allowing new hires to explore the kitchen layout and safety zones virtually.",
      details: {
        challenge: "High turnover and limited time for on-site orientation made safety training difficult.",
        solution: "Created a web-based 3D twin of the restaurant kitchen where users can click hotspots to learn safety protocols.",
        result: "Reduced on-site orientation time by 40% and improved safety compliance scores."
      }
    },
    {
      id: 2,
      title: "3D Hand Hygiene Simulation",
      category: "Healthcare Training",
      image: "https://placehold.co/800x600/10b981/white?text=Hand+Hygiene",
      tags: ["Simulation", "3D Animation", "Gamification"],
      desc: "An interactive 3D simulation with two modules: Surgical Scrub (high fidelity) and Routine Wash, teaching proper WHO techniques.",
      details: {
        challenge: "Hospital staff compliance with hand hygiene protocols was inconsistent.",
        solution: "Developed a dual-module simulation where users must perform the correct motions and timing.",
        result: "Standardized technique across departments and provided instant feedback to learners."
      }
    },
    {
      id: 3,
      title: "Hospital Software Simulation",
      category: "System Training",
      image: "https://placehold.co/800x600/3b82f6/white?text=Software+Sim",
      tags: ["Storyline", "Software Sim", "UX"],
      desc: "A high-fidelity software simulation for hospital EMR systems, allowing staff to practice patient admission without risk.",
      details: {
        challenge: "Training on the live EMR system posed data risks and required supervisor oversight.",
        solution: "Built a pixel-perfect replica of the software interface with guided and test modes.",
        result: "Zero data errors during training and increased confidence in software usage."
      }
    },
    {
      id: 4,
      title: "Cybersecurity Branching Scenario",
      category: "Scenario-Based",
      image: "https://placehold.co/800x600/6366f1/white?text=Cyber+Security",
      tags: ["Branching", "Gamification", "Decision Making"],
      desc: "A 'Choose Your Own Adventure' style scenario where employees face realistic phishing and social engineering attacks.",
      details: {
        challenge: "Dry training was ignored.", solution: "Narrative game affecting 'Risk Meter'.", result: "Doubled engagement rates." } },
    {
      id: 5,
      title: "Time Management Gamified",
      category: "Soft Skills",
      image: "https://placehold.co/800x600/ec4899/white?text=Time+Management",
      tags: ["Storytelling", "Gamification", "Scenario"],
      desc: "Branching scenario for prioritizing urgent vs important tasks.", details: { challenge: "Managers struggled to prioritize.", solution: "Simulated chaotic workday with consequences.", result: "Improved prioritization skills." } },
    {
      id: 6,
      title: "AI Best Practices Scenario",
      category: "Emerging Tech",
      image: "https://placehold.co/800x600/8b5cf6/white?text=AI+Ethics",
      tags: ["AI", "Ethics", "Light Gamification"],
      desc: "Guide on responsible AI usage in the workplace.", details: { challenge: "Unclear guidelines on AI usage.", solution: "Scenarios highlighting pitfalls.", result: "Established baseline for AI adoption." } }
  ];

  const aboutParagraphs = [
    "Instructional Designer with over 10 years of experience creating visual and immersive learning experiences. I combine a background in 3D design, animation, and digital media with instructional strategy to make complex content engaging and easy to understand.",
    "Passionate about exploring AI, storytelling, and emerging technologies to design learning that connects, inspires, and delivers real impact.",
    "My expertise spans from managing full e-learning production pipelines to designing characters and environments for immersive applications."
  ];

  // Skills List for About Section
  const skillsList = ["Instructional Design", "E-Learning", "3D Animation", "Gamification", "Articulate 360", "Adobe Creative Suite", "Blender", "Unreal Engine", "LMS Management", "SCORM/xAPI", "AI Tools", "Agile"];

  return (
    <div className="min-h-screen relative">
      <GlobalStyles />
      <CustomCursor />
      <Navigation activeSection={activeSection} scrollToSection={scrollToSection} />

      {/* HERO */}
      <section id="hero" className="relative h-screen min-h-[700px] flex items-center px-6 overflow-hidden" style={{ backgroundColor: 'var(--bg-light)' }}>
        
        {/* Organic Waves */}
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
          
          {/* Left Column */}
          <div className="flex flex-col justify-center md:-mt-12">
             <Reveal>
                <h2 className="font-display font-bold text-3xl md:text-5xl lg:text-6xl text-[#10b981] mb-2 tracking-tight">Hello,</h2>
                <h2 className="font-display font-bold text-3xl md:text-5xl lg:text-6xl text-[#10b981] mb-4 tracking-tight">My name is</h2>
                <h1 className="font-display font-extrabold text-5xl md:text-7xl lg:text-8xl mb-6 text-gradient-animated leading-[1] tracking-tighter whitespace-nowrap">
                   Jean Leoni
                </h1>
                <TypingEffect />
                <div className="mt-12">
                  <button onClick={() => scrollToSection('work')} className="btn-portfolio px-10 py-4 text-lg shadow-lg">
                     Access my portfolio
                  </button>
                </div>
             </Reveal>
          </div>

          {/* Right Column */}
          <div className="hidden md:flex flex-col justify-center items-end md:-mt-12">
             <Reveal delay={400}>
                <div className="flex flex-col items-end text-right">
                   <div className="flex items-baseline gap-4">
                      <h2 className="font-display font-bold text-5xl lg:text-6xl text-gradient-animated leading-tight tracking-tighter opacity-90 pb-2" style={{ textShadow: '0 4px 15px rgba(6, 182, 212, 0.1)' }}>
                          Instructional
                      </h2>
                      <h2 className="font-display font-bold text-5xl lg:text-6xl text-gradient-animated leading-tight tracking-tighter opacity-90 pb-2" style={{ textShadow: '0 4px 15px rgba(6, 182, 212, 0.1)' }}>
                          Designer
                      </h2>
                   </div>
                   <div className="w-24 h-2 bg-gradient-to-r from-transparent to-teal-500 mt-4 rounded-full opacity-60"></div>
                </div>
             </Reveal>
          </div>

        </div>

        {/* SCROLL DOWN PILL BUTTON (Synchronized Animation) */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20">
           <div 
             onClick={() => scrollToSection('about')}
             className="scroll-pill-btn group"
             role="button"
             aria-label="Scroll down"
           >
             <ArrowDown size={24} className="scroll-arrow-icon" />
           </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-32 px-6 relative z-10 bg-white/40 backdrop-blur-sm">
        <div className="max-w-[1000px] mx-auto">
          <Reveal className="mb-12 flex items-center gap-4">
            <div className="w-12 h-1 bg-teal-500 rounded-full"></div>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-slate-900">About Me</h2>
          </Reveal>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
            {/* Profile Photo (Fixed Link & Crop) */}
            <Reveal>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full opacity-70 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200 animate-spin-slow"></div>
                <img 
                  src="https://iili.io/fBYKQFj.png" 
                  alt="Jean Leoni" 
                  className="relative w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-white shadow-2xl"
                  style={{ objectPosition: 'center top' }} // Crops to face
                />
              </div>
            </Reveal>

            <div className="space-y-6 text-xl text-slate-700 leading-relaxed font-sans font-light flex-1">
              {aboutParagraphs.map((para, i) => (
                  <Reveal key={i} delay={i * 100}><p>{para}</p></Reveal>
              ))}
              
              {/* Skills Section */}
               <Reveal delay={400}>
                  <div className="pt-6">
                     <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2"><Cpu size={20} className="text-teal-600"/> Core Competencies</h4>
                     <div className="flex flex-wrap gap-2">
                        {skillsList.map((skill, i) => (
                           <span key={i} className="skill-pill">{skill}</span>
                        ))}
                     </div>
                  </div>
               </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS (Renamed ID to 'work' to match scroll function) */}
      <section id="work" className="py-32 px-6 bg-white/60">
        <div className="max-w-[1440px] mx-auto">
           <Reveal className="mb-16 flex flex-col md:flex-row md:items-end justify-between border-b border-slate-300 pb-6 gap-4">
             <div>
                <h2 className="font-display font-bold text-4xl md:text-5xl text-slate-900 mb-2">Selected Work</h2>
                <p className="text-slate-600 text-lg">Showcase of digital learning experiences, simulations, and interactive storytelling.</p>
             </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <Reveal key={i} delay={i * 100}>
                <ProjectCard project={project} onClick={setSelectedProject} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT (Updated Text) */}
      <section id="contact" className="py-32 px-6 relative z-10" style={{ backgroundColor: 'var(--bg-light)' }}>
        <div className="max-w-[1200px] mx-auto">
          <Reveal className="mb-16 text-center">
            <h2 className="font-display font-bold text-4xl md:text-6xl text-slate-900 mb-6">Let's work together.</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
               Whether you have a specific project in mind or just want to chat about educational technology and design, I'd love to hear from you.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
             {[
                { title: "Email", val: "jean_leoni@hotmail.com", icon: <Mail size={24}/>, link: "mailto:jean_leoni@hotmail.com" },
                { title: "LinkedIn", val: "Jean Leoni", icon: <Linkedin size={24}/>, link: "#" },
                { title: "GitHub", val: "jeanleoni", icon: <Github size={24}/>, link: "#" },
                { title: "Phone", val: "+55 47 99185-0992", icon: <Phone size={24}/>, link: "tel:+5547991850992" }
             ].map((item, i) => (
                <Reveal key={i} delay={i * 100}>
                  <a href={item.link} className="contact-box-green glass-card p-8 flex flex-col items-center text-center group h-full justify-center cursor-none">
                    <div className="p-4 bg-white rounded-2xl mb-6 text-slate-500 group-hover:text-teal-600 group-hover:scale-110 transition-all shadow-sm">{item.icon}</div>
                    <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-600">{item.val}</p>
                  </a>
                </Reveal>
             ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 bg-[#0f172a] text-slate-400 text-sm">
        <div className="max-w-[1440px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p>© 2025 Jean Leoni. All rights reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors cursor-none">Privacy Policy</a>
          </div>
        </div>
      </footer>

      {/* PROJECT MODAL */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
}