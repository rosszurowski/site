import React from 'react';
import PropTypes from 'prop-types';

const ICONS = {
  volumeOff: (
    <svg viewBox="0 0 44 42" xmlns="http://www.w3.org/2000/svg">
      <path d="M34.352 20.573a9.403 9.403 0 0 1-1.732 5.44l-3.088-3.301v-7.997c0-.65.561-1.162 1.216-1.162.328 0 .609.14.843.372a9.323 9.323 0 0 1 2.761 6.648zM0 26.5C0 28.825 2.16 31 4.5 31H12l9.575 8.542c.656.697 1.779.744 2.48.14.375-.326.562-.791.562-1.303v-8.136l10.484 11.065c.983.93 2.527.93 3.463-.046.89-.884.936-2.325.094-3.255L5.1 2.581c-.982-.93-2.527-.93-3.463.046a2.365 2.365 0 0 0-.094 3.255l4.634 4.928H4.212C1.92 10.81 0 12.67 0 14.994V26.5zM32.948 3.325c-1.217-.512-2.62.046-3.136 1.255-.514 1.162 0 2.51 1.124 3.068 7.207 3.348 10.25 11.902 6.88 19.015a12.5 12.5 0 0 1-1.826 2.883l3.323 3.533c6.927-7.95 6.084-19.991-1.919-26.872a19.652 19.652 0 0 0-4.446-2.882zm-11.373-1.72l-6.224 5.95 9.313 9.903V2.767C24.664 1.79 23.87 1 22.933 1c-.562 0-1.03.232-1.358.604z" fillRule="nonzero" />
    </svg>
  ),
  volumeFull: (
    <svg viewBox="0 0 44 42" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.092 11.377a5.991 5.991 0 0 1 2.903-.745h6.911l8.24-7.911a2.53 2.53 0 0 1 2.751-.522 2.509 2.509 0 0 1 1.538 2.329v32.944a2.509 2.509 0 0 1-1.538 2.33 2.53 2.53 0 0 1-2.75-.523l-8.241-7.91h-6.91a6.018 6.018 0 0 1-2.895-.742A5.002 5.002 0 0 1 0 26V16a5.002 5.002 0 0 1 3.092-4.623zm28.577 2.945a1.186 1.186 0 0 0-1.296-.29c-.45.176-.747.61-.748 1.091v11.754c.003.481.3.912.75 1.088.451.175.964.06 1.294-.292a9.454 9.454 0 0 0 0-13.351zM44 20.998c0-7.385-4.291-14.104-11.01-17.239a2.391 2.391 0 0 0-3.165 1.167 2.37 2.37 0 0 0 1.172 3.15 14.295 14.295 0 0 1 8.215 12.922 14.295 14.295 0 0 1-8.215 12.922 2.37 2.37 0 0 0-1.172 3.15 2.391 2.391 0 0 0 3.164 1.166C39.71 35.1 44 28.383 44 20.998z" fillRule="nonzero" />
    </svg>
  ),
};

const Icon = ({ icon, fill, size }) => (
  <span style={{ display: 'inline-block', fill, width: `${size}px`, height: `${size}px` }}>
    {ICONS[icon]}
  </span>
);

Icon.propTypes = {
  icon: PropTypes.oneOf(Object.keys(ICONS)).isRequired,
  fill: PropTypes.string,
  size: PropTypes.number,
};

Icon.defaultProps = {
  fill: '#000',
  size: 44,
};

export default Icon;