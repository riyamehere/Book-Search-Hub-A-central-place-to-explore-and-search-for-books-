import { useState, useCallback } from "react";
import backArrow from "../assets/Back.svg";
import { toPascalCase } from "../shared/PascalCase";
import searchIcon from "../assets/Search.svg";
import cancelIcon from "../assets/Cancel.svg";

const CategoryView = ({ category, books, onBack, onSearch, lastBookElementRef }) => {
    const [search, setSearch] = useState("");

    // Debounced search handler
    const handleSearch = useCallback((value) => {
        const timeout = setTimeout(() => {
            onSearch(value);
        }, 300);
        return () => clearTimeout(timeout);
    }, [onSearch]);

    return (
        <div className="mx-auto">
            {/* Back Button */}
            <div className="bg-white px-[18%] py-10">
                <button className="text-[#5E56E7] text-[24px] sm:text-[30px] font-semibold mb-4 flex" onClick={onBack}>
                    <img alt="" src={backArrow} className="mr-3" /> {toPascalCase(category)}
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
                    <img src={searchIcon} alt="Search" className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5" />
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

            {/* Book Grid */}
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mt-6 mx-[18%] ">
            {books.map((book, index) => {
                const fileFormats = book.formats;
                const isZip = fileFormats["application/zip"];

                return (
                  <a
                    key={book.id}
                    href={isZip ? fileFormats["application/zip"] : fileFormats["text/html"] || fileFormats["application/pdf"] || fileFormats["text/plain"]}
                    target={isZip ? "_self" : "_blank"}
                    rel={isZip ? "" : "noopener noreferrer"}
                    ref={index === books.length - 1 ? lastBookElementRef : null}
                    className="bg-transparent p-3 sm:p-4 text-center cursor-pointer hover:shadow-lg transition"
                  >
                    <img
                      src={fileFormats["image/jpeg"] || "https://via.placeholder.com/150"}
                      alt={book.title}
                      className="w-[100px] sm:w-[114px] h-[140px] sm:h-[162px] object-cover rounded-md mx-auto"
                    />
                    <p className="text-[10px] sm:text-[12px] font-normal text-[#333333] mt-2">
                      {book.title.toUpperCase()}
                    </p>
                    <p className="text-[10px] sm:text-[12px] text-[#A0A0A0]">
                      {book.authors.map(author => author.name).join(", ")}
                    </p>
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
