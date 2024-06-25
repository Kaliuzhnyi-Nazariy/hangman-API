import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const api = axios.create({
  baseURL: "https://www.wordgamedb.com/api/v1",
});

interface Categories {
  [category: number]: string;
}

interface RandomWord {
  word: object;
}

interface WordByTopic {
  word: string;
}

export const receiveCategories = async (): Promise<Categories[]> => {
  try {
    const res = await api.get<Categories[]>("/categories");
    return res.data;
  } catch (error) {
    console.log("Error in utils/receiveCategories: ", error);
    throw error;
  }
};

export const getRandomWord = createAsyncThunk<
  RandomWord,
  void,
  { rejectValue: string }
>("game/randomWord", async (): Promise<RandomWord> => {
  try {
    const res = await api.get<RandomWord>("words/random");
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log("Error in utils/receiveCategories: ", error);
    return <RandomWord>{};
  }
});

// export const getWordByTopic2 = async (topic: string): Promise<RandomWord> => {
//   try {
//     const res = await api.get<RandomWord>(`words?category=${topic}`);
//     // console.log(res.data);
//     return res.data;
//   } catch (error) {
//     console.log("error in utils/getWordByTopic: ", error);
//     return <RandomWord>{};
//   }
// };

export const getWordByTopic = createAsyncThunk(
  "game/byCategory",
  async (topic: string): Promise<WordByTopic> => {
    try {
      const res = await api.get<WordByTopic>(`words?category=${topic}`);
      return res.data[Math.floor(Math.random() * res.data.length)];
    } catch (error) {
      console.log("error in utils/getWordByTopic: ", error);
      return <WordByTopic>{};
    }
  }
);
