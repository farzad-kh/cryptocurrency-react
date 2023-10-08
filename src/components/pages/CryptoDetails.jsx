import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import HTMLReactParser from 'html-react-parser';
import { Col, Row, Select, Typography } from "antd"
import { MoneyCollectOutlined, DollarCircleOutlined, FundOutlined, ExclamationCircleOutlined, StopOutlined, TrophyOutlined, CheckOutlined, NumberOutlined, ThunderboltOutlined } from '@ant-design/icons';
import millify from 'millify';
import { motion } from 'framer-motion';
import Loading from '../Loading';
const { Title, Text } = Typography;
const { Option } = Select;
import LineChart from '../LineChart';
//api
import { useGetCryptoDetailsQuery, useGetCryptoHistoryQuery } from '../../services/cryptoSlice';

const CryptoDetails = () => {

  //router
  const { coinId } = useParams()
  const navigate = useNavigate()
 
  const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];
  const [timePeriod, setTimePeriod] = useState('24h');
  //api
  const { data:detail, isFetching } = useGetCryptoDetailsQuery(coinId)

  const { data: coinHistory, isFetching: coinHistoryFeching } = useGetCryptoHistoryQuery({coinId,timePeriod})

  const [cryptoDetails, setCryptoDetails] = useState([])





  // cryptoDetails?.supply?.total!==null && (millify(cryptoDetails?.supply?.total))

  // stats
  const stats = [
    { title: 'Price to USD', value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`, icon: <DollarCircleOutlined /> },
    { title: 'Rank', value: cryptoDetails?.rank, icon: <NumberOutlined /> },
    { title: '24h Volume', value: `$ ${cryptoDetails?.["24hVolume"] && millify(cryptoDetails?.["24hVolume"])}`, icon: <ThunderboltOutlined /> },
    { title: 'Market Cap', value: `$ ${cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)}`, icon: <DollarCircleOutlined /> },
    { title: 'All-time-high(daily avg.)', value: `$ ${cryptoDetails?.allTimeHigh?.price && millify(cryptoDetails?.allTimeHigh?.price)}`, icon: <TrophyOutlined /> },
  ];

  const genericStats = [
    { title: 'Number Of Markets', value: cryptoDetails?.numberOfMarkets, icon: <FundOutlined /> },
    { title: 'Number Of Exchanges', value: cryptoDetails?.numberOfExchanges, icon: <MoneyCollectOutlined /> },
    { title: 'Aprroved Supply', value: cryptoDetails?.supply?.confirmed ? <CheckOutlined /> : <StopOutlined />, icon: <ExclamationCircleOutlined /> },
    {
      title: 'Total Supply', value: ` ${cryptoDetails?.supply?.total === null ? "No info" : `$${millify(cryptoDetails?.supply?.total)}`

        }
    
  


   
     `,
      icon: <ExclamationCircleOutlined />
    },

    { title: 'Circulating Supply', value: `$ ${cryptoDetails?.supply?.circulating && millify(cryptoDetails?.supply?.circulating)}`, icon: <ExclamationCircleOutlined /> },
  ];
  useEffect(() => {
    setCryptoDetails(detail?.data?.coin)
  }, [coinHistory,timePeriod,detail])
 


  






  
 if ( isFetching && cryptoDetails?.length === 0 || coinHistory===undefined ) return <Loading text="Loading..." />
  return (
    <Col className="coin-detail-container">
      <motion.div className='border-stone-300'
        transition={{ duration: 0.2, delay: 0.40 }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 10 }}
        exit={{ opacity: 1, y: 100 }}


      >
        <div level={2} className='show-more mb-6 !text-[0.90rem]'>
          <div className='cursor-pointer hover:text-cyan-600 w-fit border-b border-stone-500 hover:border-cyan-400' onClick={() => navigate('/cryptocurrency')}>Back To Cryptocurrency</div>
        </div>

        <Col className="coin-heading-container flex items-center flex-col mb-4 px-3 ">
          <Title level={2} className="coin-name ">
            {cryptoDetails?.name} ({cryptoDetails?.symbol}) Price
          </Title>
          <p>{cryptoDetails?.name} live price in US Dollar (USD). View value statistics, market cap and supply.</p>
        </Col>
        <Select defaultValue="24h" className="select-timeperiod ml-3" placeholder="Select Timeperiod" onChange={(value) => setTimePeriod(value)}>
          {time.map((date) => <Option key={date}>{date}</Option>)}
        </Select>
       
         <LineChart coinHistory={coinHistory} currentPrice={millify(cryptoDetails?.price)} coinName={cryptoDetails?.name} isFetching={coinHistoryFeching} /> 
        


        <Col className="stats-container my-5 px-0">
          <Col className="coin-value-statistics px-0">

            <Col className="coin-value-statistics-heading px-0 mx-4 md:mx-0 my-3">
              <Title level={3} className="coin-details-heading">{cryptoDetails?.name} Value Statistics</Title>
              <p>An overview showing the statistics of {cryptoDetails?.name}, such as the base and quote currency, the rank, and trading volume.</p>
            </Col>

            {stats.map(({ icon, title, value }) => (

              <Col className="coin-stats">
                <Col className="coin-stats-name pl-0">
                  <Text className='flex self-center' >{icon}</Text>
                  <Text className='!text-slate-800' >{title}</Text>
                </Col>
                <Text className='!text-slate-900 font-semibold'>

                  {value}</Text>
              </Col>
            ))}
            
          </Col>
          <Col className="other-stats-info px-0">
            <Col className="coin-value-statistics-heading px-0 mx-4 md:mx-0 my-3">
              <Title level={3} className="coin-details-heading">Other Stats Info</Title>
              <p>An overview showing the statistics of {cryptoDetails?.name}, such as the base and quote currency, the rank, and trading volume.</p>
            </Col>
            {genericStats.map(({ icon, title, value }) => (
              <Col className="coin-stats">
                <Col className="coin-stats-name pl-0 items-center">
                  <Text className='flex self-center'>{icon}</Text>
                  <Text className='!text-slate-800 ' >{title}</Text>
                </Col>
                <Text className='!text-slate-900 font-semibold'>

                  {value}</Text>
              </Col>
            ))}
          </Col>
        </Col>

        <Col className="coin-desc-link px-0  md:mx-0 justify-center items-center mb-6  ">
          <Col className="coin-links px-0 flex-1">
            <Title level={3} className="coin-details-heading px-0 mx-4 md:mx-0 my-3">{cryptoDetails?.name} Links</Title>
            {cryptoDetails?.links?.map((link) => (
              <Row className="coin-link" key={link?.name}>
                <Title level={5} className="link-name">{link?.type}</Title>
                <a href={link?.url} target="_blank" rel="noreferrer">{link?.name}</a>
              </Row>
            ))}
          </Col>

        </Col>
        <Row className="coin-desc px-0 mx-4 md:mx-0 my-3 flex flex-col pb-3">
          <Title level={3} className="coin-details-heading">What is {cryptoDetails?.name}?</Title>

          {cryptoDetails?.description}
        </Row>
      </motion.div>
    </Col>
  );
};

export default CryptoDetails;