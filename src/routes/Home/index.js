import React from 'react';
import dynamic from 'dva/dynamic';
import { Route } from 'dva/router';
import {dynamicWrapper, createRoute} from '../../utils/core';

const routesConfig = (app) => ({
  path: '/home',
  title: '首页',
  indexRoute: '/',
  component: dynamicWrapper(app, [], import('./components'))
});

export default (app) => createRoute(app, routesConfig);