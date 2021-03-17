import './App.css'
import Footer from './elements/Footer';
import Header from './elements/Header';
import ImageItem from './elements/ImageItem';
import { imagesArr } from './img/imagesCombiner';


const App = () => {

  const imagesList = imagesArr.map(img => <ImageItem key={img.id} img={img} />)

  return (
    <>
      <Header />
      <main className="main-container">
        <div className='img-list'>
          {imagesList}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App
