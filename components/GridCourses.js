import React, { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation';
import PropTypes from 'prop-types';
import Image from 'next/image';
import axios from 'axios';
import { useRouter } from 'next/router';

const CourseCard = ({ course }) => {
  const router = useRouter();
  
 
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('/api/users/courses');
        console.log('Response data:', response.data);
        console.log(response.data.data[0].title);
      if (Array.isArray(response.data.data)) { // Access response.data.data
        setCourses(response.data.data);
        } else {
          console.error('Invalid response data structure:', response.data);
        }
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };
    fetchCourses();
  }, []);
  const courseRoutes = {
    '6611bed1467c3ba9ab016953': '/courses/online/course1',
    '6611bf63467c3ba9ab016955': '/courses/online/course2',
    '6611bf77467c3ba9ab016957': '/courses/online/course3',
    '6611bfc7467c3ba9ab016959': '/courses/online/course4',
    '6611bfd5467c3ba9ab01695b': '/courses/online/course5',
    '6611bfe0467c3ba9ab01695d': '/courses/online/course6',
    '6611c020467c3ba9ab01695f': '/courses/online/course7',
    '6611c028467c3ba9ab016961': '/courses/online/course8',
    '6611c032467c3ba9ab016963': '/courses/online/course9',
    // Add more courseId and corresponding routes here
  };
  const onlineclick = () => {
    // Get the route corresponding to the courseId
    const route = courseRoutes[course._id];
    if (route) {
        router.push(route);
    } else {
        console.error(`Route not found for courseId: ${course._id}`);
    }
};
  const mostPopularTitle1 = courses.length > 0 ? courses[0].title : '';
  

  const handleLearnMore = () => {
    // Navigate to SingleCourse page passing course ID or any necessary data
    router.push('/SingleCourse');
  };

  return (
    <div className="[background:linear-gradient(99.28deg,_#fff,_#f1f4fb)] shadow-[0px_0px_10px_rgba(76,_76,_109,_0.07)] box-border border-[1px] border-solid border-#D1D1D6 flex flex-col grow px-5 py-6 w-full text-base rounded-2xl border border-solid shadow-sm border-zinc-300 max-md:mt-9 max-md:max-w-full">
      <img src={`data:image/png;base64,${course.imageData}`} alt={course.title} className="w-full aspect-[2.38] max-md:max-w-full" />
      <h3 className="mt-3 text-lg font-medium leading-8 text-sky-800 max-md:max-w-full">{course.title}</h3>
      <p className="mt-2 leading-6 text-zinc-700 text-opacity-60 max-md:max-w-full">{course.description}</p>
      <div className="flex gap-1 self-start mt-6">
        <span className="text-black leading-[160%]">Course Starts at:</span>
        <time className="font-medium text-center text-sky-800 leading-[133%]">{course.startDate}</time>
      </div>
      <button className="justify-center self-start px-5 py-3 mt-6 font-medium text-center text-sky-800 border border-sky-800 border-solid leading-[133%] rounded-[63px]" onClick={onlineclick}>
        Learn More
      </button>
    </div>
  );
};
CourseCard.propTypes = {
  course: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
  }).isRequired,
};
const CourseSection = ({ title, icon, courses }) => (
  <>
    <div className="flex gap-2 self-start px-5 mt-20 text-lg font-bold max-md:mt-10" style={{ color: icon.color }}>
      <img src={icon.src} alt={icon.alt} className="shrink-0 w-6 aspect-square" />
      <h2 className="my-auto">{title}</h2>
    </div>
    <div className="px-5 mt-5 w-full max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        {courses.map((course, index) => (
          <div key={index} className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <CourseCard course={course} />
          </div>
        ))}
      </div>
    </div>
  </>
);
CourseSection.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  }).isRequired,
  courses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

