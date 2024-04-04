const { ClassValue, clsx } = require('clsx');
const { twMerge } = require('tailwind-merge');

function cn3(...inputs) {
  return twMerge(clsx(inputs));
}

module.exports = { cn3 };
