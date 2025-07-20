# Arcathoria Client

> Web client for the Arcathoria game built with React and Vite

---

## Description

**Arcathoria Client** is a single-page application (SPA) implemented with React 18 and Vite. It provides an intuitive UI for players to register, log in, manage characters, browse items, and engage in battles by interacting with the Arcathoria API.

## Features

- **Authentication:** Sign up and log in using JWT-based authentication
- **Player Dashboard:** View and edit player profile and stats
- **Character Management:** Create, level up, and delete characters
- **Battle Interface:** Initiate battles and view combat results
- **Item Shop & Inventory:** Browse, purchase, and manage items
- **Leaderboard:** View top-ranked players
- **Form Validation:** Built with Formik and Yup
- **Notifications:** Real-time feedback with React Toastify
- **Progress Indicators:** Page loading indicators via `@tanem/react-nprogress`

## Project Structure

```
arcathoria-client/
├── public/                  # Static assets (index.html, favicon, images)
├── src/
│   ├── components/          # Reusable UI components (buttons, forms, layouts)
│   ├── pages/               # Route-level components (Login, Dashboard, Battle, Shop)
│   ├── services/            # API layer (Axios instances, authentication, data fetching)
│   ├── routes/              # React Router setup and protected routes
│   ├── App.jsx              # Root component with Router
│   ├── main.jsx             # Application entry point
│   └── index.css            # Global styles (Tailwind directives)
├── .eslintrc.js             # ESLint configuration
├── .prettierignore          
├── .prettierrc              
├── tailwind.config.js       # Tailwind CSS configuration
├── postcss.config.js        
├── vite.config.js           # Vite configuration
├── package.json             # NPM scripts and dependencies
└── README.md                # Project documentation
```

## Requirements

- Node.js 16 or higher
- NPM 8+ or Yarn 1+/2+

## Environment Variables

Create a `.env` file in the project root:

```dotenv
VITE_API_URL=http://localhost:8080/api
```

## Installation & Running

1. **Clone the repository**  
   ```bash
   git clone https://github.com/KrzychuuWEB/arcathoria-client.git
   cd arcathoria-client
   ```

2. **Install dependencies**  
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**  
   ```bash
   npm run dev
   # or
   yarn dev
   ```  
   The app will be available at `http://localhost:5173/`.

4. **Build for production**  
   ```bash
   npm run build
   # or
   yarn build
   ```

5. **Preview the production build**  
   ```bash
   npm run preview
   # or
   yarn preview
   ```

## Usage

- Open `http://localhost:5173/` in your browser.
- Register a new account or log in with existing credentials.
- Explore characters, battles, items, and leaderboard via the navigation menu.

## Linting & Formatting

- **Lint:**  
  ```bash
  npm run lint
  ```
- **Formatting:**  
  Prettier is configured automatically; run on save or:  
  ```bash
  npx prettier --write .
  ```

## License

This project is licensed under the MIT License. See the `LICENSE` file in the root directory for details.
