import React from 'react';
import { ShimmerBlock } from './style';

export const ShimmerRow: React.FC = () => {
  return (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'end', flexWrap: 'wrap', marginBottom: '20px' }}>
      <div style={{ flex: 1, minWidth: '140px' }}>
        <ShimmerBlock height="20px" width="80px" />
        <div style={{ marginTop: '6px' }}>
          <ShimmerBlock height="40px" />
        </div>
      </div>
      <div style={{ flex: 1, minWidth: '140px' }}>
        <ShimmerBlock height="20px" width="80px" />
        <div style={{ marginTop: '6px' }}>
          <ShimmerBlock height="40px" />
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 'auto', marginTop: '24px' }}>
        <ShimmerBlock height="24px" width="44px" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 'auto', marginTop: '24px' }}>
        <ShimmerBlock height="24px" width="44px" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 'auto', marginTop: '24px' }}>
        <ShimmerBlock height="24px" width="44px" />
      </div>
    </div>
  );
};
