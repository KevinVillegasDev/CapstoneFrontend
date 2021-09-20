const Logout = () => {
    const handleClick = () => {
        localStorage.clear();
        window.location.href = "/";
    };
    return (
        <button class="nav-link active" onClick={handleClick} id="navtabs">
            Logout
        </button>
    );
};

export default Logout;
