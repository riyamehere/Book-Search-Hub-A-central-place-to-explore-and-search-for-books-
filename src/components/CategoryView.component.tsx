import { useState } from "react";

const CategoryView = ({ category, books, onBack }) => {
    const [search, setSearch] = useState("");
  
    const filteredBooks = books.filter(book =>
      book.title.toLowerCase().includes(search.toLowerCase())
    );
  
    return (
      <div className="max-w-5xl mx-auto">
        {/* Back Button */}
        <button className="flex items-center text-purple-600 text-xl font-semibold mb-4" onClick={onBack}>
          ⬅ <span className="ml-2">{category}</span>
        </button>
  
        {/* Search Bar */}
        <div className="relative w-full max-w-lg mb-6">
          <input
            type="text"
            className="w-full p-3 pl-10 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-purple-300"
            placeholder="🔍 Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
  
        {/* Books Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {filteredBooks.map((book) => (
            <div key={book.id} className="bg-white p-4 rounded-lg shadow text-center">
              <img
                src={book.formats["image/jpeg"] || "https://via.placeholder.com/150"}
                alt={book.title}
                className="w-full h-48 object-cover rounded-lg"
              />
              <p className="text-sm font-bold uppercase mt-2">{book.title}</p>
              <p className="text-xs text-gray-500">{book.authors.map(author => author.name).join(", ")}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
export default CategoryView;