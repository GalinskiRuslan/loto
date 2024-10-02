"use client";
import {
  generateRandomNumber,
  generateUniqueNumbers,
} from "@/helpers/generators";
import cl from "./style.module.css";
import { useEffect, useState } from "react";

const length = 9;

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

const fillData = () => {
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
};

export const CardTable = () => {
  const [data, setData] = useState<number[][] | null>(null);

  useEffect(() => {
    setData(fillData());
  }, []);
  if (!data) {
    return <div>Loading...</div>; // Отображаем что-то, пока данные генерируются
  }
  return (
    <div className={cl.container}>
      <table>
        <tbody>
          {data?.map((row, i) => (
            <tr key={i} className={cl.col}>
              {row.map((item, j) => (
                <th key={j} className={cl.row}>
                  <button className={cl.tableBtn}>{item}</button>
                </th>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <button className={cl.generateBtn} onClick={() => setData(fillData())}>
        Generate new card
      </button>
    </div>
  );
};
