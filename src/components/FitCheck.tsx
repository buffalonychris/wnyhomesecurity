import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import type { FitCheckConfig } from "../content/fitCheckConfigs";

const CONTACT_INTAKE_PATH = "/contact?vertical=home-security";
const MAX_FOLLOW_UPS = 3;

type Situation =
  | "packages"
  | "away_property"
  | "aging_family"
  | "forget_doors_lights"
  | "second_property"
  | "household_damage"
  | "easier_management"
  | "none";

type AwayHelp =
  | "who_came_by"
  | "deliveries"
  | "something_wrong"
  | "family_member"
  | "pets"
  | "see_whats_happening"
  | "nothing";

type PropertySituation =
  | "owner_occupied"
  | "rent"
  | "family_care"
  | "multiple_properties"
  | "small_business"
  | "other";

type FollowUpId =
  | "family"
  | "deliveries"
  | "visibility"
  | "damage"
  | "convenience"
  | "remote_property";

type DiscoveryAnswers = {
  situations: Situation[];
  awayHelp: AwayHelp[];
  propertySituation?: PropertySituation;
  followUps: Partial<Record<FollowUpId, string[]>>;
};

type Recommendation = {
  category: string;
  why: string;
};

type FollowUpDefinition = {
  id: FollowUpId;
  title: string;
  options: Array<{ value: string; label: string }>;
  // eslint-disable-next-line no-unused-vars
  applies(answers: DiscoveryAnswers): boolean;
};

type FitCheckProps = {
  config: FitCheckConfig;
  layout?: "standalone" | "embedded";
  className?: string;
};

const initialAnswers: DiscoveryAnswers = {
  situations: [],
  awayHelp: [],
  propertySituation: undefined,
  followUps: {},
};

const situationOptions: Array<{ value: Situation; label: string }> = [
  {
    value: "packages",
    label: "Packages are sometimes left outside when nobody is home.",
  },
  {
    value: "away_property",
    label: "I wish I knew what was happening around my property when I'm away.",
  },
  {
    value: "aging_family",
    label: "I worry about an aging parent or family member.",
  },
  {
    value: "forget_doors_lights",
    label: "I sometimes forget things like lights, doors, or garage doors.",
  },
  {
    value: "second_property",
    label:
      "I'd like to keep an eye on a second property, cabin, rental, or outbuilding.",
  },
  {
    value: "household_damage",
    label:
      "I worry about water leaks, frozen pipes, sump pump issues, or household damage.",
  },
  {
    value: "easier_management",
    label: "I want my home to be easier to manage.",
  },
  { value: "none", label: "None of these really fit." },
];

const awayHelpOptions: Array<{ value: AwayHelp; label: string }> = [
  { value: "who_came_by", label: "Knowing who came by." },
  { value: "deliveries", label: "Knowing when deliveries arrive." },
  { value: "something_wrong", label: "Knowing if something went wrong." },
  { value: "family_member", label: "Checking on a family member." },
  { value: "pets", label: "Keeping an eye on pets." },
  {
    value: "see_whats_happening",
    label: "Being able to see what is happening.",
  },
  { value: "nothing", label: "Nothing specific." },
];

const propertySituationOptions: Array<{
  value: PropertySituation;
  label: string;
}> = [
  { value: "owner_occupied", label: "I own and live in my home." },
  { value: "rent", label: "I rent." },
  { value: "family_care", label: "I help care for a family member." },
  { value: "multiple_properties", label: "I manage multiple properties." },
  { value: "small_business", label: "I own or manage a small business." },
  { value: "other", label: "Other." },
];

