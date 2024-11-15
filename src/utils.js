let employees = [
  {
    id: 1,
    name: "John Doe",
    age: 28,
    isMarried: false,
    salary: 55000.75,
  },
  {
    id: 2,
    name: "Jane Smith",
    age: 34,
    isMarried: true,
    salary: 72000.5,
  },
  {
    id: 3,
    name: "Samuel Green",
    age: 41,
    isMarried: true,
    salary: 95000.0,
  },
  {
    id: 4,
    name: "Emily Johnson",
    age: 25,
    isMarried: false,
    salary: 48000.0,
  },
  {
    id: 5,
    name: "Michael Brown",
    age: 30,
    isMarried: true,
    salary: 64000.25,
  },
];

export const getAllEmployees = () => employees;

export const addEmployee = (employee) => {
  const newEmployee = { id: Date.now(), ...employee };
  employees.push(newEmployee);
};

export const updateEmployee = (id, updatedEmployee) => {
  employees = employees.map((emp) =>
    emp.id === id ? { ...emp, ...updatedEmployee } : emp
  );
};

export const deleteEmployee = (id) => {
  employees = employees.filter((emp) => emp.id !== id);
};
