import { createSelector } from "reselect";

const selectBars = (state) => state.bars;

export const selectBarList = createSelector([selectBars], (bars) => bars.bars);

