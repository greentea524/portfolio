import React, { act } from "react";
import { createRoot } from "react-dom/client";
import { afterEach, beforeEach, expect, it } from "vitest";
import App from "./App.jsx";

let container;
let root;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  act(() => root.unmount());
  container.remove();
});

const render = () => {
  root = createRoot(container);
  act(() => root.render(<App />));
};

// Main renders the whole tree immediately and merely hides it behind the splash
// screen, so everything asserted below is present on the first paint — no
// timers to wait out.

it("mounts the full page without crashing", () => {
  render();

  expect(container.querySelector("header")).toBeTruthy();
  expect(container.textContent).toContain("Hi all, I'm David");
  expect(container.querySelectorAll("h1").length).toBeGreaterThan(0);
});

it("exposes the nav toggle as a collapsed disclosure button", () => {
  render();

  // Regression guard: this was a display:none checkbox, which is neither
  // focusable nor present in the accessibility tree.
  const toggle = container.querySelector(".menu-icon");
  expect(toggle.tagName).toBe("BUTTON");
  expect(toggle.getAttribute("aria-expanded")).toBe("false");
  expect(toggle.getAttribute("aria-controls")).toBe("main-menu");
  expect(container.querySelector("#main-menu")).toBeTruthy();
});

it("gives the theme toggle an accessible name", () => {
  render();

  const themeToggle = container.querySelector(".switch input");
  expect(themeToggle.getAttribute("aria-label")).toBeTruthy();
  expect(
    container.querySelector(".switch .emoji").getAttribute("aria-hidden"),
  ).toBe("true");
});

it("opens every social link safely", () => {
  render();

  const links = [...container.querySelectorAll(".social-media-div a")];
  expect(links.length).toBeGreaterThan(0);
  for (const link of links) {
    // rel is the one that matters: target=_blank without it hands the opened
    // page a window.opener reference back to this one.
    expect(link.getAttribute("rel")).toBe("noopener noreferrer");
    expect(link.getAttribute("target")).toBe("_blank");
    expect(link.getAttribute("aria-label")).toBeTruthy();
  }
});
