import React from 'react';

import PropTypes from 'prop-types';
import EmojiItem from './emojiItem';

const EmojiResult = ({ emojis }) => {
  return (
    <div className="mt-4 bg-white shadow-md rounded-lg overflow-hidden">
      {emojis.length > 0 ? (
        emojis.map((emoji, index) => (
          <EmojiItem
            key={index}
            emoji={emoji.symbol}
            description={emoji.title}
            keywords={emoji.keywords.split(' ')}
          />
        ))
      ) : (
        <div className="p-4 text-center text-gray-500">No emojis found</div>
      )}
    </div>
  );
};

EmojiResult.propTypes = {
  emojis: PropTypes.arrayOf(
    PropTypes.shape({
      symbol: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    })
  ).isRequired
};
export default EmojiResult;
