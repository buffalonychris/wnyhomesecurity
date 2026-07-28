import { render, screen, within } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { beforeEach, describe, expect, it } from "vitest";
import BetaShell from "../BetaShell";
import BetaSolutions from "../BetaSolutions";

const renderSolutions = () =>
  render(
    <MemoryRouter initialEntries={["/beta/solutions"]}>
      <Routes>
        <Route path="/beta" element={<BetaShell />}>
          <Route path="solutions" element={<BetaSolutions />} />
        </Route>
      </Routes>
    </MemoryRouter>,
  );

describe("BetaSolutions", () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it("renders the approved page purpose under the shared beta shell", () => {
    renderSolutions();

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "Six ways to improve one property.",
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("navigation", {
        name: "Replacement site navigation",
      }),
    ).toBeInTheDocument();
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });

  it("presents the six pillars in the exact approved order", () => {
    renderSolutions();
    const section = document.getElementById("solution-pillars") as HTMLElement;

    expect(
      within(section)
        .getAllByRole("heading", { level: 3 })
        .map((heading) => heading.textContent),
    ).toEqual([
      "Home Security",
      "Aging in Place",
      "Home Safety",
      "Home Automation",
      "Home Lighting",
      "Property Management",
    ]);
  });

  it("uses safe pillar destinations and keeps Property Management non-clickable", () => {
    renderSolutions();
    const section = document.getElementById("solution-pillars") as HTMLElement;

    expect(
      within(section).getByRole("link", { name: /Explore Home Security/ }),
    ).toHaveAttribute("href", "/beta/solutions/home-security");
    expect(
      within(section).getByRole("link", { name: /Explore Aging in Place/ }),
    ).toHaveAttribute("href", "/categories/aging-in-place");
    expect(
      within(section).getByRole("link", { name: /Explore Home Safety/ }),
    ).toHaveAttribute("href", "/categories/home-safety");
    expect(
      within(section).getByRole("link", { name: /Explore Home Automation/ }),
    ).toHaveAttribute("href", "/categories/home-automation");
    expect(
      within(section).getByRole("link", { name: /Explore Home Lighting/ }),
    ).toHaveAttribute("href", "/categories/home-lighting");
    expect(
      within(section).queryByRole("link", { name: /Property Management/ }),
    ).not.toBeInTheDocument();
    expect(
      within(section).getByLabelText(
        "Property Management, destination in development",
      ),
    ).toBeInTheDocument();
  });

  it("preserves the assessment and education destinations", () => {
    renderSolutions();

    screen
      .getAllByRole("link", { name: "Request a Property Assessment" })
      .forEach((link) => {
        expect(link).toHaveAttribute(
          "href",
          "/discovery?vertical=home-security",
        );
      });
    expect(
      screen.getByRole("link", { name: "Explore Common Questions" }),
    ).toHaveAttribute("href", "/faq");
  });

  it("marks Solutions as current and keeps dashboard framing illustrative", () => {
    renderSolutions();

    expect(screen.getByRole("button", { name: "Solutions" })).toHaveAttribute(
      "aria-current",
      "page",
    );
    expect(
      screen.getByLabelText("Illustrative Property Dashboard"),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "The dashboard is the interface—not the whole solution.",
      ),
    ).toBeInTheDocument();
  });

  it("does not introduce package-first, hardware-catalog, or unsupported claims language", () => {
    const { container } = renderSolutions();
    const text = container.textContent ?? "";

    expect(text).not.toMatch(/\b(Bronze|Silver|Gold|Buy Now)\b/);
    expect(text).not.toMatch(
      /guaranteed protection|prevents crime|professional monitoring|emergency dispatch|medical monitoring/i,
    );
  });
});
