module.exports = {
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        "preset": "angular",
        "releaseRules": [
          {
            "type": "docs",
            "release": "patch"
          },
          {
            "type": "refactor",
            "release": "patch"
          },
          {
            "type": "test",
            "release": "patch"
          },
          {
            "type": "chore",
            "release": "patch"
          },
          {
            "scope": "no-release",
            "release": false
          }
        ]
      }
    ]
  ]
}