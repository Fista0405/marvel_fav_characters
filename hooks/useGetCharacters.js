import useSWR from "swr";
import { fetcher } from "utils/utils";
import { API_URL, GET_CHARACTERS } from "./constants";

function UseGetCharactersSWR() {
  const { data, error, isLoading } = useSWR(
    `${API_URL}/${GET_CHARACTERS}`,
    fetcher
  );

  return {
    data: data?.data.results,
    isLoading,
    isError: error,
  };
}

export default UseGetCharactersSWR;
