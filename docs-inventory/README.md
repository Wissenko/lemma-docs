# Product Documentation Audit

This folder keeps the docs tied to the real Lemma product.

Do not expand the public docs from memory alone. For every important feature, capture the product evidence first:

1. screen or flow observed in the app
2. user job supported by that feature
3. product value worth emphasizing
4. screenshot or screenshot request
5. docs page that explains the feature
6. coverage status

## Files

- `product-map.md`: inventory of product areas, screens, jobs, and standout value.
- `screenshot-manifest.md`: screenshot capture plan for Atlas/browser passes.
- `coverage-matrix.md`: feature-to-doc coverage tracker.
- `atlas-agent-prompt.md`: prompt to run an app exploration pass with Atlas or another browser agent.

## Rule

Every user-facing doc page should have at least one of:

- a verified product screen
- a screenshot slot tied to a capture ID
- a clear note that the product behavior is unverified

Avoid documenting roadmap or assumed capabilities as live product behavior.
