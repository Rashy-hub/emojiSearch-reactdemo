import React, { useEffect, useState } from 'react';
import SearchBar from '../components/searchBar';
import EmojiResult from '../components/emojiResult';

const MainLayout = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [emojis, setEmojis] = useState([]);
  const [filteredEmojis, setFilteredEmojis] = useState([]);

  useEffect(() => {
    const fetchEmojis = async () => {
      try {
        const response = await fetch('/data-emojis.json');
        const data = await response.json();
        setEmojis(data);
        setFilteredEmojis(data);
      } catch (error) {
        console.error('Error fetching emojis:', error);
      }
    };

    fetchEmojis();
  }, []);

  useEffect(() => {
    const results = emojis.filter(
      (emoji) =>
        emoji.keywords.toLowerCase().split(' ').includes(searchTerm.toLowerCase()) ||
        emoji.symbol.includes(searchTerm)
    );
    setFilteredEmojis(results);
  }, [searchTerm, emojis]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <main className="container mx-auto my-10 px-4 ">
      <div className="container mx-auto p-4">
        <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
        <EmojiResult emojis={filteredEmojis} />
      </div>
    </main>
  );
};

export default MainLayout;
