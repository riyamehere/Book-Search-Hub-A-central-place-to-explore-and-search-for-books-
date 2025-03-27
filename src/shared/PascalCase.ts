export const toPascalCase = (str) => {
    return str
      .replace(/[_\s-]+/g, " ") // Replace underscores, spaces, and dashes with a space
      .split(" ") // Split into words
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize first letter
      .join(""); // Join without spaces
  };