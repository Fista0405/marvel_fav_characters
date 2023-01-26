import useSWR from "swr";
import { fetcher } from "lib/utils";
import { API_URL, GET_CHARACTERS } from "lib/constants";

function UseGetCharacterSWR(id) {
  const { data, error, isLoading } = useSWR(
    `${API_URL}/${GET_CHARACTERS}/${id}`,
    fetcher
  );

  return {
    data: data?.data.results[0],
    isLoading,
    isError: error,
  };
}

export default UseGetCharacterSWR;
