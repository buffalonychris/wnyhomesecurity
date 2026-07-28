import { render, screen, within } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { beforeEach, describe, expect, it } from "vitest";
import BetaSafety from "../BetaSafety";
import BetaShell from "../BetaShell";

const renderSafety = () =>
  render(
    <MemoryRouter initialEntries={["/beta/solutions/home-safety"]}>
      <Routes>
        <Route path="/beta" element={<BetaShell />}>
          <Route path="solutions/home-safety" element={<BetaSafety />} />
        </Route>
      </Routes>
    </MemoryRouter>,
  );

describe("BetaSafety", () => {
  beforeEach(() => window.localStorage.clear());

  it("renders the approved pillar under the shared beta shell", () => {
    renderSafety();

    expect(
      screen.getByRole("heading", { level: 1, name: "Home Safety" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("navigation", {
        name: "Replacement site navigation",
      }),
    ).toBeInTheDocument();
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Solutions" })).toHaveAttribute(
      "aria-current",
      "page",
    );
  });

  it("preserves the exact assessment destination and education link", () => {
    renderSafety();

    screen
      .getAllByRole("link", { name: "Request a Property Assessment" })
      .forEach((link) =>
        expect(link).toHaveAttribute(
          "href",
          "/discovery?vertical=home-security",
        ),
      );
    expect(
      screen.getByRole("link", { name: "Explore Common Questions" }),
    ).toHaveAttribute("href", "/faq");
  });

  it("covers approved risks, capabilities, scenarios, and dashboard framing", () => {
    renderSafety();

    expect(
      screen.getByRole("heading", { name: "Water awareness" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: "Temperature and freeze-risk awareness",
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: "A water concern while you are away",
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: "A signal, a notification, an automation, and a response are not the same thing.",
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText("Illustrative Home Safety Property Dashboard"),
    ).toBeInTheDocument();
  });

  it("links only to implemented beta pillar destinations", () => {
    renderSafety();
    const heading = screen.getByRole("heading", {
      name: "Home Safety can contribute to a wider property system.",
    });
    const section = heading.closest("section") as HTMLElement;

    expect(
      within(section).getByRole("link", { name: "Explore Home Security →" }),
    ).toHaveAttribute("href", "/beta/solutions/home-security");
    expect(
      within(section).getByRole("link", { name: "Explore Aging in Place →" }),
    ).toHaveAttribute("href", "/beta/solutions/aging-in-place");
    expect(
      within(section).queryByRole("link", { name: /Home Automation/ }),
    ).not.toBeInTheDocument();
    expect(
      within(section).queryByRole("link", { name: /Home Lighting/ }),
    ).not.toBeInTheDocument();
    expect(
      within(section).queryByRole("link", { name: /Property Management/ }),
    ).not.toBeInTheDocument();
  });

  it("stays solution-first and qualifies safety and shutoff claims", () => {
    const { container } = renderSafety();
    const text = container.textContent ?? "";

    expect(text).not.toMatch(/\b(Bronze|Silver|Gold|Buy Now)\b/);
    expect(text).not.toMatch(
      /prevents water damage|prevents frozen pipes|guarantees? detection|automatic shutoff works with every|professional monitoring/i,
    );
    expect(text).toMatch(/(?:does not|never) replace[s]? required smoke/i);
    expect(text).toMatch(/water shutoff requires validated/i);
    expect(text).toMatch(/not guaranteed prevention/i);
  });
});
