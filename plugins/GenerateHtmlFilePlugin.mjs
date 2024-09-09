// @ts-check
/**
 * @typedef {import("webpack/lib/Compiler")} Compiler
 */

class GenerateHtmlFilePlugin {
  constructor() {
    console.log("GenerateHtmlFilePlugin.constructor");
  }

  /**
   * @param {Compiler} compiler
   */
  apply(compiler) {
    if (compiler.hooks) {
      compiler.hooks.thisCompilation.tap(
        "GenerateHtmlFilePlugin",
        (compilation) => {
          for (const [, group] of compilation.namedChunkGroups) {
            console.log("group: ", group);
          }
        }
      );
    }
  }
}

export default GenerateHtmlFilePlugin;
