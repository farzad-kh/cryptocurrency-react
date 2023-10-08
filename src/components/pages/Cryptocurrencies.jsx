// import React, { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
// import millify from 'millify';

// import { Card, Row, Col, Input } from 'antd';

// import { useGetCryptosQuery } from '../../services/cryptoSlice';
// import { Link } from 'react-router-dom';
// //component
// import Loading from '../Loading';
// const Cryptocurrencies = ({ simplified }) => {
//     const [more, setMore] = useState(50)
//     const count = simplified ? 10 : more

//     const { data: cryptoList, isFetching, isError } = useGetCryptosQuery(count)



//     const [cryptos, setCryptos] = useState([])
//     const [searchTerm, setSearchTerm] = useState("")

//     const filteredData = cryptoList?.data?.coins.filter(coin => coin.name.toLowerCase().includes(searchTerm.trim().toLocaleLowerCase()))
//     useEffect(() => {


//         setTimeout(() => setCryptos(filteredData), 450)   
//     }, [cryptoList, searchTerm,more])


//     console.log();
//     return (
//         <>


//             {isFetching || isError ? <Loading text="loading..." /> :

//                 <>
//                     {!simplified &&
//                         <div className='search-crypto'>
//                             <Input placeholder='Search crypto' type='text' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />

//                         </div>}
//                     {cryptos?.length <= 0 && searchTerm.length > 0 && !isFetching ? <div className='w-full text-center text-lg inline-block '>
//                         <p className='text-slate-600 inline-flex' >no result found for
//                             <p className='text-slate-800 font-semibold ml-1' >"{searchTerm}"</p>
//                         </p>

//                     </div> :

//                         <Row gutter={[32, 32]} className='crypto-card-container'>

//                             {cryptos?.map(item =>


//                                 <Col xs={24} sn={12} lg={6} className='crypto-card' key={item.uuid}>
//                                     <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className='w-full' transition={{ delay: 0.1, duration: 0.30, ease: "easeOut" }}>
//                                         <Link to={`/crypto/${item?.uuid}`}>
//                                             <Card title={`${item.rank} . ${item?.name} `}

//                                                 extra={<div className='flex gap-2 items-center text-xs sm:text-sm text-zinc-600 ml-1'>
//                                                     <p>{item?.symbol}</p>
//                                                     <img className='crypto-image' src={item?.iconUrl} />
//                                                 </div>}

//                                                 hoverable
//                                             >
//                                                 <div className=' flex-col md'>
//                                                     <p className="text-zinc-600 flex gap-1 ">Price:
//                                                         <p className="text-zinc-700 font-semibold">${millify(item?.price)}</p>
//                                                     </p>
//                                                     <p className="text-zinc-600 flex gap-1" >Market Cap:
//                                                         <p className="text-zinc-700 font-semibold ">${millify(item?.marketCap)}</p>

//                                                     </p>
//                                                     <p className="text-zinc-600 flex gap-1">Daily Change:
//                                                         <p className={`font-semibold ${millify(item?.change) >= 0 ? "text-green-600" : "text-red-700"}  `} >{millify(item?.change)}%</p>
//                                                     </p>
//                                                 </div>
//                                             </Card>
//                                         </Link>
//                                     </motion.div>

//                                 </Col>

//                             )}
//                         </Row>

//                     }

//                     {/* <button  onClick={()=> setMore(more+10)}>cccc</button> */}

//                 </>

//             }

//         </>
//     );
// };

// export default Cryptocurrencies;



import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import millify from 'millify';

