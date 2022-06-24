import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import useFetch from "./Controller/fetchEmails.js";
import EmailComponent from "./Components/EmailComponent";
import Header from "./Components/Header";
import { useState } from "react";

function App() {
  const [emails, setEmails] = useState(null);
  const [isPending, setIsPending] = useState(null);
  const [error, setError] = useState(null);
  const [checkBoxId, setCheckBoxId] = useState([]);

  useFetch({
    url: "http://localhost:8000/emails",
    emails: emails,
    setEmails: setEmails,
    isPending: isPending,
    setIsPending: setIsPending,
    error: error,
    setError: setError,
    checkBoxId: checkBoxId,
    setCheckBoxId: setCheckBoxId,
  });

  const handleChange = (e) => {
    const target = e.target;
    checkBoxId.map((checkbox) => {
      if (checkbox.id == target.id) {
        checkbox.isChecked = target.checked;
      }
    });
    console.log(checkBoxId);
  };

  const handleDelete = (e) => {
    console.log("COMENCING");
    setEmails(
      emails.filter((email) => {
        console.log(email.id + " = " + checkBoxId[email.id].isChecked);
        return !checkBoxId[email.id].isChecked;
      })
    );
    console.log(emails);
  };

  return (
    <div className="App">
      <header className="App-header p-3">
        <hr />
        <Header handleDelete={handleDelete} />
        <hr />
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        {emails && (
          <EmailComponent emails={emails} handleChange={handleChange} />
        )}
      </header>
    </div>
  );
}

export default App;
