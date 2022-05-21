import { createSlice } from '@reduxjs/toolkit';

interface State {
  data: null | string;
}

const initialState: State = {
  data: null,
};

export const noneSlice = createSlice({
  name: 'none',
  initialState,
  reducers: {
    add: (state) => {
      state.data = 'random-data';
    },
  },
});

export const { add } = noneSlice.actions;

export default noneSlice.reducer;
