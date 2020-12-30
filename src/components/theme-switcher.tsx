import React from 'react';

enum Theme {
    LIGHT,
    DARK
}

interface ThemeSwitcherProps {
    enabled: boolean,
    currentTheme: string,
    setThemeFn: Function;
}

function matchesTheme(key: string, theme: Theme): boolean {
    const titleCaseTheme = key.slice(0, 1).toUpperCase() 
        + key.slice(1, key.length);   
    
        return Theme[titleCaseTheme] === theme;
}

function updateTheme(currentTheme: string, setThemeFn: Function): void {
    if (matchesTheme(currentTheme, Theme.LIGHT)) {
        setThemeFn(Theme[Theme.DARK].toLowerCase());
    } else {
        setThemeFn(Theme[Theme.LIGHT].toLowerCase());
    }
}

const ThemeSwitcher = (props: ThemeSwitcherProps) => {
    const currentThemeLightMode = matchesTheme(props.currentTheme, Theme.Light);
    const label = currentThemeLightMode ? 'Dark Mode' : 'Light Mode';
    const eventHandler = (event: Event) => {
        event.preventDefault();
        updateTheme(props.currentTheme, props.setThemeFn);
    };

    if (props.enabled) {
        return (
            <div
                className='theme-switcher'
                role='button' 
                title={label}
                aria-label={label}
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
    } else {
        return '';
    }
}

export default ThemeSwitcher;