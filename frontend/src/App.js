import { Navigation } from "./routes";
import { ToastContainer } from "react-toastify";
import { AuthProvaider } from "./context"

function App() {
  return (
    <AuthProvaider>
      <div className="App">
        <Navigation />

        <ToastContainer 
          position="top-center"
          autoClose={5000}
          hideProgressBar
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover={false}
        />
      </div>
    </AuthProvaider>
  );
}

export default App;
