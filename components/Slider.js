// "use client"
// import { useState, useEffect } from 'react';
// import dynamic from 'next/dynamic';
// // import Component from '@/SampleCard';

// const Slider = () => {
//   const [showComponent, setShowComponent] = useState(true);

//   useEffect(() => {
//     const sliderInterval = setInterval(() => {
//       setShowComponent(prevState => !prevState);
//     }, 5000); // Change component every 5 seconds

//     return () => clearInterval(sliderInterval);
//   }, []);

//   return (
//     <div className="slider-container">
//       {showComponent && <Component />}
//       <style jsx>{`
//         .slider-container {
//           width: 100%;
//           height: 100%;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           overflow: hidden;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Slider;
