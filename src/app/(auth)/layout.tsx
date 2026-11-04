import { Suspense } from 'react';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Suspense>{children}</Suspense>
    </div>
  );
};

export default AuthLayout;
