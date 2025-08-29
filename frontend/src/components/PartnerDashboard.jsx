import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { User, FileText, MessageSquare, Upload, LogOut, BarChart3 } from 'lucide-react';
import logo from '../assets/images/logo.png';

const PartnerDashboard = () => {
  const [user, setUser] = useState(null);
  const [notes, setNotes] = useState('');
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    // Get user from localStorage
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = '/';
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const tabs = [
    { id: 'overview', name: 'Overview', icon: BarChart3 },
    { id: 'notes', name: 'Notes', icon: FileText },
    { id: 'documents', name: 'Documents', icon: Upload },
    { id: 'chat', name: 'Chat', icon: MessageSquare }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <header className="glass-header border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <img src={logo} alt="bzTradewave.au" className="h-8" />
              <h1 className="text-xl font-bold text-[var(--primary-blue)]">Partner Dashboard</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <User className="w-5 h-5 text-[var(--primary-blue)]" />
                <span className="text-[var(--primary-blue)] font-medium">
                  {user?.name || 'Partner'}
                </span>
              </div>
              <button
                onClick={handleLogout}
                className="glass-button px-4 py-2 text-[var(--primary-blue)] hover:text-red-600 transition-colors duration-300 flex items-center space-x-2"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="glass-card p-6">
              <h2 className="text-lg font-semibold text-[var(--primary-blue)] mb-4">Navigation</h2>
              <nav className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors duration-300 ${
                      activeTab === tab.id
                        ? 'bg-[var(--accent-green)]/10 text-[var(--accent-green)]'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <tab.icon className="w-5 h-5" />
                    <span>{tab.name}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <motion.div
              key={activeTab}
              variants={fadeInUp}
              initial="initial"
              animate="animate"
            >
              {activeTab === 'overview' && (
                <div className="space-y-6">
                  <div className="glass-card p-6">
                    <h2 className="text-2xl font-bold text-[var(--primary-blue)] mb-4">
                      Welcome, {user?.name}!
                    </h2>
                    <p className="text-gray-600 mb-6">
                      Access your trade insights, manage documents, and communicate with our team.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg">
                        <h3 className="font-semibold text-[var(--primary-blue)] mb-2">Trade Volume</h3>
                        <p className="text-2xl font-bold text-[var(--primary-blue)]">$2.4M</p>
                        <p className="text-sm text-gray-600">This quarter</p>
                      </div>
                      
                      <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg">
                        <h3 className="font-semibold text-[var(--accent-green)] mb-2">Active Orders</h3>
                        <p className="text-2xl font-bold text-[var(--accent-green)]">12</p>
                        <p className="text-sm text-gray-600">In progress</p>
                      </div>
                      
                      <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg">
                        <h3 className="font-semibold text-purple-600 mb-2">Markets</h3>
                        <p className="text-2xl font-bold text-purple-600">8</p>
                        <p className="text-sm text-gray-600">Countries</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'notes' && (
                <div className="glass-card p-6">
                  <h2 className="text-xl font-bold text-[var(--primary-blue)] mb-4">My Notes</h2>
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Add your trade notes, reminders, or important information here..."
                    className="w-full h-64 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--accent-green)] focus:border-transparent resize-none"
                  />
                  <button className="mt-4 glass-button px-6 py-2 text-[var(--primary-blue)] hover:text-[var(--accent-green)] transition-colors duration-300">
                    Save Notes
                  </button>
                </div>
              )}

              {activeTab === 'documents' && (
                <div className="glass-card p-6">
                  <h2 className="text-xl font-bold text-[var(--primary-blue)] mb-4">Document Management</h2>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                    <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 mb-4">Drag and drop files here or click to upload</p>
                    <button className="glass-button px-6 py-2 text-[var(--primary-blue)] hover:text-[var(--accent-green)] transition-colors duration-300">
                      Choose Files
                    </button>
                  </div>
                  
                  <div className="mt-6">
                    <h3 className="font-semibold text-[var(--primary-blue)] mb-3">Recent Documents</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <span className="text-gray-700">Trade_Agreement_2024.pdf</span>
                        <span className="text-sm text-gray-500">2 days ago</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <span className="text-gray-700">Product_Catalog_Electronics.xlsx</span>
                        <span className="text-sm text-gray-500">1 week ago</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'chat' && (
                <div className="glass-card p-6">
                  <h2 className="text-xl font-bold text-[var(--primary-blue)] mb-4">Chat with Team</h2>
                  <div className="h-64 bg-gray-50 rounded-lg p-4 mb-4 overflow-y-auto">
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-[var(--accent-green)] rounded-full flex items-center justify-center">
                          <span className="text-white text-sm font-semibold">BT</span>
                        </div>
                        <div className="bg-white p-3 rounded-lg shadow-sm">
                          <p className="text-gray-700">Welcome to bzTradewave! How can we assist you today?</p>
                          <span className="text-xs text-gray-500">10:30 AM</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex space-x-3">
                    <input
                      type="text"
                      placeholder="Type your message..."
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--accent-green)] focus:border-transparent"
                    />
                    <button className="glass-button px-6 py-2 text-[var(--primary-blue)] hover:text-[var(--accent-green)] transition-colors duration-300">
                      Send
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerDashboard;

