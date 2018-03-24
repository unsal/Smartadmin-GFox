export default {
  path: 'gostergeler',
  component: require('../../components/common/Layout').default,

  indexRoute: { onEnter: (nextState, replace) => replace('/gostergeler/kpi') },

  childRoutes: [
    {
      path: 'kpi',
      getComponent(nextState, cb){
        System.import('./containers/Dashboard').then((m)=> {
          cb(null, m.default)
        })
      }
    }
    ,
    {
      path: 'social-wall',
      getComponent(nextState, cb){
        System.import('./containers/SocialWall').then((m)=> {
          cb(null, m.default)
        })
      }
    }
  ]


};
