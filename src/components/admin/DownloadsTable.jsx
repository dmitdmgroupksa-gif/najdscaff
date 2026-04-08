import React, { useState } from 'react';
import { base44 } from '@/api/base44Client';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Search, Trash2, Mail, Phone, Calendar, Download } from 'lucide-react';
import { format } from 'date-fns';

export default function DownloadsTable({ downloads }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredDownloads = downloads?.filter(d => 
    d.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    d.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    d.company?.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="p-6 border-b border-gray-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
          <Download className="w-5 h-5 text-green-600" />
          Catalogue Downloads
        </h2>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input 
            type="text"
            placeholder="Search downloads..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none text-sm w-full md:w-64"
          />
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Contact</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Company</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredDownloads.map((download) => (
              <tr key={download.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {download.created_date ? format(new Date(download.created_date), 'MMM d, yyyy') : '-'}
                  </div>
                  <div className="text-xs text-gray-400 mt-1">
                    {download.created_date ? format(new Date(download.created_date), 'h:mm a') : ''}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <p className="font-medium text-gray-900">{download.name}</p>
                </td>
                <td className="px-6 py-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Mail className="w-3 h-3" />
                      {download.email}
                    </div>
                    {download.phone && (
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Phone className="w-3 h-3" />
                        {download.phone}
                      </div>
                    )}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                    {download.company || 'N/A'}
                  </span>
                </td>
              </tr>
            ))}
            {filteredDownloads.length === 0 && (
              <tr>
                <td colSpan="4" className="px-6 py-12 text-center text-gray-500">
                  No downloads found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}