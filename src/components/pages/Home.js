// import requirements
import { React, useEffect } from "react";
import Header from "../imports/Header";
import { useHistory } from "react-router";

// home function
export default function Home() {
  // use history hook
  const history = useHistory();

  // instantiate role token
  let roleToken = "";

  // route function
  const route = () => {
    // get token and role token from local storage
    const token = localStorage.getItem("x-access-token");
    roleToken = localStorage.getItem("role-token");

    // return true if both present and false if not
    return token && roleToken ? true : false;
  };

  // use effect function
  // check state of route and role token
  // push user to respective page
  useEffect(() => {
    if (!route()) {
      history.push("/login");
    } else if (route() && roleToken === "Normal") {
      history.push("/normal");
    } else if (route() && roleToken === "Manager") {
      history.push("/manager");
    } else if (route() && roleToken === "Admin") {
      history.push("/admin");
    }
  });

  // return section to render
  return (
    <>
      <Header header="COOL TECH HOME PAGE" />
      <main>
        <div className="container">
          <h4>Welcome to Home Page</h4>
        </div>
      </main>
    </>
  );
}
