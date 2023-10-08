// import React, { useEffect, useRef, useState } from 'react';
// import moment from 'moment/moment';
// import { motion, useInView, useAnimation } from 'framer-motion';
// import Loading from '../Loading';
// //Api
// import { useGetCryptoNewsQuery } from '../../services/cryptoNewsApi';
// import { useGetCryptosQuery } from '../../services/cryptoSlice';
// // ant design
// import { Select, Typography, Row, Col, Avatar, Card, Space } from 'antd';
// const { Text, Title } = Typography
// const { Option } = Select

// const demoImage = "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News"
// const News = ({ simplified }) => {

//     const count = simplified ? 6 : 50

//     const [selectNews, setSelectNews] = useState("cryptocurrency")




//     //api
//     const { data: cryptoNews, isFetching, isError } = useGetCryptoNewsQuery({ q: selectNews, count: count })
//     const { data: cryptoList } = useGetCryptosQuery(count)

//     const ref = useRef(null)

//     useEffect(() => {

//     }, [selectNews])



//     if (cryptoList?.data?.coins?.length===0 && isFetching || isError) return <p className='text-lg text-orange-600'>exceeded the MONTHLY quota for Requests on your current plan</p> 


//     return (
//         <div>
//             {!simplified &&
//                 <div ref={ref} className='w-full px-[1rem] mb-5'>


//                     <Select  className=' max-w sm: max-w-[20%] min-w-[14%] w-[20%] max-width-select '
//                         showSearch
//                         placeholder="search news"
//                         optionFilterProp="children"
//                         onChange={(value) => setSelectNews(value)}


//                         filterOption={(input, option) =>
//                             (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
//                         }

//                     >
//                         <option value={"Cryptocurrency"} label={"Cryptocurrency"} ></option>
//                         {cryptoList?.data?.coins.map(name => <option value={name.name} label={name.name} ></option>)}

//                     </Select>


//                 </div>
//             }
//             {isFetching || selectNews === undefined ? <Loading text="searching..." />

//                 :



//                 <Row gutter={[24, 24]}>

//                     {cryptoNews?.value.length === 0 ? <div className='w-full text-center text-lg text-gray-800'>sorry we cant find any news for
//                         <p className='font-semibold'>{selectNews}</p>
//                     </div> :

//                         cryptoNews?.value?.map((news, i) =>


//                             <Col xs={24} sm={12} lg={8} key={i} >
//                                 <motion.div className='border-stone-300'
//                                     transition={{ duration: 0.2, delay: 0.40 }}
//                                     initial={{ opacity: 0, y: 100 }}
//                                     animate={{ opacity: 1, y: 10 }}
//                                     exit={{ opacity: 1, y: 100 }}


//                                 >
//                                     <Card hoverable className='news-card border-stone-200'>

//                                         <a href={news.url} target='_blank' rel="noreferrer" className='w-full'>
//                                             <div className='news-image-container'>
//                                                 <Title className='news-title !text-base md:!text-lg' level={4}>{news.name}</Title>
//                                                 <img className='img' src={news?.image?.thumbnail?.contentUrl || demoImage} alt='news' />

//                                             </div>
//                                             <p>
//                                                 {news?.description.length > 150 ? `${news?.description.substring(0, 100)}...` : `${news.description}`}

//                                             </p>
//                                             <div className='w-full flex pt-3 '>
//                                                 <div className='w-full justify-between flex items-center mt-1'>

//                                                     <div className='provider-container '>
//                                                         <div className='w-10 h-10 relative inline-flex text-sm sm:text-base'>
//                                                             <img className='object-cover w-full h-full' src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage} />
//                                                         </div>

//                                                         <div className='provider-name'>{news?.provider[0]?.name}</div>
//                                                     </div>
//                                                     <Text>{moment(news?.datePublished).startOf("ss").fromNow()}</Text>
//                                                 </div>
//                                             </div>


//                                         </a>
//                                     </Card>
//                                 </motion.div>


