import NextArrow from "../assets/Next.svg";
import bgImg from "../assets/Pattern.svg";

const HomeView = ({ onSelectCategory , categories}) => {
  return (
    <div className="text-left">
      <div className="bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImg})` }}>
        <div className="pt-20 pb-10 p-[20%]">
      <h1 className="text-3xl sm:text-[48px] font-semibold text-[#5E56E7]">Gutenberg Project</h1>
      <p className="text-[#000000] mt-5 text-[14px] sm:text-[16px] font-semibold">A social cataloging website that allows you to freely search its database of books, annotations,
and reviews.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 px-[20%]">
        {categories.map((cat) => (
          <button
            key={cat.name}
            className="flex items-center justify-between p-3 sm:p-4 bg-white shadow rounded-md text-[18px] sm:text-[20px] font-normal text-[#333333] box-shadow-[0_2px_5px_0_rgba(211,209,238,0.5)]"
            onClick={() => onSelectCategory(cat.name)}
          >
            <div className="flex">
            <img alt='' src={cat.icon} className="w-7 h-7 mr-4"/> 
            <span className="font-bold">{cat.name}</span>
            </div>

            <span className='text-[#5E56E7]'><img alt='' src={NextArrow}/></span>
          </button>
        ))}
      </div>
    </div>
  );
  }

export default HomeView;
  