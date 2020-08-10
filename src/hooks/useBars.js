import useSWR from "swr";

import {
  GOOGLE_API_BASE_URL,
  PLACE_API,
  NEARBY_SEARCH_ENDPOINT,
  CONTENT_TYPE,
  GOOGLE_API_KEY,
} from "../../.env.config";

const longitude = "-122.4787";
const latitude = "48.7519";
const radius = 2000;
const request =
  GOOGLE_API_BASE_URL +
  PLACE_API +
  NEARBY_SEARCH_ENDPOINT +
  CONTENT_TYPE +
  "?" +
  "key=" +
  GOOGLE_API_KEY +
  "&" +
  "location=" +
  latitude +
  "," +
  longitude +
  "&" +
  "radius=" +
  radius +
  "&" +
  "type=bar";

const useBars = () => {
  const fetcher = (url) =>
    fetch(url)
      .then((r) => r.json())
      .then((r) => r.results.slice(0, 5));
  const { data, error } = useSWR(request, fetcher);

  return data;
};

export default useBars;