//                             </Col>




//                         )
//                     }
//                 </Row>
//             }
//         </div>
//     );
// };

// export default News;
import React, { useEffect, useRef, useState } from 'react';
import moment from 'moment/moment';
import { motion, useInView, useAnimation } from 'framer-motion';
import Loading from '../Loading';
//Api
import { useGetCryptoNewsQuery } from '../../services/cryptoNewsApi';
import { useGetCryptosQuery } from '../../services/cryptoSlice';
import { RightOutlined, LeftOutlined } from '@ant-design/icons';
// ant design
import { Select, Typography, Row, Col, Avatar, Card, Space } from 'antd';
import { current } from '@reduxjs/toolkit';
import pagiStyle from "../../style/paginate.module.css"
const { Text, Title } = Typography
const { Option } = Select

const demoImage = "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News"
const News = ({ simplified }) => {

    const pages = 20
    const [currentPage, setCurrentPage] = useState(10)



    const numberOfPages = []
    for (let i = 1; i <= pages; i++) {
        numberOfPages.push(i)
    }
   
    
//    const numberOfPages = Array.from({ length: pages }, (_, index) => index +1);




    const [currentButton, setCurrentButton] = useState(1);
    const [arrOfCurrButtons, setArrOfCurrButtons] = useState([]);

    useEffect(() => {
        let tempNumberOfPages = [...arrOfCurrButtons];

        if (numberOfPages.length < 6) {
            tempNumberOfPages = numberOfPages;
        } else if (currentButton >= 1 && currentButton <= 3) {
            tempNumberOfPages = [1, 2, 3, 4, 5, "...", numberOfPages.length];
        } else if (currentButton === 4) {
            const sliced = numberOfPages.slice(0, 5);
            tempNumberOfPages = [...sliced, "...", numberOfPages.length];
        } else if (
            currentButton > 4 &&
            currentButton < numberOfPages.length - 2
        ) {
            const sliced1 = numberOfPages.slice(currentButton-2,currentButton);
            const sliced2 = numberOfPages.slice(currentButton, currentButton + 1);
            const a=[1,2,3,4,5,6,7,8,9,10]
    
            //or// const sliced1 = [currentButton-1,currentButton]
            // const sliced2 =[currentButton + 1]
            console.log();
            console.log(sliced1);
           
            tempNumberOfPages = [
                1,
                "...",
                ...sliced1,
                ...sliced2,
                "...",
                numberOfPages.length
            ];
        } else if (currentButton > numberOfPages.length - 3) {
            const sliced = numberOfPages.slice(numberOfPages.length - 4);
            tempNumberOfPages = [1, "...", ...sliced];
        }

        setArrOfCurrButtons(tempNumberOfPages);
        setCurrentPage(currentButton);
    }, [currentButton]);


    return (
        <ul className={` flex gap-4 ${pagiStyle["pagination-container"]}`}>

            <button

                className={` ${currentButton === 1 ? pagiStyle.disabled : pagiStyle.scaleBtn}`}
                onClick={(e) => setCurrentButton(prev => prev <= 1 ? prev : prev - 1)}

            >
                <LeftOutlined className='pointer-events-none' />
            </button>

            {arrOfCurrButtons.map((item, index) =>

                item === "..." ? <div>...</div> :
                    <li>
                        <button

                            key={index}
                            className={`${currentButton === item ? pagiStyle.active : ''}`}
                            onClick={() => setCurrentButton(item)}
                        >
                            {item}
                        </button>
                    </li>
            )}




            <button

                className={`${currentButton === numberOfPages.length ? pagiStyle.disabled : pagiStyle.scaleBtn}`}
                // onClick={(e) => setCurrentButton(prev => prev == 0 ? prev : prev + 1)}
                onClick={(e) => setCurrentButton(currentButton >= 1 && currentButton + 1)}
            >
                <RightOutlined className='pointer-events-none' />
            </button>
        </ul>
    );
}
export default News;