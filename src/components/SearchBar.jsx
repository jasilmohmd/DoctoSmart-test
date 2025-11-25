const SearchBar = ({ searchTerm, onSearchChange, sortOrder, onSortChange }) => {
  return (
    <div className="mb-6 space-y-4">
      <input
        type="text"
        placeholder="Search products by title..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <div className="flex items-center gap-3">
        <label className="font-semibold text-gray-700">Sort by Price:</label>
        <select
          value={sortOrder}
          onChange={(e) => onSortChange(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">No Sorting</option>
          <option value="low-to-high">Low to High</option>
          <option value="high-to-low">High to Low</option>
        </select>
      </div>
    </div>
  );
};

export default SearchBar;