function MyComponent() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('/api/users/courses');
        if (Array.isArray(response.data.data)) { // Access response.data.data
          setCourses(response.data.data);
        } else {
          console.error('Invalid response data structure:', response.data);
        }
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };
    fetchCourses();
  }, []);
  const mostPopularTitle1 = courses.length > 0 ? courses[0].title : '';
  const mostPopularTitle2 = courses.length > 0 ? courses[1].title : '';
  const mostPopularTitle3 = courses.length > 0 ? courses[2].title : '';
 
  const mostPopularCourses = [
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/f69e2e31a5bb44f3b3b3859c170d321b8e1e07315fad188a7c85b0eb16cd4a92?apiKey=f15eb0618dfb42cfbb22d68ba1ebee7d&",
      title: mostPopularTitle1 ,
      description: "DSA for Cracking the Coding Interview. Animated Examples for Faster Learning and Deeper Understanding.",
      startDate: "15 March",
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/f69e2e31a5bb44f3b3b3859c170d321b8e1e07315fad188a7c85b0eb16cd4a92?apiKey=f15eb0618dfb42cfbb22d68ba1ebee7d&",
      title: mostPopularTitle2,
      description: "DSA for Cracking the Coding Interview. Animated Examples for Faster Learning and Deeper Understanding.",
      startDate: "15 March",
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/f69e2e31a5bb44f3b3b3859c170d321b8e1e07315fad188a7c85b0eb16cd4a92?apiKey=f15eb0618dfb42cfbb22d68ba1ebee7d&",
      title:  mostPopularTitle3,
      description: "DSA for Cracking the Coding Interview. Animated Examples for Faster Learning and Deeper Understanding.",
      startDate: "15 March",
    },
  ];

  const careerGrowthCourses = [
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/f69e2e31a5bb44f3b3b3859c170d321b8e1e07315fad188a7c85b0eb16cd4a92?apiKey=f15eb0618dfb42cfbb22d68ba1ebee7d&",
      title: "DSA [Java/C++] + Full Stack [MERN/JAVA] + CS fundamental subjects",
      description: "DSA for Cracking the Coding Interview. Animated Examples for Faster Learning and Deeper Understanding.",
      startDate: "15 March",
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/f69e2e31a5bb44f3b3b3859c170d321b8e1e07315fad188a7c85b0eb16cd4a92?apiKey=f15eb0618dfb42cfbb22d68ba1ebee7d&",
      title: "DSA [Java/C++] + Full Stack [MERN/JAVA] + CS fundamental subjects",
      description: "DSA for Cracking the Coding Interview. Animated Examples for Faster Learning and Deeper Understanding.",
      startDate: "15 March",
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/f69e2e31a5bb44f3b3b3859c170d321b8e1e07315fad188a7c85b0eb16cd4a92?apiKey=f15eb0618dfb42cfbb22d68ba1ebee7d&",
      title: "DSA [Java/C++] + Full Stack [MERN/JAVA] + CS fundamental subjects",
      description: "DSA for Cracking the Coding Interview. Animated Examples for Faster Learning and Deeper Understanding.",
      startDate: "15 March",
    },
  ];

  const specializedCourses = [
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/f69e2e31a5bb44f3b3b3859c170d321b8e1e07315fad188a7c85b0eb16cd4a92?apiKey=f15eb0618dfb42cfbb22d68ba1ebee7d&",
      title: "DSA [Java/C++] + Full Stack [MERN/JAVA] + CS fundamental subjects",
      description: "DSA for Cracking the Coding Interview. Animated Examples for Faster Learning and Deeper Understanding.",
      startDate: "15 March",
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/f69e2e31a5bb44f3b3b3859c170d321b8e1e07315fad188a7c85b0eb16cd4a92?apiKey=f15eb0618dfb42cfbb22d68ba1ebee7d&",
      title: "DSA [Java/C++] + Full Stack [MERN/JAVA] + CS fundamental subjects",
      description: "DSA for Cracking the Coding Interview. Animated Examples for Faster Learning and Deeper Understanding.",
      startDate: "15 March",
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/f69e2e31a5bb44f3b3b3859c170d321b8e1e07315fad188a7c85b0eb16cd4a92?apiKey=f15eb0618dfb42cfbb22d68ba1ebee7d&",
      title: "DSA [Java/C++] + Full Stack [MERN/JAVA] + CS fundamental subjects",
      description: "DSA for Cracking the Coding Interview. Animated Examples for Faster Learning and Deeper Understanding.",
      startDate: "15 March",
    },
  ];

  return (
    
    
    <main className="flex flex-col">
     {courses.length > 0 && (
        <>
          <CourseSection
            title="Most Popular Course"
            icon={{ src: "https://cdn.builder.io/api/v1/image/assets/TEMP/cb0e8f08adca9676a7dd41edd6d9dcb67f22347e933739e6d21a9aa4250e2ce6?apiKey=f15eb0618dfb42cfbb22d68ba1ebee7d&", alt: "Most Popular Course", color: "text-red-500" }}
            courses={courses.slice(0, 3)} // Slice the first 3 courses
          />
          <CourseSection
            title="For Career Growth"
            icon={{ src: "https://cdn.builder.io/api/v1/image/assets/TEMP/e1bdef311ece96d815749710d10b263264573ff22dd37bc03aed1ff4c89ebb7c?apiKey=f15eb0618dfb42cfbb22d68ba1ebee7d&", alt: "For Career Growth", color: "text-green-700" }}
            courses={courses.slice(3, 6)} // Slice next 3 courses
          />
          <CourseSection
            title="Specialized Skills and Tools"
            icon={{ src: "https://cdn.builder.io/api/v1/image/assets/TEMP/e10909eceb203d6dc836fc9497e7efa9090b4dfe21825e44f8357237a05015fe?apiKey=f15eb0618dfb42cfbb22d68ba1ebee7d&", alt: "Specialized Skills and Tools", color: "text-sky-800" }}
            courses={courses.slice(6, 9)} // Slice last 3 courses
          />
        </>
      )}
    </main>
  );
}

export default MyComponent;