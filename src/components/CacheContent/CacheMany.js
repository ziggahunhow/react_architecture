import React, { useState } from "react";
import useSWR from "swr";
import PropTypes from "prop-types";

function LoadMore() {
  const ids = Array.from(Array(10).keys());
  const fetcher = () => {
    return Promise.all(
      ids.map(async id => {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/todos/${id}`
        );
        console.log("res", res);
        return res.json();
      })
    );
  };
  const { data, error } = useSWR("/todo/many", fetcher);
  return <>{data && data.map(datum => <p key={datum.id}>{datum.title}</p>)}</>;
}

function CacheMany(props) {
  const [isloadMore, setIsLoadMore] = useState(false);
  const fetcher = () =>
    fetch("https://jsonplaceholder.typicode.com/todos/15")
      .then(response => response.json())
      .then(json => {
        return [json];
      });
  const { data, error } = useSWR("/todo/many", fetcher);
  return (
    <div style={{ minHeight: "400px" }}>
      <p>{(data && data.length > 0 && data[0].title) || "loading..."}</p>
      <button onClick={() => setIsLoadMore(i => !i)}>Click to load more</button>
      {isloadMore && <LoadMore />}
    </div>
  );
}

CacheMany.propTypes = {};

export default CacheMany;
