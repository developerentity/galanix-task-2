import { useEffect, useState } from 'react';
import './App.css'
import Footer from './elements/Footer';
import Header from './elements/Header';
import ImageItem from './elements/ImageItem';
import ModalPage from './elements/ModalPage';
import { imagesArr } from './img/imagesCombiner';


const App = () => {

  const [images, setImages] = useState(imagesArr)
  const [modalImage, setModalImage] = useState(null)

  const delImg = (imgId) => setImages(images.filter(img => img.id !== imgId))

  const reset = () => setImages(imagesArr)

  useEffect(() => {
    if (localStorage.getItem('images_list')) {
      setImages(JSON.parse(localStorage.getItem('images_list')))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('images_list', JSON.stringify(images))
  }, [images])

  const imagesList = images.map(img => {
    return <ImageItem
      key={img.id}
      img={img}
      setModalImage={setModalImage}
      delImg={delImg} />
  })

  return (
    <>
      <Header
        count={images.length} />
      <main className="main-container">
        <div className='img-list'>
          {imagesList}
        </div>
      </main>
      <Footer
        reset={reset} />
      {modalImage &&
        <ModalPage
          img={modalImage}
          close={setModalImage} />}
    </>
  );
}

export default App
