import React, { lazy, Suspense } from 'react';

const LazyModalComponent = lazy(() => import('./ModalComponent'));

const ModalComponent = props => (
  <Suspense fallback={null}>
    <LazyModalComponent {...props} />
  </Suspense>
);

export default ModalComponent;
