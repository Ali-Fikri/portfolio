import { ThemeProvider } from "styled-components";
import { lightTheme } from './Themes';

function App() {
  return (
    <>
      <ThemeProvider theme={lightTheme}>App File</ThemeProvider>
    </>
  );
}

export default App;
