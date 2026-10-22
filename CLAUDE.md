# CLAUDE.md

# Portfolio Hero Interaction Specification

# Version 1.0

## 1. Project Context

This portfolio belongs to Abhinandan Singh, a Senior Product Designer.

The existing homepage is already designed and functional. The goal of this task is to add a premium interactive hero portrait without unnecessarily changing the existing portfolio layout, typography, navigation, content, spacing, or other sections.

The hero interaction communicates this idea:

- The visible portrait represents Product/UI/UX Design.
- The hidden robotic structure represents Development/Engineering.
- Scrolling assembles the visible human portrait.
- Hovering after assembly reveals the hidden robotic structure.

This interaction should feel subtle, premium, intentional, and technically polished. It must not feel like a gaming effect, cyberpunk landing page, or generic AI animation.

---

## 2. Source of Truth

There are four reference assets.

### Production portrait

The user's original portrait is the source of truth for the human image.

Current reference filename:
`Hero img(3).webp`

Do not regenerate, redraw, replace, or alter the person's face.

The exact portrait should be preserved throughout the animation.

### Skeleton reference

Current reference filename:
`ChatGPT Image Sep 27, 2026, 01_16_03 PM(1).png`

This establishes the robotic/anatomical visual language.

The final production skeleton should be aligned to the portrait's exact pose and proportions.

### Main interaction specification

Rename/use:
`hero-interaction-spec.png`

This is the primary visual reference for the interaction.

It communicates:

- Initial fragmented state
- Scroll assembly
- Final assembled state
- Hover reveal
- Skeleton visibility
- General visual direction

### Detailed asset specification

Rename/use:
`hero-asset-spec.png`

This is a secondary technical/visual reference showing:

- Portrait
- Skeleton
- Overlay
- Eight fragment regions
- Photo/skeleton fragment relationship
- Scroll sequence
- Hover sequence

The reference boards are NOT production assets. Do not crop pieces from the boards and use those crops in the website.

---

## 3. Core Experience

The interaction has two phases.

### Phase 1: Scroll-based assembly

When the visitor first loads or reloads the homepage, the portrait begins in a fragmented state.

The portrait is divided into organic body regions.

The fragments begin slightly displaced from their final positions.

As the user scrolls a short distance, the fragments smoothly return to their exact final positions.

The entire assembly must complete within the hero section.

Once complete, the animation stops.

Normal page scrolling continues.

### Phase 2: Hover-based skeleton reveal

After the portrait has assembled, hovering over the portrait reveals the robotic skeleton underneath.

The skeleton should feel like it has always been inside the portrait.

The hover interaction should not move the portrait around the page.

A subtle scanning transition may be used before the skeleton becomes visible.

---

## 4. Final Hero State

The final assembled state must match the existing portfolio hero.

Do not redesign the existing hero.

Do not move the headline.

Do not change the navigation.

Do not change the company/logo row.

Do not change typography unless required for technical reasons.

The current portrait position is the final target position.

The special interaction must end at that position.

---

## 5. Fragmentation System

Use eight major regions for the first implementation.

1. Hair
2. Face
3. Left shoulder
4. Right shoulder
5. Chest / neck
6. Left arm
7. Right arm
8. Lower torso

Important:

The fragments must NOT look like rectangular tiles.

Use masks that follow the natural silhouette of each body region.

The same masks must be used for both:

- portrait fragments
- skeleton fragments

Therefore every photo fragment and its corresponding skeleton fragment occupy the exact same coordinate system.

Do not independently guess the skeleton fragment positions.

---

## 6. Initial State

At 0% scroll progress:

- The portrait is recognizable but fragmented.
- Fragments are displaced from their final positions.
- Displacements should be controlled and elegant.
- Do not explode the portrait across the screen.
- Avoid excessive rotation.
- Avoid random movement.

Suggested starting displacement range:

- approximately 15px to 45px
- small rotations, generally within about +/- 4 degrees

The exact values should be tuned visually.

The robotic skeleton may be faintly visible behind the fragmented pieces.

Initial skeleton visibility should be subtle, approximately 10–15% opacity.

The visitor should be able to discover it without having it dominate the hero.

