## Task Approval System

# Folder Structure.
```
task-approval-system/
│
├── backend/               # Backend files
│   ├── models/            # Mongoose schemas
│   ├── routes/            # Express route handlers
│   ├── middleware/        # Middleware for authentication and error handling
│   ├── server.js          # Entry point for the backend
│
├── frontend/              # Frontend files
│   ├── src/
│   │   ├── components/    # Reusable React components
│   │   ├── pages/         # Application pages (Login, Dashboard, etc.)
│   │   ├── utils/         # Helper functions
│   │   ├── App.js         # Main React app
│
├── README.md              # Project documentation
└── .gitignore             # Ignored files and folders

```
## Features

-   User authentication with JWT.
-  Create, update, view, and manage tasks.
-  Approve  tasks based on assigned roles.
  - Role-based access control for enhanced security.
- Responsive design for seamless use across devices.


### Tech Stack
- Frontend: React, TailwindCSS
- Backend: Node.js, Express.js
- Authentication: JSON Web Tokens (JWT)

  ##Frontend
  - login page
    ![Image](https://github.com/user-attachments/assets/3e6ef46b-206d-4e46-8328-6ee8ffa6b1aa)
  -admin Dashboard page
  ![Image](https://github.com/user-attachments/assets/c88ec821-ffe1-45f1-b4c4-7079bb76a2df)
  - userDashboard page
   ![Image](https://github.com/user-attachments/assets/ba4631fd-ed5b-4653-9a5d-485afa89ac99)

### Installation

1. Download the project
2. Open the project in your IDE
3. Install the dependencies
4. Run the project
5. Access the project on localhost

## 1. Clone the project

```bash
git clone https://github.com/prasadbylapudi/task-management
```

## 2. Install the dependencies

- navigate into frontend and backend folder and do 

```bash
npm install
```

## 3.Configure the environment:

    Copy the .env.example file to .env.
    Update the .env file with your database credentials and other required configurations.



## 4. Run the project:
## run backend


    ```bash
        npm start
    ```
    
## run frontend
      ```bash
        npm run dev
    ```

## 6. Access the project on localhost

    Open your browser and navigate to http://localhost

### API Endpoints

## Authentication
- POST /api/auth/login
- Authenticate a user and receive a JWT token.|
 ```
 json
 {
  "username": "user",
  "password": "user"
}```

-Admin Login

 ```
 json
 {
  "username": "admin",
  "password": "admin"
}```


### 2. Tasks

#### Create Task
- **URL:** `/tasks`
- **Method:** `POST`
- **Authentication:** Required
- **Content-Type:** `application/json`

**Request Body:**
```
json
{
"title": "string",
"description": "string",
"dueDate": "2024-03-20T10:00:00Z",
"priority": "high",
"assignedTo": "user_id"
}
```


#### Get All Tasks
- **URL:** `/tasks`
- **Method:** `GET`
- **Authentication:** Required


**Success Response:** (200 OK)


#### Approve/Reject Task
- **URL:** `/tasks/:taskId/approve`
- **Method:** `PUT`
- **Authentication:** Required (Admin only)
- **Content-Type:** `application/json`

**Request Body:**

```json
{
"status": "approved", // or "rejected"
"comment": "string" // optional
}
```




