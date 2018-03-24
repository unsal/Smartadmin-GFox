export default {
  path: "tables",
  component: require("../../components/common/Layout").default,

  childRoutes: [
    {
      path: "profiller",
      getComponent(nextState, cb) {
        System.import("./containers/TanimProfiller").then(m => {
          cb(null, m.default);
        });
      }
    }
  ]
};
