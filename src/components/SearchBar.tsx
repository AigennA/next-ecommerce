"use client";

import { useState } from "react";
import { useRouter } from 'next/navigation';
import Image from "next/image";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchTerm) {
      router.push(`/list?name=${searchTerm}`);
    }
  };

  return (
    <form 
      className="flex items-center  bg-gray-200 p-1 rounded-md shadow-md"
      onSubmit={handleSearch}
    >
      <div className="relative flex items-center flex-1">
        <input
          type="text"
          name="name"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-transparent pl-10 pr-4 py-2 rounded-full outline-none"
        />
    
      </div>
      <button
        type="submit"
        className="p-2 bg-blue-300 rounded-full hover:bg-blue-600 transition duration-200 ml-2"
        title="Search"
      >
        <span className="sr-only">Search</span>
        <Image
          src="/search.png"
          alt="Search Icon"
          width={16}
          height={16}
        />
      </button>
    </form>
  );
};

export default SearchBar;
