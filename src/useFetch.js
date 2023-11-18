import { useState, useEffect } from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    // 函数每次重新渲染时都会运行(初始化，刷新，删除，每次useState变化等)
    // 第二参数，依赖数组，如果是一个空的，表明只在最开始加载时运行一次，其余时候不运行
    // []中可以之间听某种特别事件
    useEffect(() => {

      const abortCont = new AbortController();

        setTimeout(() => {
          fetch(url, { signal:abortCont.signal })
          .then(res => {
            if (!res.ok) { // error coming back from server
              throw Error('could not fetch the data for that resource');
            } 
            return res.json();
          })
          .then(data => {
            setIsPending(false);
            setData(data);
            setError(null);
          })
          .catch(err => {
            if (err.name === "AbortError") {
              console.log("fetch aborted");
            }else {
              // auto catches network / connection error
              setIsPending(false);
              setError(err.message);
            }
          })
        }, 0);

        return () => abortCont.abort();

      }, [url])

      return {error, isPending, data};
}

export default useFetch;