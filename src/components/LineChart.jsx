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




