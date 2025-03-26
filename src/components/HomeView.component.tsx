import { categories } from "../shared/Categories";

const HomeView = ({ onSelectCategory }) => {
    return (
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-purple-600">Gutenberg Project</h1>
        <p className="text-gray-600 mt-2">A social cataloging website for books.</p>
        <div className="grid grid-cols-2 gap-4 mt-6">
          {categories.map((cat) => (
            <button
              key={cat.name}
              className="flex items-center justify-between p-4 bg-white shadow rounded-lg text-lg font-semibold"
              onClick={() => onSelectCategory(cat.name)}
            >
              <span>{cat.icon} {cat.name}</span>
              <span>➡️</span>
            </button>
          ))}
        </div>
      </div>
    );
  }

export default HomeView;
  