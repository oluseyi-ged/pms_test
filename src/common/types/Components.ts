import type { ReactNode } from 'react';

export interface Children {
  children: ReactNode;
}

export type LayoutProps = {
  [key: string]: any;
} & Children;
