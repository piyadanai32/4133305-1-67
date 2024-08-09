"use client";

import { FC, useEffect, useState } from "react";

interface Props {
  intiHook: number;
}

const Hook: FC<Props> = ({ intiHook }) => {
  const [count, setCount] = useState<number>(intiHook);
  const [data, setData] = useState();

  useEffect(() => {
    setCount(intiHook);
    const url = "https://dataapi.moc.go.th/products?keyword=มะพร้าว";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, [count]);

  const inc = (num: number): number => {
    return num + 1;
  };

  const dec = (num: number): number => {
    return num - 1;
  };

  return (
    <>
      <p>Hook</p>

      <div>{count}</div>
      <button onClick={() => setCount(inc(count))}>Increase</button>
      <button onClick={() => setCount(dec(count))}>Decrease</button>
    </>
  );
};

Hook.defaultProps = {
  intiHook: 0,
};

export default Hook;
