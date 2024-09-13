export const ThemeChangeListener = () => {
    return (
        // This component will be responsible for listening to theme changes, and making changes to the data-theme attribute
        <script dangerouslySetInnerHTML={{
            __html: `
            window.addEventListener('themeChange', function() {
                document.documentElement.setAttribute('data-theme', document.cookie.includes('theme=dark') ? 'dark' : 'light');
            });
            `
        }} />
    )
}