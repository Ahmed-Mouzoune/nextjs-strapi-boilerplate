# Next.js + Strapi Boilerplate

> [!WARNING]
> This project still under construction

This is a monorepo boilerplate setup using Next.js for the frontend and Strapi for the backend, managed with `yarn` workspaces and `turbo`. This setup is designed to streamline the development of full-stack applications, providing a solid foundation with best practices and tools.

## Table of Contents

- [Next.js + Strapi Boilerplate](#nextjs--strapi-boilerplate)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Requirements](#requirements)
  - [Getting Started](#getting-started)
    - [Installation](#installation)
    - [Folder structures](#folder-structures)
    - [License](#license)

## Features

- **Next.js** for the frontend.
- **Strapi** as the headless CMS backend.
- **yarn** for fast and disk-efficient package management.
- **turbo** for optimized task running across the monorepo.
- **Prettier** with Tailwind CSS plugin for consistent code formatting.

## Requirements

- **Node.js**: `>=18.17.0 <=20.x.x`
- **yarn**: `>=6.0.0`

## Getting Started

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/nextjs-strapi-boilerplate.git
   cd nextjs-strapi-boilerplate
   ```

2. Install dependencies:

   ```bash
   yarn install
   ```

   **TODO:** explain how to generate env variable & access token from strapi for front

3. Running the Development Servers

   To start both the frontend and backend in development mode:

   ```bash
   yarn dev
   ```

   To start only the frontend (Next.js):

   ```bash
   yarn dev:front
   ```

   To start only the backend (Strapi):

   ```bash
   yarn dev:back
   ```

4. Building the Project

   To start both the frontend and backend in development mode:

   ```bash
   yarn build
   ```

5. Formatting Code

   To format your code using Prettier:

   ```bash
   yarn format
   ```

6. Cleaning Up

   To clean the project and remove **node_modules**:

   ```bash
   yarn clean
   ```

### Folder structures

```bash
├── apps
│   ├── frontend   # Next.js app
│   └── backend    # Strapi app
├── packages       # Shared packages (e.g., utilities, components)
├── turbo.json     # Turbo configuration
├── yarn-workspace.yaml  # yarn workspaces configuration
├── package.json   # Root package configuration
└── README.md      # This file
```

### License

This project is licensed under the ISC License.
