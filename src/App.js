import "./sass/_app.scss";
import BookList from "./components/BookList";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <div className="app">
            <Header/>
            <BookList/>
            <Footer/>
        </div>
    );
}

export default App;
