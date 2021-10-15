import "./Home.css";

const Home = ({ user }) => {
    return (
        <div id="imagefront">
            <h1 id="h1">Welcome to Recipe's Galore!</h1>
            <img
                id="center-fit"
                src="https://www.sheknows.com/wp-content/uploads/2018/08/gqcpoqotbd2xkqjb5x8n.jpeg"
                alt="cooking"
            />{" "}
        </div>
    );
};

export default Home;
