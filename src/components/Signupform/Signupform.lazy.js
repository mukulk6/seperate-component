import React, { lazy, Suspense } from 'react';

const LazySignupform = lazy(() => import('./Signupform'));

const Signupform = props => (
  <Suspense fallback={null}>
    <LazySignupform {...props} />
  </Suspense>
);

export default Signupform;
