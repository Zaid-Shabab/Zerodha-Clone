import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "../landing_page/Footer";

describe("Footer Component", () => {
  test("renders footer logo", () => {
    render(<Footer />);

    const logo = screen.getByAltText("Logo");

    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("src", "media/images/logo.svg");
  });

  test("renders company section", () => {
    render(<Footer />);

    expect(screen.getByText("Company")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Products")).toBeInTheDocument();
    expect(screen.getByText("Pricing")).toBeInTheDocument();
    expect(screen.getByText("Careers")).toBeInTheDocument();
  });

  test("renders support section", () => {
    render(<Footer />);

    expect(screen.getByText("Support")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
    expect(screen.getByText("Support portal")).toBeInTheDocument();
    expect(screen.getByText("Downloads & resources")).toBeInTheDocument();
  });

  test("renders account section", () => {
    render(<Footer />);

    expect(screen.getByText("Account")).toBeInTheDocument();
    expect(screen.getByText("Open an account")).toBeInTheDocument();
    expect(screen.getByText("Fund transfer")).toBeInTheDocument();
    expect(screen.getByText("60 day challenge")).toBeInTheDocument();
  });

  test("renders footer links", () => {
    render(<Footer />);

    expect(screen.getByText("NSE")).toBeInTheDocument();
    expect(screen.getByText("BSE")).toBeInTheDocument();
    expect(screen.getByText("MCX")).toBeInTheDocument();
    expect(screen.getByText("Terms & Conditions")).toBeInTheDocument();
    expect(screen.getByText("Privacy Policy")).toBeInTheDocument();
    expect(screen.getByText("Disclosure")).toBeInTheDocument();
  });

  test("renders copyright information", () => {
    render(<Footer />);

    expect(
      screen.getByText(
        "© 2010 - 2024, Not Zerodha Broking Ltd. All rights reserved."
      )
    ).toBeInTheDocument();
  });
});