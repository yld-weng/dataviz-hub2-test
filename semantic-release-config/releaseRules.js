module.exports = [
  { type: "feat", release: "minor" },
  { type: "fix", release: "patch" },
  { type: "perf", release: "patch" },
  { type: "docs", scope: "README", release: "patch" },
  { type: "docs", scope: "new-*", release: "minor" },
  { type: "refactor", scope: "core-*", release: "minor" },
  { type: "refactor", release: "patch" },
  { type: "style", release: "patch" },
  { type: "test", release: "patch" },
  { type: "build", release: "patch" },
  { type: "ci", release: "patch" },
  { type: "chore", release: "patch" },
  { breaking: true, release: "major" },
  { revert: true, release: "patch" },
  { scope: "no-release", release: false }
]