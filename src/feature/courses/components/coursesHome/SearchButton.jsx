const SearchButton = () => {
  return (
    <div className="lg:w-[200px]">
      <button
        id="dropdownDefaultButton"
        className="focus:outline-none  rounded-md text-sm px-2 py-2.5 text-center flex items-center justify-center w-full h-12 text-white bg-primary-color"
        type="button"
      >
        Search
      </button>
    </div>
  );
};

export default SearchButton;
