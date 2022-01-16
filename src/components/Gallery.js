import React, { useState } from 'react'
import './Gallery.css';
import CloseIcon from '@material-ui/icons/Close';
import Img1 from './images/tab/battery.jpg'
//import Img2 from './images/tab/circle.jpg'
import Img3 from './images/tab/hole.jpg'
import Img4 from './images/tab/key.jpg'
import Img5 from './images/tab/pouch.jpg'
import Img6 from './images/tab/tab.jpg'
import Img7 from './images/tab/fullkey.jpg'
import Img8 from './images/tab/fullkit.jpg'
import Img9 from './images/tab/fullpouch.jpg'
import Img10 from './images/tab/fulltype.jpg'
import Img11 from './images/tab/key.jpg'
import Img12 from './images/tab/lapens.jpg'
import Img13 from './images/tab/losepen.jpg'
import Img14 from './images/tab/sidekit.jpg'
//import Img15 from './images/tab/sidepouch.jpg'
import Img16 from './images/tab/type.jpg'
import Img17 from './images/tab/corn.jpg'
//import Img18 from './images/tab/sidecorn.jpg'
import Img19 from './images/tab/fullhand.jpg'
import Img20 from './images/tab/thumb.jpg'
import Img21 from './images/tab/finger.jpg'
import Img22 from './images/tab/palm.jpg'
import Img23 from './images/tab/pendrive.jpg'
//import Img24 from './images/tab/sidekit.jpg'
import Img25 from './images/tab/close.jpg'
import Img26 from './images/tab/broken.jpg'


const Gallery = () => {
    let data = [
        {
            id: 1,
            imgSrc: Img1,
        },
        // {
        //     id: 2,
        //     imgSrc: Img2,
        // },
        {
            id: 3,
            imgSrc: Img3,
        },
        {
            id: 4,
            imgSrc: Img4,
        }, 
        {
            id: 5,
            imgSrc: Img5,
        },
        {
            id: 6,
            imgSrc: Img6,
        },
        {
            id: 7,
            imgSrc: Img7,
        },
        {
            id: 8,
            imgSrc: Img8,
        },
        {
            id: 9,
            imgSrc: Img9,
        },
        {
            id: 10,
            imgSrc: Img10,
        },
        {
            id: 11,
            imgSrc: Img11,
        },
        {
            id: 12,
            imgSrc: Img12,
        },
        {
            id: 13,
            imgSrc: Img13,
        },
        {
            id: 14,
            imgSrc: Img14,
        },
        // {
        //     id: 15,
        //     imgSrc: Img15,
        // },
        {
            id: 16,
            imgSrc: Img16,
        },
        {
            id: 17,
            imgSrc: Img17,
        },
        // {
        //     id: 18,
        //     imgSrc: Img18,
        // },
        {
            id: 19,
            imgSrc: Img19,
        },
        {
            id: 20,
            imgSrc: Img20,
        },
        {
            id: 21,
            imgSrc: Img21,
        },
        {
            id: 22,
            imgSrc: Img22,
        },
        {
            id: 23,
            imgSrc: Img23,
        },
        // {
        //     id: 24,
        //     imgSrc: Img24,
        // },
        {
            id: 25,
            imgSrc: Img25,
        },
        {
            id: 26,
            imgSrc: Img26,
        },
    ]
    const [model,setModel] = useState(false);
    const [tempimgSrc,setTempImgSrc] = useState('');
    const getImg = (imgSrc) =>{
        setTempImgSrc(imgSrc);
        setModel(true);
    }
    return (
        <>
          <div className='galarytitle'>
              Gallery
          </div>
           <div className={model? "model open" : "model"}>
               <img src={tempimgSrc} />
               <CloseIcon onClick={()=>setModel(false)}/>
           </div>
            <div className='gallery'>
                {
                    data.map((item, index) => {
                        return (
                            <div className='pics' key={index} onClick={()=>getImg(item.imgSrc)}>
                               <img src={item.imgSrc} style={{width:"100%"}}/>
                            </div>
                        )
                    })
                }

            </div>

        </>
    );
}
export default Gallery