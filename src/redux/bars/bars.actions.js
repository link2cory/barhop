import { PLACES_BASE_URL, GOOGLE_API_KEY } from "../../../.env.config";
import { BarsActionTypes } from "./bars.types";

export const searchForBars = () => async (dispatch) => {
  const longitude = "-122.4787";
  const latitude = "48.7519";
  const radius = 2000;
  const request = `${PLACES_BASE_URL}nearbysearch/json?key=${GOOGLE_API_KEY}&location=${latitude},${longitude}&radius=${radius}&type=bar`;

  try {
    const response = await fetch(request);
    if (response.ok) {
      const data = await response.json();
      const bars = data.results.slice(0, 5);
      dispatch(addBars(bars));
    } else {
      barsFailed(new Error(`Error ${response.status}: ${response.statusText}`));
    }
  } catch (error) {
    dispatch(barsFailed(error));
  }
};

export const barsFailed = (errMess) => ({
  type: BarsActionTypes.BARS_FAILED,
  payload: errMess,
});

export const addBars = (bars) => ({
  type: BarsActionTypes.ADD_BARS,
  payload: bars,
});
