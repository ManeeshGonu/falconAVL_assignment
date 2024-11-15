import React, { useState } from "react";

const FormData = ({ onSubmit, initialData = {}, onCancel }) => {
  const [formData, setFormData] = useState({
    name: initialData?.name || "",
    age: initialData?.age || "",
    salary: initialData?.salary || "",
    isMarried: initialData?.isMarried || false,
  });

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!formData.name || !formData.age || !formData.salary) {
      alert("Please fill out all fields.");
      return;
    }
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label>Age:</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label>Salary:</label>
        <input
          type="number"
          name="salary"
          value={formData.salary}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="isMarried"
            checked={formData.isMarried}
            onChange={handleChange}
          />
          Married
        </label>
      </div>
      <div className="flex justify-between">
        <button type="button" className="bg-gray-500 text-white px-4 py-2 rounded-md" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit" className="bg-teal-500 text-white px-4 py-2 rounded-md">
          Save
        </button>
      </div>
    </form>
  );
};

export default FormData;
