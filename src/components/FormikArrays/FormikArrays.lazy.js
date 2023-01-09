import React, { lazy, Suspense } from 'react';

const LazyFormikArrays = lazy(() => import('./FormikArrays'));

const FormikArrays = props => (
  <Suspense fallback={null}>
    <LazyFormikArrays {...props} />
  </Suspense>
);

export default FormikArrays;
