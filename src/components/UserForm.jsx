import React, { useState, useEffect } from 'react';
import { UserCircle, Mail, Phone, Globe, User } from 'lucide-react';
import { Fade } from 'react-reveal';

const UserForm = ({ user, onAddUser, onEditUser }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    phone: '',
    website: ''
  });

  useEffect(() => {
    if (user) {
      setFormData({
        firstName: user.firstName || '',
        lastName: user.lastName || '',
        email: user.email || '',
        username: user.username || '',
        phone: user.phone || '',
        website: user.website || ''
      });
    }
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      ...formData,
      name: `${formData.firstName} ${formData.lastName}`
    };
    
    if (user) {
      onEditUser(userData);
    } else {
      onAddUser(userData);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-purple-300 flex items-center justify-center p-4">
      <Fade Fade top big duration={800}>
      <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 w-full max-w-2xl mx-4 shadow-2xl relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-purple-200 rounded-full -mr-16 -mt-16 opacity-50" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-300 rounded-full -ml-12 -mb-12 opacity-50" />
        
        <div className="relative">
          {/* Header with icon */}
          <div className="flex flex-col items-center mb-8">
            <UserCircle className="w-16 h-16 text-purple-500 mb-4" />
            <h1 className="text-3xl font-bold text-center mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-900">
              User Management System
            </h1>
            <p className="text-gray-600 text-center">Fill out the form to add a new user</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name Section */}
            <div className="mb-6">
              <label className="block text-gray-800 mb-1 font-medium">Full Name</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <input 
                    type="text"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    className="w-full p-3 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-200 text-black bg-white/50 backdrop-blur-sm transition-all"
                    required
                  />
                  <User className="w-5 h-5 text-purple-500 absolute left-3 top-3" />
                  <div className="text-gray-600 text-sm mt-1">First Name</div>
                </div>
                <div className="relative">
                  <input 
                    type="text"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    className="w-full p-3 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-200 text-black bg-white/50 backdrop-blur-sm transition-all"
                    required
                  />
                  <User className="w-5 h-5 text-purple-500 absolute left-3 top-3" />
                  <div className="text-gray-600 text-sm mt-1">Last Name</div>
                </div>
              </div>
            </div>

            {/* Username and Email Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <label className="block text-gray-800 mb-1 font-medium">Username</label>
                <input 
                  type="text"
                  placeholder="Username"
                  value={formData.username}
                  onChange={(e) => setFormData({...formData, username: e.target.value})}
                  className="w-full p-3 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-200 text-black bg-white/50 backdrop-blur-sm transition-all"
                  required
                />
                <UserCircle className="w-5 h-5 text-purple-500 absolute left-3 top-[2.7rem]" />
              </div>
              <div className="relative">
                <label className="block text-gray-800 mb-1 font-medium">Email</label>
                <input 
                  type="email"
                  placeholder="ex: myname@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full p-3 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-200 text-black bg-white/50 backdrop-blur-sm transition-all"
                  required
                />
                <Mail className="w-5 h-5 text-purple-500 absolute left-3 top-[2.7rem]" />
                <div className="text-gray-600 text-sm mt-1">example@example.com</div>
              </div>
            </div>

            {/* Phone and Website Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <label className="block text-gray-800 mb-1 font-medium">Phone</label>
                <input 
                  type="tel"
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full p-3 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-200 text-black bg-white/50 backdrop-blur-sm transition-all"
                />
                <Phone className="w-5 h-5 text-purple-500 absolute left-3 top-[2.7rem]" />
              </div>
              <div className="relative">
                <label className="block text-gray-800 mb-1 font-medium">Website</label>
                <input 
                  type="url"
                  placeholder="Website URL"
                  value={formData.website}
                  onChange={(e) => setFormData({...formData, website: e.target.value})}
                  className="w-full p-3 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-200 text-black bg-white/50 backdrop-blur-sm transition-all"
                />
                <Globe className="w-5 h-5 text-purple-500 absolute left-3 top-[2.7rem]" />
              </div>
            </div>

            {/* Submit Button */}
            <button 
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-purple-800 text-white py-3 rounded-lg hover:from-purple-700 hover:to-purple-900 transition-all transform hover:scale-[1.02] duration-200 shadow-lg"
            >
              {user ? 'Update User' : 'Add User'}
            </button>
          </form>
        </div>
      </div>
      </Fade>
    </div>
  );
};

export default UserForm;