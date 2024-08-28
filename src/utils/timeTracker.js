export const startSessionTimer = () => {
    const sessionStart = Date.now();
    localStorage.setItem('sessionStart', sessionStart);
};

export const shouldDisplayAd = () => {
    const sessionStart = localStorage.getItem('sessionStart');
    if (!sessionStart) return false;

    const timeElapsed = (Date.now() - sessionStart) / 1000 / 60; // in minutes
    return timeElapsed > 15 && timeElapsed % 15 === 0;
};

export const resetSessionTimer = () => {
    localStorage.removeItem('sessionStart');
    startSessionTimer();
};
