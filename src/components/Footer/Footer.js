import ContentContainer from "../ContentContainer/ContentContainer";

const FooterComponent = () => {
    return (
        <footer className="footer">
            <ContentContainer>
                <span className="footer-text">Gergely Kiraly, 2022</span>
                <span className="footer-text">---</span>
                <a className="footer-text" href="https://github.com/gerikir" target="_blank">GitHUB</a>
            </ContentContainer>
        </footer>
    );
};

export default FooterComponent;
