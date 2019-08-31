import React, { lazy } from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Switch } from 'react-router-dom';

import { history } from '~redux/store';

import Routes from '~constants/routes';

import Suspense from '~components/Suspense';

import AuthenticatedRoute from './components/AuthenticatedRoute';
import styles from './styles.module.scss';

const Pills = lazy(() => import('~screens/Pills'));
const PillDetail = lazy(() => import('~screens/PillDetail'));
const Welcome = lazy(() => import('~screens/Welcome'));

function AppRoutes() {
  return (
    <ConnectedRouter history={history}>
      <div className={`column ${styles.container}`}>
        <Suspense>
          <Switch>
            <AuthenticatedRoute isPublicRoute exact path={Routes.PILL_DETAIL} component={PillDetail} />
            <AuthenticatedRoute isPublicRoute exact path={Routes.PILLS} component={Pills} />
            <AuthenticatedRoute isPublicRoute path={Routes.WELCOME} component={Welcome} />
          </Switch>
        </Suspense>
      </div>
    </ConnectedRouter>
  );
}

export default AppRoutes;
