const themeSwitch = () => {
    const themeBtn = document.getElementById('themeBtn');

    const setTheme = () => {
        const currentTheme = localStorage.getItem('theme');
        if (!currentTheme) {
            localStorage.setItem('theme', 'light');
            document.documentElement.dataset.theme = 'light';
            return;
        }
        document.documentElement.dataset.theme = currentTheme;
    }

    setTheme();

    const transition = () => {
        document.documentElement.classList.add('transition');
        setTimeout(() => {
            document.documentElement.classList.remove('transition');
        }, 1000)
    }

    themeBtn.addEventListener('click', () => {
        const { theme } = document.documentElement.dataset;
        const themeTo = theme === 'light' ? 'dark' : 'light';
        document.documentElement.dataset.theme = themeTo;
        localStorage.setItem('theme', themeTo);
        transition();
    });

}

export default themeSwitch;