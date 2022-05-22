import './App2.css';
import {useRef} from 'react';
import {Swiper , SwiperSlide} from 'swiper/react';
import 'swiper/css';
import { Navigation , EffectFade } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import Slide from './Slide';
import Header from './Header';
function App() {
  return (
    <div className='app2'>
      <h1 className='heading'>Most Followed Influencer</h1>
      <Slide/>
      <h1 className='heading'>Collections</h1>
    </div>
  );
}

export default App;
