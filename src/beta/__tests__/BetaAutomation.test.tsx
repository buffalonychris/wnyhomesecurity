import { render, screen, within } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { beforeEach, describe, expect, it } from "vitest";
import BetaAutomation from "../BetaAutomation";
import BetaShell from "../BetaShell";

const renderAutomation = () =>
  render(
    <MemoryRouter initialEntries={["/beta/solutions/home-automation"]}>
      <Routes>
        <Route path="/beta" element={<BetaShell />}>
          <Route
            path="solutions/home-automation"
            element={<BetaAutomation />}
          />
        </Route>
      </Routes>
    </MemoryRouter>,
  );

describe("BetaAutomation", () => {
  beforeEach(() => window.localStorage.clear());

  it("renders the approved pillar under the shared beta shell", () => {
    renderAutomation();

    expect(
      screen.getByRole("heading", { level: 1, name: "Home Automation" }),
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
    renderAutomation();

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

  it("covers coordination, practical scenarios, manual control, and illustrative dashboard framing", () => {
    renderAutomation();

    expect(
      screen.getByRole("heading", {
        name: "Remote control is useful. Designed coordination goes further.",
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Daily routines" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Leaving the property" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: "Understandable automation should never hide how to take control.",
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText("Illustrative Home Automation Property Dashboard"),
    ).toBeInTheDocument();
  });

  it("links only to implemented beta pillar destinations", () => {
    renderAutomation();
    const heading = screen.getByRole("heading", {
      name: "Automation can coordinate supported outcomes across the property.",
    });
    const section = heading.closest("section") as HTMLElement;

    expect(
      within(section).getByRole("link", { name: "Explore Home Security →" }),
    ).toHaveAttribute("href", "/beta/solutions/home-security");
    expect(
      within(section).getByRole("link", { name: "Explore Aging in Place →" }),
    ).toHaveAttribute("href", "/beta/solutions/aging-in-place");
    expect(
      within(section).getByRole("link", { name: "Explore Home Safety →" }),
    ).toHaveAttribute("href", "/beta/solutions/home-safety");
    expect(
      within(section).getByRole("link", { name: "Explore Home Lighting →" }),
    ).toHaveAttribute("href", "/beta/solutions/home-lighting");
    expect(
      within(section).queryByRole("link", { name: /Property Management/ }),
    ).not.toBeInTheDocument();
  });

  it("stays solution-first and qualifies compatibility, local control, AI, and fallback claims", () => {
    const { container } = renderAutomation();
    const text = container.textContent ?? "";

    expect(text).not.toMatch(
      /\b(Bronze|Silver|Gold|Buy Now|tier|bundle)\b|fixed package/i,
    );
    expect(text).not.toMatch(
      /every device can be unified|every brand works locally|every automation works without internet|guaranteed energy savings|guaranteed HVAC performance|thinks for itself|artificial intelligence/i,
    );
    expect(text).toMatch(/supported integrations and reviewed devices only/i);
    expect(text).toMatch(/manual control/i);
    expect(text).toMatch(/fallback/i);
    expect(text).toMatch(/powered by Home Assistant/i);
    expect(text).toMatch(/does not require a monthly fee from/i);
  });
});
