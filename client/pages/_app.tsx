import { useRef } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Hydrate } from "react-query/hydration";
import "./index.scss";

const App = ({ Component, pageProps }) => {
  const clientRef = useRef(null); // 이렇게 하는 이유는 app.js는 계속 호출되기 때문에
  const getClient = () => {
    if (!clientRef.current)
      clientRef.current = new QueryClient({
        defaultOptions: {
          queries: {
            // 윈도우 포커스 될때 refetch 방지
            refetchOnWindowFocus: false,
          },
        },
      });
    return clientRef.current;
  };

  return (
    <QueryClientProvider client={getClient()}>
      {/* 이거하면 Serverside 데이터를 querykey cache에 사용가능 */}
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  );
};

App.getInitialProps = async ({ ctx, Component }) => {
  const pageProps = await Component.getInitialProps?.(ctx);
  return { pageProps };
};

export default App;
