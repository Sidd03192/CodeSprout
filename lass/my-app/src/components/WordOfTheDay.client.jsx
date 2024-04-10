"use client";

import { useState, useEffect } from 'react';
import Confetti from 'react-confetti';

// This could be fetched from a server
const words = [
  { word: 'algorithm', hint: 'A step-by-step procedure for calculations' },
  { word: 'binary', hint: 'Relating to a system of numerical notation that has 2 rather than 10 as a base' },
  { word: 'computer', hint: 'An electronic device capable of storing and processing data' },
  { word: 'network', hint: 'A system of interconnected computers and devices' },
  { word: 'programming', hint: 'The process of writing code for software applications' },
  { word: 'database', hint: 'A collection of data organized for rapid search and retrieval' },
  { word: 'encryption', hint: 'The process of encoding information to protect it from unauthorized access' },
  { word: 'server', hint: 'A computer or program that provides services to other computers over a network' },
  { word: 'interface', hint: 'The point of interaction between a user and a computer system' },
  { word: 'debugging', hint: 'The process of identifying and removing errors from software code' },
  { word: 'virtualization', hint: 'The creation of a virtual version of a resource or device' },
  { word: 'compiler', hint: 'A program that translates source code into machine code' },
  { word: 'framework', hint: 'A set of tools and libraries used to develop software applications' },
  { word: 'algorithmic complexity', hint: 'How the runtime of an algorithm increases with the size of the input' },
  { word: 'version control', hint: 'The management of changes to documents, computer programs, and other collections of information' },
  { word: 'recursion', hint: 'A programming technique where a function calls itself in order to solve problems' },
  // Add more words here
];

function WordOfTheDay() {
  const [todayWord, setTodayWord] = useState(null);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState(''); // Add a state for the message
  const [showConfetti, setShowConfetti] = useState(false); // Add a state for the confetti
  const [completed, setCompleted] = useState(false); // Add a state for completion

  useEffect(() => {
    const today = new Date().getDate();
    setTodayWord(words[today % words.length]);
  }, []);

  const handleGuess = (e) => {
    e.preventDefault(); // Prevent the form from refreshing the page
    if (guess.toLowerCase() === todayWord.word.toLowerCase()) {
      setMessage('Correct!');
      setShowConfetti(true); // Show the confetti
      setCompleted(true); // Mark as completed
      setTimeout(() => setShowConfetti(false), 5000); // Hide the confetti after 5 seconds
    } else {
      setMessage('Try again');
      setGuess(''); // Clear the input field
    }
  };
  
  if (!todayWord) return null;

  return (
    <div className="max-w-md mx-auto glassmorphism text-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-3 p-5 mt-10 shadow-[0px_0px_20px_#00ff00] relative">
      {showConfetti && <Confetti className="absolute" />} {/* Show the confetti when showConfetti is true */}
      <h2 className="font-bold text-xl mb-2 text-center">Word of the day</h2>
      <p className="text-gray-300 text-base text-center">Hint: {todayWord.hint}</p>
      {completed ? (
        <div className="mt-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-12 w-12 mx-auto text-green-500">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <p className="mt-4 text-center">Word of the day completed</p>
        </div>
      ) : (
        <form className="mt-4 " onSubmit={handleGuess}>
<div class="relative">
  <input 
    className="text-center appearance-none w-full py-4 px-3 text-gray-300 leading-normal bg-transparent focus:outline-none focus:shadow-outline"
    type="text" 
    value={guess} 
    onChange={e => setGuess(e.target.value)} 
    placeholder="Enter your guess here"
  />
  <div class="absolute bottom-0 left-0 right-0 h-1">
    <div class="h-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
  </div>
</div>
       <div className="mt-3 flex justify-center">
  <button 
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    type="submit"
  >
    Guess
  </button>
</div>

        </form>      )}
      <p className="mt-4 text-red-500">{message}</p>
    </div>
  );
}

export default WordOfTheDay;