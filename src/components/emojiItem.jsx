import React from 'react';
import PropTypes from 'prop-types';

const EmojiItem = ({ emoji, description, keywords }) => {
  const handleCopy = () => {
    navigator.clipboard
      .writeText(emoji)
      .then(() => {
        alert(`Copied ${emoji} to clipboard!`);
      })
      .catch((err) => {
        console.error('Failed to copy: ', err);
      });
  };
  return (
    <div
      className="flex items-center justify-between p-2 border-b border-gray-200 hover:bg-gray-100 transition-colors cursor-pointer"
      onClick={handleCopy}>
      <div className="flex items-center space-x-4">
        <span className="text-2xl">{emoji}</span>
        <span className="text-gray-800">{description}</span>
      </div>
      <div className="text-gray-600 text-sm italic">{keywords.join(', ')}</div>
    </div>
  );
};
EmojiItem.propTypes = {
  emoji: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  keywords: PropTypes.arrayOf(PropTypes.string).isRequired
};
export default EmojiItem;
