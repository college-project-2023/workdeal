import { useEffect } from "react";
// import custom hook for animation
import { useWow } from "../hooks/useWow";
// import all css
import "../styles/main.css";
import { MyProvider } from "../components/context";
import ChatProvider from "../components/chatprovider.js";

function MyApp({ Component, pageProps }) {
  useWow();
  useEffect(() => {
    import("../../public/assets/js/bootstrap.bundle.min.js");
    
  }, []);

  return (

  <MyProvider>
    <ChatProvider>
    <Component {...pageProps} />
    </ChatProvider>
     
  </MyProvider>);
}
export default MyApp;
