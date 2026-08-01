# Graph Report - Sanjaswa  (2026-06-18)

## Corpus Check
- 22 files · ~1,550 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 64 nodes · 59 edges · 10 communities (9 shown, 1 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]

## God Nodes (most connected - your core abstractions)
1. `scripts` - 4 edges
2. `private` - 1 edges
3. `dev` - 1 edges
4. `build` - 1 edges
5. `preview` - 1 edges
6. `@vitejs/plugin-react` - 1 edges
7. `framer-motion` - 1 edges
8. `react` - 1 edges
9. `react-dom` - 1 edges
10. `react-router-dom` - 1 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Import Cycles
- None detected.

## Communities (10 total, 1 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.17
Nodes (4): screenMotion, INTRO_TIMELINE, screenMotion, screenMotion

### Community 2 - "Community 2"
Cohesion: 0.22
Nodes (8): name, private, scripts, build, dev, preview, type, version

### Community 5 - "Community 5"
Cohesion: 0.33
Nodes (6): dependencies, framer-motion, react, react-dom, react-router-dom, @vitejs/plugin-react

### Community 6 - "Community 6"
Cohesion: 0.40
Nodes (5): devDependencies, autoprefixer, postcss, tailwindcss, vite

## Knowledge Gaps
- **22 isolated node(s):** `name`, `private`, `version`, `type`, `dev` (+17 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **1 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `dependencies` connect `Community 5` to `Community 2`?**
  _High betweenness centrality (0.041) - this node is a cross-community bridge._
- **Why does `devDependencies` connect `Community 6` to `Community 2`?**
  _High betweenness centrality (0.034) - this node is a cross-community bridge._
- **What connects `name`, `private`, `version` to the rest of the system?**
  _22 weakly-connected nodes found - possible documentation gaps or missing edges._