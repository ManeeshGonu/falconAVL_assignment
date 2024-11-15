import React, { useState } from "react";
import Employees from "./components/Employees";
import FormData from "./components/FormData";
import PopUpModal from "./components/PopUpModal";

import {
  getAllEmployees,
  addEmployee,
  updateEmployee,
  deleteEmployee,
} from "./utils";

const App = () => {
  const [employees, setEmployees] = useState(getAllEmployees());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState(null);

  const handleAdd = () => {
    setEditingEmployee(null);
    setIsModalOpen(true);
  };

  const handleEdit = (employee) => {
    setEditingEmployee(employee);
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    deleteEmployee(id);
    setEmployees(getAllEmployees());
  };

  const handleSave = (formData) => {
    if (editingEmployee) {
      updateEmployee(editingEmployee.id, formData);
    } else {
      addEmployee(formData);
    }
    setEmployees(getAllEmployees());
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-center">CRUD Assignment</h1>
      </header>
      <div className="flex justify-between mb-4">
        <button
          onClick={handleAdd}
          className="bg-teal-500 text-white px-4 py-2 rounded shadow"
        >
          Add Employee
        </button>
      </div>
      <Employees
        employees={employees}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      <PopUpModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <FormData
          initialData={editingEmployee}
          onSubmit={handleSave}
          onCancel={() => setIsModalOpen(false)}
        />
      </PopUpModal>
    </div>
  );
};

export default App;
