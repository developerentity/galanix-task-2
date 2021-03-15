import './App.css'
import { imagesArr } from './imagesCombiner';


const App = () => {

  const imagesList = imagesArr.map(img => {
    return (
      <div className='img-container'>
        <img className='img' src={img.src} alt={`img ${img.id}`} />
      </div>
    )
  })

  return (
    <main className="main-container">
      <div className='img-list'>
        {imagesList}
      </div>
    </main>
  );
}

export default App
