// Interface for Category type
export interface Category {
    name: string;
    icon: string;
  }
  
// Interface for Book Format Types
interface BookFormats {
    "application/zip"?: string;
    "text/html"?: string;
    "application/pdf"?: string;
    "text/plain"?: string;
    "image/jpeg"?: string;
  }
  
// Interface for Author Details
  interface Author {
    name: string;
  }
  
  // Interface for Book Details
  interface Book {
    id: number;
    title: string;
    authors: Author[];
    formats: BookFormats;
  }
  
  // Props interface for CategoryView component
 export interface CategoryViewProps {
    category: string; // Selected category name
    books: Book[]; // Array of books
    onBack: () => void; // Function to handle back navigation
    onSearch: (query: string) => void; // Function to handle search input
    lastBookElementRef: (node: HTMLAnchorElement | null) => void; // Intersection observer ref
  }