import React from "react";

function Success() {
  return (
    <div
      style={{
        display: "flex",
        margin: "2em 0",
        flexDirection: "column",
        justifyContent: "center"
      }}
    >
      <section className="hero is-medium is-primary is-bold">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Success!</h1>
            <h2 className="subtitle">Expect a reply shortly.</h2>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Success;
