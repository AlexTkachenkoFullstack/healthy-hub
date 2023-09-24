import React from 'react';

function Card({ title, image }) {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      {/* Вставьте здесь список и кнопку для добавления новой записи */}
    </div>
  );
}

export default Card;
