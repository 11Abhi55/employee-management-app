const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static("public"));

let employees = [
  {
    id: 1,
    name: "Rakhamaji",
    role: "DevOps Engineer"
  }
];

// Get all employees
app.get("/api/employees", (req, res) => {
  res.json(employees);
});

// Add employee
app.post("/api/employees", (req, res) => {
  const { name, role } = req.body;

  if (!name || !role) {
    return res.status(400).json({
      message: "Name and role are required"
    });
  }

  const employee = {
    id: Date.now(),
    name,
    role
  };

  employees.push(employee);

  res.status(201).json(employee);
});

// Delete employee
app.delete("/api/employees/:id", (req, res) => {
  const id = Number(req.params.id);

  employees = employees.filter((employee) => employee.id !== id);

  res.json({
    message: "Employee deleted successfully"
  });
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

module.exports = app;