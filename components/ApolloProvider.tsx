// components/ApolloProvider.tsx
'use client';

import { ApolloProvider as ApolloHooksProvider } from '@apollo/client';
import client from '../lib/apolloClient';

export default function ApolloProvider({ children }: { children: React.ReactNode }) {
    return <ApolloHooksProvider client={client}>{children}</ApolloHooksProvider>;
}
