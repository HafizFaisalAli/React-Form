import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { AuthLayout, DefaultLayout } from "./layout/index.js";
import { Home, About, SignIn, SignUp } from "./pages/index.js";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
        <Route path="/auth" element={<AuthLayout />}>
          <Route index element={<Navigate to="/auth/signin" />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
