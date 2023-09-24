import React from 'react';

function ListItem({ item, onEdit }) {
  return (
    <div className="list-item">
      <span>{item.name}</span>
      <span>Углеводы: {item.carbonohidrates}</span>
      <span>Протеин: {item.protein}</span>
      <span>Жиры: {item.fat}</span>
      <span>Калории: {item.calories}</span>
      <button onClick={() => onEdit(item)}>Редактировать</button>
    </div>
  );
}

export default ListItem;
