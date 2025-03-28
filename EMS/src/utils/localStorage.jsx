 const employees=
  [
    {
      "id": 1,
      "email": "employee1@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Fix Login Bug",
          "taskDescription": "Resolve authentication issue in login API",
          "taskDate": "2025-03-25",
          "taskCategory": "Development",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Update Documentation",
          "taskDescription": "Revise API documentation for new features",
          "taskDate": "2025-03-20",
          "taskCategory": "Documentation",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        }
      ]
    },
    {
      "id": 2,
      "email": "employee2@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Design Homepage",
          "taskDescription": "Create a responsive homepage UI",
          "taskDate": "2025-03-22",
          "taskCategory": "Design",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Database Optimization",
          "taskDescription": "Improve database indexing for faster queries",
          "taskDate": "2025-03-18",
          "taskCategory": "Database",
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true
        }
      ]
    },
    {
      "id": 3,
      "email": "employee3@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Test API Endpoints",
          "taskDescription": "Perform integration testing on user APIs",
          "taskDate": "2025-03-21",
          "taskCategory": "Testing",
          "active": false,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Fix CSS Issues",
          "taskDescription": "Resolve alignment and spacing issues on the dashboard",
          "taskDate": "2025-03-23",
          "taskCategory": "Design",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        }
      ]
    },
    {
      "id": 4,
      "email": "employee4@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Implement JWT Authentication",
          "taskDescription": "Secure the API using JWT authentication",
          "taskDate": "2025-03-24",
          "taskCategory": "Security",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Refactor Codebase",
          "taskDescription": "Improve code structure and remove redundant code",
          "taskDate": "2025-03-19",
          "taskCategory": "Development",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        }
      ]
    },
    {
      "id": 5,
      "email": "employee5@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Set Up CI/CD Pipeline",
          "taskDescription": "Automate build and deployment process",
          "taskDate": "2025-03-20",
          "taskCategory": "DevOps",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "taskTitle": "Monitor Server Logs",
          "taskDescription": "Analyze logs for performance and security issues",
          "taskDate": "2025-03-22",
          "taskCategory": "Monitoring",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        }
      ]
    }
  ]
  
const admin=[{
  "id": 101,
  "email": "admin@example.com",
  "password": "123"
}
]
export const setLocalStorage=()=>{
  localStorage.setItem('employees',JSON.stringify(employees))
  localStorage.setItem('admin',JSON.stringify(admin))
  
}
export const getLoacalStorage=()=>{
  const employees=JSON.parse(localStorage.getItem('employees'))
  const admin=JSON.parse(localStorage.getItem('admin'))
  return {employees,admin}
  

}