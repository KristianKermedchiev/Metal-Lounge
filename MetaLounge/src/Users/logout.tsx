const handleLogout = () => {
    localStorage.removeItem('authToken');
    window.location.href = '/';
};

export default handleLogout;
