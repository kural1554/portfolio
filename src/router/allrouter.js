import { Routes, Route } from "react-router-dom";
// import Home from "../pages/Home";
// import About from "../pages/About";
// import Projects from "../pages/Projects";
// import Contact from "../pages/Contact";
import { UserRouter } from "./UserRouter"; // Import User Routes

const AppRoutes = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      {/* <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} /> */}

      {/* Dynamically Load Routes from UserRouter */}
      {UserRouter.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export default AppRoutes; // ✅ Now it correctly exports AppRoutes

