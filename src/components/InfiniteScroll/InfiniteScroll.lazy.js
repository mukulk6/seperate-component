import React, { lazy, Suspense } from 'react';

const LazyInfiniteScroll = lazy(() => import('./InfiniteScroll'));

const InfiniteScroll = props => (
  <Suspense fallback={null}>
    <LazyInfiniteScroll {...props} />
  </Suspense>
);

export default InfiniteScroll;
