// import React from 'react';

// const Modal = ({ isOpen, onClose, children }) => {
//   if (!isOpen) return null;

//   return (
//     <div className="modal">
//       <div className="modal-content">
//         <span className="close" onClick={onClose}>
//           &times;
//         </span>
//         {children}
//       </div>
//     </div>
//   );
// };

// export default Modal;

// ------ V2 --------

import React, { useState } from 'react';
import {
  ModalDiv,
  ModalContent,
  Button,
  FormRow,
  Input
} from "./Modal.styled";


// const Modal = ({ isOpen, onClose }) => {
//   const [fields, setFields] = useState([{ id: 1, value: '' }]);

//   const handleAddField = () => {
//     setFields([...fields, { id: Date.now(), value: '' }]);
//   };

//   const handleChange = (id, newValue) => {
//     const updatedFields = fields.map((field) =>
//       field.id === id ? { ...field, value: newValue } : field
//     );
//     setFields(updatedFields);
//   };

//   const handleSubmit = () => {
//     // Здесь вы можно отправить данные на сервер (backend) с помощью fetch или axios
//     console.log('Отправка данных на сервер:', fields);

//     // Закрыть модальное окно
//     onClose();
//   };

//   return isOpen ? (
//     <ModalDiv>
//       <ModalContent>
//         <Button className="modal-close" onClick={onClose}>
//           Закрыть
//         </Button>
//         <h2>Модальное окно</h2>
//         {fields.map((field) => (
//           <FormRow key={field.id}>
//             <Input
//               type="text"
//               value={field.value}
//               onChange={(e) => handleChange(field.id, e.target.value)}
//               placeholder="Введите значение"
//             />
//           </FormRow>
//         ))}
//         <Button onClick={handleAddField}>Добавить строку</Button>
//         <Button onClick={handleSubmit}>Отправить данные</Button>
//       </ModalContent>
//     </ModalDiv>
//   ) : null;
// };

// export default Modal;