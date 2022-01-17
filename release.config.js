module.exports = {
  defaultBranch: "main",
  branches: [
    "+([0-9])?(.{+([0-9]),x}).x",
    "main",
    "next",
    "next-major",
    { name: "beta", prerelease: true },
    { name: "alpha", prerelease: true }
  ],
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        "preset": "conventionalcommits",
        releaseRules: "./semantic-release-config/releaseRules.js",
        parserOpts: {
          noteKeywords: ["BREAKING CHANGE", "BREAKING CHANGES"]
        }
      }
    ],
    ["@semantic-release/release-notes-generator", {
      "preset": "conventionalcommits",
      "presetConfig": {
        "types": [
          {
            "type": "feat",
            "section": ":sparkles: Features",
            "hidden": false
          },
          {
            "type": "fix",
            "section": ":bug: Bug Fixes",
            "hidden": false
          },
          {
            "type": "docs",
            "section": ":memo: Documentation",
            "hidden": false
          },
          {
            "type": "style",
            "section": ":art: Styles",
            "hidden": false
          },
          {
            "type": "refactor",
            "section": ":recycle: Code Refactoring",
            "hidden": false
          },
          {
            "type": "perf",
            "section": ":zap: Performance Improvement",
            "hidden": false
          },
          {
            "type": "test",
            "section": ":white_check_mark: Testing",
            "hidden": false
          },
          {
            "type": "build",
            "section": ":hammer: Build/Dependencies",
            "hidden": false
          },
          {
            "type": "ci",
            "section": ":wrench: Continuous Integration",
            "hidden": false
          },
          {
            "type": "chore",
            "hidden": true
          }
        ]
      }
    }],
    [
      "@semantic-release/changelog", 
      {
        changelogFile: "CHANGELOG.mdx"
      }
    ],
    [
      "@semantic-release/npm",
      {
        npmPublish: false
      }
    ],
    "@semantic-release/github",
    [
      "@semantic-release/git",
      {
        assets: [
          "CHANGELOG.mdx",
          "package.json",
          "package-lock.json",
          "npm-shrinkwrap.json"
        ]
      }
    ]
  ]
};
