import { lazy } from "react";
import Index from '../pages/index';
import Community from '../pages/community';

/**
 * 应用路由配置
 */
export const appRoutes = [
  {
    // component: lazy(() => import(/* webpackChunkName: "page.login" */  "../pages/index")),
    component: Index,
    exact: true,
    path: "/",
  },
  {
    // component: lazy(() => import(/* webpackChunkName: "page.home" */  "../pages/community")),
    component: Community,
    path: "/community",
  }
];
