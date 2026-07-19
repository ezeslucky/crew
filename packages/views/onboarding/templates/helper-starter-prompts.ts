

export const STARTER_CARD_IDS = ["intro", "tour", "welcome_page"] as const;
export type StarterCardId = (typeof STARTER_CARD_IDS)[number];

interface StarterPrompt {
  title: { en: string};
  prompt: { en: string };
}

export const HELPER_STARTER_PROMPTS: Record<StarterCardId, StarterPrompt> = {
  intro: {
    title: {
      en: "Introduce Crew to me"
    },
    prompt: {
      en: "Introduce Crew to me in 1–2 paragraphs. Cover what it is, the core concepts (workspace / issue / agent / runtime), and how it differs from tools like Linear or Jira."
     
    },
  },
  tour: {
    title: {
      en: "Walk me through the core features"
    },
    prompt: {
      en: "Walk me through Crew's core features — issue, agent, squad, autopilot, chat. Pick one realistic scenario I might run into and explain how all these pieces fit together."
    },
  },
  welcome_page: {
    title: {
      en: "Show me what Crew can do for me — as slides"
    },
    prompt: {
      en: `Build me a single-file HTML slide deck that shows what Crew can do for me. Tailor it to my role and use case (see "About me" below). Paste the FULL HTML in a fenced \`\`\`html block in a comment on this issue so I can copy it straight out, save as \`Crew-intro.html\`, and double-click to open it in a browser.

**Format**
- One self-contained .html, all CSS / JS inline. Zero dependencies, no build tools, no external images (use CSS-generated visuals — gradients, geometric shapes, SVG inline).
- 5–8 slides total:
  1. Title — "What Crew can do for [my role]"
  2. Four core concepts — workspace / issue / agent / runtime, one slide
  3–6. 3–4 concrete scenarios tailored to my use case, each in the form "When you want X → here's how Crew handles it"
  7. Closing — one specific next-step action

**Viewport rules (non-negotiable)**
- Every \`.slide\`: \`height: 100vh; height: 100dvh; overflow: hidden;\`
- All font-size and spacing values use \`clamp(min, preferred, max)\` — never fixed px / rem.
- Density per slide: 1 heading + ≤ 4 bullets, OR 1 heading + 2 short paragraphs. Overflow → split into another slide.
- Respect \`prefers-reduced-motion: reduce\` (disable animations).

**Aesthetic (avoid the AI-slop look)**
- Pick a distinctive typeface from Fontshare or Google Fonts. Do NOT use Inter, Roboto, Arial, or system fonts.
- Commit to a cohesive palette via CSS variables: one dominant color + one sharp accent. Avoid the cliché "purple gradient on white".
- Backgrounds: layered gradients or geometric patterns for atmosphere — never flat white.
- Animation: ONE well-orchestrated load-in per slide using staggered \`animation-delay\`. CSS-only. No scattered micro-interactions.

**Navigation**
- ArrowLeft / ArrowRight and Space to advance. Small page indicator in a corner.

When done, also reply with a one-sentence summary of which scenarios you picked for me and why.`,
   
    },
  },
};
