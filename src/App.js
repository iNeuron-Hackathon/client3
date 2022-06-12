import { Route, Routes } from "react-router-dom";
import PageLayout from "./components/PageLayout";
import SignUp from "./components/Pages/SignUp";
import SignIn from "./components/Pages/SignIn";
import Menu from "./components/Pages/Menu";
import Scanner from "./components/Pages/Scanner";
import Tables from "./components/Tables";
import Auth from "./components/Pages/Auth";
import OrderConfirm from "./components/Pages/OrderConfirm";

const App = () => {
  return (
    <Routes>
          <Route path="/auth" element={<Auth />}/>
      <Route element={<PageLayout />}>
          <Route path="/menu/:tableNo" element={<Menu />}/>
          <Route path="/signup" element={<SignUp />}/>
          <Route path="/signin" element={<SignIn />}/>
          <Route path="/tables" element={<Tables />}/>
          <Route path="/order/confirm" element={<OrderConfirm />}/>
      </Route>
    </Routes>
  );
}

export default App;
