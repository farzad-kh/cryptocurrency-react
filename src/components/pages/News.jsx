

// import React, { useEffect, useRef, useState } from 'react';
// import moment from 'moment/moment';
// import { motion, useInView, useAnimation } from 'framer-motion';
// import Loading from '../Loading';
// //Api
// import { useGetCryptoNewsQuery } from '../../services/cryptoNewsApi';
// import { useGetCryptosQuery } from '../../services/cryptoSlice';
// import { RightOutlined, LeftOutlined } from '@ant-design/icons';
// // ant design
// import { Select, Typography, Row, Col, Avatar, Card, Space } from 'antd';
// import { current } from '@reduxjs/toolkit';
// import pagiStyle from "../../style/paginate.module.css"
// const { Text, Title } = Typography
// const { Option } = Select

// const demoImage = "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News"
// const News = ({ simplified }) => {

//     const pages = 20
//     const [currentPage, setCurrentPage] = useState(10)



//     const numberOfPages = []
//     for (let i = 1; i <= pages; i++) {
//         numberOfPages.push(i)
//     }
   
    
// //    const numberOfPages = Array.from({ length: pages }, (_, index) => index +1);




//     const [currentButton, setCurrentButton] = useState(1);
//     const [arrOfCurrButtons, setArrOfCurrButtons] = useState([]);

//     useEffect(() => {
//         let tempNumberOfPages = [...arrOfCurrButtons];

//         if (numberOfPages.length < 6) {
//             tempNumberOfPages = numberOfPages;
//         } else if (currentButton >= 1 && currentButton <= 3) {
//             tempNumberOfPages = [1, 2, 3, 4, 5, "...", numberOfPages.length];
//         } else if (currentButton === 4) {
//             const sliced = numberOfPages.slice(0, 5);
//             tempNumberOfPages = [...sliced, "...", numberOfPages.length];
//         } else if (
//             currentButton > 4 &&
//             currentButton < numberOfPages.length - 2
//         ) {
//             const sliced1 = numberOfPages.slice(currentButton-2,currentButton);
//             const sliced2 = numberOfPages.slice(currentButton, currentButton + 1);
//             const a=[1,2,3,4,5,6,7,8,9,10]
    
//             //or// const sliced1 = [currentButton-1,currentButton]
//             // const sliced2 =[currentButton + 1]
//     
           
//             tempNumberOfPages = [
//                 1,
//                 "...",
//                 ...sliced1,
//                 ...sliced2,
//                 "...",
//                 numberOfPages.length
//             ];
//         } else if (currentButton > numberOfPages.length - 3) {
//             const sliced = numberOfPages.slice(numberOfPages.length - 4);
//             tempNumberOfPages = [1, "...", ...sliced];
//         }

//         setArrOfCurrButtons(tempNumberOfPages);
//         setCurrentPage(currentButton);
//     }, [currentButton]);


//     return (
//         <ul className={` flex gap-4 ${pagiStyle["pagination-container"]}`}>

//             <button

//                 className={` ${currentButton === 1 ? pagiStyle.disabled : pagiStyle.scaleBtn}`}
//                 onClick={(e) => setCurrentButton(prev => prev <= 1 ? prev : prev - 1)}

//             >
//                 <LeftOutlined className='pointer-events-none' />
//             </button>

//             {arrOfCurrButtons.map((item, index) =>

//                 item === "..." ? <div>...</div> :
//                     <li>
//                         <button

//                             key={index}
//                             className={`${currentButton === item ? pagiStyle.active : ''}`}
//                             onClick={() => setCurrentButton(item)}
//                         >
//                             {item}
//                         </button>
//                     </li>
//             )}




//             <button

//                 className={`${currentButton === numberOfPages.length ? pagiStyle.disabled : pagiStyle.scaleBtn}`}
//                 // onClick={(e) => setCurrentButton(prev => prev == 0 ? prev : prev + 1)}
//                 onClick={(e) => setCurrentButton(currentButton >= 1 && currentButton + 1)}
//             >
//                 <RightOutlined className='pointer-events-none' />
//             </button>
//         </ul>
//     );
// }
// export default News;

import React from 'react';

const News = () => {
    return (
        <div>
          api expiry
        </div>
    );
};

export default News;