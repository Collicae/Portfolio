import React from 'react';

type ProgressBarProps = {
  progress: number; // between 0 and 100
  height?: number;
  color?: string;
  backgroundColor?: string;
};

const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  height = 30,
  color = '#0070f3',
  backgroundColor = '#e0e0e0',
}) => {
  return (
    <div
      style={{
        width: '100%',
        backgroundColor,
        borderRadius: height / 2,
        overflow: 'hidden',
        height,
      }}
    >
      <div
        style={{
          width: `${progress}%`,
          backgroundColor: color,
          height: '100%',
          transition: 'width 0.3s ease',
        }}
      />
    </div>
  );
};

export default ProgressBar;
