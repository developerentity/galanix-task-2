import './App.css'
import img_1 from './img/1.jpg'
import img_2 from './img/2.jpg'
import img_3 from './img/3.jpg'
import img_4 from './img/4.jpg'
import img_5 from './img/5.jpg'
import img_6 from './img/6.jpg'
import img_7 from './img/7.jpg'
import img_8 from './img/8.jpg'
import img_9 from './img/9.jpg'
import img_10 from './img/10.jpg'
import img_11 from './img/11.jpg'
import img_12 from './img/12.jpg'


const App = () => {

  return (
    <main className="main-container">
      <div className='img-list'>
        <dib className='img-container'>
          <img className='img' src={img_1} alt='img 1' />
        </dib>
        <dib className='img-container'>
          <img className='img' src={img_2} alt='img 2' />
        </dib>
        <dib className='img-container'>
          <img className='img' src={img_3} alt='img 3' />
        </dib>
        <dib className='img-container'>
          <img className='img' src={img_4} alt='img 4' />
        </dib>
        <dib className='img-container'>
          <img className='img' src={img_5} alt='img 5' />
        </dib>
        <dib className='img-container'>
          <img className='img' src={img_6} alt='img 6' />
        </dib>
        <dib className='img-container'>
          <img className='img' src={img_7} alt='img 7' />
        </dib>
        <dib className='img-container'>
          <img className='img' src={img_8} alt='img 8' />
        </dib>
        <dib className='img-container'>
          <img className='img' src={img_9} alt='img 9' />
        </dib>
        <dib className='img-container'>
          <img className='img' src={img_10} alt='img 10' />
        </dib>
        <dib className='img-container'>
          <img className='img' src={img_11} alt='img 11' />
        </dib>
        <dib className='img-container'>
          <img className='img' src={img_12} alt='img 12' />
        </dib>
      </div>
    </main>
  );
}

export default App
