import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <App />
    <ReactQueryDevtools />
  </QueryClientProvider>,
  document.getElementById("root")
);

const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle(
    "nav-menu_visible"
  ); /* toggle lo que va a hacer es eliminar la clase si esta, y crearla si no lo esta */
});