# Gutenberg Project

This is the front end repository for Gutenberg Project in React Javascript working in Vite with HMR and some ESLint rules.
A social cataloging website that allows you to freely search its database of books, annotations, and reviews.


https://github.com/user-attachments/assets/28610fa4-bca1-4ae4-86c8-ef24078fd521




This application is built using [React](https://github.com/facebook/react) and JavaScript with [Vite](https://github.com/vitejs/vite).

A web application that allows users to browse books by category, search for books, and use infinite scrolling to load more books dynamically.

## 🚀 Features

### 🔍 Category-Based Book Listing
- Users can select a category from the home screen.
- Fetches and displays books related to the selected category.

### 🔎 Search Functionality
- Users can search for books within the selected category.
- Implements **debounced search** (300ms delay) to reduce API calls.

### 🔄 Infinite Scrolling
- Uses **Intersection Observer** to detect when the last book element is visible.
- Automatically fetches more books when scrolling reaches the end.
- API calls are **throttled (1 second)** to prevent excessive requests.

### ⚡ Optimized API Calls
- Uses **throttle (lodash)** to limit API requests.
- Stops making requests when no more books are available (`hasMore`).

### 🔧 State Management with React Hooks
- `useState` for managing books, search input, selected category, and pagination.
- `useEffect` for fetching books on category change and search input.

### 📌 Dynamic Page Rendering
- **HomeView**: Displays a list of book categories.
- **CategoryView**: Displays books and handles search & infinite scrolling.

### 🌐 Environment-Based API Configuration
- Uses **Vite environment variables (`VITE_BASE_URL`)** for API requests.

## Installation and Project Run
1. Clone the repository and cd to the project directory.
2. Use *npm i* command to install all the required packages.
3. Use *npm run dev* to run the app in the development mode.

*Note* : You don't need to install anything seperately.

## Getting Started

Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

The page will reload if you make edits, you will also see any lint errors in the console.

## Available Scripts

In the project directory, you can run the following scripts:

*Note*: Following commands and scripts will only runs on linux bash not on other OS native cli's.

| Command                               | Description                                                               |
| ------------------------------------- | ------------------------------------------------------------------------- |
| *npm install*               | Install all the required packages                      |
| *npm run dev*               | Runs the app on 5173 port .                      |
| *npm run build*        | Builds the app and creates a minified dist file for deployment                       |
| *npm run preview*    | Opens the app in preview mode after the build                 |


### Coding Standards

- **Destructuring Props**: Destructure props in function components to improve readability and avoid repetition. This makes it clear which props are being used within the component.  
- **Use React.FC**: Use React.FC (Function Component) type when defining functional components. This provides built-in support for specifying props and children types and improves code clarity.  
- **Consistent Naming**: Use PascalCase for component names and camelCase for variable and function names.  
- **Prop Types**: Use PropTypes to validate the types of props passed to components for runtime type safety in JavaScript projects.  
- **Default Props**: Define defaultProps for optional props to provide default values and avoid undefined errors.  
- **Event Handlers**: Prefix event handlers with "handle" (e.g., `handleClick`) for clarity.  
- **CSS Modules**: Use CSS Modules or scoped CSS for styling to avoid class name conflicts.  
- **File Structure**: Organize components in a clear, consistent folder structure, grouping related files together.  
- **Avoid Inline Styles**: Use external or module-based styling for better readability and maintainability.  
- **State Management**: Use local state where applicable and consider libraries like Redux or Zustand for global state management.  
- **Code Splitting**: Use dynamic imports and React.lazy for code splitting and improving performance.  
- **Hooks**: Use React Hooks for managing state and lifecycle methods in functional components.  
- **Avoid Anonymous Functions**: Define functions outside the JSX to prevent re-creation on every render.  
- **Commenting**: Add meaningful comments to explain complex logic or important decisions.  
- **Error Boundaries**: Use error boundaries to gracefully handle runtime errors in components.  
- **Dependencies**: Keep dependencies up-to-date and remove unused ones to reduce bloat.  
- **Linting and Formatting**: Use ESLint and Prettier for consistent code style and formatting.

These standards help ensure consistency, maintainability in React projects.
