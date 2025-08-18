# Google OAuth 2.0 with NestJS

This project provides a boilerplate backend for implementing Google authentication with NestJS and Passport.js. It's designed to be a starting point for building a robust and secure authentication system, handling the complete OAuth 2.0 flow with a server-side session.

-----

## Project Overview

This backend is built on the NestJS framework and uses Passport.js for authentication. It demonstrates a complete login flow with Google, which includes:

  * **OAuth 2.0 Authorization Code Flow:** A secure, multi-step process for authenticating users.
  * **User Validation:** Verifying user profiles and managing their data in a database using **TypeORM**.
  * **Session Management:** Maintaining a persistent, authenticated user session.

-----

## Features

  * **Google OAuth 2.0 Integration:** Secure and simple sign-in via Google.
  * **Passport.js Guards & Strategies:** Modular and reusable authentication logic.
  * **TypeORM:** Object-Relational Mapping (ORM) for efficient database operations.
  * **Sessions:** Stateful authentication to maintain user sessions across requests.

-----

## Getting Started

### Prerequisites

To run this project, you will need:

  * **Node.js** (v16.x or higher)
  * **npm** or **yarn**
  * **MySQL** database
  * A configured Google Cloud Project with OAuth credentials.

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/boybothere/google-oauth2-nestjs
    cd google-oauth2-nestjs
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

    or

    ```bash
    yarn install
    ```

3.  **Configuration**
    Create a `.env` file in the project's root directory and add your credentials.

    ```
    # Google OAuth Credentials
    CLIENT_ID=<Your_Google_Client_ID>
    CLIENT_SECRET=<Your_Google_Client_Secret>
    CALLBACK_URL=<Your_Google_Redirect_URL>

    # Session secret
    SESSION_SECRET=<Your_session_secret_key>

    # Database Configuration
    DATABASE_HOST=<Your_DB_Host>
    DATABASE_PORT=<Your_DB_Port>
    DATABASE_USERNAME=<Your_DB_Username>
    DATABASE_PASSWORD=<Your_DB_Password>
    DATABASE_NAME=<Your_DB_Name>
    ```

### Running the App

```bash
npm run start:dev
```

The application will run on the port specified in your `.env` file or the default port (3000).

-----

## API Endpoints

This project exposes the following authentication endpoints:

  * **`GET /auth/google/login`**
      * Initiates the Google OAuth 2.0 login flow.
  * **`GET /auth/google/redirect`**
      * The callback URL that handles the authenticated user and establishes a session.
  * **`GET /auth/status`**
      * Checks the authentication status of the current user. Returns the user object if authenticated.
  * **`GET /auth/logout`**
      * Destroys the user's session and logs them out.
