# Be The Hero

Welcome to **Be The Hero**, a full-stack social project designed to connect Non-Governmental Organizations (NGOs) and institutions in need with individuals willing to offer help. By allowing registered entities to post their needs, such as food supplies, and enabling users to make donations, Be The Hero aims to create a platform where anyone can be a hero.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [Mobile Setup](#mobile-setup)
- [Usage](#usage)
- [License](#license)

## Introduction

Be The Hero is designed to foster a community of giving by simplifying the process for NGOs to share their needs and for individuals to provide support. The project is built with a robust full-stack architecture to ensure scalability, responsiveness, and ease of use across different platforms.

## Features

- **NGO and Institution Registration**: Organizations can create profiles and post their specific needs.
- **Donation Matching**: Users can browse and select causes to support, making donations to help meet those needs.
- **Cross-Platform Accessibility**: The application is accessible via web and mobile platforms, ensuring a wide reach.
- **User-Friendly Interface**: Intuitive and straightforward design for easy navigation and use.

## Technologies Used

### Backend: Express

Express is a fast, unopinionated, minimalist web framework for Node.js. It is ideal for building robust APIs and handling server-side logic. Key benefits include:
- **Efficiency**: Lightweight and performant, perfect for building scalable applications.
- **Flexibility**: Middleware support allows for a modular approach to handling requests and responses.
- **Community and Ecosystem**: A large ecosystem of libraries and a strong community support.

### Frontend: React

React is a JavaScript library for building user interfaces. Its component-based architecture is perfect for creating interactive UIs. Key benefits include:
- **Declarative**: Makes it easy to design interactive UIs and manage application state.
- **Component-Based**: Encourages reusability and modularity.
- **Performance**: Virtual DOM ensures efficient rendering and updates.

### Mobile: React Native

React Native enables developers to build mobile apps using JavaScript and React. It allows for code reuse between web and mobile platforms. Key benefits include:
- **Cross-Platform**: Write once, run on both iOS and Android.
- **Performance**: Delivers high-performance mobile apps with a native feel.
- **Rich Ecosystem**: Access to a plethora of libraries and community contributions.

## Installation

To get started with Be The Hero, follow these steps for each part of the project: backend, frontend, and mobile.

### Backend Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/marcelohoficial/be-the-hero-backend.git
   cd be-the-hero-backend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up the database**:
   - Ensure you have PostgreSQL installed and running.
   - Create a database and update the database configuration in the `.env` file.

4. **Run migrations**:
   ```bash
   npx knex migrate:latest
   ```

5. **Start the server**:
   ```bash
   npm start
   ```

The backend server will be running at `http://localhost:3333`.

### Frontend Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/marcelohoficial/be-the-hero-frontend.git
   cd be-the-hero-frontend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```

The frontend application will be available at `http://localhost:3000`.

### Mobile Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/marcelohoficial/be-the-hero-mobile.git
   cd be-the-hero-mobile
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Install Expo CLI** (if not already installed):
   ```bash
   npm install -g expo-cli
   ```

4. **Start the Expo server**:
   ```bash
   expo start
   ```

Use the Expo app on your mobile device to scan the QR code and run the application.

## Usage

1. **Register as an NGO or Institution**:
   - Sign up and create a profile.
   - Post your needs, such as food supplies, medical aid, or other essentials.

2. **Make a Donation**:
   - Browse the list of needs posted by various organizations.
   - Select a cause and make a donation to help meet the need.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Thank you for using Be The Hero! Together, we can make a difference and be heroes for those in need. If you have any questions or feedback, please don't hesitate to reach out.

---

**Developed by Marcelo Henrique**

Feel free to reach out at marcelopromova@gmail.com for any queries or support.
