"use client";
import {
  generateRandomNumber,
  generateUniqueNumbers,
} from "@/helpers/generators";
import cl from "./style.module.css";
import { useState } from "react";

export const CardTable = () => {
  const length = 9;
  const [data, setData] = useState(() => fillData());

  function getRandomIndex() {
    const rndNum: number[] = [];
    for (let i = 0; i < 5; i++) {
      const rnd = generateRandomNumber(0, length - 1);
      if (!rndNum.includes(rnd)) {
        rndNum.push(rnd);
      } else {
        i--;
      }
    }
    return rndNum.sort((a, b) => a - b);
  }
  function fillData() {
    const useNumbs: number[] = [];
    const arr = [
      Array(length).fill(null),
      Array(length).fill(null),
      Array(length).fill(null),
    ];
    arr.forEach((_, i) => {
      const indexes = getRandomIndex();
      arr[i].map((item, j) => {
        if (indexes.includes(j)) {
          const rndNum = generateUniqueNumbers(useNumbs, j * 10, 9 + j * 10);
          arr[i][j] = rndNum;
          useNumbs.push(rndNum);
        }
      });
    });
    return arr;
  }
  return (
    <div>
      <table>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className={cl.col}>
              {row.map((item, j) => (
                <th key={j} className={cl.row}>
                  {item}
                </th>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => setData(fillData())}>Generate new card</button>
    </div>
  );
};
