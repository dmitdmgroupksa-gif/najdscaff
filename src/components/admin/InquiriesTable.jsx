import React, { useState } from 'react';
import { base44 } from '@/api/base44Client';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Search, Trash2, Mail, Phone, Calendar, MessageSquare } from 'lucide-react';
import { format } from 'date-fns';

export default function InquiriesTable({ inquiries }) {
  const queryClient = useQueryClient();
  const [searchTerm, setSearchTerm] = useState('');

  const updateStatusMutation = useMutation({
    mutationFn: ({ id, status }) => base44.entities.Inquiry.update(id, { status }),
    onSuccess: () => queryClient.invalidateQueries(['inquiries']),
  });

  const deleteInquiryMutation = useMutation({
    mutationFn: (id) => base44.entities.Inquiry.delete(id),
    onSuccess: () => queryClient.invalidateQueries(['inquiries']),
  });

  const filteredInquiries = inquiries?.filter(i => 
    i.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    i.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    i.subject?.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="p-6 border-b border-gray-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
          <MessageSquare className="w-5 h-5 text-blue-600" />
          Inquiries
        </h2>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input 
            type="text"
            placeholder="Search inquiries..."
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
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Contact Info</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Message</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-4 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredInquiries.map((inquiry) => (
              <tr key={inquiry.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {inquiry.created_date ? format(new Date(inquiry.created_date), 'MMM d, yyyy') : '-'}
                  </div>
                  <div className="text-xs text-gray-400 mt-1">
                    {inquiry.created_date ? format(new Date(inquiry.created_date), 'h:mm a') : ''}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="space-y-1">
                    <p className="font-medium text-gray-900">{inquiry.name}</p>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Mail className="w-3 h-3" />
                      {inquiry.email}
                    </div>
                    {inquiry.phone && (
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Phone className="w-3 h-3" />
                        {inquiry.phone}
                      </div>
                    )}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="max-w-xs">
                    <p className="font-medium text-gray-900 mb-1">{inquiry.subject}</p>
                    <p className="text-sm text-gray-500 truncate">{inquiry.message}</p>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <select
                    value={inquiry.status}
                    onChange={(e) => updateStatusMutation.mutate({ id: inquiry.id, status: e.target.value })}
                    className={`px-3 py-1 rounded-full text-xs font-semibold border-0 cursor-pointer ${
                      inquiry.status === 'new' ? 'bg-blue-100 text-blue-800' :
                      inquiry.status === 'read' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }`}
                  >
                    <option value="new">New</option>
                    <option value="read">Read</option>
                    <option value="replied">Replied</option>
                  </select>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button
                    onClick={() => {
                      if (window.confirm('Are you sure you want to delete this inquiry?')) {
                        deleteInquiryMutation.mutate(inquiry.id);
                      }
                    }}
                    className="text-red-400 hover:text-red-600 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
            {filteredInquiries.length === 0 && (
              <tr>
                <td colSpan="5" className="px-6 py-12 text-center text-gray-500">
                  No inquiries found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}