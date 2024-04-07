"use client "
// pages/index.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Fetch() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    async function fetchCourses() {
      try {
        const response = await axios.get('/api/users/courses');
        if (Array.isArray(response.data.data)) {
          setCourses(response.data.data);
        } else {
          console.error('Invalid response data structure:', response.data);
        }
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    }
    fetchCourses();
  }, []);

  return (
    <div>
      <h1>Courses</h1>
      <ul>
        {courses.map(course => (
          <li key={course._id}>
            <h2>{course.title}</h2>
            <p>Category: {course.category}</p>
            <p>Description: {course.description}</p>
            <p>Price: ${course.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Fetch;
