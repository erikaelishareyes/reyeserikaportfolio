import React, { useState } from 'react';

// --- INLINE SVG ICONS ---
const GithubIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const SparklesIcon = ({ className = "w-3.5 h-3.5" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m11-15l1.5 4.5L21 8l-4.5 1.5L15 14l-1.5-4.5L9 8l4.5-1.5L15 2z" />
  </svg>
);

const CodeIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const SmartphoneIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
  </svg>
);

const GlobeIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
  </svg>
);

const PaletteIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/>
    <circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/>
    <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879 1.08.17 1.562-.876 1.562-1.42 0-.616-.023-2.235-.035-4.388-1.782.387-2.158-.859-2.158-.859-.444-1.129-1.085-1.43-1.085-1.43-.89-.608.067-.596.067-.596.984.069 1.502 1.01 1.502 1.01.874 1.5 2.294 1.066 2.853.816.089-.634.343-1.066.623-1.311-2.266-.257-4.648-1.133-4.648-5.043 0-1.114.398-2.025 1.05-2.738-.105-.258-.456-1.296.1-2.701 0 0 .857-.274 2.807 1.046A9.742 9.742 0 0112 5.052c.87.004 1.74.117 2.553.344 1.948-1.32 2.803-1.046 2.803-1.046.558 1.405.207 2.443.102 2.701.654.713 1.048 1.624 1.048 2.738 0 3.92-2.386 4.783-4.66 5.035.353.304.667.904.667 1.822 0 1.315-.012 2.376-.012 2.698 0 .265.176.574.675.478C18.347 21.124 22 16.988 22 12c0-5.523-4.477-10-10-10z"/>
  </svg>
);

const MailIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const MapPinIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const GraduationIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
  </svg>
);

