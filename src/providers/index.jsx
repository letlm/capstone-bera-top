import ApiProvider from "./ApiProvider";
import AuthProvider from "./AuthProvider";
import SearchProvider from "./SearchProvider";
import ModalProvider from "./ModalProvider";

function Providers({ children }) {
  return (
    <AuthProvider>
      <ApiProvider>
        <ModalProvider>
          <SearchProvider>{children}</SearchProvider>
        </ModalProvider>
      </ApiProvider>
    </AuthProvider>
  );
}

export default Providers;
