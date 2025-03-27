// Custom pascal case function for the category title
export const toPascalCase = (str: string) => {
    return str
      .replace(/[_\s-]+/g, " ") // Replace underscores, spaces, and dashes with a space
      .split(" ") // Split into words
      .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize first letter
      .join(""); // Join without spaces
  };