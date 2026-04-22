/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Github, Linkedin, Mail, ExternalLink, 
  Brain, Code, Cpu, Layers, MessageSquare, 
  ChevronRight, ArrowRight, Star, Quote, 
  CheckCircle2, Sun, Moon, Sparkles, Terminal, Phone, GraduationCap, School
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Types & Constants ---

interface Project {
  id: number;
  title: string;
  problem: string;
  solution: string;
  tech: string[];
  impact: string;
  github: string;
  demo?: string;
  image?: string;
}

const FEATURED_PROJECTS: Project[] = [
  {
    id: 0,
    title: "SpeakEasy",
    problem: "Struggle with confidence and clarity during high-stakes presentations without real-time feedback.",
    solution: "Multi-threaded AI coaching tool processing live webcam/mic streams for speech quality and body language feedback.",
    tech: ["Python", "MediaPipe", "Deepgram", "nvidia/llama-3.2-nv-embedqa"],
    impact: "Delivers real-time multimodal feedback using a custom audio/semantic engine and landmark extraction.",
    github: "https://github.com/Sarath9429/SpeakEasy",
    demo: "https://speakeasy-1w2f.onrender.com/"
  },
  {
    id: 1,
    title: "VisionGuard–ADAS",
    problem: "High rate of road accidents due to driver fatigue and delayed reaction times.",
    solution: "Real-time pipeline integrating FCWS, LDWS, and LKAS safety modules on live video streams.",
    tech: ["Python", "YOLOv8", "ONNX", "UltraFast_LaneDetection"],
    impact: "Utilizes ByteTrack with Kalman Filter for persistent tracking and Bird’s Eye View (BEV) for lane-keeping.",
    github: "https://github.com/Sarath9429/Vision-Guard-ADAS"
  },
  {
    id: 2,
    title: "AI News summarizer chatbot",
    problem: "Information overload and lack of accessible news consumption interfaces.",
    solution: "AI-powered chatbot with OCR for text retrieval and text-to-speech for real-time audio playback.",
    tech: ["React.js", "FastAPI", "Python", "LLM"],
    impact: "Achieved 90% accuracy in text retrieval from newspaper articles with integrated voice responses.",
    github: "https://github.com/Sarath9429/AI-News-Text-Summarizer-Chatbot-Voice"
  },
  {
    id: 3,
    title: "Stray-Dog-Detection",
    problem: "Public safety concerns in urban areas regarding stray animals and automated monitoring systems.",
    solution: "Leveraged custom-trained computer vision models to identify and track stray animals in CCTV feeds.",
    tech: ["Deep Learning", "TensorFlow", "Computer Vision"],
    impact: "Enabled automated alerting systems for municipal authorities with 94% accuracy in varied lighting conditions.",
    github: "https://github.com/Sarath9429/Stray-Dog-Detection"
  }
];

const SKILLS = {
  languages: ["Python", "C", "SQL", "Java", "JavaScript"],
  web_development: ["HTML", "CSS", "React.js", "Bootstrap", "Tailwind"],
  backend_tools: ["SpringBoot", "Node.js", "Express.js", "FastAPI"],
  machine_learning: ["Pandas", "NumPy", "TensorFlow", "PyTorch", "RAG"],
  embedded_systems: ["ESP32", "Arduino", "Raspberry Pi", "STM32"],
  technologies: ["Git", "GitHub", "Docker"]
};

// --- Components ---

