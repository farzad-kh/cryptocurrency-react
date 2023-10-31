import React, { useEffect, useState } from "react";

import millify from "millify";
import { Typography, Row, Col, Statistic, Button } from "antd";

import { useGetCryptosQuery } from "../../services/cryptoSlice";
import Loading from "../Loading";
import { motion } from "framer-motion";
import Cryptocurrencies from "./Cryptocurrencies";

import { useNavigate, Link } from "react-router-dom";
import { useGetCryptoNewsQuery } from "../../services/cryptoNewsApi";
const { Title } = Typography;
const Home = () => {
  const navigate = useNavigate();

  const { data, isFetching} =
    useGetCryptosQuery(10);

  const { isFetching: isFetchingNews } = useGetCryptoNewsQuery({
    q: "crypto",
    count: 6,
  });

  const cryptoGlobal = data?.data?.stats;

  const [crypto, setCrypto] = useState([]);

  useEffect(() => {
    setTimeout(() => setCrypto(cryptoGlobal), 450);
  }, [data]);

  if (isFetching || crypto?.length === 0 || crypto === undefined)
    return <Loading text="Loading..." />;

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="w-full  "
        transition={{ delay: 0.15, duration: 0.4, ease: "easeOut" }}
      >
        <Title level={3} className="heading bb">
          Golobal Crypto Stat
        </Title>
        {crypto == undefined ? (
          ""
        ) : (
          <Row>
            <Col className="p-4 " span={12}>
              <Statistic title="Total Cryptocurrencies" value={crypto?.total} />
            </Col>
            <Col className="p-4 " span={12}>
              <Statistic
                title="Total Exchanges"
                value={millify(crypto?.totalExchanges)}
              />
            </Col>
            <Col className="p-4 " span={12}>
              <Statistic
                title="Total Market Cap"
                value={millify(crypto?.totalMarketCap)}
              />
            </Col>
            <Col className="p-4 " span={12}>
              <Statistic
                title="Total 24h Volume"
                value={millify(crypto?.total24hVolume)}
              />
            </Col>
            <Col className="p-4 " span={12}>
              <Statistic
                title="Total Markets"
                value={millify(crypto?.totalMarkets)}
              />
            </Col>
          </Row>
        )}

        <div className="border-b my-3"></div>
        <div className="home-heading-container mb-5">
          <Title level={2} className="home-title">
            Top 10 Crypto
          </Title>

          <Title level={2} className="show-more">
            <button onClick={() => navigate("/cryptocurrency")}>
              show more
            </button>
          </Title>
        </div>

        <Cryptocurrencies simplified />
        {/* <div className='home-heading-container'>
                    <h2 level={2} className='home-title '>
                        Latest crypto news
                    </h2>
                    <div level={2} className='show-more'>
                        <button onClick={() => navigate('/news')}>show more</button>
                    </div>

                </div> */}

        {/* <News simplified /> */}
      </motion.div>
    </>
  );
};

export default Home;
