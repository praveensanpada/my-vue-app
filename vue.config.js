module.exports = {
  publicPath:
    process.env.NODE_ENV === "production" ? "/metronic8/vue/demo7/" : "/",
  devServer: {
    proxy: "http://35.188.44.154/",
  },
};
