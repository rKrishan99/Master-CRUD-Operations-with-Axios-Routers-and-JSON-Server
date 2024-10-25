# Demo App

This is a simple CRUD (Create, Read, Update, Delete) application built with React, React Router, and Axios. The application allows users to manage a list of users, including adding new users, viewing user details, updating user information, and deleting users.

## Table of Contents

- [Demo App](#demo-app)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Project Structure](#project-structure)
  - [Dependencies](#dependencies)
  - [License](#license)

## Features

- Add new users
- View a list of users
- View details of a specific user
- Update user information
- Delete users

## Installation

1. Clone the repository:

    ```sh
    git clone [https://github.com/your-username/demo-app.git](https://github.com/rKrishan99/Master-CRUD-Operations-with-Axios-Routers-and-JSON-Server.git)
    cd demo-app
    ```

2. Install the dependencies:

    ```sh
    npm install
    ```

3. Start the JSON server:

    ```sh
    npx json-server --watch db.json --port 3000
    ```

4. Start the development server:

    ```sh
    npm run dev
    ```

## Usage

- Navigate to `http://localhost:5173` in your browser to view the application.
- Use the "Add +" button to add a new user.
- Click on "Read" to view details of a specific user.
- Click on "Edit" to update user information.
- Click on "Delete" to remove a user from the list.

## Project Structure

```plaintext
demo-app/
├── .gitignore
├── db.json
├── eslint.config.js
├── index.html
├── 
├── public/
├── README.md
├── src/
│   ├── App.css
│   ├── 
│   ├── assets/
│   ├── components/
│   │   ├── create/
│   │   │   └── 
│   │   ├── delete/
│   │   │   └── Delete.jsx
│   │   ├── read/
│   │   │   └── 
│   │   ├── update/
│   │   │   └── 
│   ├── 
│   ├── index.css
│   ├── main.jsx
├── vite.config.js

```

## Screen Shoots
![image](https://github.com/user-attachments/assets/247bc40d-3ad8-4755-a055-20daba1c8c2e)
![image](https://github.com/user-attachments/assets/edf1befb-131c-4b8b-a80f-bf997e0fc923)
![image](https://github.com/user-attachments/assets/2f77e95d-117c-4819-927c-ea058a6ee41e)


## Dependencies
React
React Router
Axios
Bootstrap
JSON Server

## License
This project is licensed under the MIT License.
