const { ClassValue, clsx } = require("clsx");
const { twMerge } = require("tailwind-merge");

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

module.exports = { cn };



function cn2(...inputs) {
  return twMerge(clsx(inputs));
}

module.exports = { cn2 };
