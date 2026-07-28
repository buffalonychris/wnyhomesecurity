import { render, screen, within } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { beforeEach, describe, expect, it } from "vitest";
import BetaSecurity from "../BetaSecurity";
import BetaShell from "../BetaShell";

const renderPage = () =>
  render(
    <MemoryRouter initialEntries={["/beta/solutions/home-security"]}>
      <Routes>
        <Route path="/beta" element={<BetaShell />}>
          <Route path="solutions/home-security" element={<BetaSecurity />} />
        </Route>
      </Routes>
    </MemoryRouter>,
  );

describe("BetaSecurity", () => {
  beforeEach(() => window.localStorage.clear());

  it("renders the dedicated pillar under the shared shell with active Solutions navigation", () => {
    renderPage();
    expect(
      screen.getByRole("heading", { level: 1, name: "Home Security" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("main")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Solutions/i })).toHaveAttribute(
      "aria-current",
      "page",
    );
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });

  it("uses the exact assessment destination and approved solution-first sections", () => {
    renderPage();
    screen
      .getAllByRole("link", { name: "Request a Property Assessment" })
      .forEach((link) =>
        expect(link).toHaveAttribute(
          "href",
          "/discovery?vertical=home-security",
        ),
      );
    [
      "Common property concerns",
      "Supported capability groups",
      "Coordinated security scenarios",
      "Ownership and qualified local control",
      "Connections to other pillars",
    ].forEach((text) => expect(screen.getByText(text)).toBeInTheDocument());
  });

  it("keeps the dashboard illustrative and secondary", () => {
    renderPage();
    const dashboard = screen.getByRole("complementary", {
      name: "Illustrative Home Security Property Dashboard",
    });
    expect(
      within(dashboard).getByText("Illustrative security view"),
    ).toBeInTheDocument();
    expect(dashboard).toHaveTextContent(
      "Actual status and controls depend on the approved design",
    );
  });

  it("keeps unimplemented cross-pillar destinations non-clickable", () => {
    renderPage();
    expect(
      screen.queryByRole("link", { name: /Explore Home Lighting/i }),
    ).not.toBeInTheDocument();
    expect(
      screen.getAllByText("Dedicated beta destination in development"),
    ).toHaveLength(5);
  });

  it("does not introduce package-first or unsupported claims language", () => {
    const { container } = renderPage();
    expect(container.textContent).not.toMatch(
      /\b(Bronze|Silver|Gold|tier|bundle)\b|package comparison|fixed package/i,
    );
    expect(container.textContent).not.toMatch(
      /police response|guaranteed prevention|guaranteed detection|universal compatibility/i,
    );
  });
});
