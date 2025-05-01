'use client';
import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, ChevronRight, ChevronLeft, ExternalLink } from 'lucide-react';

export default function Portfolio() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState('about');
  
  // Project screenshots carousel
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
        "/api/placeholder/800/500",
        "/api/placeholder/800/500",
        "/api/placeholder/800/500"
      ]
    }
  ];

  // Auto slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      const project = projectsData[0]; // Current project
      setCurrentSlide((prevSlide) => 
        prevSlide === project.screenshots.length - 1 ? 0 : prevSlide + 1
      );
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    const project = projectsData[0]; // Current project
    setCurrentSlide((prevSlide) => 
      prevSlide === project.screenshots.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    const project = projectsData[0]; // Current project
    setCurrentSlide((prevSlide) => 
      prevSlide === 0 ? project.screenshots.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Navigation */}
      <nav className="flex justify-between items-center py-6 px-8 md:px-16 lg:px-24 border-b border-gray-700">
        <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
          James Nderema
        </div>
        <div className="hidden md:flex space-x-6">
          <button 
            onClick={() => setActiveTab('about')} 
            className={`px-4 py-2 rounded-md transition-all ${activeTab === 'about' ? 'bg-blue-600' : 'hover:bg-gray-700'}`}
          >
            About
          </button>
          <button 
            onClick={() => setActiveTab('skills')} 
            className={`px-4 py-2 rounded-md transition-all ${activeTab === 'skills' ? 'bg-blue-600' : 'hover:bg-gray-700'}`}
          >
            Skills
          </button>
          <button 
            onClick={() => setActiveTab('projects')} 
            className={`px-4 py-2 rounded-md transition-all ${activeTab === 'projects' ? 'bg-blue-600' : 'hover:bg-gray-700'}`}
          >
            Projects
          </button>
          <button 
            onClick={() => setActiveTab('experience')} 
            className={`px-4 py-2 rounded-md transition-all ${activeTab === 'experience' ? 'bg-blue-600' : 'hover:bg-gray-700'}`}
          >
            Experience
          </button>
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
      </nav>

      {/* Mobile navigation */}
      <div className="md:hidden flex justify-center pt-4 pb-2 border-b border-gray-700">
        <div className="flex space-x-2">
          <button 
            onClick={() => setActiveTab('about')} 
            className={`px-3 py-1 text-sm rounded-md transition-all ${activeTab === 'about' ? 'bg-blue-600' : 'bg-gray-700'}`}
          >
            About
          </button>
          <button 
            onClick={() => setActiveTab('skills')} 
            className={`px-3 py-1 text-sm rounded-md transition-all ${activeTab === 'skills' ? 'bg-blue-600' : 'bg-gray-700'}`}
          >
            Skills
          </button>
          <button 
            onClick={() => setActiveTab('projects')} 
            className={`px-3 py-1 text-sm rounded-md transition-all ${activeTab === 'projects' ? 'bg-blue-600' : 'bg-gray-700'}`}
          >
            Projects
          </button>
          <button 
            onClick={() => setActiveTab('experience')} 
            className={`px-3 py-1 text-sm rounded-md transition-all ${activeTab === 'experience' ? 'bg-blue-600' : 'bg-gray-700'}`}
          >
            Work
          </button>
        </div>
      </div>

      {/* Main content */}
      <main className="py-8 px-6 md:px-16 lg:px-24">
        {/* About section */}
        {activeTab === 'about' && (
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="flex flex-col space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  Software Developer
                </span>
              </h1>
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
              <div className="flex space-x-4 pt-4">
                <a 
                  href="#" 
                  onClick={() => setActiveTab('projects')} 
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-md font-medium transition-all flex items-center space-x-2"
                >
                  <span>View Projects</span>
                  <ChevronRight size={18} />
                </a>
                <a 
                  href="/cv/James-Nderema-CV.pdf" 
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
              </div>
            </div>
            <div className="bg-gray-800 rounded-xl p-4 border border-gray-700 shadow-xl">
              <img 
                src="/api/placeholder/400/400" 
                alt="James Nderema" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        )}

        {/* Skills section */}
        {activeTab === 'skills' && (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Technical Skills
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all">
                <h3 className="text-xl font-bold mb-4">Programming Languages</h3>
                <div className="space-y-3">
                  <div className="flex flex-col">
                    <span className="text-gray-300">JavaScript</span>
                    <div className="w-full bg-gray-700 rounded-full h-2 mt-1">
                      <div className="bg-blue-500 h-2 rounded-full" style={{width: '90%'}}></div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-300">Python</span>
                    <div className="w-full bg-gray-700 rounded-full h-2 mt-1">
                      <div className="bg-blue-500 h-2 rounded-full" style={{width: '85%'}}></div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-300">SQL</span>
                    <div className="w-full bg-gray-700 rounded-full h-2 mt-1">
                      <div className="bg-blue-500 h-2 rounded-full" style={{width: '80%'}}></div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-300">PHP</span>
                    <div className="w-full bg-gray-700 rounded-full h-2 mt-1">
                      <div className="bg-blue-500 h-2 rounded-full" style={{width: '75%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all">
                <h3 className="text-xl font-bold mb-4">Frameworks</h3>
                <div className="space-y-3">
                  <div className="flex flex-col">
                    <span className="text-gray-300">React</span>
                    <div className="w-full bg-gray-700 rounded-full h-2 mt-1">
                      <div className="bg-blue-500 h-2 rounded-full" style={{width: '90%'}}></div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-300">Next.js</span>
                    <div className="w-full bg-gray-700 rounded-full h-2 mt-1">
                      <div className="bg-blue-500 h-2 rounded-full" style={{width: '85%'}}></div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-300">Django</span>
                    <div className="w-full bg-gray-700 rounded-full h-2 mt-1">
                      <div className="bg-blue-500 h-2 rounded-full" style={{width: '80%'}}></div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-300">Laravel</span>
                    <div className="w-full bg-gray-700 rounded-full h-2 mt-1">
                      <div className="bg-blue-500 h-2 rounded-full" style={{width: '75%'}}></div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-300">Tailwind CSS</span>
                    <div className="w-full bg-gray-700 rounded-full h-2 mt-1">
                      <div className="bg-blue-500 h-2 rounded-full" style={{width: '90%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all">
                <h3 className="text-xl font-bold mb-4">Database Management</h3>
                <div className="space-y-3">
                  <div className="flex flex-col">
                    <span className="text-gray-300">MySQL</span>
                    <div className="w-full bg-gray-700 rounded-full h-2 mt-1">
                      <div className="bg-blue-500 h-2 rounded-full" style={{width: '90%'}}></div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-300">PostgreSQL</span>
                    <div className="w-full bg-gray-700 rounded-full h-2 mt-1">
                      <div className="bg-blue-500 h-2 rounded-full" style={{width: '85%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all">
                <h3 className="text-xl font-bold mb-4">Soft Skills</h3>
                <div className="space-y-3">
                  <div className="flex flex-col">
                    <span className="text-gray-300">Team Leadership</span>
                    <div className="w-full bg-gray-700 rounded-full h-2 mt-1">
                      <div className="bg-blue-500 h-2 rounded-full" style={{width: '90%'}}></div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-300">Problem-Solving</span>
                    <div className="w-full bg-gray-700 rounded-full h-2 mt-1">
                      <div className="bg-blue-500 h-2 rounded-full" style={{width: '95%'}}></div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-300">Communication</span>
                    <div className="w-full bg-gray-700 rounded-full h-2 mt-1">
                      <div className="bg-blue-500 h-2 rounded-full" style={{width: '85%'}}></div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-300">Time Management</span>
                    <div className="w-full bg-gray-700 rounded-full h-2 mt-1">
                      <div className="bg-blue-500 h-2 rounded-full" style={{width: '80%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 mt-8">
              <h3 className="text-xl font-bold mb-4">Tools</h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-gray-700 rounded-full text-gray-300">Git</span>
                <span className="px-4 py-2 bg-gray-700 rounded-full text-gray-300">GitHub</span>
                <span className="px-4 py-2 bg-gray-700 rounded-full text-gray-300">VS Code</span>
                <span className="px-4 py-2 bg-gray-700 rounded-full text-gray-300">Postman</span>
                <span className="px-4 py-2 bg-gray-700 rounded-full text-gray-300">Figma</span>
                <span className="px-4 py-2 bg-gray-700 rounded-full text-gray-300">Docker</span>
             
                <span className="px-4 py-2 bg-gray-700 rounded-full text-gray-300">Canva</span>
                
              </div>
            </div>
          </div>
        )}

        {/* Projects section */}
        {activeTab === 'projects' && (
          <div className="space-y-12">
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Projects
            </h2>
            
            {projectsData.map((project) => (
              <div key={project.id} className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 shadow-xl">
                <div className="relative">
                  <div className="relative h-80 overflow-hidden">
                    {project.screenshots.map((screenshot, i) => (
                      <img 
                        key={i}
                        src={screenshot} 
                        alt={`${project.name} Screenshot ${i+1}`}
                        className={`absolute w-full h-full object-cover transition-opacity duration-500 ${
                          i === currentSlide ? 'opacity-100' : 'opacity-0'
                        }`}
                      />
                    ))}
                  </div>
                  
                  <button 
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 transition-all"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button 
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 transition-all"
                  >
                    <ChevronRight size={24} />
                  </button>
                  
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {project.screenshots.map((_, i) => (
                      <button 
                        key={i}
                        onClick={() => setCurrentSlide(i)}
                        className={`w-3 h-3 rounded-full ${
                          i === currentSlide ? 'bg-blue-500' : 'bg-gray-300 bg-opacity-50'
                        }`}
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
          </div>
        )}

        {/* Experience section */}
        {activeTab === 'experience' && (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Work Experience & Education
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Work Experience */}
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
              
              {/* Education */}
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
              
              {/* Certifications */}
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 lg:col-span-2">
                <h3 className="text-2xl font-bold mb-6">Certifications</h3>
                <p className="text-gray-300">
                  Certifications in programming languages and projects are available upon request.
                </p>
              </div>
            </div>
          </div>
        )}
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