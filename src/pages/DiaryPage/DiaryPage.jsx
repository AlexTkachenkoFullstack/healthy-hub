import React, {useState} from 'react';
// import axios from 'axios'; 
import { Link } from 'react-router-dom';
import {
  SectionDiary,
  TitlePage,
  TitleDiv,
} from '../../components/DiaryPages/DiaryPage.styled';

// import { createGlobalStyle } from 'styled-components';

import GoBackPage from "../../components/DiaryPages/GoBackPage";
import TitlePeriod from "../../components/DiaryPages/TitlePeriod";
import FootListPeriod from "../../components/DiaryPages/FootListPeriod";


// import Modal from '../../components/DiaryPages/Modal';
import RecordDiaryModal from '../../components/RecordDiaryModal/RecordDiaryModal';
import { Button } from "../../components/RecordDiaryModal/Modal.styled";

// const FootToDo = () => {
const footToDo = index => {
  return (
    <div>
      <TitleDiv>
        <TitlePeriod data={index} />
      </TitleDiv>
      <FootListPeriod data={index} />
    </div>
  );
};

const DiaryPage = () => {
  //   useEffect(() => {
  // //     // Загружаем данные из JSON-файла при монтировании компонента
  // //     // Замените путь на путь к вашему JSON-файлу
  // //     // axios.get('./breakfast.json')
  //   await axios.get(filePath)
  //     .then((response) => {
  // //         setData(response.data); // Устанавливаем данные в состояние
  //       this.data = response;
  //     })
  //     .catch((error) => {
  //       console.error('Ошибка при загрузке данных из JSON:', error);
  //     });
  //   }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {/* <Link to="/signin"> */}
      {/* <Link to="/"> */}
      <Link to="/main">
        <GoBackPage />
      </Link>
      <TitlePage>Diary</TitlePage>
      <SectionDiary>
        {footToDo('b')}
        {footToDo('l')}
        {footToDo('d')}
        {footToDo('c')}
      </SectionDiary>

      {/* <div className="App"> */}
        {/* <Button onClick={openModal}>Открыть модальное окно</Button> */}
        {/* <Modal isOpen={isModalOpen} onClose={closeModal} /> */}
        {/* <RecordDiaryModal isOpen={isModalOpen} onClose={closeModal} /> */}
      {/* </div> */}
    </>
  );
};

export default DiaryPage;


// export default App;