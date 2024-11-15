import React from "react";

const Employees = ({ employees, onEdit, onDelete }) => {
  return (
    <div className="grid gap-4">
      {employees.length === 0 ? (
        <p className="text-center text-gray-500">No employees found.</p>
      ) : (
        employees.map((employee) => (
          <div
            key={employee.id}
            className="p-4 bg-white rounded shadow flex justify-between items-center"
          >
            <div>
              <h3 className="text-lg font-semibold">{employee.name}</h3>
              <p>Age: {employee.age}</p>
              <p>
                Salary: ₹
                {isNaN(employee.salary)
                  ? "N/A"
                  : Number(employee.salary).toFixed(2)}
              </p>
              <p>Status: {employee.isMarried ? "Married" : "Single"}</p>
            </div>
            <div className="flex space-x-2">
              <button
                className="bg-blue-500 text-white px-3 py-1 rounded"
                onClick={() => onEdit(employee)}
              >
                Edit
              </button>
              <button
                className="bg-red-500 text-white px-3 py-1 rounded"
                onClick={() => onDelete(employee.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Employees;
