import React, { lazy, Suspense } from 'react';

const LazyModalProvider = lazy(() => import('./ModalProvider'));

const ModalProvider = props => (
  <Suspense fallback={null}>
    <LazyModalProvider {...props} />
  </Suspense>
);

export default ModalProvider;
