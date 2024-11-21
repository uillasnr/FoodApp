import React, { useContext } from "react";
import RoutesAuth from "./routesAuth";
import Routes from "./routes";
import { AuthContext } from "../Context/AuthContext";

export default function Index() {
  const { user } = useContext(AuthContext);

  return user.user ? <RoutesAuth /> : <Routes />;
}
