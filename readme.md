# MERN Stack Food Website with Framer Motion

This documentation provides detailed instructions on how to set up, install, and configure a MERN (MongoDB, Express.js, React, Node.js) stack food website with Framer Motion. This website allows users to search for food, view recipes and cooking instructions, and save their favorite recipes to their accounts.

## Table of Contents
1. **Prerequisites**
2. **Project Structure**
3. **Setting up the Backend**
    - MongoDB Configuration
    - Express.js Configuration
4. **Setting up the Frontend**
    - Environment Variables
5. **Running the Application**
6. **Usage**
    - Searching for Food
    - Viewing Recipes
    - Saving Recipes
7. **Contributing**
8. **License**

---

## 1. Prerequisites
Before you proceed, ensure that you have the following prerequisites installed:

- Node.js and npm: [Download and Install Node.js](https://nodejs.org/)
- MongoDB: [Download and Install MongoDB](https://www.mongodb.com/try/download/community)
- Git: [Download and Install Git](https://git-scm.com/downloads)

## 2. Project Structure
mern-food-website/  
├── backend/  
│   └── ...  
├── frontend/  
│   └── ...  
├── ...  
└── README.md  



## 3. Setting up the Backend


### Express.js Configuration
1. Navigate to the `backend` directory: `cd backend`.
2. Install dependencies: Run `npm install`.
3. Create a `.env` file in the `backend` directory and add the following environment variables:

DB_CONECTION = your_mongodb_connection_string  
PORT = 4000  
MY_SECRET = Your_secret_phrase  

Replace `your_mongodb_connection_string` with your MongoDB connection string, and `your_jwt_secret` with a secret key for JWT authentication.

4. Start the Express.js server: Run `npm start`.

## 4. Setting up the Frontend

1. Navigate to the `frontend` directory: `cd frontend`.
2. Install dependencies: Run `npm install`.


4. Start the React frontend: Run `npm start`.

## 5. Running the Application
- Access the website at `http://localhost:3000`.

## 6. Usage

### Searching for Food
1. On the homepage, use the search bar to search for food items.
2. Click on a food item to view its details, including the recipe and cooking instructions.

### Viewing Recipes
1. After searching for food, you can click on a food item to view its recipe and instructions.

### Saving Recipes
1. To save a recipe, you need to create an account and log in.
2. Click the "Sign Up" button to create an account or the "Log In" button to log in.
3. Once logged in, you can click the "Save" button on a recipe to save it to your account.

## 7. Contributing
If you'd like to contribute to this project, please fork the repository, make your changes, and create a pull request.


Congratulations! You have successfully set up and installed the MERN stack food website with Framer Motion. Feel free to customize and enhance the website as needed for your specific requirements.
