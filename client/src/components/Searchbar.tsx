import { BsSearch } from "react-icons/bs";
import { ProductProps } from "../App";
import { FC, useState } from "react";
import data from "../data/Data";

type SearchbarProps = {
  setProductsData: React.Dispatch<React.SetStateAction<ProductProps[]>>;
  onClick? : () => void;
};

const Searchbar: FC<SearchbarProps> = ({ setProductsData }) => {
  const [input, setInput] = useState<string>("")

  const filterType = () => {
    const newFilter = data.filter((item) => {
      return item.name.toLowerCase().includes(input);
    });
    setProductsData(newFilter);
  }

  return (
    <div className="flex items-center">
      <input
        type="text"
        placeholder="T-shirt..."
        className="outline outline-black outline-1 rounded-l-lg py-[2px] pl-4"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="p-[7px] bg-black text-white rounded-r-xl" onClick={filterType}>
        <BsSearch />
      </button>
    </div>
  );
};

export default Searchbar;
