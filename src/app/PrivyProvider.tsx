'use client';

import { PrivyProvider } from '@privy-io/react-auth';

export const MyPrivyProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return (
    <PrivyProvider
      appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID || ''}
      config={{
        loginMethods: ['email'],
        appearance: {
          theme: 'light',
          accentColor: '#F59700',
        },
        embeddedWallets: {
          createOnLogin: 'users-without-wallets',
          noPromptOnSignature: true,
        },
      }}
    >
      {children}
    </PrivyProvider>
  );
};