const Navbar = ({ isDark, setIsDark }: { isDark: boolean; setIsDark: (v: boolean) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = ['Work', 'Skills', 'About', 'Contact'];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-3' : 'py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-display font-bold flex items-center gap-2"
        >
          <div className="w-10 h-10 bg-brand-blue rounded-lg flex items-center justify-center text-white">S</div>
          <span className="text-gray-900 dark:text-white">Sarath S</span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-gray-800 dark:text-white/80 hover:text-brand-blue transition-colors"
            >
              {item}
            </a>
          ))}
          <button 
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
          >
            {isDark ? <Sun className="w-5 h-5 text-white" /> : <Moon className="w-5 h-5" />}
          </button>
          <a href="/Sarath S new resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-secondary py-2 px-4 text-sm rounded-lg flex items-center gap-2">
            <Layers className="w-4 h-4" /> Resume
          </a>
          <a href="#contact" className="btn-primary py-2 px-4 text-sm rounded-lg">Hire Me</a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button onClick={() => setIsDark(!isDark)}>
            {isDark ? <Sun className="w-5 h-5 text-white" /> : <Moon className="w-5 h-5" />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="dark:text-white" /> : <Menu className="dark:text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-black/5 dark:border-white/5 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {menuItems.map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium dark:text-white"
                >
                  {item}
                </a>
              ))}
              <a href="#contact" className="btn-primary text-center">Hire Me</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const SectionHeading = ({ subtitle, title, centered = false }: { subtitle: string; title: string; centered?: boolean }) => (
  <div className={`mb-6 ${centered ? 'text-center' : ''}`}>
    <motion.span 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-brand-blue font-mono text-[10px] tracking-widest uppercase mb-1 block"
    >
      {subtitle}
    </motion.span>
    <motion.h2 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white"
    >
      {title}
    </motion.h2>
  </div>
);

const Hero = () => {
  return (
    <div className="h-full flex flex-col justify-between">
      <div className="flex justify-end mb-2 -mt-2">
        <div className="h-12 w-auto flex items-center justify-center p-1">
          <img 
            src="Amrita Vishwa Vidyapeetham Logo.png" 
            alt="Amrita Logo" 
            className="h-full w-auto object-contain"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
            }}
          />
        </div>
      </div>
      <div className="flex items-center gap-3 mb-6">
        <span className="bg-brand-dark text-white text-[10px] px-3 py-1 rounded-full uppercase tracking-widest font-bold">AI/ML & Full-Stack Developer</span>
        <div className="h-[1px] flex-grow bg-slate-200 dark:bg-white/10"></div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex-grow flex flex-col justify-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight text-gray-900 dark:text-white">
          Sarath S<span className="text-brand-blue">.</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-800 dark:text-white/80 font-semibold mb-4">
          Architecting Intelligence for Scalable Software.
        </p>
        <p className="text-sm md:text-base text-gray-700 dark:text-white/60 max-w-lg mb-8 leading-relaxed">
          I'm an AI/ML enthusiast and Full-Stack Developer passionate about bridging the gap between sophisticated models and robust production software. Expert in Python, React, and FastAPI.
        </p>
      </motion.div>

      <div className="flex flex-wrap gap-4">
        <a href="#work" className="bg-brand-blue text-white px-8 py-3 rounded-lg font-bold hover:bg-brand-royal transition-colors text-sm">View Work</a>
        <a href="/Sarath S new resume.pdf" target="_blank" rel="noopener noreferrer" className="bg-brand-dark text-white px-8 py-3 rounded-lg font-bold hover:bg-black transition-colors text-sm flex items-center gap-2">
          Download Resume
        </a>
      </div>
    </div>
  );
};

