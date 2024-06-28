import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const api = axios.create({
  baseURL: "https://www.wordgamedb.com/api/v1",
});

export type Categories = string[];

export interface RandomWord {
  word: string;
  hint: string;
  category: string;
}

interface WordByTopic {
  word: string;
  hint: string;
  category: string;
}

export const receiveCategories = createAsyncThunk<
  Categories,
  void,
  { rejectValue: string }
>("categories/receiveCategories", async (): Promise<Categories> => {
  try {
    const res = await api.get<Categories>("/categories");
    return res.data;
  } catch (error) {
    console.log("Error in utils/receiveCategories: ", error);
    throw error;
  }
});

export const getRandomWord = createAsyncThunk<
  RandomWord,
  void,
  { rejectValue: string }
>("game/randomWord", async (): Promise<RandomWord> => {
  try {
    const res = await api.get<RandomWord>("words/random");
    return res.data;
  } catch (error) {
    console.log("Error in utils/receiveCategories: ", error);
    return <RandomWord>{};
  }
});

export const getWordByTopic = createAsyncThunk<
  WordByTopic,
  string,
  { rejectValue: string }
>("game/byCategory", async (topic: string): Promise<WordByTopic> => {
  try {
    const res = await api.get<WordByTopic[]>(`words?category=${topic}`);
    const randomData = Math.floor(Math.random() * res.data.length);
    return res.data[randomData];
  } catch (error) {
    console.log("error in utils/getWordByTopic: ", error);
    return <WordByTopic>{};
  }
});
