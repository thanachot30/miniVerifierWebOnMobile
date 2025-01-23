declare module 'react-qr-scanner' {
  import React from 'react';

  interface QrScannerProps {
    delay?: number; // Delay between scans in milliseconds
    onError?: (error: any) => void; // Callback for errors
    onScan?: (data: string | null) => void; // Callback for scan results
    style?: React.CSSProperties; // Inline styles for the component
    className?: string; // CSS class name
    constraints?: MediaTrackConstraints; // Media track constraints
    facingMode?: 'user' | 'environment'; // Camera mode (front/back)
    legacyMode?: boolean; // Enable legacy mode
    maxImageSize?: number; // Maximum image size in pixels (legacy mode)
  }

  const QrScanner: React.FC<QrScannerProps>;
  export default QrScanner;
}
