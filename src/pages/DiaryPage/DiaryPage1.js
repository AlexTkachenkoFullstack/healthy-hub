import React, { useState } from 'react';
import Card from '../../components/DiaryPages/Card';
import ListItem from '../../components/DiaryPages/ListItem';

const DataFood = {
  type: 'breakfast',
  products: [
    { name: 'english breakfast', carbonohidrates: 22, protein: 22, fat: 22, calories: 59 },
    { name: 'tea', carbonohidrates: 22, protein: 22, fat: 22, calories: 59 },
  ],
};

// function DiaryPage() {
//   const [editItem, setEditItem] = useState(null);

//   const handleEdit = (item) => {
//     setEditItem(item);
//     // Открывайте модальное окно редактирования здесь
//   };

//   const handleAdd = () => {
//     // Открывайте модальное окно для добавления новой записи здесь
//   };
//   console.log()
//   return (
//     <div className="App">
//       {DataFood.products.map((item, index) => (
//         <Card key={index} title={DataFood.type} image="your-image-url">
//           <ListItem item={item} onEdit={handleEdit} />
//           <button onClick={handleAdd}>Добавить запись</button>
//         </Card>
//       ))}
//   );
// }



function DiaryPage() {
  const [editItem, setEditItem] = useState(null);

  const handleEdit = (item) => {
    setEditItem(item);
    // Открывайте модальное окно редактирования здесь
  };

  const handleAdd = () => {
    // Открывайте модальное окно для добавления новой записи здесь
  };

  return (
    <div className="App">
      {DataFood.products.map((item, index) => (
        <Card >
          <ListItem item={item} onEdit={handleEdit} />
          <button onClick={handleAdd}>Добавить запись</button>
        </Card>
      ))}
    </div>
  );
}

export default DiaryPage;
