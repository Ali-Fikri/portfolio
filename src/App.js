import { Route, Routes, useLocation } from "react-router-dom";

import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./components/Themes";
import { Home, About, MySkills, Work } from "./components";

function App() {
  const location = useLocation();

  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/my-skills" element={<MySkills />} />
            <Route path="/work" element={<Work />} />
          </Routes>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}

export default App;