const followUpDefinitions: FollowUpDefinition[] = [
  {
    id: "family",
    title: "Which would help most?",
    options: [
      { value: "okay", label: "Knowing they are okay." },
      { value: "emergency_awareness", label: "Emergency awareness." },
      { value: "communication", label: "Easier communication." },
      { value: "independence", label: "Help staying independent." },
      { value: "peace", label: "General peace of mind." },
    ],
    applies: (answers) =>
      answers.situations.includes("aging_family") ||
      answers.awayHelp.includes("family_member") ||
      answers.propertySituation === "family_care",
  },
  {
    id: "deliveries",
    title: "What is most frustrating?",
    options: [
      { value: "theft", label: "Package theft." },
      { value: "missed", label: "Missed deliveries." },
      { value: "arrival_unknown", label: "Not knowing when packages arrive." },
      { value: "visitors", label: "Visitors when nobody is home." },
      {
        value: "door_talk",
        label: "Wanting to see and speak to people at the door.",
      },
    ],
    applies: (answers) =>
      answers.situations.includes("packages") ||
      answers.awayHelp.includes("deliveries") ||
      answers.awayHelp.includes("who_came_by"),
  },
  {
    id: "visibility",
    title: "Where would visibility help most?",
    options: [
      { value: "front_door", label: "Front door." },
      { value: "driveway", label: "Driveway." },
      { value: "backyard", label: "Backyard." },
      { value: "garage_side", label: "Garage or side entrance." },
      { value: "whole_property", label: "Whole property." },
    ],
    applies: (answers) =>
      answers.situations.includes("away_property") ||
      answers.awayHelp.includes("see_whats_happening") ||
      answers.awayHelp.includes("pets"),
  },
  {
    id: "damage",
    title: "Which problems are you most concerned about?",
    options: [
      { value: "water_leaks", label: "Water leaks." },
      { value: "frozen_pipes", label: "Frozen pipes." },
      { value: "sump_pump", label: "Sump pump issues." },
      { value: "smoke_fire", label: "Smoke or fire events." },
      { value: "utility_basement", label: "Utility room or basement issues." },
    ],
    applies: (answers) =>
      answers.situations.includes("household_damage") ||
      answers.awayHelp.includes("something_wrong"),
  },
  {
    id: "convenience",
    title: "What would make daily life easier?",
    options: [
      { value: "lighting", label: "Smart lighting." },
      { value: "door_lock_reminders", label: "Door or lock reminders." },
      { value: "garage", label: "Garage door awareness." },
      { value: "routines", label: "Simple routines." },
      { value: "one_place", label: "One place to control everything." },
    ],
    applies: (answers) =>
      answers.situations.includes("forget_doors_lights") ||
      answers.situations.includes("easier_management"),
  },
  {
    id: "remote_property",
    title: "What would be most useful?",
    options: [
      { value: "remote_awareness", label: "Remote property awareness." },
      { value: "camera_coverage", label: "Camera coverage." },
      { value: "environmental_alerts", label: "Environmental alerts." },
      { value: "entry_awareness", label: "Entry/door awareness." },
      { value: "maintenance_alerts", label: "Maintenance issue alerts." },
    ],
    applies: (answers) =>
      answers.situations.includes("second_property") ||
      answers.propertySituation === "multiple_properties" ||
      answers.propertySituation === "small_business",
  },
];

const addUniqueRecommendation = (
  items: Recommendation[],
  category: string,
  why: string,
) => {
  if (items.some((item) => item.category === category)) return;
  items.push({ category, why });
};

const selectedFollowUps = (answers: DiscoveryAnswers) => {
  return followUpDefinitions
    .filter((definition) => definition.applies(answers))
    .slice(0, MAX_FOLLOW_UPS);
};

const hasAnyPrimaryAnswer = (answers: DiscoveryAnswers) => {
  return (
    answers.situations.length > 0 &&
    answers.awayHelp.length > 0 &&
    Boolean(answers.propertySituation)
  );
};

const isComplete = (
  answers: DiscoveryAnswers,
  followUps: FollowUpDefinition[],
) => {
  return (
    hasAnyPrimaryAnswer(answers) &&
    followUps.every(
      (followUp) => (answers.followUps[followUp.id] ?? []).length > 0,
    )
  );
};

