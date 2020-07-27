import { BarsActionTypes } from "./bars.types";

const key = "AIzaSyAOFN49fiIS6rljEdfIAQX0olqt6QPFH1I";

export const searchForBars = () => async (dispatch) => {
  const longitude = "-122.4787";
  const latitude = "48.7519";
  const radius = 2000;
  const request = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=${key}&location=${latitude},${longitude}&radius=${radius}&type=bar`;

  try {
    const response = await fetch(request);
    if (response.ok) {
      const data = await response.json();
      dispatch(addBars(data.results.slice(0, 5)));
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