const WorkCard = ({ project }: { project: Project }) => (
  <motion.div 
    key={project.id}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
    className="group bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all"
  >
    <div className="flex justify-between items-start mb-6">
      <div className="p-3 bg-brand-blue/10 rounded-xl">
        <Cpu className="w-6 h-6 text-brand-blue" />
      </div>
      <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-lg transition-colors">
        <Github className="w-5 h-5 dark:text-white" />
      </a>
    </div>

    <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{project.title}</h3>
    
    <div className="space-y-4 mb-6">
      <div>
        <p className="text-xs font-mono text-brand-blue uppercase mb-1">Problem</p>
        <p className="text-sm text-gray-800 dark:text-white/60">{project.problem}</p>
      </div>
      <div>
        <p className="text-xs font-mono text-brand-blue uppercase mb-1">Solution</p>
        <p className="text-sm text-gray-800 dark:text-white/80">{project.solution}</p>
      </div>
    </div>

    <div className="flex flex-wrap gap-2 mb-6">
      {project.tech.map(t => (
        <span key={t} className="text-[10px] font-mono font-medium px-2 py-1 bg-gray-100 dark:bg-white/10 rounded dark:text-white/80 uppercase">
          {t}
        </span>
      ))}
    </div>

    <div className="flex gap-4 mb-6">
      <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-brand-dark text-white rounded-lg text-sm font-bold hover:bg-black transition-colors">
        <Github className="w-4 h-4" /> Code
      </a>
      {project.demo && (
        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-brand-blue text-white rounded-lg text-sm font-bold hover:bg-brand-royal transition-colors">
          <ExternalLink className="w-4 h-4" /> Demo
        </a>
      )}
    </div>

    <div className="pt-6 border-t border-black/5 dark:border-white/5">
      <p className="text-sm font-medium text-gray-900 dark:text-white flex items-center gap-2">
        <CheckCircle2 className="w-4 h-4 text-brand-blue" />
        Impact: {project.impact}
      </p>
    </div>
  </motion.div>
);

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-gray-50 dark:bg-brand-dark/30">
      <div className="max-w-7xl mx-auto">
        <SectionHeading subtitle="Expertise" title="Tools & Technologies" centered />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(SKILLS).map(([key, list], idx) => (
            <motion.div 
              key={key}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-6 rounded-2xl"
            >
              <h3 className="text-lg font-bold mb-6 capitalize text-gray-900 dark:text-white border-b border-black/5 dark:border-white/5 pb-2">
                {key.replace('_', ' ')}
              </h3>
              <div className="flex flex-wrap gap-3">
                {list.map(skill => (
                  <div key={skill} className="flex items-center gap-2 bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 px-3 py-2 rounded-xl">
                    <div className="w-1.5 h-1.5 bg-brand-blue rounded-full" />
                    <span className="text-sm font-medium dark:text-white/80">{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    { title: "Define", desc: "Understanding the problem statement and domain constraints in depth." },
    { title: "Design", desc: "Architecting the model pipeline and selecting the optimal technology stack." },
    { title: "Develop", desc: "Iterative development focusing on clean code and robust model performance." },
    { title: "Test", desc: "Rigorous evaluation using edge cases and performance metrics." },
    { title: "Deploy", desc: "Scalable deployment and continuous monitoring for real-world impact." }
  ];

  return (
    <section className="section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionHeading subtitle="Workflow" title="Development Approach" centered />
        
        <div className="relative flex flex-col md:flex-row justify-between gap-8 py-10">
          <div className="hidden md:block absolute top-[60px] left-0 right-0 h-0.5 bg-brand-blue/20 -z-10" />
          {steps.map((step, i) => (
            <motion.div 
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex-1 text-center group"
            >
              <div className="w-12 h-12 bg-white dark:bg-brand-dark border-4 border-brand-blue text-brand-blue font-bold rounded-full flex items-center justify-center mx-auto mb-6 text-xl group-hover:bg-brand-blue group-hover:text-white transition-all shadow-lg">
                {i + 1}
              </div>
              <h4 className="text-lg font-bold mb-2 dark:text-white">{step.title}</h4>
              <p className="text-sm text-gray-800 dark:text-white/60">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    { name: "Recruiter A", pos: "Tech Lead at Vision Systems", content: "Sarath's ability to translate complex AI research into functional applications is exceptional." },
    { name: "Recruiter B", pos: "Senior Developer", content: "Clean code, robust documentation, and a visionary approach to problem-solving. A top-tier engineer." }
  ];

  return (
    <section className="section-padding bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto">
        <SectionHeading subtitle="Vouches" title="Professional Testimonials" centered />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          {reviews.map((r, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative p-10 bg-white/5 rounded-3xl border border-white/10"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-brand-blue opacity-20" />
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-brand-blue text-brand-blue" />)}
              </div>
              <p className="text-xl mb-8 italic opacity-90 leading-relaxed font-sans font-light">"{r.content}"</p>
              <div>
                <h4 className="font-bold text-lg">{r.name}</h4>
                <p className="text-brand-light text-sm">{r.pos}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="section-padding relative">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-block p-4 bg-brand-blue/10 rounded-2xl mb-6">
          <MessageSquare className="w-8 h-8 text-brand-blue" />
        </div>
        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">Let's build the future <span className="text-brand-blue">together</span>.</h2>
        <p className="text-xl text-gray-800 dark:text-white/60 mb-12">
          I'm currently looking for new opportunities as an AI/ML Engineer or Software Developer.
        </p>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <div className="flex flex-col gap-4 w-full md:w-auto">
            <a href="mailto:sarath3082005@gmail.com" className="btn-primary flex items-center justify-center gap-3 py-4 px-8 text-lg">
              <Mail className="w-5 h-5" />
              sarath3082005@gmail.com
            </a>
            <a href="tel:+918072397002" className="btn-secondary flex items-center justify-center gap-3 py-4 px-8 text-lg bg-white/5">
              <Phone className="w-5 h-5" />
              +91 8072397002
            </a>
          </div>
          <div className="flex gap-4">
            <a href="https://github.com/Sarath9429" target="_blank" rel="noopener noreferrer" className="p-4 glass rounded-xl text-gray-900 hover:text-brand-blue transition-colors outline-none dark:text-white">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/sarath-s-119249s" target="_blank" rel="noopener noreferrer" className="p-4 glass rounded-xl text-gray-900 hover:text-brand-blue transition-colors outline-none dark:text-white">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-10 border-t border-black/5 dark:border-white/5 dark:bg-brand-dark transition-colors">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-800 dark:text-white/40">
      <p>© {new Date().getFullYear()} Sarath S. Built with passion and AI.</p>
      <div className="flex gap-8">
        <a href="#work" className="hover:text-brand-blue transition-colors">Projects</a>
        <a href="#skills" className="hover:text-brand-blue transition-colors">Skills</a>
        <a href="#contact" className="hover:text-brand-blue transition-colors">Contact</a>
      </div>
    </div>
  </footer>
);

export default function App() {
  const [isDark, setIsDark] = useState(false);
  const [repoCount, setRepoCount] = useState<number | null>(null);

  useEffect(() => {
    fetch('https://api.github.com/users/Sarath9429')
      .then(res => res.json())
      .then(data => setRepoCount(data.public_repos))
      .catch(() => setRepoCount(null));
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.body.style.backgroundColor = '#002838'; // Dark blue background
    } else {
      document.documentElement.classList.remove('dark');
      document.body.style.backgroundColor = '#FFFFFF';
    }
  }, [isDark]);

  return (
    <div className={`min-h-screen ${isDark ? 'dark' : ''} selection:bg-brand-light selection:text-brand-dark`}>
      <Navbar isDark={isDark} setIsDark={setIsDark} />
      
      <main className="max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="grid grid-cols-12 gap-4 auto-rows-auto">
          {/* 1. HERO SECTION */}
          <div className="col-span-12 lg:col-span-8 bento-card border-l-8 border-brand-blue flex flex-col justify-between min-h-[400px]">
             <Hero />
          </div>

          {/* 2. FEATURED WORK */}
          <div className="col-span-12 lg:col-span-4 bg-brand-royal rounded-2xl p-6 shadow-lg flex flex-col h-full">
            <h3 className="text-xs font-black uppercase tracking-tighter opacity-70 text-brand-dark mb-4">Featured Work</h3>
            <div className="flex flex-col gap-3 overflow-y-auto max-h-[350px] pr-2 custom-scrollbar">
              {FEATURED_PROJECTS.slice(0, 2).map(p => (
                <div key={p.id} className="bg-white/80 backdrop-blur p-4 rounded-xl shadow-sm">
                  <div className="flex justify-between items-start">
                    <h4 className="font-bold text-brand-dark">{p.title}</h4>
                    <span className="text-[10px] bg-brand-dark text-white px-2 py-0.5 rounded font-mono uppercase">{p.tech[0]}</span>
                  </div>
                  <p className="text-xs mt-2 text-brand-dark/80 line-clamp-2">{p.problem}</p>
                </div>
              ))}
            </div>
            <a href="#work" className="mt-auto text-xs font-bold underline flex items-center gap-2 text-brand-dark pt-4">
              View All Projects <ArrowRight className="w-3 h-3" />
            </a>
          </div>
          {/* 3. ABOUT ME */}
          <div id="about" className="col-span-12 md:col-span-6 lg:col-span-4 bento-card border-t-4 border-brand-light flex gap-4 items-start">
            <div className="flex-grow">
              <h3 className="text-xs font-black uppercase tracking-widest text-gray-600 mb-4">About</h3>
              <p className="text-sm text-gray-800 dark:text-white/70 leading-relaxed">
               I'm an AI/ML & Full-Stack developer focused on building smart, scalable solutions. I enjoy solving complex problems and turning ideas into real-world applications.
              </p>
              <div className="mt-6 flex gap-2">
                <div className="px-2 py-1 bg-brand-blue/10 rounded text-[10px] font-bold text-brand-blue uppercase">Adaptable</div>
                <div className="px-2 py-1 bg-brand-royal/10 rounded text-[10px] font-bold text-brand-royal uppercase">Full-Stack</div>
              </div>
            </div>
            <div className="hidden sm:block w-24 h-24 rounded-xl overflow-hidden shrink-0 border border-brand-light/30">
              <img 
                src="/sarath.jpg" 
                alt="Sarath S" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://picsum.photos/seed/sarath/200/200";
                }}
              />
            </div>
          </div>

          {/* 3.5 EDUCATION SECTION */}
          <div className="col-span-12 md:col-span-6 lg:col-span-4 bento-card border-l-4 border-brand-royal flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xs font-black uppercase tracking-widest text-gray-600">Education</h3>
                <GraduationCap className="w-5 h-5 text-brand-royal" />
              </div>
              <div className="flex gap-3 items-center mb-3">
                <div className="w-10 h-10 rounded bg-white p-1 shrink-0 border border-black/5 flex items-center justify-center">
                  <img 
                    src="Amrita Logo.jpg" 
                    alt="Amrita Logo" 
                    className="max-w-full max-h-full object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://placehold.co/100x100?text=AU";
                    }}
                  />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white leading-tight">Amrita Vishwa Vidyapeetham</h4>
                  <p className="text-[10px] text-gray-500">Chennai Campus (CGPA: 7.66/10)</p>
                </div>
              </div>
              <p className="text-xs font-semibold text-brand-dark dark:text-white/80">B.Tech in Computer and Comm Eng (CCE)</p>
              <p className="text-[11px] text-gray-600 dark:text-white/60 mt-1">2023 – 2027 (Expected)</p>
            </div>
            <div className="mt-4 pt-4 border-t border-black/5 dark:border-white/5">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-tighter">Academic Excellence</span>
              </div>
            </div>
          </div>

          {/* 4. SKILLS */}
          <div id="skills" className="col-span-12 md:col-span-6 lg:col-span-4 bg-brand-dark rounded-2xl p-6 shadow-md border border-white/10">
            <h3 className="text-xs font-black uppercase tracking-widest text-brand-light mb-4">Core Skills</h3>
            <div className="grid grid-cols-2 gap-y-3 gap-x-2">
              {SKILLS.machine_learning.slice(0, 3).concat(SKILLS.backend_tools.slice(0, 2)).concat(SKILLS.languages.slice(0, 1)).map((skill, i) => (
                <div key={skill} className="flex items-center gap-2 text-white text-xs">
                  <div className={`w-1.5 h-1.5 rounded-full ${['bg-brand-blue', 'bg-brand-royal', 'bg-brand-light', 'bg-white'][i % 4]}`} />
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* 5. PROCESS */}
          <div className="col-span-12 md:col-span-6 lg:col-span-4 bento-card border-b-4 border-brand-blue">
            <h3 className="text-xs font-black uppercase tracking-widest text-gray-600 mb-4">Process</h3>
            <div className="space-y-4">
              {[
                { n: "01", t: "Discover & Map" },
                { n: "02", t: "Iterative Dev" },
                { n: "03", t: "Scaling & Audit" }
              ].map(step => (
                <div key={step.n} className="flex items-center gap-3">
                  <span className="text-lg font-bold text-brand-blue">{step.n}</span>
                  <span className="text-xs font-semibold text-gray-800 dark:text-white/60">{step.t}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 6. LEADERSHIP & ACHIEVEMENTS */}
          <div className="col-span-12 md:col-span-6 lg:col-span-4 bento-card border-t-4 border-brand-royal flex flex-col justify-between">
            <div>
              <h3 className="text-xs font-black uppercase tracking-widest text-gray-600 mb-4">Leadership & Awards</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-xs font-bold text-brand-dark dark:text-white">Coordinator, Camhi Club</h4>
                  <p className="text-[10px] text-gray-600 dark:text-white/60">Organised Ingenium 5.0, managing end-to-end event operations.</p>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-brand-dark dark:text-white">1st Place - Ingenium 4.0</h4>
                  <p className="text-[10px] text-gray-600 dark:text-white/60">Led a team of five to victory in the hackathon.</p>
                </div>
              </div>
            </div>
            <div className="mt-4 flex gap-2">
              <div className="px-2 py-1 bg-green-500/10 rounded text-[10px] font-bold text-green-600 uppercase">Hackathon Winner</div>
              <div className="px-2 py-1 bg-brand-blue/10 rounded text-[10px] font-bold text-brand-blue uppercase">Event Lead</div>
            </div>
          </div>

          {/* 7. TESTIMONIALS (Moved to accommodate new section) */}
          <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-brand-light/10 rounded-2xl p-6 border border-brand-light/30 text-gray-900">
            <div className="flex gap-1 mb-3 text-brand-light">
              <Star className="w-3 h-3 fill-current" />
              <Star className="w-3 h-3 fill-current" />
              <Star className="w-3 h-3 fill-current" />
              <Star className="w-3 h-3 fill-current" />
              <Star className="w-3 h-3 fill-current" />
            </div>
            <p className="text-[11px] italic text-gray-800 dark:text-white/80 leading-relaxed font-sans">
              "Sarath's ability to translate complex business needs into elegant AI architectures is unparalleled."
            </p>
            <p className="text-[10px] font-bold mt-4 text-gray-900 dark:text-white">— Director of Eng, CloudX</p>
          </div>

          {/* 8. CONTACT WRAPPER */}
          <div id="contact" className="col-span-12 bento-card shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col text-center md:text-left">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white">Ready for the next sprint?</h4>
              <p className="text-xs text-gray-800 dark:text-white/70">I'm currently looking for new opportunities as an AI/ML & Full-Stack Developer.</p>
            </div>
            <div className="flex gap-6 items-center flex-wrap justify-center">
              <div className="flex flex-col items-center md:items-end">
                <span className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Connect</span>
                <div className="flex flex-col items-center md:items-end">
                  <a href="mailto:sarath3082005@gmail.com" className="text-sm font-semibold dark:text-white hover:text-brand-blue transition-colors">
                    sarath3082005@gmail.com
                  </a>
                  <a href="tel:+918072397002" className="text-sm font-semibold dark:text-white hover:text-brand-blue transition-colors">
                    +91 8072397002
                  </a>
                </div>
              </div>
              <div className="flex gap-3">
                <a href="https://github.com/Sarath9429" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-brand-dark flex items-center justify-center text-white hover:bg-brand-blue transition-colors shadow-lg">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/in/sarath-s-119249s" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-brand-blue flex items-center justify-center text-white hover:bg-brand-royal transition-colors shadow-lg">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Original Scrollable Content for Details */}
        <section id="work" className="mt-20">
          <SectionHeading subtitle="Portfolio" title="Expanded Project Catalog" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURED_PROJECTS.map(p => (
              <div key={p.id}>
                <WorkCard project={p} />
              </div>
            ))}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
