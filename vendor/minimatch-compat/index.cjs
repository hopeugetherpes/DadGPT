/* eslint-disable @typescript-eslint/no-require-imports -- ESLint's legacy consumers need a callable CommonJS export. */
const implementation = require("minimatch-patched");

// Keep the legacy callable API on the patched upstream engine.
// Matching, expansion, and resource limits remain entirely upstream.
module.exports = Object.assign(implementation.minimatch, implementation);
