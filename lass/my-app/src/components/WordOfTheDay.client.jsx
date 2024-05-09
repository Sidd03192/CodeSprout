"use client";

import { useState, useEffect } from 'react';
import Confetti from 'react-confetti';

// This could be fetched from a server
const words = [
  { word: 'polymorphism', hint: 'A programming language feature that allows values of different data types to be handled using a uniform interface' },
  { word: 'heuristic', hint: 'A technique designed for solving a problem more quickly when classic methods are too slow' },
  { word: 'concurrency', hint: 'The execution of the multiple instruction sequences at the same time' },
  { word: 'idempotence', hint: 'A property of certain operations in mathematics and computer science, that can be applied multiple times without changing the result beyond the initial application' },
  { word: 'memoization', hint: 'An optimization technique used primarily to speed up computer programs by storing the results of expensive function calls' },
  { word: 'abstraction', hint: 'A method of arranging complexity of computer systems. It works by establishing a level of complexity on which a person interacts with the system, suppressing the more complex details below the current level' },
  { word: 'encapsulation', hint: 'The bundling of data with the methods that operate on that data' },
  { word: 'pseudocode', hint: 'An informal high-level description of the operating principle of a computer program or other algorithm' },
  { word: 'refactoring', hint: 'The process of restructuring existing computer code without changing its external behavior' },
  { word: 'big O notation', hint: 'A mathematical notation that describes the limiting behavior of a function when the argument tends towards a particular value or infinity' },
  { word: 'recursion', hint: 'A method where the solution to a problem depends on solutions to smaller instances of the same problem' },
  { word: 'data structure', hint: 'A data organization, management, and storage format that enables efficient access and modification' },
  { word: 'inheritance', hint: 'A mechanism of basing an object or class upon another object or class' },
  { word: 'algorithmic complexity', hint: 'A measure of the computational resources needed by an algorithm to solve a problem' },
  { word: 'version control', hint: 'A system that records changes to a file or set of files over time so that you can recall specific versions later' },
  { word: 'recursion', hint: 'The process a procedure goes through when one of the steps of the procedure involves invoking the procedure itself' },
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
      setTimeout(() => setShowConfetti(false), 4175); // Hide the confetti after 5 seconds
    } else {
      setMessage('Try again');
      setGuess(''); // Clear the input field
    }
  };

  if (!todayWord) return null;

  return (
    <div className="max-w-md mx-auto glassmorphism text-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-3 p-5 mt-10 shadow-[0px_0px_20px_#00ff00] relative">
      {showConfetti && <Confetti className="absolute" />} {/* Show the confetti when showConfetti is true */}
      <h2 className="font-bold text-xl mb-2 text-center">Word Of The Day</h2>
      <p className="text-gray-300 text-base text-center">Hint: {todayWord.hint}</p>
      {completed ? (
        <div className="mt-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-12 w-12 mx-auto text-green-500">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <p className="mt-4 text-center">Word Of The Day Complete!</p>
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

        </form>)}
      <p className="mt-4 text-red-500">{message}</p>
    </div>
  );
}

export default WordOfTheDay;