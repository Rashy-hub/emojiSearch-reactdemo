import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ searchTerm, onSearchChange }) => {
  const handleClear = () => {
    onSearchChange({ target: { value: '' } });
  };

  return (
    <div className="relative my-4">
      <input
        type="text"
        value={searchTerm}
        onChange={onSearchChange}
        placeholder="Search emojis... will find all from any keywords or directly the name of the emoji itself"
        className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      {searchTerm && (
        <button
          onClick={handleClear}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none">
          &#x2715;
        </button>
      )}
    </div>
  );
};

SearchBar.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired
};

export default SearchBar;
