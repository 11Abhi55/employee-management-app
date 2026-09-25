async function loadEmployees() {
    const response = await fetch("/api/employees");
    const employees = await response.json();

    const employeeList = document.getElementById("employeeList");

    employeeList.innerHTML = "";

    employees.forEach((employee) => {
        const div = document.createElement("div");

        div.className = "employee";

        div.innerHTML = `
            <div class="employee-info">
                <strong>${employee.name}</strong>
                <span>${employee.role}</span>
            </div>

            <button
                class="delete-btn"
                onclick="deleteEmployee(${employee.id})"
            >
                Delete
            </button>
        `;

        employeeList.appendChild(div);
    });
}

async function addEmployee() {
    const name = document.getElementById("name").value;
    const role = document.getElementById("role").value;

    if (!name || !role) {
        alert("Please enter name and role");
        return;
    }

    await fetch("/api/employees", {
        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            name,
            role
        })
    });

    document.getElementById("name").value = "";
    document.getElementById("role").value = "";

    loadEmployees();
}

async function deleteEmployee(id) {
    await fetch(`/api/employees/${id}`, {
        method: "DELETE"
    });

    loadEmployees();
}

loadEmployees();