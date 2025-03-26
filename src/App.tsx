import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomeView from './components/HomeView.component';
import CategoryView from './components/CategoryView.component';

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [books, setBooks] = useState([]);
  
  useEffect(() => {
    if (selectedCategory) {
      fetch(`/api/books?category=${selectedCategory}`) // Replace with actual API URL
        .then((res) => res.json())
        .then((data) => setBooks(data.books))
        .catch((error) => console.error("Error fetching books:", error));
    }
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      {selectedCategory ? (
        <CategoryView category={selectedCategory} books={books} onBack={() => setSelectedCategory(null)} />
      ) : (
        <HomeView onSelectCategory={setSelectedCategory} />
      )}
    </div>
  );
}

export default App