const ExternalLinkIcon = ({ className = "w-3.5 h-3.5" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

const XIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export default function App() {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  // Core Tech Stack & Skills
  const skills = [
    { name: 'React Native', level: 70, icon: <SmartphoneIcon className="w-4 h-4 text-pink-500" /> },
    { name: 'Next.js / React', level: 80, icon: <GlobeIcon className="w-4 h-4 text-pink-500" /> },
    { name: 'TypeScript & JS', level: 75, icon: <CodeIcon className="w-4 h-4 text-pink-500" /> },
    { name: 'Tailwind CSS', level: 95, icon: <PaletteIcon className="w-4 h-4 text-pink-500" /> },
    { name: 'Node.js & Express', level: 70, icon: <CodeIcon className="w-4 h-4 text-pink-500" /> },
    { name: 'Prisma & PostgreSQL', level: 70, icon: <GlobeIcon className="w-4 h-4 text-pink-500" /> },
    { name: 'MongoDB', level: 70, icon: <CodeIcon className="w-4 h-4 text-pink-500" /> },
    { name: 'Figma UI/UX Design', level: 90, icon: <PaletteIcon className="w-4 h-4 text-pink-500" /> },
    { name: 'Canva & Graphic Posters', level: 94, icon: <PaletteIcon className="w-4 h-4 text-pink-500" /> },
    { name: 'C# & Unity Engine', level: 75, icon: <CodeIcon className="w-4 h-4 text-pink-500" /> },
  ];

  // Portfolio Projects
  const projects = [
    {
      id: 'nu-sis',
      title: 'NU SDAO Integrated System (NU SIS)',
      category: 'fullstack',
      description: 'Unified digital management system for the Student Development Activities Office with locker reservations, RSP tracking, elections, and AI sentiment analysis.',
      fullDescription: 'NU SIS is a comprehensive web and mobile ecosystem built for National University MOA. It handles student elections, organization memberships, locker management, and scholar Return Service Program (RSP) tracking. Integrated with Google Gemini AI for feedback sentiment analysis and summarization.',
      tags: ['Next.js', 'React Native', 'TypeScript', 'Tailwind', 'Node.js', 'Prisma', 'PostgreSQL', 'Gemini AI'],
      image: '/Screenshot 2026-10-26 195922.png',
      demoUrl: 'https://www.nu-sis.com/',
      githubUrl: 'https://github.com/erikaelishareyes'
    },
    {
      id: 'lms-client',
      title: 'NU MOA Library Management System',
      category: 'web',
      description: 'Modern Library Management System client application providing intuitive course tracking and student dashboards.',
      fullDescription: 'A responsive Library Management System web portal built with modern web technologies. Designed for seamless user navigation, structured module delivery, real-time activity tracking, and clean interface aesthetics.',
      tags: ['React', 'Next.js', 'Tailwind CSS', 'Vercel', 'REST API'],
      image: '/Screenshot 2026-10-26 200002.png',
      demoUrl: 'https://lms-client-two-eta.vercel.app/',
      githubUrl: 'https://github.com/erikaelishareyes'
    },
    {
      id: 'echoes-gold-blue',
      title: 'Echoes of The Gold and Blue: The 8 PM Paradox',
      category: 'game',
      description: 'A 3D first-person mystery exploration game built in Unity set within a realistic campus environment.',
      fullDescription: 'An atmospheric multi-level exploration game created as an intensive multimedia final project. Players navigate detailed 3D campus layouts, solve environmental puzzles, and uncover narrative secrets under dynamic lighting and customized C# game logic.',
      tags: ['Unity 3D', 'C#', '3D Modeling', 'Game Design', 'Level Design'],
      image: '/Screenshot 2026-10-26 195157.png',
      githubUrl: 'https://github.com/erikaelishareyes'
    },
    {
      id: 'rosas-cosmetics',
      title: 'Rosas Cosmetics',
      category: 'web',
      description: 'A modern e-commerce website for a cosmetics brand, featuring a clean design and seamless shopping experience.',
      fullDescription: 'A responsive e-commerce platform built with modern web technologies. Designed for intuitive user navigation, structured product catalogs, real-time inventory management, and a visually appealing interface.',
      tags: ['React', 'Next.js', 'Tailwind CSS', 'Vercel', 'REST API'],
      image: '/Screenshot 2026-10-26 200109.png',
      demoUrl: 'https://rosascosmetics-82vnjo0n3-ewikareyes16-8813s-projects.vercel.app/',
    }
  ];

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  return (
    <div className="min-h-screen bg-[#fff8fa] text-slate-800 font-sans selection:bg-pink-200 selection:text-pink-900">
      
      {/* Aesthetic Background Soft Glow Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-pink-200/50 rounded-full blur-3xl opacity-70"></div>
        <div className="absolute top-1/3 -right-40 w-96 h-96 bg-rose-200/40 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute -bottom-40 left-1/3 w-[500px] h-[500px] bg-pink-100/60 rounded-full blur-3xl opacity-80"></div>
      </div>

      {/* Glassmorphic Navigation */}
      <nav className="sticky top-0 z-40 backdrop-blur-md bg-white/70 border-b border-pink-100/80 px-6 py-4 transition-all">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-pink-400 to-rose-300 flex items-center justify-center text-white font-bold text-lg shadow-md shadow-pink-200 group-hover:scale-105 transition-transform">
              <img src="/534756497_24498000019821031_362580354901242141_n.jpg" alt="Erika Elisha C. Reyes" className="w-full h-full object-cover rounded-2xl" />
            </div>
            <span className="font-semibold text-lg tracking-tight bg-gradient-to-r from-pink-600 to-rose-500 bg-clip-text text-transparent">
              Erika Elisha C. Reyes
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#about" className="hover:text-pink-600 transition-colors">About</a>
            <a href="#skills" className="hover:text-pink-600 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-pink-600 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-pink-600 transition-colors">Experience</a>
          </div>

          <div className="flex items-center gap-3">
            <a 
              href="https://www.linkedin.com/in/erika-elisha-reyes-5164a2431" 
              target="_blank" 
              rel="noreferrer" 
              className="px-4 py-2 rounded-full text-xs font-semibold bg-pink-50 text-pink-600 border border-pink-200 hover:bg-pink-100 transition-all flex items-center gap-1.5 shadow-sm"
            >
              <span>LinkedIn</span>
              <ExternalLinkIcon className="w-3.5 h-3.5" />
            </a>
            <a 
              href="mailto:reyeserikaelisha@gmail.com" 
              className="px-4 py-2 rounded-full text-xs font-semibold bg-gradient-to-r from-pink-500 to-rose-400 text-white shadow-md shadow-pink-200 hover:opacity-95 transition-all"
            >
              Email Me
            </a>
          </div>
        </div>
      </nav>

      <main className="relative z-10 max-w-6xl mx-auto px-6 space-y-32 pt-12 pb-24">
        
        {/* HERO SECTION */}
        <section className="relative pt-8 pb-12 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-6 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-100/70 border border-pink-200/60 text-pink-700 text-xs font-medium">
              <SparklesIcon className="w-3.5 h-3.5 text-pink-500" />
              <span>Available for 400-Hour Internship starting Nov 2026</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Hi, I'm <span className="bg-gradient-to-r from-pink-500 via-rose-400 to-pink-600 bg-clip-text text-transparent">Erika Elisha Reyes</span> 🌸
            </h1>

            <p className="text-lg text-slate-600 max-w-xl leading-relaxed font-normal">
              Senior <strong className="font-semibold text-slate-800">BSIT Mobile & Web</strong> student, Full-Stack Developer, and UI/UX Designer crafting aesthetic, intuitive digital experiences.
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2">
              <a 
                href="#projects" 
                className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-rose-400 text-white font-medium text-sm shadow-lg shadow-pink-200 hover:shadow-xl hover:shadow-pink-300/50 hover:-translate-y-0.5 transition-all flex items-center gap-2"
              >
                <CodeIcon className="w-4 h-4" />
                <span>View Portfolio</span>
              </a>
              <a 
                href="https://github.com/erikaelishareyes" 
                target="_blank" 
                rel="noreferrer" 
                className="px-6 py-3 rounded-full bg-white text-slate-700 border border-pink-200 font-medium text-sm hover:bg-pink-50/50 hover:border-pink-300 transition-all flex items-center gap-2 shadow-sm"
              >
                <GithubIcon className="w-4 h-4 text-pink-600" />
                <span>GitHub</span>
              </a>
            </div>

            <div className="pt-4 flex items-center justify-center md:justify-start gap-6 text-xs text-slate-500">
              <div className="flex items-center gap-1.5">
                <MapPinIcon className="w-4 h-4 text-pink-400" />
                <span>Metro Manila, Philippines</span>
              </div>
              <div className="flex items-center gap-1.5">
                <GraduationIcon className="w-4 h-4 text-pink-400" />
                <span>National University MOA</span>
              </div>
            </div>
          </div>

          {/* Hero Decorative Card */}
          <div className="relative flex-1 flex justify-center">
            <div className="relative w-72 h-72 md:w-88 md:h-88 rounded-3xl bg-gradient-to-br from-pink-200 via-rose-100 to-pink-300 p-2 shadow-2xl shadow-pink-200/50 transform rotate-2 hover:rotate-0 transition-all duration-500">
              <div className="w-full h-full bg-white rounded-2xl p-6 flex flex-col justify-between border border-pink-100">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold tracking-wider uppercase text-pink-400">Mobile & Web Dev</span>
                  <div className="w-2.5 h-2.5 rounded-full bg-pink-400 animate-pulse"></div>
                </div>

                <div className="space-y-3 my-auto">
                  <div className="p-3.5 rounded-xl bg-pink-50/80 border border-pink-100 flex items-center gap-3">
                    <SmartphoneIcon className="w-6 h-6 text-pink-500" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-800">React Native & Flutter</h4>
                      <p className="text-[11px] text-slate-500">Cross-Platform Applications</p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-pink-50/80 border border-pink-100 flex items-center gap-3">
                    <GlobeIcon className="w-6 h-6 text-pink-500" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-800">Next.js & React</h4>
                      <p className="text-[11px] text-slate-500">Full-Stack Web Systems</p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-pink-50/80 border border-pink-100 flex items-center gap-3">
                    <PaletteIcon className="w-6 h-6 text-pink-500" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-800">Figma & Graphic UI</h4>
                      <p className="text-[11px] text-slate-500">Modern Aesthetic Interfaces</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[11px] text-slate-400 border-t border-pink-100 pt-3">
                  <span>Consistent Dean's Lister</span>
                  <span className="font-semibold text-pink-500">BSIT MWA</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT ME SECTION */}
        <section id="about" className="space-y-8 scroll-mt-24">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold tracking-widest uppercase text-pink-500">Get To Know Me</span>
            <h2 className="text-3xl font-bold text-slate-900">Passionate Developer & Visual Designer</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-pink-400 to-rose-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-white border border-pink-100 shadow-sm hover:shadow-md transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-pink-100 flex items-center justify-center text-pink-600">
                <CodeIcon className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-800 text-base">Full-Stack Capability</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Experienced in bridging frontend interfaces (Next.js, React Native, Tailwind) with clean backend architectures (Node.js, Express, Prisma, PostgreSQL, MongoDB).
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-pink-100 shadow-sm hover:shadow-md transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-pink-100 flex items-center justify-center text-pink-600">
                <PaletteIcon className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-800 text-base">UI/UX & Visual Design</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Strong eye for detail using Figma and Canva to create clean user journeys, functional wireframes, and eye-catching promotional posters.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-pink-100 shadow-sm hover:shadow-md transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-pink-100 flex items-center justify-center text-pink-600">
                <SparklesIcon className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-800 text-base">AI & Multimedia Integration</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Innovating with AI features like Gemini sentiment summarization in web applications, alongside 3D exploration game development using Unity and C#.
              </p>
            </div>
          </div>

          {/* Internship Status Card */}
          <div className="p-8 rounded-3xl bg-gradient-to-r from-pink-500 via-rose-400 to-pink-500 text-white shadow-xl shadow-pink-200/60 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <span className="px-3 py-1 rounded-full bg-white/20 text-xs font-semibold backdrop-blur-md">
                Internship Opportunity
              </span>
              <h3 className="text-2xl font-bold">Seeking 400-Hour Industry Internship</h3>
              <p className="text-xs md:text-sm text-pink-100 max-w-xl">
                Available starting early November 2026 for roles in Web Development, Mobile Development, UI/UX Design, or Quality Assurance.
              </p>
            </div>
            <a 
              href="mailto:reyeserikaelisha@gmail.com" 
              className="px-6 py-3 rounded-full bg-white text-pink-600 font-bold text-xs shadow-md hover:bg-pink-50 transition-all whitespace-nowrap"
            >
              Get In Touch
            </a>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="space-y-8 scroll-mt-24">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold tracking-widest uppercase text-pink-500">Tech Stack</span>
            <h2 className="text-3xl font-bold text-slate-900">Skills & Proficiency</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-pink-400 to-rose-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <div key={index} className="p-4 rounded-2xl bg-white border border-pink-100 shadow-sm space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    {skill.icon}
                    <span className="text-sm font-semibold text-slate-800">{skill.name}</span>
                  </div>
                  <span className="text-xs font-bold text-pink-500">{skill.level}%</span>
                </div>
                <div className="w-full h-2 bg-pink-50 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-pink-400 to-rose-400 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="space-y-8 scroll-mt-24">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold tracking-widest uppercase text-pink-500">My Work</span>
            <h2 className="text-3xl font-bold text-slate-900">Featured Projects</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-pink-400 to-rose-400 mx-auto rounded-full"></div>
          </div>

          {/* Category Filters */}
          <div className="flex items-center justify-center gap-2 flex-wrap">
            {['all', 'fullstack', 'game', 'web'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-full text-xs font-semibold capitalize transition-all ${
                  activeTab === tab 
                    ? 'bg-pink-500 text-white shadow-md shadow-pink-200' 
                    : 'bg-white text-slate-600 border border-pink-100 hover:bg-pink-50'
                }`}
              >
                {tab === 'all' ? 'All Projects' : tab}
              </button>
            ))}
          </div>

          {/* Project Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div 
                key={project.id}
                className="group rounded-3xl bg-white border border-pink-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div 
                  className="relative h-48 overflow-hidden bg-pink-100 cursor-pointer"
                  onClick={() => project.demoUrl && window.open(project.demoUrl, '_blank')}
                >
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                  <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-bold text-pink-600 uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="font-bold text-slate-900 text-lg leading-snug group-hover:text-pink-600 transition-colors flex items-center justify-between">
                      <span>{project.title}</span>
                      {project.demoUrl && <ExternalLinkIcon className="w-4 h-4 text-pink-400 opacity-0 group-hover:opacity-100 transition-opacity" />}
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  <div className="space-y-4 pt-2">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="px-2.5 py-1 rounded-md bg-pink-50 text-[10px] font-medium text-pink-700 border border-pink-100">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2">
                      {project.demoUrl && (
                        <a 
                          href={project.demoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="flex-1 py-2.5 rounded-xl bg-pink-500 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 hover:bg-pink-600 shadow-sm"
                        >
                          <span>Visit Site</span>
                          <ExternalLinkIcon className="w-3.5 h-3.5" />
                        </a>
                      )}
                      <button 
                        onClick={() => setSelectedProject(project)}
                        className={`py-2.5 rounded-xl bg-pink-50 hover:bg-pink-100 text-pink-600 font-semibold text-xs transition-colors ${project.demoUrl ? 'px-3' : 'w-full'}`}
                      >
                        Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE & EDUCATION */}
        <section id="experience" className="space-y-8 scroll-mt-24">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold tracking-widest uppercase text-pink-500">Background</span>
            <h2 className="text-3xl font-bold text-slate-900">Education & Milestones</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-pink-400 to-rose-400 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="p-6 rounded-3xl bg-white border border-pink-100 shadow-sm relative pl-8 border-l-4 border-l-pink-400">
              <span className="text-[11px] font-bold text-pink-500 uppercase">2023 - Present</span>
              <h3 className="text-lg font-bold text-slate-900 mt-1">BS in Information Technology — Mobile & Web Applications</h3>
              <p className="text-xs font-semibold text-slate-600">National University Mall of Asia (NU MOA)</p>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                Consistently maintained an academic performance record on track for Dean's Lister across 9 academic terms. UI/UX Designer & Technical Writer for capstone software projects.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-pink-100 shadow-sm relative pl-8 border-l-4 border-l-pink-400">
              <span className="text-[11px] font-bold text-pink-500 uppercase">2026</span>
              <h3 className="text-lg font-bold text-slate-900 mt-1">UI/UX, Frontend & Lead Technical Writer — Team MENDEX (NU SIS Capstone)</h3>
              <p className="text-xs font-semibold text-slate-600">SDAO Integrated Management System</p>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                Engineered full-stack web and mobile systems utilizing Next.js, React Native, TypeScript, Tailwind CSS, Express, Prisma, PostgreSQL, and Google Gemini AI integration.
              </p>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-pink-100 bg-white/50 py-8 text-center text-xs text-slate-500 space-y-2">
        <div className="flex items-center justify-center gap-4 text-pink-600 font-medium">
          <a href="mailto:reyeserikaelisha@gmail.com" className="hover:underline flex items-center gap-1">
            <MailIcon className="w-3.5 h-3.5" /> reyeserikaelisha@gmail.com
          </a>
          <span>•</span>
          <a href="https://www.linkedin.com/in/erika-elisha-reyes-5164a2431" target="_blank" rel="noreferrer" className="hover:underline">
            LinkedIn
          </a>
          <span>•</span>
          <a href="https://github.com/erikaelishareyes" target="_blank" rel="noreferrer" className="hover:underline">
            GitHub
          </a>
        </div>
        <p className="flex items-center justify-center gap-1">
          Designed & Built by <strong className="text-slate-700">Erika Elisha C. Reyes</strong> 
        </p>
      </footer>

      {/* PROJECT MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 space-y-4 shadow-2xl relative border border-pink-100 max-h-[90vh] overflow-y-auto">
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-pink-50 text-slate-500 hover:text-slate-800 transition-colors"
            >
              <XIcon className="w-4 h-4" />
            </button>

            <img 
              src={selectedProject.image} 
              alt={selectedProject.title} 
              className="w-full h-48 object-cover rounded-2xl cursor-pointer"
              onClick={() => selectedProject.demoUrl && window.open(selectedProject.demoUrl, '_blank')}
            />

            <div className="space-y-2">
              <span className="text-[10px] font-bold text-pink-500 uppercase tracking-widest">{selectedProject.category}</span>
              <h3 className="text-xl font-bold text-slate-900">{selectedProject.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{selectedProject.fullDescription}</p>
            </div>

            <div className="space-y-2 pt-2">
              <h4 className="text-xs font-bold text-slate-800">Technologies Used:</h4>
              <div className="flex flex-wrap gap-1.5">
                {selectedProject.tags.map((tag, i) => (
                  <span key={i} className="px-2.5 py-1 rounded-md bg-pink-50 text-[10px] font-medium text-pink-700 border border-pink-100">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 flex items-center gap-3">
              {selectedProject.demoUrl && (
                <a 
                  href={selectedProject.demoUrl} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex-1 py-2.5 rounded-xl bg-pink-500 text-white text-xs font-semibold text-center hover:bg-pink-600 transition-colors flex items-center justify-center gap-2 shadow-md shadow-pink-200"
                >
                  <ExternalLinkIcon className="w-3.5 h-3.5" />
                  <span>Visit Project Site</span>
                </a>
              )}
              {selectedProject.githubUrl && (
                <a 
                  href={selectedProject.githubUrl} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex-1 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-semibold text-center hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>View Source Code</span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}