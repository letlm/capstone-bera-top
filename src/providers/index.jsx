import ApiProvider from "./ApiProvider";
import AuthProvider from "./AuthProvider";
import SearchProvider from "./SearchProvider";

function Providers({ children }) {
  return (
    <AuthProvider>
      <ApiProvider>
        <SearchProvider>{children}</SearchProvider>
      </ApiProvider>
    </AuthProvider>
  );
}

export default Providers;
