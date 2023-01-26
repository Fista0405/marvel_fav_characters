import useSWR from "swr";
import { fetcher } from "lib/utils";
import { API_URL, GET_CHARACTERS } from "lib/constants";

function GetFilteredCharactersSWR(query) {
  const { data, error, isLoading } = useSWR(
    `${API_URL}/${GET_CHARACTERS}`,
    (url) => fetcher(url, query)
  );

  console.log(data);

  return {
    data: data?.data.results,
    isLoading,
    isError: error,
  };
}

export default GetFilteredCharactersSWR;
