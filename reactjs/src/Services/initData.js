const initializeData = () => {
    var array = [
        { name: "Admin", email: "admin@uops.com", password: "Admin@123", role: "Admin" },
        { name: "Ramesh", email: "ramesh@uops.com", password: "Teacher@123", role: "Teacher" },
        { name: "Rohit", email: "rohit@uops.com", password: "Student@123", role: "Student" },
    ];

    localStorage.setItem("users", JSON.stringify(array));
}

initializeData();