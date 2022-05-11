import ApiProvider from "./ApiProvider";
import AuthProvider from "./AuthProvider";

function Providers({ children }) {
  return (
    <AuthProvider>
      <ApiProvider>{children}</ApiProvider>
    </AuthProvider>
  );
}

export default Providers;
