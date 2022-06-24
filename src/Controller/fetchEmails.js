import { useState, useEffect } from "react";

const useFetch = ({
  url,
  emails,
  setEmails,
  error,
  setError,
  isPending,
  setIsPending,
  checkBoxId,
  setCheckBoxId,
}) => {
  useEffect(() => {
    const abortCont = new AbortController();
    fetch(url, { signal: abortCont.signal })
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch the data for that resource");
        }
        return res.json();
      })
      .then((emails) => {
        setEmails(emails);
        console.log(emails);
        console.log("RAWR BEFORE");
        emails.map((email) => {
          console.log(email);
          setCheckBoxId((checkBoxId) => [
            ...checkBoxId,
            { id: email.id, isChecked: false },
          ]);
          console.log(checkBoxId);
        });
        console.log("RAWR AFTER");
        console.log(checkBoxId);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("FETCH ABORTED");
        } else {
          setIsPending(false);
          console.log("ERROR: " + err.message);
          setError(err.message);
        }
      });
    return () => abortCont.abort();
  }, []);
  return { emails, isPending, error, checkBoxId };
};

export default useFetch;
