import React from 'react';
import Chatbot from './component/Chatbot';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { 
  Github, 
  Bot, 
  Mail, 
  Linkedin, 
  User, 
  Code, 
  Briefcase, 
  GraduationCap, 
  Globe, 
  Database, 
  Terminal, 
  Braces, 
  FileJson, 
  PenTool, 
  FolderGit, 
  Layout, 
  Server, 
  Twitter 
} from 'lucide-react';

function App() {
  // Add default profile image URL
  const profilePic = "https://assets.leetcode.com/users/jatinchoudhary1712/avatar_1720715121.png"; // You can replace this with your actual profile picture URL
  
  const skills = [
    { name: 'JavaScript', icon: <Braces className="w-6 h-6 mb-2" /> },
    { name: 'React', icon: <Globe className="w-6 h-6 mb-2" /> },
    { name: 'Node.js', icon: <Server className="w-6 h-6 mb-2" /> },
    { name: 'TypeScript', icon: <FileJson className="w-6 h-6 mb-2" /> },
    { name: 'Python', icon: <Terminal className="w-6 h-6 mb-2" /> },
    { name: 'SQL', icon: <Database className="w-6 h-6 mb-2" /> },
    { name: 'HTML', icon: <Code className="w-6 h-6 mb-2" /> }, // Used Code icon for HTML
    { name: 'CSS', icon: <PenTool className="w-6 h-6 mb-2" /> } // Used PenTool icon for CSS
  ];


  const projects = [
    {
      title: 'ELizaOS Based Discord Bot',
      description: 'Eliza OS Based Discord Bot powered by OpenAI API interacting with the users in the server using discord.py',
      image: 'https://iq.wiki/_next/image?url=https%3A%2F%2Fipfs.everipedia.org%2Fipfs%2FQmVh21gBtzLLJsiAtXjyh2TKXc1XQDQGRhsyUtpASuFUj3&w=3840&q=95',
      technologies: ['JavaScript', 'Discord Dev', 'Eliza OS', 'OpenAI API'],
      link: 'https://github.com/JatinChoudhary1712/ElizaOS-BasedDiscordBot',
      icon: <Layout className="w-6 h-6" />
    },
    {
      title: 'Code Reviewer Powered by Gemini API',
      description: 'Code Reviewer Powered by Gemini API, it will review the code and give the feedback to the user',
      image: 'https://www.shutterstock.com/image-photo/black-white-code-background-javascript-600nw-2144202583.jpg',
      technologies: ['Google AI Studio', 'Gemini API' , 'React'],
      link: 'https://github.com/yourgithub/task-management-systemhttps://github.com/JatinChoudhary1712/Code-Reviewer-Agent',
      icon: <FolderGit className="w-6 h-6" />
    },
    {
      title: 'Cline - Youtube Video Summarizer',
      description: 'Cline is a Youtube Video Summarizer, it will summarize the video and give the summary to the user powered by OpenAI API, SearchApi',
      image: 'https://i0.wp.com/9to5google.com/wp-content/uploads/sites/4/2017/08/youtube_logo_dark.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1',
      technologies: ['Python', 'Flask', 'Javascript'],
      link: 'https://github.com/JatinChoudhary1712/Cline-Youtube-Video-Summariser',
      icon: <PenTool className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with enhanced animations */}
      <header className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-gray-50 via-blue-50 to-gray-100 text-center animate-gradient-x">
        <div className="max-w-4xl px-4 py-16 flex flex-col items-center">
          {/* Profile Image with hover effect */}
          <div className="transform transition-all duration-300 hover:scale-105">
            <img 
              src={profilePic}
              alt="Jatin pfp" 
              className="w-40 h-40 object-cover rounded-full border-4 border-white shadow-lg hover:border-blue-400 transition-all duration-300"
            />
          </div>
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 hover:from-blue-600 hover:to-gray-900 transition-all duration-300 mb-6">Jatin</h1>
          <p className="text-xl text-gray-600 mb-8 hover:text-gray-900 transition-colors duration-300">AI/ML, Data Engineering & Analytics Enthusiast</p>
          <div className="flex justify-center gap-4">
            <a href="https://github.com/JatinChoudhary1712" className="p-2 text-gray-600 hover:text-black hover:scale-110 transform transition-all duration-300">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/jatin-35838032a/" className="p-2 text-gray-600 hover:text-blue-600 hover:scale-110 transform transition-all duration-300">
              <Linkedin size={24} />
            </a>
            <a href="mailto:jatinchoudhary1712@gmail.com" className="p-2 text-gray-600 hover:text-red-600 hover:scale-110 transform transition-all duration-300">
              <Mail size={24} />
            </a>
            <a href="https://x.com/Jatin9312762270" className="p-2 text-gray-600 hover:text-black hover:scale-110 transform transition-all duration-300">
              <Twitter size={24} />
            </a>
            <a href="https://discord.com/users/902864383376510987" className="p-2 text-gray-600 hover:text-indigo-600 hover:scale-110 transform transition-all duration-300">
              <Bot size={24} />
            </a>
          </div>
          <a 
            href="https://drive.google.com/file/d/1XgMMGK2lpr35qMxkBpLhHuPHA3_Rak_9/view?usp=drive_link" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="mt-6 px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 hover:scale-105 transform transition-all duration-300 inline-flex items-center gap-2 hover:shadow-lg"
          >
            <FileJson size={20} />
            View Resume
          </a>  
        </div>
      </header>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <User className="text-gray-900" size={24} />
            <h2 className="text-2xl font-semibold text-gray-900">About Me</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
          Passionate about <b> AI/ML, Web3, and data analytics </b>, I explore the intersection of decentralized technologies,
           automation, and cloud computing to build scalable solutions. With experience in <b>DevOps</b> and <b>AI model integration</b>,
            I'm driven by data-driven decision-making to power innovation in the evolving tech landscape. Exploring the world of <b>AI/ML</b> and its applications in the real world.
            still exploring the world of <b>AI/ML</b> and its applications in the real world. 
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <Briefcase className="text-gray-900" size={24} />
            <h2 className="text-2xl font-semibold text-gray-900">Experience</h2>
          </div>
          <div className="space-y-8">
          <div className="border-l-2 border-gray-200 pl-4 flex items-start gap-4">
              <a 
                href="https://www.codingninjas.com/referral/XTKFH?ref_type=certificates_alumni" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-shrink-0"
              >
                <img 
                  src="https://iq.wiki/_next/image?url=https://ipfs.everipedia.org/ipfs/QmWMZVxU8QGiDFCz9VBjFuQb6XXijeS3qeuRjRLhNutDj5&w=1200&q=95"
                  alt="Cluster Protocol Logo" 
                  className="w-10 h-10 object-contain"
                />
              </a>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">AI/ML Intern</h3>
                <p className="text-gray-600">Cluster Protocol • February 2025 - Present</p>
                <p className="text-gray-600 mt-2">
                  Exploring the world of AI/ML and its applications in the real world. 
                </p>
              </div>
            </div>
            
            <div className="border-l-2 border-gray-200 pl-4 flex items-start gap-4">
              <a 
                href="https://www.codingninjas.com/referral/XTKFH?ref_type=certificates_alumni" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-shrink-0"
              >
                <img 
                  src="https://files.codingninjas.in/article_images/favicon-and-cherrypy-1-1660924366.webp"
                  alt="Coding Ninjas Logo" 
                  className="w-10 h-10 object-contain"
                />
              </a>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Business Development Associate</h3>
                <p className="text-gray-600">Coding Ninjas • September 2024 - February 2025 (5 months)</p>
                <p className="text-gray-600 mt-2">
                  Worked as a Business Development Associate at Coding Ninjas, where I was responsible for generating leads and closing deals for the company.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section with enhanced cards */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-8 group">
            <Layout className="text-gray-900 group-hover:-rotate-12 transition-transform duration-300" size={24} />
            <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div key={project.title} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
                <div className="overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="transform group-hover:rotate-12 transition-transform duration-300">
                      {project.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">{project.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-gray-900 hover:text-white transform hover:-translate-y-1 transition-all duration-300 cursor-default">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-block px-4 py-2 bg-gray-400 text-white rounded-lg text-sm font-medium hover:bg-gray-900 transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                  >
                    View Project
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section with enhanced cards */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-8 group">
            <Code className="text-gray-900 group-hover:rotate-12 transition-transform duration-300" size={24} />
            <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">Skills</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill) => (
              <div key={skill.name} 
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden"
              >
                <div className="relative z-10">
                  <div className="text-gray-900 group-hover:text-white transition-colors duration-300">
                    {skill.icon}
                  </div>
                  <p className="text-gray-900 group-hover:text-white transition-colors duration-300">{skill.name}</p>
                </div>
                <div className="absolute inset-0 bg-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section with enhanced card */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-8 group">
            <GraduationCap className="text-gray-900 group-hover:rotate-12 transition-transform duration-300" size={24} />
            <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">Education</h2>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 group">
            <h3 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 group-hover:from-blue-600 group-hover:to-gray-900">Bachelor of Technology in Computer Science and Engineering</h3>
            <p className="text-gray-600 group-hover:text-gray-900 transition-colors duration-300">Chandigarh Group of Colleges, Landran Mohali  • <b>2021 - 2025</b></p>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* Render Chatbot */}
      <Chatbot />

      <footer className="py-8 text-center text-gray-600 border-t border-gray-100">
        <p>© {new Date().getFullYear()} Jatin. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;