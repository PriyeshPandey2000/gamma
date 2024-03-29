// import React from 'react';

// const CourseCard = ({ title, icon, column1Heading, column1Content, column2Content, column1Para }) => {
//   return (
//     <div className="bg-white shadow-md rounded-md p-6">
//       <div className="flex items-center mb-4"> {/* Changed items-start to items-center */}
//         <div className="flex items-center"> {/* Wrapping icon and title in a common parent div */}
//           <img src={icon} alt="Course Icon" className="w-6 h-6 mr-4" />
//           <h2 className="text-xl font-bold">{title}</h2>
//         </div>
//         <div> {/* Wrap title in a div */}
//           <h3 className="text-lg font-semibold mb-2">{column1Heading}</h3>
//           <div className="w-full"> {/* Wrap the paragraph within a div covering the width of left column */}
//             <p style={{ maxWidth: "100%" }}>{column1Para}</p> {/* Set max-width to prevent exceeding column 1 */}
//           </div>
//         </div>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         <div className="bg-gray-100 p-4 rounded-md md:col-span-1"> {/* Adjusted width for column 1 */}
//           {column1Content}
//         </div>
//         <div className="bg-gray-100 p-4 rounded-md md:w-64 md:col-span-1">{column2Content}</div> {/* Adjusted width for column 2 */}
//       </div>
//     </div>
//   );
// };

// export default CourseCard;
