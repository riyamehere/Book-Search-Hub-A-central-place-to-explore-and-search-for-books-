import { useState, useCallback } from "react";
import backArrow from "../assets/Back.svg";
import { toPascalCase } from "../shared/PascalCase";
import searchIcon from "../assets/Search.svg";
import cancelIcon from "../assets/Cancel.svg";
import { truncateText } from "../shared/Truncate";
import { CategoryViewProps } from "../interfaces/components.interface";

const CategoryView: React.FC<CategoryViewProps> = ({ category, books, onBack, onSearch, lastBookElementRef }) => {
  const [search, setSearch] = useState<string>("");

  // Debounced search handler
  const handleSearch = useCallback((value: string) => {
    const timeout = setTimeout(() => {
      onSearch(value);
    }, 300);
    return () => clearTimeout(timeout);
  }, [onSearch]);

  return (
    <div className="mx-auto">
      {/* Back Button and Search Bar Section */}
      <div className="bg-white px-4 md:px-[10%] xl:px-[18%] py-10">
        {/* Back Button */}
        <button className="text-[#5E56E7] text-[24px] sm:text-[30px] font-semibold mb-4 flex items-center" onClick={onBack}>
          <img alt="Back" src={backArrow} className="mr-3" /> {toPascalCase(category)}
        </button>

        {/* Search Box */}
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              handleSearch(e.target.value);
            }}
            className="w-full px-4 py-2 pl-10 bg-[#F0F0F6] rounded-md focus:outline-none"
          />
          {/* Search Icon */}
          <img src={searchIcon} alt="Search" className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5" />
          {/* Clear Search Icon */}
          {search && (
            <img
              src={cancelIcon}
              alt="Clear"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 cursor-pointer"
              onClick={() => {
                setSearch("");
                onSearch("");
              }}
            />
          )}
        </div>
      </div>

      {/* Book Grid Section */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 mt-6 px-4 md:px-[10%] xl:px-[18%]">
        {books.map((book, index) => {
          const fileFormats = book.formats;
          const isZip = !!fileFormats["application/zip"];

          return (
            <a
              key={`${book.id}-${index}`} // Unique key for each book
              href={
                isZip
                  ? fileFormats["application/zip"]
                  : fileFormats["text/html"] || fileFormats["application/pdf"] || fileFormats["text/plain"]
              }
              target={isZip ? "_self" : "_blank"}
              rel={isZip ? "" : "noopener noreferrer"}
              ref={index === books.length - 1 ? lastBookElementRef : null} // Attach last element ref for infinite scrolling
              className="bg-transparent p-2 sm:p-3 text-center cursor-pointer hover:shadow-lg transition"
            >
              {/* Book Cover Image */}
              <img
                src={fileFormats["image/jpeg"] || "https://via.placeholder.com/150"}
                alt={book.title}
                className="w-[90px] sm:w-[110px] lg:w-[120px] xl:w-[130px] h-[130px] sm:h-[150px] lg:h-[160px] xl:h-[180px] object-cover rounded-md mx-auto"
              />
              {/* Book Title */}
              <p className="text-[10px] sm:text-[12px] lg:text-[14px] font-normal text-[#333333] mt-2">
                {truncateText(book.title.toUpperCase(), 36)}
              </p>
              {/* Author Names */}
              <p className="text-[10px] sm:text-[12px] lg:text-[14px] text-[#A0A0A0]">
                {book.authors.map((author) => author.name).join(", ")}
              </p>
              {/* ZIP File Warning */}
              {isZip && (
                <p className="text-[10px] sm:text-[12px] text-red-500 font-semibold mt-1">
                  ZIP files are not viewable, only downloadable.
                </p>
              )}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryView;
