import { useCallback, useState } from "react";

const useToggle = (initialState = false) => {
  const [state, setState] = useState(initialState);

  const toggler = useCallback(() => setState((state) => !state), []);

  return [state, toggler];
};

export default useToggle;
