import { useEffect, useState } from 'react'
import HomeView from './components/HomeView.component';
import CategoryView from './components/CategoryView.component';
import './App.css';

let baseURL = import.meta.env.VITE_BASE_URL
function App() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [books, setBooks] = useState([]);
  const [categories, setCategories] = useState<{ name: string; icon: string }[]>([]);
  
  useEffect(() => {
    fetch("http://skunkworks.ignitesol.com:8000/books")
      .then((res) => res.json())
      .then((data) => {
        const topics = new Set<string>(); // Explicitly define Set<string>
        data.results.forEach(book => {
          if (book.bookshelves) {
            book.bookshelves.forEach(topic => topics.add(topic));
          }
        });
        setCategories([...topics].map((topic: string) => ({ name: topic, icon: "📚" })));
      })
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);
  

  useEffect(() => {
    if (selectedCategory) {
      fetch(`${baseURL}/books?topic=${selectedCategory.toLowerCase()}`) // Replace with actual API URL
        .then((res) => res.json())
        .then((data) => setBooks(data.results))
        .catch((error) => console.error("Error fetching books:", error));
    }
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-[#F8F7FF] p-10 font-montserrat">
      {selectedCategory ? (
        <CategoryView category={selectedCategory} books={books} onBack={() => setSelectedCategory('')} />
      ) : (
        <HomeView onSelectCategory={setSelectedCategory} categories={categories}/>
      )}
    </div>
  );
}

export default App
