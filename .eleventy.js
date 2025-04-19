module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addPassthroughCopy("./src/img");
  eleventyConfig.addPassthroughCopy("./src/fonts");
    return {
      passthroughFileCopy: true,
      dir: {
        input: "src",
        output: "docs",
        includes: "_includes",
        layouts: "_includes/layouts",
        markdownTemplateEngine: "njk",
      },
    };
  };