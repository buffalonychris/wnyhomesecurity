import { render, screen, within } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { beforeEach, describe, expect, it } from "vitest";
import BetaLighting from "../BetaLighting";
import BetaShell from "../BetaShell";

const renderLighting = () =>
  render(
    <MemoryRouter initialEntries={["/beta/solutions/home-lighting"]}>
      <Routes>
        <Route path="/beta" element={<BetaShell />}>
          <Route path="solutions/home-lighting" element={<BetaLighting />} />
        </Route>
      </Routes>
    </MemoryRouter>,
  );

describe("BetaLighting", () => {
  beforeEach(() => window.localStorage.clear());

  it("renders the approved pillar under the shared beta shell", () => {
    renderLighting();
    expect(
      screen.getByRole("heading", { level: 1, name: "Home Lighting" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("main")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Solutions" })).toHaveAttribute(
      "aria-current",
      "page",
    );
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });

  it("preserves the exact assessment destination and education link", () => {
    renderLighting();
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

  it("covers system design, scenarios, manual control, and illustrative dashboard framing", () => {
    renderLighting();
    expect(
      screen.getByRole("heading", {
        name: "More useful, consistent lighting with simpler everyday control.",
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Entry and pathway lighting" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Evening arrival" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: "Useful lighting should remain understandable when someone reaches for a switch.",
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText("Illustrative Home Lighting Property Dashboard"),
    ).toBeInTheDocument();
  });

  it("treats permanent exterior scenes as labeled, qualified examples", () => {
    renderLighting();
    const section = screen
      .getByRole("heading", {
        name: "Everyday architectural white light—with selected scenes when wanted.",
      })
      .closest("section") as HTMLElement;
    expect(
      within(section).getByText("Architectural White"),
    ).toBeInTheDocument();
    expect(
      within(section).getByText("Buffalo Football Scene"),
    ).toBeInTheDocument();
    expect(
      within(section).getAllByText(/no official affiliation/i),
    ).toHaveLength(2);
    expect(section).toHaveTextContent(
      /Vendor, roofline, mounting, exterior power, weather, controller, support/i,
    );
  });

  it("links only to implemented beta pillar destinations", () => {
    renderLighting();
    const section = screen
      .getByRole("heading", {
        name: "Lighting can support a wider property experience.",
      })
      .closest("section") as HTMLElement;
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
      within(section).getByRole("link", { name: "Explore Home Automation →" }),
    ).toHaveAttribute("href", "/beta/solutions/home-automation");
    expect(
      within(section).queryByRole("link", { name: /Property Management/ }),
    ).not.toBeInTheDocument();
  });

  it("stays solution-first and qualifies lighting, electrical, compatibility, and local-control claims", () => {
    const { container } = renderLighting();
    const text = container.textContent ?? "";
    expect(text).not.toMatch(
      /\b(Bronze|Silver|Gold) package\b|\b(Buy Now|tier|bundle)\b|fixed package/i,
    );
    expect(text).not.toMatch(
      /prevents crime|prevents falls|guaranteed energy savings|every circuit is compatible|licensed electrician|official partner/i,
    );
    expect(text).toMatch(
      /Circuits, wiring, loads, locations, controls, fixtures, and integrations require compatibility review/i,
    );
    expect(text).toMatch(/manual control/i);
    expect(text).toMatch(/powered by Home Assistant/i);
    expect(text).toMatch(/does not require a monthly fee from/i);
  });
});
