import React from 'react';

import { Alert, Space, Spin } from 'antd';
const Loading = ({text}) => {
  
    return (
        <Space className='text-2x-l' direction="vertical" style={{ width: '100%' }}>
           

            <Spin className='text-2xl'  tip={text}>
                <Alert className='!h-[74px]'
                    message="                "
                    description="      "
                    type="info"
                />
            </Spin>
        </Space>
    );
};

export default Loading;