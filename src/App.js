import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/hero';
import Analytics from './components/Analytics';
import Newsletter from './components/Newsletter';
import Cards from './components/Cards';
import { createContext,useState } from 'react';
import Ratings from './components/Ratings';
import Footer from './components/Footer';
export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
   <div className="App" id={theme}>
    
    <Navbar 
    />
    <Hero />
    <Cards />
    <Analytics />
    <Newsletter />
    <Ratings/>
    <Footer/>
   </div>
   </ThemeContext.Provider>
  );

}
export default App;