---

## 7. Scroll Animation

Map the assembly to scroll progress.

Conceptual states:

### 0%

Fragments scattered.

### 25%

Fragments moving toward their final coordinates.

### 50%

Approximately half assembled.

### 75%

Almost completely assembled.

### 100%

Fully assembled.

The animation should be driven by scroll progress rather than simply playing a timed animation.

The user should feel that their scrolling controls the reconstruction.

Use smooth interpolation/easing.

Avoid a perfectly linear mechanical movement.

Different fragments may settle at slightly different moments to create a natural assembly.

The final state must be stable.

There should be no continuous floating or idle animation after assembly.

---

## 8. Scroll Distance

Keep the required scroll distance short.

The visitor should not have to scroll through a large animation before reaching the next section.

The assembly should complete within approximately one hero viewport of scroll interaction, subject to the existing page structure.

Once the assembly reaches 100%:

- stop the special hero animation
- preserve the final portrait
- allow normal page scrolling

Do not force the user to keep scrolling through an artificial animation.

---

## 9. Skeleton Layer

The robotic skeleton should be positioned underneath the original portrait.

The skeleton should align with:

- skull/head
- neck
- spine
- shoulders
- rib cage
- arms
- torso

The skeleton should not replace the person's face during normal scrolling.

The original portrait remains visually dominant.

The skeleton is the hidden engineering layer.

Do not use a generic skeleton that has a different pose.

---

## 10. Skeleton Visual Direction

Use the supplied robotic skeleton reference as the visual language.

Desired characteristics:

- anatomical robotic structure
- mechanical joints
- white/off-white structural components
- exposed mechanical components
- restrained blue/orange mechanical details
- realistic dimensionality
- premium technical appearance

Avoid:

- neon cyberpunk
- gaming aesthetic
- superhero/Terminator aesthetic
- excessive glowing effects
- cartoon rendering
- aggressive sci-fi HUD overlays

The skeleton should fit the existing clean portfolio aesthetic.

---

## 11. Hover Interaction

Hover is available only after the portrait has reached the assembled state.

### Normal

- 100% portrait
- skeleton effectively hidden

### Hover / scanning

- portrait begins becoming slightly translucent
- skeleton starts appearing
- subtle vertical scan effect may pass over the portrait
- transition should feel deliberate

### Revealed

Target direction:

- approximately 30–40% portrait
- approximately 60–70% skeleton

These values are starting targets, not rigid requirements.

The final effect should still preserve enough of the human portrait to communicate that the skeleton exists underneath it.

Do not simply swap one image for another.

The skeleton should feel embedded underneath the portrait.

---

## 12. Scan Effect

A restrained vertical scan can be used during hover.

The scan should:

- be thin
- be subtle
- move vertically across the portrait
- not dominate the page
- not look like a gaming HUD

The scan is optional if the simpler reveal looks better.

Do not add effects just for decoration.

---

## 13. Mouse Interaction

Desktop behavior:

- Hovering anywhere over the portrait activates the reveal.
- Moving away returns smoothly to the normal portrait.
- The transition should not flicker.
- Rapid mouse movement should not cause broken states.

The hover target should correspond to the actual portrait area, not the entire hero section.

---

## 14. Mobile / Touch Behavior

There is no hover on touch devices.

Do not attempt to fake desktop hover behavior with a permanent animation.

Preferred mobile behavior:

- Keep the scroll-based assembly if performance allows.
- After assembly, use the normal portrait.
- A simple tap-to-reveal interaction may be implemented later if it feels appropriate.
- Do not make the user repeatedly tap to understand the page.
- If the skeleton interaction becomes distracting on mobile, omit it.

Desktop is the primary experience.

---

## 15. Performance

The animation must be lightweight enough for a portfolio homepage.

Requirements:

- Avoid unnecessary large DOM trees.
- Avoid rendering dozens of independent high-resolution images if masks can achieve the same result.
- Avoid continuously running animations when the hero is idle.
- Pause/disable expensive effects when they are not visible.
- Optimize image sizes appropriately.
- Avoid layout thrashing.
- Prefer transform/opacity-based animation where possible.
- Use GPU-friendly properties when appropriate.
- Respect reduced-motion preferences.

