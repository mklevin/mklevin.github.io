import React from 'react';

import EducationSection from './components/education';
import ExperienceSection from './components/experience';
import Header from './components/header';
import SkillsSection from './components/skills';
import ThemeSwitcher from './components/theme-switcher';
import ResumeData from './data.json';
import './App.css';

function App() {
  const [theme, setTheme] = React.useState(
    localStorage.getItem('theme') || ''
  );

  if (theme === '') {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

  document.documentElement.setAttribute("data-theme", theme);
 
  React.useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className='App'>
      <ThemeSwitcher currentTheme={theme} setThemeFn={setTheme}/>
      <div className="Resume">
        <Header resumeInfo={ResumeData.info} />
        <main>
          <ExperienceSection experiences={ResumeData.experience} />
          <div className="sidebar">
            <SkillsSection skills={ResumeData.skills} />
            <EducationSection education={ResumeData.education} />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
