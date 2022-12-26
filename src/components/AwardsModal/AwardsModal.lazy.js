import React, { lazy, Suspense } from 'react';

const LazyAwardsModal = lazy(() => import('./AwardsModal'));

const AwardsModal = props => (
  <Suspense fallback={null}>
    <LazyAwardsModal {...props} />
  </Suspense>
);

export default AwardsModal;
