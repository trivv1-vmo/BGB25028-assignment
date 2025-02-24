import { SearchIcon } from "@/components/Icons";
import { Input } from "@/components/ui/input";

const InputSearch = () => {
  return (
    <div className="w-full flex items-center bg-input rounded-3xl px-2 py-2 pl-4 gap-3">
      <SearchIcon className="cursor-pointer" />
      <Input
        className="border-none outline-none p-0 h-10 focus:outline-none focus-visible:ring-0 shadow-none"
        placeholder="What are you looking for?"
      />
    </div>
  );
};

export default InputSearch;
