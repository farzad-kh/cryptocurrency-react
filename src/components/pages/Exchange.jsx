import React, { useEffect, useState } from "react";
import { useGetExchangesQuery } from "../../services/cryptoSlice";

import millify from "millify";
import { Collapse, Row, Col, Typography, Avatar, Select } from "antd";
import { SafetyOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
import { useGetCryptosQuery } from "../../services/cryptoSlice";
import ChartLoad from "../shared/ChartLoad";
import Loading from "../Loading";
import { motion } from "framer-motion";
const { Text } = Typography;
const { Panel } = Collapse;
const { Option } = Select;

const Exchange = () => {
  const [selectExchenge, setSelectExchenge] = useState("Qwsogvtv82FCd");
  const [selectLimit, setSelectLimit] = useState("25");
  const [disOption, setDisOption] = useState(false);

  const {
    data: exchengeData,
    isFetching,
    isLoading,
  } = useGetExchangesQuery({ coinId: selectExchenge, limit: selectLimit });
  const [exchenges, setExchenges] = useState([]);
  const { data: cryptoList } = useGetCryptosQuery(100);

  useEffect(() => {
    setExchenges(exchengeData?.data);
  }, [exchengeData, selectExchenge, disOption]);

  //    {selectLimit >exchenges?.exchanges?.length&& alert("du")}
  if (cryptoList === undefined || isLoading)
    return <Loading text="Loading..." />;

  return (
    <div>
      <div className=" w-full   md:px-8 px-1 mb-5 gap-2 flex items-center">
        <div className="ml-2  lg:flex-[0.2] md:flex-[0.3] flex-[0.5]  flex-row">
          <h4 className=" text-slate-600 md:text-base text-sm">
            Exchenge for:
          </h4>

          <Select
            className=" w-full mt-1"
            showSearch
            defaultValue={"Qwsogvtv82FCd"}
            placeholder="Select coins"
            optionFilterProp="children"
            onChange={(value) => setSelectExchenge(value)}
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
          >
            {cryptoList?.data?.coins.map((name) => (
              <option value={name.uuid} label={name.name}>
                {name.name}
              </option>
            ))}
          </Select>
        </div>
        <div className="ml-2 lg:flex-[0.2] md:flex-[0.3]  flex-[0.5]  flex-row">
          <h4 className="text-slate-600 md:text-base text-sm">Show rows:</h4>
          <Select
            className="  w-full mt-1 "
            defaultValue={"25"}
            placeholder="Select coins"
            optionFilterProp="children"
            onChange={(value) => setSelectLimit(value)}
          >
            {/* exchenges?.exchanges?.length < selectLimit ?setDisOption(true) :setDisOption(false) */}
            <option disabled={disOption} value={25}>
              25
            </option>
            <option disabled={disOption} value={50}>
              50
            </option>
            <option disabled={disOption} value={75}>
              75
            </option>
            <option disabled={disOption} value={100}>
              100
            </option>
            {/* {num.map(item=>
      <option  disabled={exchenges?.exchanges?.length < selectLimit ?:false} value={item} >{item}</option>
    )} */}
          </Select>
        </div>
      </div>

      <div className="flex flex-col w-full my-4 sm:gap-4 gap-2  ">
        <div className="flex sm:px-4 px-0 w-full   justify-center   ">
          <div className="w-full lg:w-10/12 bg-slate-200 flex justify-between items-center rounded lg:p-4  md:p-3 sm:p-3 p-3 gap-4 text-slate-600 font-bold  lg:text-sm md:text-xs text-xs  ">
            <span className="sm:flex-[0.2] xl:ml-2 2xl:text-left text-center">
              Exchenges
            </span>

            <span className="sm:flex-[0.2]  text-center ">
              24h Trade Volume
            </span>
            <span className="sm:flex-[0.1]  text-left">Markets</span>
            <span>Recomended</span>
          </div>
        </div>
      </div>

      {isFetching ? (
        <ChartLoad />
      ) : (
        <div className="flex flex-col w-full my-4 gap-4 ">
          {exchenges?.exchanges?.map((item) => (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="w-full"
              transition={{ delay: 0.25, duration: 0.4, ease: "easeOut" }}
            >
              <div
                className="flex sm:px-4 px-0 w-full   justify-center   "
                key={item.uuid}
              >
                <div className=" exchenge-reponsive w-full lg:w-10/12 flex justify-between items-center sm:p-4 p-2 sm:gap-4 gap-2 !font-semibold border-b ">
                  <div className=" flex-[0.2] text-center flex items-center gap-2 sm:gap-3 ">
                    <p className="">{item.rank}</p>
                    <div className="sm:w-10 sm:h-10 w-6 h-6 overflow-hidden rounded  relative flex  items-center transition-all ">
                      <img
                        className="w-full h-full object-contain"
                        src={item?.iconUrl}
                        alt={item?.iconUrl}
                      />
                    </div>

                    <p>{item?.name}</p>
                  </div>
                  {/* <div className='flex-[0.2] text-center'>
                              
                            </div> */}
                  <div className="sm:flex-[0.1] flex-[0.2] text-center ">
                    <p>${millify(item?.["24hVolume"])}</p>
                  </div>
                  <div>
                    <p>{item?.numberOfMarkets}</p>
                  </div>

                  {/* {exchenges?.exchanges?.length < selectLimit ? <p>limit</p> : null} */}

                  <div>
                    {item?.recommended ? (
                      <div className=" sm:w-[82.5px] w-[63.75px] font-semibold bg-emerald-500 text-zinc-50 sm:p-2 p-1 flex items-center justify-center sm:text-sm text-xs rounded">
                        <SafetyOutlined className="  self-end flex mr-[3px] mb-[1px] sm:text-base text-xs " />
                        <p>Verify</p>
                      </div>
                    ) : (
                      <div className=" font-semibold bg-[#769cd5] text-zinc-50 sm:p-2 p-1 flex items-center justify-center sm:text-sm text-xs  rounded">
                        <ExclamationCircleOutlined className=" mb-[1px] mr-[3px] sm:text-base text-xs self-end flex" />
                        <p>Neutral </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Exchange;
