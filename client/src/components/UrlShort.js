import React, { useEffect, useState } from "react";
import ShortUrl from "./ShortUrl";
import { useHistory } from "react-router";

const UrlShort = (props) => {
  let history = useHistory();
  const [analytics, setAnalytics] = useState([]);
  const fetchdata = async () => {
    const response = await fetch(`http://localhost:5000/api/url/dashboard`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = await response.json();
    console.log(json);
    setAnalytics(json);
  };
  useEffect(() => {
    if (localStorage.getItem("token")) {
      fetchdata();
    } else {
      history.push("/login");
    }
    // eslint-disable-next-line
  }, []);

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
    <>
      <ShortUrl showAlert={props.showAlert} />
      <h1 style={myStyle1}>ANALYTICS</h1>
      <div className="row my-3">
        <div className="container mx-2" style={myStyle2}>
          {analytics.length === 0 && "No Data to display"}
        </div>
        {analytics.length > 0 && (<table class="table table-striped table-dark">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Short URL</th>
              <th scope="col">Original URL</th>
              <th scope="col">Number of Clicks</th>
            </tr>
          </thead>
          <tbody>
            {analytics.length > 0 &&
              analytics.map((ur, index) => {
                return (
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>http://localhost:5000/{ur.shortId}</td>
                    <td>{ur.redirectURL}</td>
                    <td>{ur.visitHistory.length}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>)}
      </div>
    </>
  );
};

export default UrlShort;
