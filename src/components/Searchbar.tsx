import { BsSearch } from "react-icons/bs";
import BlackButton from "./BlackButton";
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
      <BlackButton classname="rounded-sm py-[7px] mb-[.5px]" onClick={filterType}>
        <BsSearch />
      </BlackButton>
    </div>
  );
};

export default Searchbar;
