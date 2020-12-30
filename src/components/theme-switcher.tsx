import React from 'react';

enum Theme {
    Light,
    Dark
}

interface ThemeSwitcherProps {
    currentTheme: string,
    setThemeFn: Function;
}

function matchesTheme(key: string, theme: Theme): boolean {
    const titleCaseTheme = key.slice(0, 1).toUpperCase() 
        + key.slice(1, key.length);   
    
        return Theme[titleCaseTheme] === theme;
}

function updateTheme(currentTheme: string, setThemeFn: Function): void {
    if (matchesTheme(currentTheme, Theme.Light)) {
        setThemeFn(Theme[Theme.Dark].toLowerCase());
    } else {
        setThemeFn(Theme[Theme.Light].toLowerCase());
    }
}

const ThemeSwitcher = (props: ThemeSwitcherProps) => {
    const currentThemeLightMode = matchesTheme(props.currentTheme, Theme.Light);
    const eventHandler = (event: Event) => {
        event.preventDefault();
        updateTheme(props.currentTheme, props.setThemeFn);
    };

    return (
        <div 
            className="theme-switcher" 
            role='button' 
            aria-label={currentThemeLightMode ? 'Dark Mode' : 'Light Mode'}
            tabIndex='0'
            onClick={eventHandler}
            onKeyDown={(event: KeyboardEvent) => event.key === 'Enter' ? eventHandler(event) : ''}>
            <span className='theme-switcher-text' aria-hidden='true'>
                <i className='material-icons'>
                    {matchesTheme(props.currentTheme, Theme.Light) ? 'dark_mode' : 'light_mode'}
                </i>
            </span>
        </div>
    );
}

export default ThemeSwitcher;