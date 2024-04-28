/** @format */

import { useEffect, useReducer } from "react";

const initialState = {
  status: "",
  data: [],
  selectedCollection: {},
};

export default function useFetchData() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    async function getData() {
      try {
        dispatch({ type: "set_loading" });
        const response = await fetch("http://localhost:8000/collections");
        if (!response.ok) throw new Error("Cannot fetch the data");
        const data = await response.json();
        dispatch({ type: "store_data", payload: data });
      } catch (error) {
        console.error(error.message);
        dispatch({ type: "set_error", payload: `ERROR - ${error.message}` });
      }
    }
    getData();
  }, []);

  return [state, dispatch];
}

function reducer(state, action) {
  switch (action.type) {
    case "store_data":
      return { ...state, data: action.payload, status: "success" };
    case "set_loading":
      return { ...state, status: "loading" };
    case "set_error":
      return { ...state, status: action.payload };
    case "collection_selected":
      if (state.selectedCollection === action.payload)
        return { ...state, selectedCollection: {} };
      else return { ...state, selectedCollection: action.payload };
    default:
      throw new Error(
        "Unknown action detected in the reducer function of Application Component"
      );
  }
}
