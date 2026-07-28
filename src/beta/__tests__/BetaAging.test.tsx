import { render, screen, within } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { beforeEach, describe, expect, it } from "vitest";
import BetaAging from "../BetaAging";
import BetaShell from "../BetaShell";

const renderAging = () =>
  render(
    <MemoryRouter initialEntries={["/beta/solutions/aging-in-place"]}>
      <Routes>
        <Route path="/beta" element={<BetaShell />}>
          <Route path="solutions/aging-in-place" element={<BetaAging />} />
        </Route>
      </Routes>
    </MemoryRouter>,
  );

describe("BetaAging", () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it("renders the approved pillar under the shared beta shell", () => {
    renderAging();

    expect(
      screen.getByRole("heading", { level: 1, name: "Aging in Place" }),
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
    renderAging();

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

  it("covers approved capabilities, scenarios, dignity, and illustrative dashboard framing", () => {
    renderAging();

    expect(
      screen.getByRole("heading", { name: "Simpler everyday control" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Night-path lighting" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Respectful family awareness" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: "Awareness should respect the person who lives there.",
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText("Illustrative Aging in Place Property Dashboard"),
    ).toBeInTheDocument();
  });

  it("links only to implemented beta pillar destinations", () => {
    renderAging();
    const heading = screen.getByRole("heading", {
      name: "Everyday support can connect with a wider property system.",
    });
    const section = heading.closest("section") as HTMLElement;

    expect(
      within(section).getByRole("link", { name: "Explore Home Security →" }),
    ).toHaveAttribute("href", "/beta/solutions/home-security");
    expect(
      within(section).getByRole("link", { name: "Explore Home Safety →" }),
    ).toHaveAttribute("href", "/beta/solutions/home-safety");
    expect(
      within(section).queryByRole("link", { name: /Home Lighting/ }),
    ).not.toBeInTheDocument();
    expect(
      within(section).getByRole("link", { name: "Explore Home Automation →" }),
    ).toHaveAttribute("href", "/beta/solutions/home-automation");
    expect(
      within(section).queryByRole("link", { name: /Property Management/ }),
    ).not.toBeInTheDocument();
  });

  it("stays solution-first and avoids unsupported or clinical claims", () => {
    const { container } = renderAging();
    const text = container.textContent ?? "";

    expect(text).not.toMatch(/\b(Bronze|Silver|Gold|Buy Now)\b/);
    expect(text).not.toMatch(
      /fall detection|guaranteed safety|professional monitoring|automatic dispatch|medical response|caregiver replacement/i,
    );
    expect(text).toMatch(/non-medical home awareness/i);
    expect(text).toMatch(/consent/i);
  });
});
