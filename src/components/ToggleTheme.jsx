import React from 'react';

const ToggleTheme = () => {

    const [theme, setTheme] = React.useState('light');
    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };
    // initially set the theme and "listen" for changes to apply them to the HTML tag
    React.useEffect(() => {
        document.querySelector('html').setAttribute('data-theme', theme);
    }, [theme]);
    return (
        <input onClick={toggleTheme} type="checkbox" className="toggle toggle-lg" />
    );
};

export default ToggleTheme;