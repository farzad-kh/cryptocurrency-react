// import React, { useEffect, useState,useRef } from 'react';
// import { Tabs } from 'antd';
// import { Link, NavLink, useLocation } from 'react-router-dom';
// import { AndroidOutlined, AppleOutlined } from '@ant-design/icons';
// const TabBar = () => {
//   const ref=useRef(null)
//   const loacation = useLocation()
//   const [a, setA] = useState()
//   const [b, setB] = useState()
//  const [ac,setAc]=useState()






//   const tabNames = [
//     { name: "Home", href: "/", activeClassName: "/" },

//     { name: "Cryptocurrency", href: "/cryptocurrency", activeClassName: "/cryptocurrency" },
//     { name: "Exchanges", href: "/exchanges", activeClassName: "/exchanges" },
//     { name: "News", href: "/news", activeClassName: "/news" },
//   ]


//   const tabActiveHand = (item, e) => {

//     // console.log(e.target.offsetWidth);
//     // console.log(e.target.offsetLeft);


//     if (e.target.pathname ) {
// console.log(e.target.offsetWidth);
//       setA(e.currentTarget.offsetWidth)
//       setB(e.currentTarget.offsetLeft)

//     }


//   }
// useEffect(()=>{

//  const currentLink=ref?.current.childNodes
//  console.log(currentLink);
// const aa=[...currentLink].map(item=>item)
// for(let i of aa){
//   if (i.pathname===loacation?.pathname) {
//     console.log(i.offsetLeft)
//     setAc({width:i.offsetWidth,left:i.offsetLeft})
//   }
// }



// },[b])
//   return (

//     <div className='px-6 border flex justify-center items-center tab-active  '>
//       <div ref={ref}  className='gap-6 flex items-center relative'>
//         {tabNames.map(item =>
//           <Link  activeClassName={item.activeClassName}  onClick={(e) => tabActiveHand(item, e)} to={item.href} > {item.name}


//           </Link>

//         )}

//         <div style={{ width: a ? a : ac?.width, left: b ? b : ac?.left }} className={` absolute left-[-8px] h-[2px] bg-[#0f766e] bottom-0 transition-all duration-500`}></div>
//         {/* <div style={{width: ac ? a : "50px",left:ac ? b : "-8px" }}  className={` absolute left-[-8px] h-[2px] bg-teal-700 bottom-0 transition-all duration-500`}></div> */}
//       </div>

//     </div>
//   );
// };

// export default TabBar;




// import React, { useEffect, useState, useRef, useContext } from 'react';
// import { Tabs } from 'antd';
// import { Link, NavLink, useLocation, useMatch, useParams } from 'react-router-dom';
// import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';
// import { NavContext } from '../../context/NavLayout/NavContextPro';

// const TabBar = () => {

//   const ref = useRef(null)
//   const loacation = useLocation()
//   const params = useParams()
//   const [ac, setAc] = useState()




//   const tabNames = [
//     // { name: "Home", href: "/", activeClassName: "/" ,icon:<HomeOutlined className='transition-all duration-300 absolute top-[70px] right-[13px]'  /> },
//     { name: "Home", href: "/", activeClassName: "/" },

//     { name: "Cryptocurrency", href: "/cryptocurrency", activeClassName: "/cryptocurrency" },
//     { name: "Exchanges", href: "/exchanges", activeClassName: "/exchanges" },
//     { name: "News", href: "/news", activeClassName: "/news" },
//   ]



//   const [activeNav, setActiveNav] = useState({
//     activeWidth: "",
//     activeOffset: "",
//     activeIcon: false
//   })

//   const tabActiveHand = (e) => {
//     if (e.currentTarget?.pathname === loacation?.pathname) {
//       setActiveNav({
//         ...activeNav, activeWidth: e.currentTarget.offsetWidth,
//         activeOffset: e.currentTarget.offsetLeft,
//       })

//     } else {
//       setActiveNav({
//         ...activeNav, activeWidth: 0,
//         activeOffset: 0,
//       })
//     }
//   }

//   useEffect(() => {

//     console.log(params);
//     const currentLink = ref?.current.childNodes

//     // const links = [...currentLink].map(item => item)

