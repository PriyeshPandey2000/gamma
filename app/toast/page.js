"use client"
import React from 'react';
import "tailwindcss/tailwind.css";

import { toast } from 'react-hot-toast';
const TestComponent = () => {
  const showToast = () => {
    toast.success('This is a test toast notification!');
  };

  return (
    <div>
      <h1>Test Component</h1>
      <button onClick={showToast}>Show Toast</button>
    </div>
  );
};

export default TestComponent;