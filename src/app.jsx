
import React from 'react';
// import { registerMicroApps, setDefaultMountApp, start } from 'qiankun';

import { hot } from 'react-hot-loader/root'
// import Locale from '@/component/Locale';

import Layout from './layout/BasicLayout';

// setConfig({
//   reloadHooks: false
// });

function App() {
  // console.log('app refresh')
  return (
    // <Locale>
    <Layout />
    // </Locale>
  )
}


export default hot(App);
// 微前端测试

// function genActiveRule(routerPrefix) {
//   return location => {
//     console.log(location);
//     location.pathname.startsWith(routerPrefix);
//   }
// }

// function render({ appContent, loading }) {
//   const container = document.getElementById('root');
//   ReactDom.render(
//     <App />,
//     container
//   )
// }


// /**
//  * Step1 初始化应用（可选）
//  */
// render({ appContent: '', loading: true });

/**
 * Step2 注册子应用
 */

// registerMicroApps([
//   {
//     name: 'react app', // app name registered
//     entry: 'locaohost:8002',
//     // render: ({ appContent, loading }) => yourRenderFunction({ appContent, loading }),
//     render,
//     // activeRule: location => yourActiveRule(location),
//     activeRule:genActiveRule('/react')
//   },
//   {
//     name: 'vue app',
//     entry: 'locaohost:8001',
//     // render: ({ appContent, loading }) => yourRenderFunction({ appContent, loading }),
//     render,
//     // activeRule: location => yourActiveRule(location),
//     activeRule:genActiveRule('/vue')
//   }
// ]);

// /**
//  * Step3 设置默认进入的子应用
//  */
// setDefaultMountApp('/react');

// start({
//   prefetch: true,
//   jsSandbox: true,
//   singular: true,
//   fetch: window.fetch
// });
