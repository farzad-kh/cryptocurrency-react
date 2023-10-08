import React, { useEffect, useState } from 'react';
import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import { Col, Row, Typography } from 'antd';
import Loading from './Loading';
import ChartLoad from './shared/ChartLoad';
import { motion } from 'framer-motion';
const { Title } = Typography;

const LineChart = ({ coinHistory, currentPrice, coinName, isFetching }) => {




    const [coinPrice, setCoinPrice] = useState([])

    const [coinTimestamp, setCoinTimestamp] = useState([])


    const eachPrice = coinHistory?.data?.history.map(item => item.price)


    const eachTimestamp = coinHistory?.data?.history?.map(item => new Date(item.timestamp * 1000).toLocaleDateString())

    // for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    //     coinTimestamp.push(coinHistory?.data?.history[i].timestamp * 1000);
    // }
    // for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    //     coinPrices.push(coinHistory?.data?.history[i].price);
    //   }

    console.log(coinPrice);



    const data = {
        labels: coinTimestamp,
        datasets: [
            {
                label: 'Price In USD',
                data: isFetching ? "" : coinPrice,
                fill: false,
                backgroundColor: '#0071bd',
                borderColor: '#0071bd',
            },
        ],
    };

    const options = {
        scales: {

            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
    };


    useEffect(() => {

        // setCoinPrice([...eachPrice])
        // setCoinTimestamp( [...eachTimestamp])
        //    or
        setCoinPrice(eachPrice)
        setCoinTimestamp(eachTimestamp)

    }, [coinHistory])

    // if (!isFetching) return <ChartLoad/>
    console.log(coinPrice)
    console.log(coinTimestamp)
    if (isFetching) return <ChartLoad />


    return (
        <div>
            <Row className="chart-header my-5">


                <Title level={2} className="chart-title">{coinName} Price Chart </Title>
                <Col className="price-container">
                    <Title level={5} className="price-change !text-gray-800 flex gap-1">Change:

                        <div className={coinHistory?.data?.change >= 0 ? "text-green-600" : "text-red-700"}>{coinHistory?.data?.change}%</div>
                    </Title>
                    <Title level={5} className="current-price !text-gray-800 flex gap-1  ">
                        Current {coinName} Price:

                        <div className='!text-slate-900'> $ {currentPrice}</div>

                    </Title>
                </Col>

            </Row>

          
                <Line  data={data} options={options} />
        

        </div>
    );
};

export default LineChart;





// import React, { useEffect, useState } from 'react';
// import Chart from 'chart.js/auto';
// import { Line } from 'react-chartjs-2';
// import { Col, Row, Typography } from 'antd';
// import Loading from './Loading';

// const { Title } = Typography;

// const LineChart = ({ coinHistory, currentPrice, coinName, coinHistoryFeching, isFetching }) => {
//     if (coinHistory?.data?.history == undefined) return <Loading text="Please wait" />
//     const coinPrice = [];
//   const coinTimestamp = [];

//   for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
//     coinPrice.push(coinHistory?.data?.history[i].price);
//   }

//   for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
//     coinTimestamp.push(new Date(coinHistory?.data?.history[i].timestamp*1000).toLocaleDateString());
//   }
//   const data = {
//     labels: coinTimestamp,
//     datasets: [
//       {
//         label: 'Price In USD',
//         data: coinPrice,
//         fill: false,
//         backgroundColor: '#0071bd',
//         borderColor: '#0071bd',
//       },
//     ],
//   };

//   const options = {
//     scales: {
//       yAxes: [
//         {
//           ticks: {
//             beginAtZero: true,
//           },
//         },
//       ],
//     },
//   };

//   return (
//     <>
//       <Row className="chart-header">
//         <Title level={2} className="chart-title">{coinName} Price Chart </Title>
//         <Col className="price-container">
//           <Title level={5} className="price-change">Change: {coinHistory?.data?.change}%</Title>
//           <Title level={5} className="current-price">Current {coinName} Price: $ {currentPrice}</Title>
//         </Col>
//       </Row>
//       <Line data={data} options={options} />
//     </>
//   );
// };



// export default LineChart;
