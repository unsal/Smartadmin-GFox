export default {
  path: "verbis",
  component: require("../../components/common/Layout").default,

  childRoutes: [
    {
      path: "profiller",
      getComponent(nextState, cb) {
        System.import("./containers/TanimProfiller").then(m => {
          cb(null, m.default);
        });
      }
    },
    {
      path: "birimler",
      getComponent(nextState, cb) {
        System.import("./containers/Tanimlar").then(m => {
          cb(null, m.default);
        });
      }
    },

  ]
};
