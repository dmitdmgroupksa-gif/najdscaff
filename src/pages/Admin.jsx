import React, { useState } from 'react';
import { apiClient as base44 } from '@/apiClient';
import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { Lock, LayoutDashboard, MessageSquare, Download, LogOut } from 'lucide-react';

import AdminDashboard from '../components/admin/AdminDashboard';
import InquiriesTable from '../components/admin/InquiriesTable';
import DownloadsTable from '../components/admin/DownloadsTable';

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState('dashboard');

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === 'Work@dmg') {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Invalid password');
    }
  };

  const { data: inquiries, isLoading: inquiriesLoading } = useQuery({
    queryKey: ['inquiries'],
    queryFn: () => base44.get('/inquiries', { params: { sort: '-created_date' } }),
    enabled: isAuthenticated,
  });
 
  const { data: downloads, isLoading: downloadsLoading } = useQuery({
    queryKey: ['catalogue_downloads'],
    queryFn: () => base44.get('/catalogue-downloads', { params: { sort: '-created_date' } }),
    enabled: isAuthenticated,
  });

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md"
        >
          <div className="flex justify-center mb-6">
            <div className="bg-[#002D62] p-4 rounded-full">
              <Lock className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">Admin Access</h2>
          <p className="text-gray-500 text-center mb-8">Please enter your password to continue</p>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#002D62] focus:border-[#002D62] outline-none transition-all"
              />
            </div>
            {error && <p className="text-red-500 text-sm text-center">{error}</p>}
            <button
              type="submit"
              className="w-full bg-[#002D62] text-white py-3 rounded-lg font-semibold hover:bg-[#00408a] transition-colors"
            >
              Access Dashboard
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'inquiries', label: 'Inquiries', icon: MessageSquare },
    { id: 'downloads', label: 'Downloads', icon: Download },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="w-full md:w-64 bg-[#002D62] text-white flex-shrink-0">
        <div className="p-6">
          <h1 className="text-xl font-bold">Admin Panel</h1>
          <p className="text-sm text-white/60">Najd Scaffolding</p>
        </div>
        
        <nav className="px-4 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  activeTab === item.id 
                    ? 'bg-white text-[#002D62] font-semibold' 
                    : 'text-white/70 hover:bg-white/10 hover:text-white'
                }`}
              >
                <Icon className="w-5 h-5" />
                {item.label}
              </button>
            );
          })}
        </nav>

        <div className="absolute bottom-0 w-full md:w-64 p-4 border-t border-white/10">
          <button 
            onClick={() => setIsAuthenticated(false)}
            className="w-full flex items-center gap-3 px-4 py-3 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto h-screen">
        <div className="p-6 md:p-12 max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900 capitalize">
              {navItems.find(i => i.id === activeTab)?.label}
            </h1>
          </div>

          {(inquiriesLoading || downloadsLoading) ? (
            <div className="flex justify-center py-20">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#002D62]"></div>
            </div>
          ) : (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {activeTab === 'dashboard' && (
                <AdminDashboard inquiries={inquiries || []} downloads={downloads || []} />
              )}
              {activeTab === 'inquiries' && (
                <InquiriesTable inquiries={inquiries || []} />
              )}
              {activeTab === 'downloads' && (
                <DownloadsTable downloads={downloads || []} />
              )}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}




