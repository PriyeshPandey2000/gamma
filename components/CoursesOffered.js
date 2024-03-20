import React from 'react';

const CoursesOffered = () => {
  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-bold text-blue-800 mb-4 text-center">Courses Offered</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Card 1 */}
        <div className="bg-white rounded-lg shadow-md p-2 md:col-span-1 flex">
          <img src="/images/trending.png" alt="Course 1 Image" className="w-6 h-6 rounded-full mr-4" />
          <div>
           
            <p className="text-gray-600 mb-2">Statement 1 for Course 1</p>
            <p className="text-gray-600 mb-2">Statement 2 for Course 1</p>
            <p className="text-gray-600 mb-4">Statement 3 for Course 1</p>
          </div>
        </div>
        
        {/* Card 2 */}
        <div className="bg-white rounded-lg shadow-md p-2 md:col-span-1 flex">
          <img src="/images/Graph.png" alt="Course 2 Image" className="w-6 h-6 rounded-full mr-4" />
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Course 2</h2>
            <p className="text-gray-600 mb-2">Statement 1 for Course 2</p>
            <p className="text-gray-600 mb-2">Statement 2 for Course 2</p>
            <p className="text-gray-600 mb-4">Statement 3 for Course 2</p>
          </div>
        </div>
        
        {/* Card 3 */}
        <div className="bg-white rounded-lg shadow-md p-2 md:col-span-1 flex">
          <img src="/images/Tools.png" alt="Course 3 Image" className="w-6 h-6 rounded-full mr-4" />
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Course 3</h2>
            <p className="text-gray-600 mb-2">Statement 1 for Course 3</p>
            <p className="text-gray-600 mb-2">Statement 2 for Course 3</p>
            <p className="text-gray-600 mb-4">Statement 3 for Course 3</p>
          </div>
        </div>
      </div>

      {/* View All Courses Button */}
      <div className="flex justify-center mt-4">
        <button className="btn btn-primary-new bg-blue-800 text-white rounded-full px-6 py-2">View All Courses</button>
      </div>
    </div>
  );
};

export default CoursesOffered;
