'use client';
import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, ChevronRight, ChevronLeft, ExternalLink, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Portfolio() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState('about');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');

  const projectsData = [
    {
      id: 1,
      name: "Timetable Scheduler",
      description: "A web-based application for scheduling timetables with user authentication, schedule dashboard, and lecturer profiles.",
      technologies: ["PHP", "JavaScript", "React", "Next.js"],
      screenshots: [
        "/api/placeholder/800/500",
        "/api/placeholder/800/500",
        "/api/placeholder/800/500"
      ]
    },
    {
      id: 2,
      name: "School Management System",
      description: "A system to manage primary school results, assign grades, download reports, rank students, and analyze performance.",
      technologies: ["Django", "Python", "React", "JavaScript"],
      screenshots: [
        "/images/Home.jpg",
        "/images/Exam.jpg",
        "/images/Result.jpg"
      ]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      const project = projectsData[0];
      setCurrentSlide((prevSlide) => 
        prevSlide === project.screenshots.length - 1 ? 0 : prevSlide + 1
      );
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    const project = projectsData[0];
    setCurrentSlide((prevSlide) => 
      prevSlide === project.screenshots.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    const project = projectsData[0];
    setCurrentSlide((prevSlide) => 
      prevSlide === 0 ? project.screenshots.length - 1 : prevSlide - 1
    );
  };

  const openModal = (image: string) => {
    setModalImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage('');
  };

  const tabVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-x-hidden">
      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="relative">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-all"
                aria-label="Close Modal"
              >
                <X size={24} />
              </button>
              <img src={modalImage} alt="Full-size view" className="max-w-full max-h-full rounded-lg" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center py-12 px-6 md:px-16 lg:px-24 text-center space-y-4">
        <img 
          src="/images/James.jpg" 
          alt="James Nderema" 
          className="w-60 h-60 rounded-full border-4 border-blue-500 shadow-lg object-cover cursor-pointer"
          onClick={() => openModal('/images/James.jpg')}
        />
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          James Nderema
        </h1>
        <p className="text-xl text-gray-300 max-w-xl">
          Software Developer | Web & Software Solutions | Data Enthusiast
        </p>
        <div className="flex space-x-6">
          <a href="https://github.com/James119-nderema" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-all shadow-md">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/james-nderema-571261311" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-all shadow-md">
            <Linkedin size={24} />
          </a>
          <a href="mailto:james.o.nderema@gmail.com" className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-all shadow-md">
            <Mail size={24} />
          </a>
          <a href="https://wa.me/254706394482" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-all shadow-md">
            <Phone size={24} />
          </a>
        </div>
      </header>

      {/* Navigation */}
      <nav className="flex justify-center space-x-6 py-4 border-b border-gray-700">
        {['about', 'skills', 'projects', 'experience'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-md font-semibold transition-all ${
              activeTab === tab ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-400 hover:bg-gray-700'
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </nav>

      {/* Main content */}
      <main className="py-8 px-6 md:px-16 lg:px-24 min-h-[60vh]">
        <AnimatePresence >
          {activeTab === 'about' && (
            <motion.div
              key="about"
              variants={tabVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.4 }}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              <div className="flex flex-col space-y-6">
                <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Software Developer
                </h2>
                <p className="text-xl text-gray-300">
                  A highly motivated and detail-oriented professional with expertise in
                  web development, software development, data analysis, and database
                  management.
                </p>
                <p className="text-gray-400">
                  Skilled in designing and implementing software solutions that
                  enhance user engagement, streamline data processing, and improve
                  operational efficiency. Proficient in developing data management systems
                  and integrating machine learning algorithms to drive accurate data analysis
                  and informed decision-making.
                </p>
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center space-x-2">
                    <Mail size={18} className="text-blue-400" />
                    <a href="mailto:james.o.nderema@gmail.com" className="text-gray-300 hover:text-blue-400 transition-all">
                      james.o.nderema@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone size={18} className="text-blue-400" />
                    <a href="https://wa.me/254706394482" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-all">
                      +254 706 394 482
                    </a>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4 pt-4">
                  <button 
                    onClick={() => setActiveTab('projects')} 
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-md font-medium transition-all flex items-center space-x-2"
                  >
                    <span>View Projects</span>
                    <ChevronRight size={18} />
                  </button>
                  <a 
                    href="/CV/James-Nderema-CV.pdf" 
                    download="James-Nderema-CV.pdf"
                    className="px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-md font-medium transition-all flex items-center space-x-2"
                  >
                    <span>Download CV</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="7 10 12 15 17 10"></polyline>
                      <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                  </a>
                  <a 
                    href="/downloads/SchoolTimetableGeneratorSetup.exe" 
                    download="SchoolTimetableGeneratorSetup.exe"
                    className="px-6 py-3 bg-green-700 hover:bg-green-600 rounded-md font-medium transition-all flex items-center space-x-2"
                  >
                    <span>Download App</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="bg-gray-800 rounded-xl p-4 border border-gray-700 shadow-xl">
                <img 
                  src="/api/placeholder/400/400" 
                  alt="James Nderema" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </motion.div>
          )}

          {activeTab === 'skills' && (
            <motion.div
              key="skills"
              variants={tabVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.4 }}
              className="space-y-8"
            >
              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Technical Skills
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Programming Languages */}
                <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all">
                  <h3 className="text-xl font-bold mb-4">Programming Languages</h3>
                  <div className="space-y-3">
                    {[
                      { name: 'JavaScript', level: 90 },
                      { name: 'Python', level: 85 },
                      { name: 'SQL', level: 80 },
                      { name: 'PHP', level: 75 },
                    ].map(({ name, level }) => (
                      <div key={name} className="flex flex-col">
                        <span className="text-gray-300">{name}</span>
                        <div className="w-full bg-gray-700 rounded-full h-2 mt-1">
                          <div className="bg-blue-500 h-2 rounded-full" style={{width: `${level}%`}}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Frameworks */}
                <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all">
                  <h3 className="text-xl font-bold mb-4">Frameworks</h3>
                  <div className="space-y-3">
                    {[
                      { name: 'React', level: 90 },
                      { name: 'Next.js', level: 85 },
                      { name: 'Django', level: 80 },
                      { name: 'Laravel', level: 75 },
                      { name: 'Tailwind CSS', level: 90 },
                    ].map(({ name, level }) => (
                      <div key={name} className="flex flex-col">
                        <span className="text-gray-300">{name}</span>
                        <div className="w-full bg-gray-700 rounded-full h-2 mt-1">
                          <div className="bg-blue-500 h-2 rounded-full" style={{width: `${level}%`}}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Database Management */}
                <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all">
                  <h3 className="text-xl font-bold mb-4">Database Management</h3>
                  <div className="space-y-3">
                    {[
                      { name: 'MySQL', level: 90 },
                      { name: 'PostgreSQL', level: 85 },
                    ].map(({ name, level }) => (
                      <div key={name} className="flex flex-col">
                        <span className="text-gray-300">{name}</span>
                        <div className="w-full bg-gray-700 rounded-full h-2 mt-1">
                          <div className="bg-blue-500 h-2 rounded-full" style={{width: `${level}%`}}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Soft Skills */}
                <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all">
                  <h3 className="text-xl font-bold mb-4">Soft Skills</h3>
                  <div className="space-y-3">
                    {[
                      { name: 'Team Leadership', level: 90 },
                      { name: 'Problem-Solving', level: 95 },
                      { name: 'Communication', level: 85 },
                      { name: 'Time Management', level: 80 },
                    ].map(({ name, level }) => (
                      <div key={name} className="flex flex-col">
                        <span className="text-gray-300">{name}</span>
                        <div className="w-full bg-gray-700 rounded-full h-2 mt-1">
                          <div className="bg-blue-500 h-2 rounded-full" style={{width: `${level}%`}}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 mt-8">
                <h3 className="text-xl font-bold mb-4">Tools</h3>
                <div className="flex flex-wrap gap-3">
                  {['Git', 'GitHub', 'VS Code', 'Postman', 'Figma', 'Docker', 'Canva'].map((tool) => (
                    <span key={tool} className="px-4 py-2 bg-gray-700 rounded-full text-gray-300">{tool}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'projects' && (
            <motion.div
              key="projects"
              variants={tabVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.4 }}
              className="space-y-12"
            >
              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Projects
              </h2>
              
              {projectsData.map((project) => (
                <div key={project.id} className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                  <div className="relative">
                    <div className="relative h-[500px] overflow-hidden bg-gray-900 flex items-center justify-center">
                      {project.screenshots.map((screenshot, i) => (
                        <img 
                          key={i}
                          src={screenshot} 
                          alt={`${project.name} Screenshot ${i+1}`}
                          className={`absolute inset-0 m-auto max-w-full max-h-full object-contain transition-opacity duration-500 cursor-pointer ${
                            i === currentSlide ? 'opacity-100' : 'opacity-0'
                          }`}
                          onClick={() => openModal(screenshot)}
                        />
                      ))}
                    </div>
                    
                    <button 
                      onClick={prevSlide}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 transition-all shadow-md"
                      aria-label="Previous Slide"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button 
                      onClick={nextSlide}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 transition-all shadow-md"
                      aria-label="Next Slide"
                    >
                      <ChevronRight size={24} />
                    </button>
                    
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
                      {project.screenshots.map((_, i) => (
                        <button 
                          key={i}
                          onClick={() => setCurrentSlide(i)}
                          className={`w-4 h-4 rounded-full ${
                            i === currentSlide ? 'bg-blue-500' : 'bg-gray-300 bg-opacity-50'
                          }`}
                          aria-label={`Go to slide ${i + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-blue-900 text-blue-300 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex space-x-4">
                      <a href="#" className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md font-medium transition-all flex items-center space-x-2">
                        <span>Live Demo</span>
                        <ExternalLink size={16} />
                      </a>
                      <a href="#" className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-md font-medium transition-all flex items-center space-x-2">
                        <span>Source Code</span>
                        <Github size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {activeTab === 'experience' && (
            <motion.div
              key="experience"
              variants={tabVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.4 }}
              className="space-y-8"
            >
              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Work Experience & Education
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                  <h3 className="text-2xl font-bold mb-6">Work Experience</h3>
                  
                  <div className="relative pl-8 pb-8 border-l-2 border-blue-500">
                    <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-blue-500 transform -translate-x-1/2"></div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <h4 className="text-xl font-semibold">Ajira Digital Trainer</h4>
                        <span className="text-sm text-gray-400">January 2025 - Present</span>
                      </div>
                      <p className="text-gray-300">Mombasa, Kenya</p>
                      <ul className="text-gray-400 list-disc list-inside space-y-2">
                        <li>Conducting training sessions on digital skills, including freelancing, online work opportunities, and digital marketing</li>
                        <li>Guiding participants in acquiring technical skills such as web development, data entry, and content creation</li>
                        <li>Providing mentorship and support to trainees to help them establish successful online careers</li>
                        <li>Collaborating with industry professionals to enhance the training curriculum</li>
                        <li>Assisting trainees in developing professional portfolios and navigating freelancing platforms</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                  <h3 className="text-2xl font-bold mb-6">Education</h3>
                  
                  <div className="relative pl-8 pb-8 border-l-2 border-blue-500">
                    <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-blue-500 transform -translate-x-1/2"></div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <h4 className="text-xl font-semibold">Bachelor of Science in Computer Science</h4>
                        <span className="text-sm text-gray-400">Expected Dec 2026</span>
                      </div>
                      <p className="text-gray-300">Technical University of Mombasa</p>
                      <p className="text-gray-400">
                        Studying advanced computer science concepts, software development methodologies, data structures, algorithms, and systems design.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 lg:col-span-2">
                  <h3 className="text-2xl font-bold mb-6">Certifications</h3>
                  <p className="text-gray-300">
                    Certifications in programming languages and projects are available upon request.
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="py-8 px-6 md:px-16 lg:px-24 bg-gray-900 border-t border-gray-800">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-gray-400">© 2025 James Nderema. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a href="https://github.com/James119-nderema" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-all">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/james-nderema-571261311" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-all">
              <Linkedin size={20} />
            </a>
            <a href="mailto:james.o.nderema@gmail.com" className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-all">
              <Mail size={20} />
            </a>
            <a href="https://wa.me/254706394482" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-all">
              <Phone size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
