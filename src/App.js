import "./sass/_app.scss";
import BookList from "./components/BookList";
import Header from "./components/Header";
import Footer from "./components/Footer";

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
