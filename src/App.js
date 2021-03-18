import { useState } from 'react';
import './App.css'
import Footer from './elements/Footer';
import Header from './elements/Header';
import ImageItem from './elements/ImageItem';
import ModalPage from './elements/ModalPage';
import { imagesArr } from './img/imagesCombiner';


const App = () => {

  const [modalImage, setModalImage] = useState(null)
  const imagesList = imagesArr.map(img => {
    return <ImageItem
      key={img.id}
      img={img}
      setModalImage={setModalImage} />
  })

  return (
    <>
      <Header />
      <main className="main-container">
        <div className='img-list'>
          {imagesList}
        </div>
      </main>
      <Footer />
      {modalImage &&
        <ModalPage
          img={modalImage}
          close={setModalImage} />}
    </>
  );
}

export default App
