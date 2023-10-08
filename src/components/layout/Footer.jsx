// import React from 'react';
// import { Layout, Typography, Space } from 'antd'
// const Footer = () => {
//     return (
//         <div className='footer'>
//             <Typography.Title>
//                 Cryptoverse <br />
//                 All right reserverd
//             </Typography.Title>


//         </div>
//     );
// };

// export default Footer;
import React from 'react';
import { Layout, Typography, Space } from 'antd'
const Footer = () => {
    return (
        <div className='footer' level={5}>
            <div className='text-center'>
                <h1 className='text-gray-300 text-md mb-2'>
                    Cryptoverse
                </h1>
                <span className='text-gray-100 text-sm '>
                Copyright © {new Date().getFullYear()}- All right reserved by ACME Industries Ltd
                </span>

            </div>



        </div>
    );
};

export default Footer;