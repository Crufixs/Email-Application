import { useState, useEffect } from "react";

//custom hooks need the word use: ie useFetch
const useFetch = (url) => {
  const [emails, setEmails] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    const abortCont = new AbortController();

    //initialize values using JSON file

    fetch(url, { signal: abortCont.signal })
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch the donata data for that resource");
        }
        return res.json();
      })
      .then((emails) => {
        console.log("FETCHING EMAILS");
        console.log(emails);
        setEmails(emails);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("FETCH ABORTED");
        } else {
          setIsPending(false);
          setError(err.message);
        }
      });
    return () => abortCont.abort();
  }, []);
  console.log("RETURNING EMAILS");
  console.log(emails);
  return { emails, isPending, error };
};

export default useFetch;
