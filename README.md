# Task Management Application

This project is a Task Management Application built using React, Tabulator.js, TailwindCSS, and React-Toastify. The application is fully responsive and provides features to add, edit, delete, filter, and search tasks dynamically.

## Features

### Core Features

1. **Editable Task Table**
   - Uses Tabulator.js to display a table with the following columns:
     - Task ID
     - Title
     - Description
     - Status: Dropdown with options 'To Do,' 'In Progress,' and 'Done.'
   - Inline editing for Title, Description, and Status fields.
   - Button to delete tasks from the table.

2. **Add a New Task**
   - Users can add a new task dynamically using a form.
   - Newly added tasks appear in the table without requiring a page refresh.

3. **Task Filtering**
   - Dropdown filter to display tasks based on their Status: 'To Do,' 'In Progress,' or 'Done.'

4. **Fetch Data from Dummy API**
   - Fetches initial task data from: [JSONPlaceholder API](https://jsonplaceholder.typicode.com/todos)
   - Displays only the first 20 tasks.
   - Maps `completed: true/false` to Status ('Done' or 'To Do').

5. **Styling**
   - Clean and responsive design using TailwindCSS.
   - Ensures the table is visually appealing and mobile-friendly.

### Bonus Features

1. **Search Bar**
   - Allows filtering tasks by Title or Description using Tabulator's `headerFilter`.

2. **Toast Notifications**
   - Displays success messages when tasks are added, edited, or deleted using React-Toastify.

## Technology Stack

- **Frontend:** React, Tabulator.js
- **Styling:** TailwindCSS
- **API Integration:** Axios
- **Notifications:** React-Toastify

## Setup and Installation

1. Clone the repository:
   ```bash
   git clone [https://github.com/your-username/task-management-app.git](https://github.com/RajMogare/Task-Manager-App.git)
   ```

2. Navigate to the project directory:
   ```bash
   cd task-management-app
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3000`.

## Screenshots

### Home Page (Task Table)
![image](https://github.com/user-attachments/assets/4d778f02-db0d-4b38-ab58-2ff176a083fe)


### Add Task Form
![image](https://github.com/user-attachments/assets/99e4199c-f381-4815-a2c0-25d287cb7836)


### Toast Notifications
![image](https://github.com/user-attachments/assets/d9b8a340-c234-4ba1-99e1-1f372db16c7e)


## Features in Action

### Editable Table
- Users can click on table cells to edit task details (Title, Description, and Status).
- Inline editing is enabled.

### Adding Tasks
- A form is provided to add new tasks.
- Once added, tasks appear instantly in the table.

### Filtering
- A dropdown filter is available to display tasks based on their Status.

### Fetching Initial Data
- Tasks are fetched from the dummy API and displayed in the table.

### Toast Notifications
- Success messages appear whenever tasks are added, edited, or deleted.

## Dependencies

- **React**: Framework for building user interfaces.
- **Tabulator.js**: Library for creating interactive tables.
- **TailwindCSS**: Utility-first CSS framework for styling.
- **React-Toastify**: Library for displaying notifications.
- **Axios**: Promise-based HTTP client for fetching data.

