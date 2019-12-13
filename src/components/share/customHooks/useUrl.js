import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

function useUrl(url) {
  const history = useHistory();
  useEffect(() => {
    history.push(`/${url}`);
  }, [url]);
}

export default useUrl;
