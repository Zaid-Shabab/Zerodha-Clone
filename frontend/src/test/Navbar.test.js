import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../landing_page/Navbar";

describe("Navbar Component", () => {

  test("renders navbar logo", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    const logo = screen.getByAltText("Logo");

    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("src", "media/images/logo.svg");
  });

  test("renders all navigation links", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    expect(screen.getByText("Signup")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Product")).toBeInTheDocument();
    expect(screen.getByText("Pricing")).toBeInTheDocument();
    expect(screen.getByText("Support")).toBeInTheDocument();
  });

  test("navigation links have correct routes", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    expect(screen.getByText("Signup")).toHaveAttribute("href", "/signup");
    expect(screen.getByText("About")).toHaveAttribute("href", "/about");
    expect(screen.getByText("Product")).toHaveAttribute("href", "/product");
    expect(screen.getByText("Pricing")).toHaveAttribute("href", "/pricing");
    expect(screen.getByText("Support")).toHaveAttribute("href", "/support");
  });

  test("renders mobile menu button", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    const menuButton = screen.getByRole("button", {
      name: "Toggle navigation",
    });

    expect(menuButton).toBeInTheDocument();
  });

});