module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/styles/_main.scss";`
      }
    }
  }
};
