import useSWR from "swr";
import { fetcher } from "lib/utils";
import { API_URL, GET_CHARACTERS } from "lib/constants";

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