//     // for (let linkPath of links) {
//     //   console.log(linkPath);
//     //   if (linkPath?.pathname === loacation?.pathname) {
//     //     setAc({ ...ac, width: linkPath.offsetWidth, left: linkPath.offsetLeft })
//     //   }
     
//     //   if (loacation?.pathname !== "/cryptocurrency" && loacation?.pathname !== "/" && loacation?.pathname !== "/exchanges" && loacation?.pathname !== "/news") {
//     //     setAc({ ...ac, width: 0})
//     //   } 
//     // }

//     const links = [...currentLink]
//     links.map(item => item.pathname===loacation?.pathname &&  
//       setAc({ ...ac, width: item.offsetWidth, left: item.offsetLeft }))


//    if (loacation?.pathname !== "/cryptocurrency" && loacation?.pathname !== "/" && loacation?.pathname !== "/exchanges" && loacation?.pathname !== "/news") {
//         setAc({ ...ac, width: 0})
//       } 

//   }, [activeNav, loacation])


//   return (

//     <div className=' tab-bar px-4 border flex justify-center items-center tab-active  '>
//       <div ref={ref} className=' gap-6 flex items-center relative'>
//         {tabNames.map(item =>
//           <NavLink  className={" relative"} key={item.name} activeClassName={item.activeClassName} onClick={(e) => tabActiveHand(e)} to={item.href} >
//             {item.name}
//           </NavLink >

//         )}

//         <div style={{ width: activeNav.activeWidth ? activeNav.activeWidth : ac?.width, left: activeNav.activeOffset ? activeNav.activeOffset : ac?.left }} className={`rounded-md absolute w-10  left-[-8px] h-[3px] bg-[#3194d0] bottom-0 transition-all duration-300`}></div>


//       </div>

//     </div>
//   );
// };

// export default TabBar;

import React, { useEffect, useState, useRef, useContext, useMemo } from 'react';
import { Tabs } from 'antd';
import { Link, NavLink, useLocation, useMatch, useParams } from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';
import { NavContext } from '../../context/NavLayout/NavContextPro';

const TabBar = () => {

  const ref = useRef(null)
  const loacation = useLocation()
  const params = useParams()
  const [ac, setAc] = useState()




  const tabNames = [
    // { name: "Home", href: "/", activeClassName: "/" ,icon:<HomeOutlined className='transition-all duration-300 absolute top-[70px] right-[13px]'  /> },
    { name: "Home", href: "/", activeClassName: "/" },

    { name: "Cryptocurrency", href: "/cryptocurrency", activeClassName: "/cryptocurrency" },
    { name: "Exchanges", href: "/exchanges", activeClassName: "/exchanges" },
    { name: "News", href: "/news", activeClassName: "/news" },
  ]


  const [activeNav, setActiveNav] = useState({
    activeWidth: "",
    activeOffsetLeft: ""

  })
  
  useEffect(() => {
    const currentLink = ref?.current.childNodes
    const links = [...currentLink]
    links.map(item => item.pathname===loacation?.pathname &&  
      setActiveNav({ activeWidth: item.offsetWidth,  activeOffsetLeft: item.offsetLeft }))

   if (loacation?.pathname !== "/cryptocurrency" && loacation?.pathname !== "/" && loacation?.pathname !== "/exchanges" && loacation?.pathname !== "/news") {
        setActiveNav({ activeWidth: 0})
      } 
  }, [loacation])

console.log(activeNav);
  return (

    <div className=' tab-bar px-4 border flex justify-center items-center tab-active  '>
      <div ref={ref} className=' gap-6 flex items-center relative'>
        {tabNames.map(item =>
          <NavLink  className={" relative"} key={item.name} activeClassName={item.activeClassName}  to={item.href} >
            {item.name}
          </NavLink >

        )}

        {/* <div style={{ width: activeNav.activeWidth ? activeNav.activeWidth : ac?.width, left: activeNav.activeOffset ? activeNav.activeOffset : ac?.left }} className={`rounded-md absolute w-10  left-[-8px] h-[3px] bg-[#3194d0] bottom-0 transition-all duration-300`}></div> */}
        <div style={{ width: activeNav?.activeWidth , left:  activeNav?.activeOffsetLeft }} className={`rounded-md absolute w-10  left-[-8px] h-[3px] bg-[#3194d0] bottom-0 transition-all duration-300`}></div>


      </div>

    </div>
  );
};

export default TabBar;