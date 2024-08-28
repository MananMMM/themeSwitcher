import { useState } from "react";

export const ThemeSwitcher = () => {
  const [theme, setTheme] = useState("light");

  const switchTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };

  return (
    <div className={`app ${theme}` }>
 
       
      <h2 >Switch theme</h2>
      <div >
      <button onClick={switchTheme} className="button" >
              {theme === 'dark' ? 'light' : 'dark'} 
            </button>


      </div>
    
    </div>
  );
};
