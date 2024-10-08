"use client";

export function generateRandomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
export const generateUniqueNumbers = (
  useNumbs: number[],
  min: number,
  max: number
) => {
  let newNumber;
  do {
    newNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  } while (useNumbs.includes(newNumber));
  if (newNumber === 0) newNumber = 1;
  return newNumber;
};