const buildRecommendations = (answers: DiscoveryAnswers): Recommendation[] => {
  const recommendations: Recommendation[] = [];
  const followUps = answers.followUps;
  const deliveryFollowUps = followUps.deliveries ?? [];
  const visibilityFollowUps = followUps.visibility ?? [];
  const convenienceFollowUps = followUps.convenience ?? [];
  const damageFollowUps = followUps.damage ?? [];
  const remoteFollowUps = followUps.remote_property ?? [];

  if (
    answers.situations.includes("packages") ||
    answers.awayHelp.includes("deliveries") ||
    deliveryFollowUps.some((value) =>
      ["theft", "missed", "arrival_unknown"].includes(value),
    )
  ) {
    addUniqueRecommendation(
      recommendations,
      "Package Protection",
      "If deliveries are a concern, package-focused alerts and front-entry visibility may help you know when something arrives and whether it stays put.",
    );
  }

  if (
    answers.awayHelp.includes("who_came_by") ||
    deliveryFollowUps.includes("door_talk") ||
    deliveryFollowUps.includes("visitors") ||
    visibilityFollowUps.includes("front_door")
  ) {
    addUniqueRecommendation(
      recommendations,
      "Video Doorbell Solutions",
      "If visitors, deliveries, or front-door activity came up in your answers, a doorbell-focused setup may help you see who came by.",
    );
  }

  if (visibilityFollowUps.includes("driveway")) {
    addUniqueRecommendation(
      recommendations,
      "Driveway / Visitor Awareness",
      "Driveway-focused visibility can help when vehicles, visitors, or the garage approach matter most.",
    );
  }

  if (
    answers.situations.includes("away_property") ||
    answers.awayHelp.includes("see_whats_happening") ||
    visibilityFollowUps.some((value) =>
      ["backyard", "garage_side"].includes(value),
    )
  ) {
    addUniqueRecommendation(
      recommendations,
      "Property Awareness Cameras",
      "Because you want a clearer picture of what is happening around the property, camera placement may be useful in the areas you named.",
    );
  }

  if (visibilityFollowUps.includes("whole_property")) {
    addUniqueRecommendation(
      recommendations,
      "Whole-Property Awareness",
      "A broader layout review may make sense if you want visibility across multiple outdoor areas instead of one doorway or zone.",
    );
  }

  if (
    answers.situations.includes("aging_family") ||
    answers.awayHelp.includes("family_member") ||
    answers.propertySituation === "family_care"
  ) {
    addUniqueRecommendation(
      recommendations,
      "Senior Safety / Family Awareness",
      "Family-focused awareness can help when the goal is checking in, supporting independence, or feeling more comfortable about a loved one at home.",
    );
  }

  if (
    damageFollowUps.length > 0 ||
    answers.situations.includes("household_damage")
  ) {
    addUniqueRecommendation(
      recommendations,
      "Leak & Environmental Alerts",
      "Water, temperature, sump pump, and utility-area alerts may help catch household damage risks earlier.",
    );
  }

  if (
    answers.situations.includes("forget_doors_lights") ||
    convenienceFollowUps.includes("door_lock_reminders")
  ) {
    addUniqueRecommendation(
      recommendations,
      "Smart Entry Controls",
      "Door, lock, and garage awareness may help when you want reminders or easier control over common entry points.",
    );
  }

  if (
    answers.situations.includes("easier_management") ||
    convenienceFollowUps.some((value) =>
      ["lighting", "routines", "one_place"].includes(value),
    )
  ) {
    addUniqueRecommendation(
      recommendations,
      "Smart Home Convenience",
      "Simple routines, lighting control, and one-place management may help the home feel easier to manage day to day.",
    );
  }

  if (
    answers.situations.includes("second_property") ||
    answers.propertySituation === "multiple_properties" ||
    remoteFollowUps.length > 0
  ) {
    addUniqueRecommendation(
      recommendations,
      "Second Property / Rental Awareness",
      "If you manage a cabin, rental, outbuilding, or second property, remote awareness and entry alerts may help you stay informed between visits.",
    );
  }

  if (answers.awayHelp.includes("pets")) {
    addUniqueRecommendation(
      recommendations,
      "Indoor / Pet Awareness",
      "If pets are part of the concern, a light-touch indoor view or alert strategy may help without overcomplicating the system.",
    );
  }

  if (recommendations.length === 0) {
    addUniqueRecommendation(
      recommendations,
      "Whole-Property Awareness",
      "Your answers do not point to one obvious category yet, so a short conversation may help identify what would actually be useful.",
    );
  }

  return recommendations.slice(0, 6);
};

const buildAnswerSummary = (answers: DiscoveryAnswers) => {
  const situationLabels = situationOptions
    .filter((option) => answers.situations.includes(option.value))
    .map((option) => option.label);
  const awayLabels = awayHelpOptions
    .filter((option) => answers.awayHelp.includes(option.value))
    .map((option) => option.label);
  const propertyLabel = propertySituationOptions.find(
    (option) => option.value === answers.propertySituation,
  )?.label;

  return {
    situations: situationLabels,
    awayHelp: awayLabels,
    propertySituation: propertyLabel,
  };
};

