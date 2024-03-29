import "./../styles/app.scss";

import type { AppProps } from "next/app";
import Providers from "@/src/provider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
  );
}
