const CategoryView = ({ category, books, onBack }) => {
    return (
      <div className="max-w-4xl mx-auto">
        <button className="text-purple-600 text-lg" onClick={onBack}>⬅ {category}</button>
        <div className="grid grid-cols-4 gap-4 mt-6">
          {books.map((book) => (
            <div key={book.id} className="text-center">
              <img src={book.cover} alt={book.title} className="w-full h-40 object-cover rounded" />
              <p className="text-sm font-semibold mt-2">{book.title}</p>
              <p className="text-xs text-gray-500">{book.author}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
export default CategoryView;