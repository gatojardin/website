module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addPassthroughCopy("./src/img");
  eleventyConfig.addPassthroughCopy("./src/fonts");
  eleventyConfig.addFilter("readablePostDate", (dateObj) => {
      return DateTime.fromJSDate(dateObj, {
          zone: "Europe/Amsterdam",
      }).setLocale('en').toLocaleString(DateTime.DATE_FULL);
  });
  eleventyConfig.addFilter("postDate", (dateObj) => {
      return DateTime.fromJSDate(dateObj, {
          zone: "Europe/Amsterdam",
      }).setLocale('en').toISODate();
  });
  eleventyConfig.addFilter("limit", function(arr, limit) {
    return arr.slice(0, limit);
  });
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