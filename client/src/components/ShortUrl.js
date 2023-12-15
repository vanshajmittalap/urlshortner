import React, { useState } from "react";

const ShortUrl = () => {
  const [orgurl, setOrgurl] = useState();
  const [shorturl, setShorturl] = useState();
  const handleClick = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:5000/api/url/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ url: orgurl }),
    });
    const shortId = await response.json();
    setShorturl(`http://localhost:5000/${shortId.id}`);
  };
  const onChange = (e) => {
    setOrgurl(e.target.value);
  };
  let myStyle1 = {
    color: "#000066",
    fontFamily: "fantasy",
    display: "flex",
    justifyContent: "center",
  };
  let myStyle2 = {
    color: "black",
    fontFamily: "cursive",
  };
  return (
    <div className="container my-3">
      <h1 style={myStyle1}>Generate Short URL</h1>
      <form className="my-3">
        <div className="mb-3">
          <label htmlFor="title" className="form-label" style={myStyle2}>
            Give Original URL
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            style={{
              backgroundColor: "rgb(36 74 104)",
              color: "#fd7e14",
              fontFamily: "cursive",
            }}
            name="title"
            aria-describedby="emailHelp"
            value={orgurl}
            onChange={onChange}
            required
          />
        </div>
        {shorturl && (
          <div className="mb-3">
            <label
              htmlFor="description"
              className="form-label"
              style={myStyle2}
            >
              Your Short URL
            </label>
            <div style={{ color: "#fd7e14", fontFamily: "cursive" }}>
              <a href={shorturl} target="_blank" rel="noreferrer">
                {shorturl}
              </a>
            </div>
          </div>
        )}
        <button
          type="submit"
          className="btn btn-primary"
          style={{ backgroundColor: "#0000cc" }}
          onClick={handleClick}
        >
          Generate
        </button>
      </form>
    </div>
  );
};

export default ShortUrl;
