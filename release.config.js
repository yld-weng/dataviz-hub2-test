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
        releaseRules: "semantic-release-config/releaseRules.js",
        parserOpts: {
          noteKeywords: ["BREAKING CHANGE", "BREAKING CHANGES"]
        }
      }
    ],
    ["@semantic-release/release-notes-generator", {
      "preset": "conventionalcommits",
      "presetConfig": "semantic-release-config/conventionalCommits-preset.js"
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
