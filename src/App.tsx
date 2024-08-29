import { Provider } from "react-redux";
import store from "./application/store";

import Home from "./presentation/screens/home/Home";
  
function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
