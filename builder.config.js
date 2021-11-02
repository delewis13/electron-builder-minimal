// When productName & artifactName are the same, auto-update uninstalls but does not reinstall
// Also applies when oneClick, and when app is signed with windows cert.
module.exports = {
  productName: "ProductName",
  artifactName: "productname.exe",
  // If however, we rename the artifactName to something else, then everything works fine.
  // artifactName: "productname setup.exe",
  win: {
    target: ["nsis"],
  },
  publish: [
    {
      provider: "s3",
      endpoint: "http://127.0.0.1:9000",
      bucket: "dungeondj",
    },
  ],
}
