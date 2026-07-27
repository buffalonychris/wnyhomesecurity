import { fireEvent, render, screen, within } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { beforeEach, describe, expect, it, vi } from "vitest";
import BetaHome from "../BetaHome";
import BetaShell from "../BetaShell";

const renderShell = () =>
  render(
    <MemoryRouter initialEntries={["/beta"]}>
      <Routes>
        <Route path="/beta" element={<BetaShell />}>
          <Route index element={<BetaHome />} />
        </Route>
      </Routes>
    </MemoryRouter>,
  );

describe("BetaShell navigation", () => {
  beforeEach(() => {
    window.localStorage.clear();
    vi.spyOn(window, "requestAnimationFrame").mockImplementation((callback) => {
      callback(0);
      return 1;
    });
  });

  it("opens the desktop Solutions menu in the approved pillar order and returns focus on Escape", () => {
    renderShell();
    const trigger = screen.getByRole("button", { name: /Solutions/i });
    fireEvent.click(trigger);
    const menu = document.querySelector(".beta-solutions-menu") as HTMLElement;
    expect(
      within(menu)
        .getAllByText(
          /Home Security|Aging in Place|Home Safety|Home Automation|Home Lighting|Property Management/,
        )
        .map((node) => node.textContent),
    ).toEqual([
      "Home Security",
      "Aging in Place",
      "Home Safety",
      "Home Automation",
      "Home Lighting",
      "Property Management",
    ]);
    expect(
      within(menu)
        .getByText("Property Management")
        .closest('[aria-disabled="true"]'),
    ).toBeInTheDocument();
    fireEvent.keyDown(trigger.closest("nav") as HTMLElement, { key: "Escape" });
    expect(menu).not.toBeVisible();
    expect(trigger).toHaveFocus();
  });

  it("provides the exact assessment destination and safe anchor destinations", () => {
    renderShell();
    screen
      .getAllByRole("link", { name: "Request a Property Assessment" })
      .forEach((link) => {
        expect(link).toHaveAttribute(
          "href",
          "/discovery?vertical=home-security",
        );
      });
    expect(
      screen.getAllByRole("link", { name: "Why W. N. Y." })[0],
    ).toHaveAttribute("href", "/beta#why-wny");
    expect(
      screen.getAllByRole("link", { name: "How It Works" })[0],
    ).toHaveAttribute("href", "/beta#how-it-works");
    expect(screen.getByRole("link", { name: "Learn" })).toHaveAttribute(
      "href",
      "/beta#education",
    );
  });

  it("opens an accessible mobile dialog, prevents background interaction, closes on Escape, and returns focus", () => {
    renderShell();
    const trigger = screen.getByRole("button", { name: "Menu" });
    fireEvent.click(trigger);
    const dialog = screen.getByRole("dialog", {
      name: "Replacement site navigation",
    });
    expect(document.body.style.overflow).toBe("hidden");
    expect(document.getElementById("beta-main")).toHaveAttribute("inert");
    expect(
      screen.getByRole("button", { name: "Close navigation" }),
    ).toHaveFocus();
    fireEvent.keyDown(dialog, { key: "Escape" });
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    expect(document.body.style.overflow).toBe("");
    expect(trigger).toHaveFocus();
  });

  it("persists light and dark theme selection at shell level", () => {
    const { container } = renderShell();
    const page = container.querySelector(".beta-site");
    const toggle = screen.getAllByRole("button", {
      name: "Switch to dark theme",
    })[0];
    expect(page).toHaveAttribute("data-theme", "light");
    fireEvent.click(toggle);
    expect(page).toHaveAttribute("data-theme", "dark");
    expect(window.localStorage.getItem("wnyhs-beta-theme")).toBe("dark");
  });

  it("does not introduce package-first navigation terms", () => {
    const { container } = renderShell();
    expect(container.textContent).not.toMatch(/\b(Bronze|Silver|Gold)\b/);
  });
});
