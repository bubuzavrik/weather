import React from 'react';

import { Container, Skeleton } from '@mui/material';

export const Loading = () => {
  return (
    <Container maxWidth="md">
      <Skeleton variant="rectangular" width="100%" height={100} />
    </Container>
  );
};
