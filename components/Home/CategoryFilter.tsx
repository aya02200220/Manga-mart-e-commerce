interface CategoryFilterProps {
  activeCategory: string;
  onCategorySelect: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  activeCategory,
  onCategorySelect,
}) => {
  return (
    <ul className="mt-[0px] flex w-full flex-wrap font-medium pt-6 justify-center ">
      {["All", "shonen", "shoujo", "seinen", "josei"].map((category) => (
        <li
          key={category}
          className={`relative w-[80px] sm:w-[100px] text-[10px] sm:text-[15px] text-center py-1.5 font-bold mb-2 cursor-pointer group ${
            activeCategory === category ? "text-[#fff]" : "text-[#333]"
          } mr-4 md:mx-4`}
          onClick={() => onCategorySelect(category)}
        >
          <span
            className={`absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-1.5 translate-y-1.5 ${
              activeCategory === category ? "bg-[#d54b87]" : "bg-red-300 "
            } group-hover:translate-x-0 group-hover:translate-y-0`}
          ></span>
          <span className="absolute inset-0 w-full h-full border-2 border-[#515151]"></span>
          <span className="relative"> {category.toUpperCase()}</span>
        </li>
      ))}
    </ul>
  );
};

export default CategoryFilter;
