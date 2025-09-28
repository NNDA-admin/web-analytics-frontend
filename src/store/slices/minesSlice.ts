import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type MineState = {
  list: Array<{ id: string; name: string }>;
  selectedId?: string;
};

const initialState: MineState = { list: [] };

const minesSlice = createSlice({
  name: "mines",
  initialState,
  reducers: {
    setMines(state, action: PayloadAction<MineState["list"]>) {
      state.list = action.payload;
    },
    selectMine(state, action: PayloadAction<string | undefined>) {
      state.selectedId = action.payload;
    },
  },
});

export const { setMines, selectMine } = minesSlice.actions;
export default minesSlice.reducer;
