import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import Words from "../../types/words"

export interface CounterState {
  category: string
  page: number
  numLetters: number
  words: Words[] | null
  totalWords: number
  currentWord: number
}

const initialState: CounterState = {
  category: "",
  page: 0,
  numLetters: 3,
  words: null,
  totalWords: 0,
  currentWord: 0
}

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    chooseCategory: (state, action: PayloadAction<CounterState["category"]>) => {
      state.category = action.payload
    },
    setPage: (state, action: PayloadAction<CounterState["page"]>) => {
      state.page = action.payload
    },
    changeNumLetters: (state, action: PayloadAction<CounterState["numLetters"]>) => {
      state.numLetters = action.payload
      state.currentWord = 0
    },
    setWords: (state, action: PayloadAction<CounterState["words"]>) => {
      state.words = action.payload != null && action.payload.length > 0 ? action.payload : null
      state.totalWords = state.words != null ? state.words.length : 0
    },
    nextWord: (state) => {
      state.currentWord += 1
    },
  },
})

// Action creators are generated for each case reducer function
export const { chooseCategory, setPage, changeNumLetters, setWords, nextWord } = gameSlice.actions

export default gameSlice.reducer