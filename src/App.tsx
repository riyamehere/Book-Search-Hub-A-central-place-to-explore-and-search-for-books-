import { useEffect, useState, useRef, useCallback } from "react";
import HomeView from "./components/HomeView.component";
import CategoryView from "./components/CategoryView.component";
import "./App.css";
import { categories } from "./shared/Categories";
import { throttle } from "lodash"; // Import lodash's throttle

let baseURL = import.meta.env.VITE_BASE_URL;

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    if (selectedCategory) {
      fetchBooks(1, "", true);
    }
  }, [selectedCategory]);

  // Debounced search API calls
  useEffect(() => {
    const delaySearch = setTimeout(() => {
      fetchBooks(1, search, true);
    }, 300);

    return () => clearTimeout(delaySearch);
  }, [search]);

  const fetchBooks = async (pageNum, searchQuery = "", reset = false) => {
    let url = `${baseURL}/books?topic=${selectedCategory.toLowerCase()}&mime_type=image%2F&page=${pageNum}`;
    if (searchQuery) url += `&search=${searchQuery}`;

    try {
      const res = await fetch(url);
      if (res.status === 404) {
        setHasMore(false); // Stop further requests if API returns 404
        return;
      }
      const data = await res.json();
      setBooks((prev) => (reset ? data.results : [...prev, ...data.results]));
      setHasMore(data.results.length > 0); // If no results, stop further requests
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  // Throttled API call for infinite scrolling
  const throttledFetchBooks = useCallback(
    throttle((nextPage, searchQuery) => {
      fetchBooks(nextPage, searchQuery);
    }, 1000), // Throttle API calls to once per second
    [fetchBooks]
  );

  // Infinite scroll observer
  const observer = useRef();
  const lastBookElementRef = useCallback(
    (node) => {
      if (!hasMore) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setPage((prevPage) => {
            const nextPage = prevPage + 1;
            throttledFetchBooks(nextPage, search);
            return nextPage;
          });
        }
      });
      if (node) observer.current.observe(node);
    },
    [hasMore, search, selectedCategory]
  );

  return (
    <div className="min-h-screen bg-[#F8F7FF] font-montserrat">
      {selectedCategory ? (
        <CategoryView
          category={selectedCategory}
          books={books}
          onBack={() => setSelectedCategory("")}
          onSearch={setSearch}
          lastBookElementRef={lastBookElementRef}
        />
      ) : (
        <HomeView categories={categories} onSelectCategory={setSelectedCategory} />
      )}
    </div>
  );
}

export default App;
