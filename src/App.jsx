import React, { useState, useEffect } from 'react';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import Modal from './components/Modal';

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showList, setShowList] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    document.title = "User Management System";
  });

  const handleAddUser = (userData) => {
    const newUser = {
      ...userData,
      id: users.length + 1
    };
    setUsers([...users, newUser]);
    setShowList(true);
  };

  const handleEditUser = (updatedUser) => {
    setUsers(prevUsers => 
      prevUsers.map(user => 
        user.id === updatedUser.id ? {...updatedUser} : user
      )
    );
    setSelectedUser(null);
    setIsModalOpen(false);
  };

  const handleDeleteUser = (userId) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  const openEditModal = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  if (!showList) {
    return <UserForm onAddUser={handleAddUser} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-purple-300 p-4">
      <UserList 
        users={users} 
        onEdit={openEditModal} 
        onDelete={handleDeleteUser}
      />
      <div className="mt-4 flex justify-center">
        <button
          onClick={() => setShowList(false)}
          className="w-100 bg-gradient-to-r from-purple-600 to-purple-800 text-white py-3 rounded-lg hover:from-purple-700 hover:to-purple-900 transition-all transform hover:scale-[1.02] duration-200 shadow-lg px-4 py-2"
        >
          Add New User
        </button>
      </div>

      <Modal 
        isOpen={isModalOpen} 
        onClose={() => {
          setIsModalOpen(false);
          setSelectedUser(null);
        }}
      >
        <UserForm 
          user={selectedUser} 
          onEditUser={handleEditUser} 
        />
      </Modal>
    </div>
  );
}

export default App;