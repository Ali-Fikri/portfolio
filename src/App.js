import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme } from './components/Themes';
import { Home, About, MySkills, Work } from './components';

function App() {
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/my-skills' element={<MySkills />} />
          <Route path='/work' element={<Work />} />
        </Routes>
        </ThemeProvider>
    </>
  );
}

export default App;