Do not sacrifice the site's loading performance for the effect.

---

## 16. Accessibility

Respect:

`prefers-reduced-motion`

For users who prefer reduced motion:

- show the final portrait normally
- disable the fragmented scroll animation
- disable or greatly simplify the hover scan/reveal
- do not make the interaction necessary to understand the page

The portrait must have appropriate alt text if it is meaningful content.

Do not make critical portfolio information dependent on the animation.

---

## 17. Responsive Behavior

The existing responsive layout must remain intact.

The effect should scale with the existing hero image rather than introducing a second unrelated layout.

Do not hard-code desktop pixel coordinates that break at tablet/mobile widths.

If different breakpoints require different fragment offsets, define them deliberately.

Desktop is the first implementation target.

Mobile is a later refinement.

---

## 18. Architecture

Before changing code:

1. Inspect the existing project structure.
2. Identify the framework.
3. Identify the current hero component.
4. Identify how the portrait is currently rendered.
5. Identify existing animation libraries.
6. Identify existing CSS architecture.
7. Identify whether GSAP, Framer Motion, or another animation system is already installed.
8. Reuse existing project conventions where appropriate.

Do not introduce a new animation library without first checking what the project already uses.

Do not rewrite unrelated components.

Do not restructure the whole project.

---

## 19. Implementation Strategy

Build incrementally.

### Milestone 1

Analyze the existing project.

No code changes.

### Milestone 2

Create the hero animation structure.

Keep the current visual appearance unchanged.

### Milestone 3

Implement portrait fragmentation.

Test the eight masks.

### Milestone 4

Implement the skeleton layer.

Align it with the portrait.

### Milestone 5

Synchronize portrait and skeleton fragments.

### Milestone 6

Implement scroll-driven assembly.

### Milestone 7

Lock the final state to the existing hero position.

### Milestone 8

Implement hover skeleton reveal.

### Milestone 9

Add optional scan effect.

### Milestone 10

Implement responsive and reduced-motion behavior.

### Milestone 11

Performance and visual polish.

---

## 20. Do Not Do These Things

Do NOT:

- regenerate the user's face
- replace the original portrait
- redesign the portfolio
- change unrelated sections
- change the navigation
- change typography
- add neon colors
- add excessive particles
- add unnecessary 3D effects
- add a loading screen
- create a giant full-screen animation
- make the user scroll excessively
- use a video instead of scroll-driven interaction unless explicitly approved
- create an animation that continues after the portrait is assembled
- make the skeleton visible all the time
- use rectangular puzzle pieces
- crop production assets from the concept boards

---

## 21. Design Principle

The effect should communicate:

VISIBLE:
Human + Product Design

HIDDEN:
Engineering + Development

The interaction should feel like discovering another layer of the same person.

It should not feel like two unrelated characters.

The final message is:

"Design is what you see. Engineering is underneath."

Do not display this sentence on the website unless explicitly requested. It is the conceptual direction for the interaction.

---

## 22. Reference File Usage

Before implementation, inspect:

`hero-interaction-spec.png`

and

`hero-asset-spec.png`

Use:

`skeleton-reference.png`

for the mechanical visual direction.

Use:

`portrait.png` / the renamed original portrait

as the source of truth for the human image.

The visual reference boards describe the desired result. They do not dictate literal pixel-perfect implementation.

---

## 23. Development Workflow

After each milestone:

1. Implement only the requested milestone.
2. Run the project.
3. Check for console errors.
4. Check desktop behavior.
5. Check responsive behavior when relevant.
6. Confirm existing sections were not affected.
7. Explain what changed.
8. Wait for approval before moving to the next major milestone.

Do not implement all milestones in one large change.

---

## 24. First Task

Your first task is NOT to write code.

Analyze the existing project and report:

1. Framework
2. Build tool
3. Current hero component/file
4. Current portrait implementation
5. Existing animation libraries
6. CSS/styling approach
7. Relevant public asset paths
8. Recommended technical approach for this interaction
9. Any technical constraints or risks you identify

Do not modify files yet.

Wait for approval before implementing anything.
