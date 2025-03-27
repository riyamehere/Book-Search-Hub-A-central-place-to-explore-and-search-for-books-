# AI Agent for Avensor Stations Frontend React JS

This is the front end repository for AI Agent for Avensor Stations in React Javascript working in Vite with HMR and some ESLint rules.

This application is built using [React](https://github.com/facebook/react) and JavaScript with [Vite](https://github.com/vitejs/vite).

## Installation and Project Run

1. Use *npm i* command to install all the required packages.
2. Use *npm run dev* to run the app in the development mode.

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