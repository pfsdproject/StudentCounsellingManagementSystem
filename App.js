import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import mystore from "./redux/store";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import StudentHome from "./Screens/Student/Home";
import CounsellorHome from "./Screens/Counsellor/Home";
import ParentHome from "./Screens/Parent/Home";
import AdminHome from "./Screens/Admin/Home";

const App = () => {
  return (
    <Provider store={mystore}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/student" element={<StudentHome />} />
          <Route path="/counsellor" element={<CounsellorHome />} />
          <Route path="/parent" element={<ParentHome />} />
          <Route path="/admin" element={<AdminHome />} />
          {/* Add a catch-all route for 404 errors */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </Provider>
  );
};

const NotFound = () => {
  return <h1>404 - Not Found</h1>;
};

export default App;
