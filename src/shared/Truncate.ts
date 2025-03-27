//Function to truncate the book title text to maintain uniformity and ellipsis for extra text
export const truncateText = (text: string, maxLength: number) => 
  text.length > maxLength ? text.slice(0, maxLength) + "..." : text;