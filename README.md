This project implements a login and account verification system using JavaScript, which includes features such as session management, user registration, login, profile editing, and post creation. The application employs a Session class for session handling and Validator class for input validation.

Features
1. Session Management
Start Session: User sessions are created and managed with cookies.
Retrieve Session: Checks if the user is logged in by reading the session cookie.
Destroy Session: Clears cookies to log out the user.

2. User Authentication
Login Form:
Users can log in with their email and password.
Validates credentials before granting access.
Registration Form:
New users can register with a username, email, and password.
Ensures input fields meet specified validation criteria.

3. Profile Management
View Profile: Retrieves user data for the logged-in session and displays it.
Edit Profile:
Allows users to update their username and email.
Modal popup used for profile editing.
Delete Profile:
Users can delete their accounts after confirmation.

4. Post Creation
Allows users to create a post after logging in.
Posts are created dynamically with content entered by the user.

5. Modal Popups
Modal windows are used for account editing and registration.
Easily toggled using JavaScript event listeners.

6. Form Validation
Validation rules are defined for registration inputs:
Username: Minimum of 5 and maximum of 50 characters.
Email: Must be a valid email address.
Password: Minimum of 7 and maximum of 25 characters, with matching confirmation.
Project Structure
Main Classes
Session

Handles creating, retrieving, and destroying user sessions using cookies.
Validator

Configures validation rules for input fields.
Checks if form inputs meet specified criteria.
User

Contains methods for:
Registering a new user.
Logging in a user.
Editing user profile details.
Deleting a user profile.
Post

Tools and Technologies
HTML: For creating the structure of the application.
CSS: For styling forms, buttons, and modal windows.
JavaScript: For client-side logic, session handling, and form validation.
