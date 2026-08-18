import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('tcongs_theme');
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  });

  const [isThemeToggleHighlighted, setIsThemeToggleHighlighted] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.add('light');
      root.classList.remove('dark');
    } else {
      root.classList.add('dark');
      root.classList.remove('light');
    }
    localStorage.setItem('tcongs_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setIsThemeToggleHighlighted(false);
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const triggerThemeToggleHighlight = () => {
    setIsThemeToggleHighlighted(true);
    setTimeout(() => {
      setIsThemeToggleHighlighted(false);
    }, 6000);
  };

  return (
    <ThemeContext.Provider value={{ 
      theme, 
      toggleTheme, 
      setTheme, 
      isThemeToggleHighlighted, 
      setIsThemeToggleHighlighted,
      triggerThemeToggleHighlight 
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
