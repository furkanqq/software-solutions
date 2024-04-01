import { AuthProvider } from '@/src/provider/Auth';
import { createStore, Provider } from 'jotai';

interface IProps {
  children: React.ReactNode;
}

export const XStore = createStore();
export default function Providers({ children }: IProps) {
  return (
    <Provider store={XStore}>
      <AuthProvider>{children}</AuthProvider>
    </Provider>
  );
}