const FitCheck = ({
  config,
  layout = "standalone",
  className,
}: FitCheckProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [answers, setAnswers] = useState<DiscoveryAnswers>(initialAnswers);
  const [recommendations, setRecommendations] = useState<
    Recommendation[] | null
  >(null);
  const [showCompletedAnswers, setShowCompletedAnswers] = useState(false);
  const recommendationSectionRef = useRef<HTMLElement | null>(null);
  const isHomeSecurity = searchParams.get("vertical") === "home-security";

  const activeFollowUps = useMemo(() => {
    return hasAnyPrimaryAnswer(answers) ? selectedFollowUps(answers) : [];
  }, [answers]);
  const canSubmit = isComplete(answers, activeFollowUps);
  const answerSummary = useMemo(() => buildAnswerSummary(answers), [answers]);

  useEffect(() => {
    if (!recommendations || typeof window === "undefined") return;
    recommendationSectionRef.current?.focus();
    recommendationSectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, [recommendations]);

  const toggleSituation = (value: Situation) => {
    setAnswers((prev) => {
      const nextSelected =
        value === "none"
          ? ["none" as Situation]
          : prev.situations.includes(value)
            ? prev.situations.filter((item) => item !== value)
            : [...prev.situations.filter((item) => item !== "none"), value];
      return { ...prev, situations: nextSelected, followUps: {} };
    });
    setRecommendations(null);
  };

  const toggleAwayHelp = (value: AwayHelp) => {
    setAnswers((prev) => {
      const nextSelected =
        value === "nothing"
          ? ["nothing" as AwayHelp]
          : prev.awayHelp.includes(value)
            ? prev.awayHelp.filter((item) => item !== value)
            : [...prev.awayHelp.filter((item) => item !== "nothing"), value];
      return { ...prev, awayHelp: nextSelected, followUps: {} };
    });
    setRecommendations(null);
  };

  const setPropertySituation = (value: PropertySituation) => {
    setAnswers((prev) => ({
      ...prev,
      propertySituation: value,
      followUps: {},
    }));
    setRecommendations(null);
  };

  const toggleFollowUp = (followUpId: FollowUpId, value: string) => {
    setAnswers((prev) => {
      const current = prev.followUps[followUpId] ?? [];
      const next = current.includes(value)
        ? current.filter((item) => item !== value)
        : [...current, value];
      return { ...prev, followUps: { ...prev.followUps, [followUpId]: next } };
    });
    setRecommendations(null);
  };

  const handleSubmit = () => {
    if (!canSubmit) return;
    const nextRecommendations = buildRecommendations(answers);
    setRecommendations(nextRecommendations);
    setShowCompletedAnswers(false);

    const params = new URLSearchParams(searchParams);
    params.set("fit", "complete");
    params.delete("fitTier");
    params.delete("package");
    setSearchParams(params, { replace: true });

    void fetch("/api/fit-check", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        recommendedTier: "consultative-discovery",
        recommendationCategories: nextRecommendations.map(
          (item) => item.category,
        ),
        answers,
        pageRoute:
          typeof window !== "undefined" ? window.location.pathname : undefined,
      }),
    });
  };

  const handleReset = () => {
    setAnswers(initialAnswers);
    setRecommendations(null);
    setShowCompletedAnswers(false);
    const params = new URLSearchParams(searchParams);
    params.delete("fit");
    params.delete("fitTier");
    params.delete("package");
    setSearchParams(params, { replace: true });
  };

  const content = (
    <div
      className={[
        "wnyhs-fit-check",
        layout === "standalone" ? "wnyhs-shell" : null,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <header className="wnyhs-section wnyhs-fit-check-hero">
        <div className="wnyhs-section-header">
          <span className="wnyhs-eyebrow">Guided Fit Check</span>
          <h1
            className={
              isHomeSecurity
                ? "wnyhs-heading wnyhs-funnel-title"
                : "wnyhs-heading"
            }
          >
            {config.heroTitle}
          </h1>
          <p
            className={
              isHomeSecurity
                ? "wnyhs-description wnyhs-funnel-subtitle"
                : "wnyhs-description"
            }
          >
            {config.heroSubtitle}
          </p>
        </div>
      </header>

      {!recommendations || showCompletedAnswers ? (
        <section className="wnyhs-fit-check-question-stack">
          <article className="wnyhs-card wnyhs-fit-check-question">
            <div>
              <span className="wnyhs-eyebrow">Question 1</span>
              <h2>Which of these situations sound familiar?</h2>
              <p>Check all that truly apply.</p>
            </div>
            <div className="wnyhs-fit-check-options">
              {situationOptions.map((option) => (
                <label key={option.value} className="wnyhs-fit-check-option">
                  <input
                    type="checkbox"
                    checked={answers.situations.includes(option.value)}
                    onChange={() => toggleSituation(option.value)}
                  />
                  <span>{option.label}</span>
                </label>
              ))}
            </div>
          </article>

          <article className="wnyhs-card wnyhs-fit-check-question">
            <div>
              <span className="wnyhs-eyebrow">Question 2</span>
              <h2>
                When you are away from your property, what would help most?
              </h2>
              <p>Check all that truly apply.</p>
            </div>
            <div className="wnyhs-fit-check-options">
              {awayHelpOptions.map((option) => (
                <label key={option.value} className="wnyhs-fit-check-option">
                  <input
                    type="checkbox"
                    checked={answers.awayHelp.includes(option.value)}
                    onChange={() => toggleAwayHelp(option.value)}
                  />
                  <span>{option.label}</span>
                </label>
              ))}
            </div>
          </article>

          <article className="wnyhs-card wnyhs-fit-check-question">
            <div>
              <span className="wnyhs-eyebrow">Question 3</span>
              <h2>Which best describes your situation?</h2>
            </div>
            <div className="wnyhs-fit-check-options">
              {propertySituationOptions.map((option) => (
                <label key={option.value} className="wnyhs-fit-check-option">
                  <input
                    type="radio"
                    name="propertySituation"
                    checked={answers.propertySituation === option.value}
                    onChange={() => setPropertySituation(option.value)}
                  />
                  <span>{option.label}</span>
                </label>
              ))}
            </div>
          </article>

          {activeFollowUps.map((followUp, index) => (
            <article
              key={followUp.id}
              className="wnyhs-card wnyhs-fit-check-question"
            >
              <div>
                <span className="wnyhs-eyebrow">Follow-up {index + 1}</span>
                <h2>{followUp.title}</h2>
                <p>Choose any that apply.</p>
              </div>
              <div className="wnyhs-fit-check-options">
                {followUp.options.map((option) => (
                  <label key={option.value} className="wnyhs-fit-check-option">
                    <input
                      type="checkbox"
                      checked={(answers.followUps[followUp.id] ?? []).includes(
                        option.value,
                      )}
                      onChange={() => toggleFollowUp(followUp.id, option.value)}
                    />
                    <span>{option.label}</span>
                  </label>
                ))}
              </div>
            </article>
          ))}
        </section>
      ) : null}

      <section className="wnyhs-section wnyhs-fit-check-actions">
        <h2>Ready to see possible next steps?</h2>
        <p>
          Fit Check is a starting point. It helps identify useful solution
          categories before a real property review.
        </p>
        <div className="wnyhs-fit-check-button-row">
          <button
            type="button"
            className="wnyhs-button wnyhs-button--primary"
            disabled={!canSubmit}
            onClick={handleSubmit}
          >
            {recommendations ? "Refresh Results" : "See Possible Solutions"}
          </button>
          {recommendations ? (
            <button
              type="button"
              className="wnyhs-button wnyhs-button--secondary"
              onClick={() => setShowCompletedAnswers((prev) => !prev)}
            >
              {showCompletedAnswers ? "Hide my answers" : "Review my answers"}
            </button>
          ) : null}
          <button
            type="button"
            className="wnyhs-button wnyhs-button--secondary"
            onClick={handleReset}
          >
            Start Over
          </button>
        </div>
      </section>

      {recommendations ? (
        <section
          ref={recommendationSectionRef}
          tabIndex={-1}
          className="wnyhs-section wnyhs-fit-check-results"
        >
          <div>
            <span className="wnyhs-eyebrow">Fit Check Results</span>
            <h2>Based on your answers, you may benefit from</h2>
            <p>
              This is a starting point. A final recommendation depends on your
              property layout, goals, and onsite review.
            </p>
          </div>

          <div className="wnyhs-fit-check-results-grid">
            {recommendations.map((item) => (
              <article key={item.category}>
                <h3>{item.category}</h3>
                <p>{item.why}</p>
              </article>
            ))}
          </div>

          <div>
            <h3>Your answer snapshot</h3>
            <ul className="wnyhs-fit-check-answer-list">
              {answerSummary.situations.length ? (
                <li>Situations: {answerSummary.situations.join(" ")}</li>
              ) : null}
              {answerSummary.awayHelp.length ? (
                <li>Away from property: {answerSummary.awayHelp.join(" ")}</li>
              ) : null}
              {answerSummary.propertySituation ? (
                <li>Context: {answerSummary.propertySituation}</li>
              ) : null}
            </ul>
          </div>

          <div className="wnyhs-card wnyhs-fit-check-estimate-card">
            <h3>Request a Free Estimate</h3>
            <p>
              We&apos;ll review your answers and help determine what makes sense
              for your property.
            </p>
            <div>
              <Link
                className="wnyhs-button wnyhs-button--primary"
                to={CONTACT_INTAKE_PATH}
              >
                Request a Free Estimate
              </Link>
            </div>
          </div>
        </section>
      ) : null}
    </div>
  );

  if (layout === "embedded") {
    return (
      <div className={["wnyhs-page wnyhs-fit-check-embed", className].filter(Boolean).join(" ")}>
        {content}
      </div>
    );
  }

  return content;
};

export default FitCheck;
