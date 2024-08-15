# Dream Jobs - A Job Application Portal

## Overview

Dream Jobs is a dynamic and responsive web application designed for job seekers and employers. Users can search for jobs, apply to them, and manage job postings. The platform includes JWT-based authentication to secure user-specific routes and utilizes a variety of modern web technologies to provide a smooth user experience.

## Features

- **Job Management**: Users can add jobs, view jobs, apply to jobs, and manage the jobs they have posted.
- **JWT Authentication**: Secure access to applicant lists and applied jobs routes using JSON Web Tokens.
- **Responsive Design**: Fully responsive layout ensuring compatibility across devices (mobile, tablet, and desktop).
- **Firebase Integration**: Secure and scalable backend with Firebase for authentication.
- **React Router**: Efficient routing with `react-router-dom` to manage application navigation.
- **Form Handling**: Advanced form handling with `react-hook-form` for better user data management.

## Technologies Used

### Frontend

- **React**: ^18.3.1
- **Tailwind CSS**: For styling and responsive design.
- **Firebase Hosting**: For deploying and hosting the frontend.
- **JWT**: For authentication.
- **Axios**: ^1.7.2
- **React Hook Form**: ^7.52.1
- **React Router Dom**: ^6.25.1
- **React Toastify**: ^10.0.5
- **React Tooltip**: ^5.27.1
- **SweetAlert2**: ^11.12.3
- **Prop-Types**: ^15.8.1
- **React Fast Marquee**: ^1.6.5
- **React Helmet**: ^6.1.0
- **React Icons**: ^5.2.1

### Backend

- **Express.js**: For building the RESTful API.
- **MongoDB**: As the database for storing job listings and user information.
- **JWT**: For authentication and securing routes.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/KausarAhmadTasin/dream-jobs-client
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Configure Firebase:
    - Create a `.env` file in the root of the project.
    - Add your Firebase configuration keys to the `.env` file:
      ```bash
      REACT_APP_API_KEY=your_api_key
      REACT_APP_AUTH_DOMAIN=your_auth_domain
      REACT_APP_PROJECT_ID=your_project_id
      REACT_APP_STORAGE_BUCKET=your_storage_bucket
      REACT_APP_MESSAGING_SENDER_ID=your_messaging_sender_id
      REACT_APP_APP_ID=your_app_id
      ```

4.   - Start the backend server:
     ```bash
     npm run dev
     ```

5. Backend setup:
   - Navigate to the backend directory (if separate) and install backend dependencies:
     ```bash
     npm install
     ```
6. Start the development server:
    ```bash
    npm start
    ```
 

## Usage

- **Add a Job**: Log in and navigate to the "Add A Job" page to create a new job posting.
- **Apply for a Job**: Browse jobs, and click "Apply" on any job details page. Fill in the necessary details and submit your application.
- **Manage Your Jobs**: Visit "My Jobs" to view, update, or delete the jobs you've posted.
- **VApplied Jobs**: Check the "Applied Jobs" section to see the jobs you have applied for.
- **Candiate List**: Check and update the list of applicants applied for your jobs.

## Live Demo

Check out the live demo: [Dream Jobs Live](https://dream-jobs-fae96.web.app/)

## My Role
I served as the Full-Stack Developer for this project, handling all aspects of both the frontend and backend development.
