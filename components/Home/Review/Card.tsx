import React from 'react';

type Props = {
  item: {
    id: number;
    comments: string;
    title: string;
    occupation: string;
    profilePicture: string;
  };
};

const Card = ({ item }: Props) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 text-center max-w-md mx-auto">
      {item.profilePicture && (
        <img
          src={item.profilePicture}
          alt={item.title}
          className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
        />
      )}
      <h2 className="text-lg font-semibold text-gray-800 dark:text-white">{item.title}</h2>
      <p className="text-sm text-gray-500 dark:text-gray-300 mb-2">{item.occupation}</p>
      <p className="text-gray-600 dark:text-gray-200 italic">"{item.comments}"</p>
    </div>
  );
};

export default Card;
