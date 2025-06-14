"use client"
import { FiCode, FiCpu, FiDatabase, FiGitBranch, FiServer, FiUsers, 
         FiClock, FiCheckCircle, FiAlertTriangle, FiPlus } from 'react-icons/fi';
         import { useState } from 'react';

const SoftwareDevelopmentUI = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newProject, setNewProject] = useState({ name: '', type: 'web', description: '' });

  // Sample projects data
  const featuredProjects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Next.js frontend with Node.js microservices backend",
      tech: ["React", "Node.js", "MongoDB", "Redis"],
      status: "In Development",
      team: 5,
      progress: 78
    },
    {
      id: 2,
      title: "Mobile Banking App",
      description: "Cross-platform mobile application with biometric authentication",
      tech: ["React Native", "TypeScript", "Firebase"],
      status: "Beta Testing",
      team: 4,
      progress: 92
    },
    {
      id: 3,
      title: "Data Analytics Dashboard",
      description: "Real-time business intelligence visualization platform",
      tech: ["D3.js", "Python", "PostgreSQL"],
      status: "Planning",
      team: 3,
      progress: 15
    }
  ];

  const recentActivities = [
    {
      id: 1,
      type: "commit",
      project: "E-Commerce Platform",
      message: "Implemented cart functionality",
      author: "Sarah Johnson",
      time: "2 hours ago",
      avatar: "SJ"
    },
    {
      id: 2,
      type: "pull-request",
      project: "Mobile Banking App",
      message: "Merged biometric auth feature",
      author: "Michael Chen",
      time: "1 day ago",
      avatar: "MC"
    },
    {
      id: 3,
      type: "issue",
      project: "Data Analytics Dashboard",
      message: "Reported performance bottleneck",
      author: "Emily Wilson",
      time: "3 days ago",
      avatar: "EW"
    }
  ];

  const techStack = [
    { name: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "TypeScript"] },
    { name: "Backend", items: ["Node.js", "Express", "Python", "Django"] },
    { name: "Database", items: ["PostgreSQL", "MongoDB", "Redis"] },
    { name: "DevOps", items: ["Docker", "Kubernetes", "AWS", "GitHub Actions"] }
  ];

  const createProject = () => {
    console.log('Creating project:', newProject);
    setShowCreateModal(false);
    setNewProject({ name: '', type: 'web', description: '' });
  };

  const getActivityIcon = (type) => {
    switch(type) {
      case 'commit': return <FiCode className="text-blue-500" />;
      case 'pull-request': return <FiGitBranch className="text-purple-500" />;
      case 'issue': return <FiAlertTriangle className="text-red-500" />;
      default: return <FiCode className="text-gray-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-900 via-blue-900 to-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Build Software Development</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Modern development practices meet beautiful user experiences
          </p>
          <button 
            onClick={() => setShowCreateModal(true)}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-gray-100 transition"
          >
            <FiPlus className="mr-2" />
            Start New Project
          </button>
        </div>
      </div>

      {/* Featured Projects */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">Featured Projects</h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
            Our latest and most innovative software development initiatives
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {featuredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === "Beta Testing" ? "bg-purple-100 text-purple-800" :
                    project.status === "In Development" ? "bg-blue-100 text-blue-800" :
                    "bg-yellow-100 text-yellow-800"
                  }`}>
                    {project.status}
                  </span>
                </div>
                <p className="text-gray-600 mb-6">{project.description}</p>
                
                <div className="mb-6">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Progress</span>
                    <span>{project.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600" 
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-500 mb-2">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex -space-x-2">
                    {[...Array(project.team)].map((_, i) => (
                      <div key={i} className="h-8 w-8 rounded-full bg-indigo-100 border-2 border-white flex items-center justify-center text-xs font-medium text-indigo-800">
                        {i+1}
                      </div>
                    ))}
                  </div>
                  <button className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                    View Details →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">Recent Activity</h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
              Latest updates from our development teams
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <ul className="divide-y divide-gray-200">
              {recentActivities.map((activity) => (
                <li key={activity.id} className="p-6 hover:bg-gray-50 transition">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 p-2 bg-gray-100 rounded-lg mr-4">
                      {getActivityIcon(activity.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">
                        {activity.project}
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        {activity.message}
                      </p>
                      <div className="mt-2 flex items-center text-sm text-gray-500">
                        <div className="h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center text-xs font-medium text-indigo-800 mr-2">
                          {activity.avatar}
                        </div>
                        <span>{activity.author}</span>
                        <span className="mx-1">·</span>
                        <span>{activity.time}</span>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="px-6 py-4 text-center border-t border-gray-200">
              <button className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                View all activity
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Technology Stack */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">Our Technology Stack</h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
            Modern tools and frameworks we work with
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-4">
          {techStack.map((category) => (
            <div key={category.name} className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">{category.name}</h3>
              <ul className="space-y-3">
                {category.items.map((item) => (
                  <li key={item} className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-indigo-500 mr-3"></div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Create Project Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-md">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold">Create New Project</h2>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Project Name</label>
                <input
                  type="text"
                  value={newProject.name}
                  onChange={(e) => setNewProject({...newProject, name: e.target.value})}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="My Awesome Project"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Project Type</label>
                <select
                  value={newProject.type}
                  onChange={(e) => setNewProject({...newProject, type: e.target.value})}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="web">Web Application</option>
                  <option value="mobile">Mobile Application</option>
                  <option value="desktop">Desktop Application</option>
                  <option value="api">API Service</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea
                  value={newProject.description}
                  onChange={(e) => setNewProject({...newProject, description: e.target.value})}
                  rows="3"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Describe your project..."
                ></textarea>
              </div>
            </div>
            <div className="p-6 border-t border-gray-200 flex justify-end space-x-3">
              <button
                onClick={() => setShowCreateModal(false)}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition"
              >
                Cancel
              </button>
              <button
                onClick={createProject}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
              >
                Create Project
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
};

export default SoftwareDevelopmentUI;