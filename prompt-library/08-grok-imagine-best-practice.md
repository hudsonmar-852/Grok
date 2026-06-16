# Grok Imagine Best Practice

## Purpose

This file summarizes the working style used in this prompt library.

## Recommended Prompt Order

Use top-down priority:

1. Identity / realism lock
2. Scene context
3. Subject appearance
4. Motion / camera
5. Lighting / optics
6. Background
7. Output rules
8. Prohibitions

## Strong Stable Phrases

```text
Photographic realism is the highest priority.
The result must look like real daily-life footage.
Camera behaves like an observer, not a director.
Movement remains low-amplitude, continuous, and physically plausible.
Expression remains neutral, relaxed, and non-performative.
No text, no logos, no borders, no overlays.
```

## Useful Documentary Vocabulary

- observational documentary
- candid realism
- passive background
- real spatial depth
- natural human imperfection
- believable ambient light
- full-frame camera behavior
- natural depth of field
- slight optical softness

## Avoid Overloading

For Grok Imagine / SDXL-style interpretation, avoid too many conflicting priorities in one prompt.

Better:

```text
subtle sensual energy through posture and proximity
```

Less stable:

```text
highly seductive choreographed performance
```

## Anchor Frame Workflow

1. Generate a silent or low-motion clip.
2. Keep identity lock high.
3. Use slow camera drift or stable framing.
4. Scrub the timeline.
5. Pick the strongest still frame.
6. Use that frame as the anchor for the next video stage.

## Recommended File Types

- `stable/` for reliable prompts
- `experimental/` for mood exploration
- `archive/` for old versions

## Menu

```text
0  → use current version
1  → generate short stable version
2  → create anchor consistency version
3  → create speaking video version
4  → adjust camera behavior
5  → adjust expression
6  → adjust lighting/background
7  → convert to Project Default Instruction
8  → check Grok / SDXL stability
9  → export copy-ready version
```
