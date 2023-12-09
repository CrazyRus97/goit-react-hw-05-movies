import React from 'react';
import { PageNf, Wrap } from './PageNotFound.styled';

const PageNotFound = () => {
  return (
    <div>
      <PageNf>
        <Wrap>
          <h1>ERROR 404</h1>
          <p>Page not found...</p>
        </Wrap>
      </PageNf>
    </div>
  );
};

export default PageNotFound;