import { Card, Row, Col, Input } from 'antd';
import ReactDOM from 'react-dom';
import { RightOutlined, LeftOutlined } from '@ant-design/icons';
import ReactPaginate from 'react-paginate';
import { useGetCryptosQuery } from '../../services/cryptoSlice';
import { Link } from 'react-router-dom';
//component
import Loading from '../Loading';
const Cryptocurrencies = ({ simplified }) => {

    const count = simplified ? 10 : 100

    const { data: cryptoList, isFetching, isError } = useGetCryptosQuery(count)




    const [searchTerm, setSearchTerm] = useState("")

    const filteredData = cryptoList?.data?.coins.filter(coin => coin.name.trim().toLowerCase().includes(searchTerm.trim().toLowerCase()))
    const [itemOffset, setItemOffset] = useState(0);
    const [currentItems, setCurrentItems] = useState([])
    const [pageCount, setPageCount] = useState(0)
    const [val, setVal] = useState(1)
    const itemsPerPage = 20

   console.log(pageCount);

    const handlePageClick = (event) => {
      setVal(event.selected+1)
        const newOffset = (event.selected * itemsPerPage) % filteredData?.length;

        setItemOffset(newOffset);
    };




console.log(val);
    useEffect(() => {

        const endOffset = itemOffset + itemsPerPage;

        setCurrentItems(filteredData?.slice(itemOffset, endOffset))
        setPageCount(Math.ceil(filteredData?.length / itemsPerPage))

        if (searchTerm.length > 0) {
            setItemOffset(0)
        }

    }, [cryptoList, searchTerm, itemOffset, itemsPerPage,val])

    if (isFetching) return <Loading text="Loading..." />


    return (
        <>




            <>
                {!simplified &&
                    <div id='search' className='search-crypto'>
                        <Input placeholder='Search crypto' type='text' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />

                    </div>}

                {currentItems?.length <= 0 && searchTerm.length > 0 && !isFetching ? <div className='w-full text-center text-lg inline-block '>
                    <p className='text-slate-600 inline-flex' >no result found for


                        <p className='text-slate-800 font-semibold ml-1' >"{searchTerm}"</p>
                    </p>

                </div> :

                    <Row gutter={[32, 32]} className='crypto-card-container'>

                        {currentItems?.map(item =>


                            <Col xs={24} sn={12} lg={6} className='crypto-card' key={item.uuid}>
                                <motion.div layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} className='w-full' transition={{ delay: 0.1, duration: 0.30, ease: "easeOut" }}>
                                    <Link to={`/crypto/${item?.uuid}`}>
                                        <Card title={`${item.rank} . ${item?.name} `}

                                            extra={<div className='flex gap-2 items-center text-xs sm:text-sm text-zinc-600 ml-1'>
                                                <p>{item?.symbol}</p>
                                                <img className='crypto-image' src={item?.iconUrl} />
                                            </div>}

                                            hoverable
                                        >
                                            <div className=' flex-col md'>
                                                <p className="text-zinc-600 flex gap-1 ">Price:
                                                    <p className="text-zinc-700 font-semibold">${millify(item?.price)}</p>
                                                </p>
                                                <p className="text-zinc-600 flex gap-1" >Market Cap:
                                                    <p className="text-zinc-700 font-semibold ">${millify(item?.marketCap)}</p>

                                                </p>
                                                <p className="text-zinc-600 flex gap-1">Daily Change:
                                                    <p className={`font-semibold ${millify(item?.change) >= 0 ? "text-green-600" : "text-red-700"}  `} >{millify(item?.change)}%</p>
                                                </p>
                                            </div>
                                        </Card>
                                    </Link>
                                </motion.div>

                            </Col>

                        )}
                    </Row>

                }
                {!simplified && searchTerm.length === 0 ?

                    <ReactPaginate
                        breakLabel={<button className='text-gray-600 cursor-text' disabled>...</button>}
                        nextLabel={<RightOutlined className='flex' />}
                        onPageChange={handlePageClick}
                        hrefBuilder={(page, pageCount, selected) =>
                            page >= 1 && page <= pageCount && `#search`
                        }

                        pageRangeDisplayed={3}
                     
                        pageCount={pageCount}
                        previousLabel={<LeftOutlined  className='flex' />}
                        renderOnZeroPageCount={null}
                        activeLinkClassName="active-page"
                        containerClassName="container-page"
                        pageLinkClassName="page"
                        disabledLinkClassName="disable-page"
                        marginPagesDisplayed={1}
                      
                    />


                    : ""




                }



            </>



        </>
    );
};

export default Cryptocurrencies;

