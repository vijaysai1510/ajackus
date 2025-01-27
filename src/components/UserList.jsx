import React from 'react';

const UserList = ({ users, onEdit, onDelete }) => {
  return (
    <div className="bg-transparent flex items-center justify-center p-4">
      <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-6 sm:p-8 w-full max-w-4xl mx-2 sm:mx-4 shadow-2xl relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-purple-200 rounded-full -mr-16 -mt-16 opacity-50" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-300 rounded-full -ml-12 -mb-12 opacity-50" />

        <div className="relative">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-900">
            User List
          </h2>

          {users.length === 0 ? (
            <div className="text-center text-gray-600 text-base sm:text-lg py-8">
              No users found.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto border-collapse text-sm sm:text-base">
                <thead>
                  <tr className="bg-purple-200">
                    <th className="px-4 sm:px-6 py-3 text-left font-semibold text-purple-800">ID</th>
                    <th className="px-4 sm:px-6 py-3 text-left font-semibold text-purple-800">Name</th>
                    <th className="px-4 sm:px-6 py-3 text-left font-semibold text-purple-800">Email</th>
                    <th className="px-4 sm:px-6 py-3 text-left font-semibold text-purple-800">Phone</th>
                    <th className="px-4 sm:px-6 py-3 text-left font-semibold text-purple-800">Username</th>
                    <th className="px-4 sm:px-6 py-3 text-left font-semibold text-purple-800">Website</th>
                    <th className="px-4 sm:px-6 py-3 text-left font-semibold text-purple-800">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white/50">
                  {users.map((user, index) => (
                    <tr
                      key={user.id}
                      className={`${
                        index % 2 === 0 ? 'bg-white' : 'bg-purple-100'
                      } hover:bg-purple-50 transition-all`}
                    >
                      <td className="px-4 sm:px-6 py-3 text-gray-800">{user.id}</td>
                      <td className="px-4 sm:px-6 py-3 text-gray-800">
                        {user.firstName} {user.lastName}
                      </td>
                      <td className="px-4 sm:px-6 py-3 text-gray-800">{user.email}</td>
                      <td className="px-4 sm:px-6 py-3 text-gray-800">{user.phone}</td>
                      <td className="px-4 sm:px-6 py-3 text-gray-800">{user.username}</td>
                      <td className="px-4 sm:px-6 py-3 text-gray-800">{user.website}</td>
                      <td className="px-4 sm:px-6 py-3 flex gap-2">
                        <button
                          onClick={() => onEdit(user)}
                          className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600 transition-all min-w-[75px]"
                          title="Edit user"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => onDelete(user.id)}
                          className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition-all min-w-[75px]"
                          title="Delete user"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserList;
