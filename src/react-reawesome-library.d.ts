declare module 'react-reawesome-library' {
    const Toaster: React.FC<{ message: string; duration?: number }>;
    const Button: React.FC<{ label: string; onClick: () => void }>;
    export { Toaster, Button };
  }
  