import React from "react";
import "./App.css";
import carfix from "./carfix.jpg";
import axios from "axios";

function App({history}) {
  const [number, setNumber] = React.useState(null);
  const [message, setMessage] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  function sendMessage() {
    setLoading(true)
    axios.post("http://localhost:4000/api/message", {number, message})
    .then(res => {
      console.log({res})
      history.push("/success");
    })
      .catch(err => {
        console.log(err)
        setLoading(false)
      })
  }

  return (
    <div
      className="App"
      style={{
        backgroundImage: `linear-gradient(0deg,rgba(20,100,20,0.5), rgba(9, 93, 225, 0.5)), url(${carfix})`
      }}
    >
      <h1 className="title">Got an Issue? Text Us!</h1>

      <div className="field">
        <label className="label">Callback phone number</label>
        <div className="field">
          <div className="control">
            <input
              className="input"
              type="number"
              onChange={event => setNumber(event.target.value)}
              placeholder="What's your number?"
            />
          </div>
        </div>
      </div>

      <div className="field">
        <label className="label">What's the problem?</label>
        <div className="control">
          <textarea
            className="textarea"
            onChange={event => setMessage(event.target.value)}
            placeholder="My problem is..."
          />
        </div>
      </div>
      <button
        disabled={loading || !message.trim() || !number}
        className={`${loading && "is-loading"} is-warning button`}
        onClick={sendMessage}
      >
        Button
      </button>
    </div>
  );
}

export default App;
