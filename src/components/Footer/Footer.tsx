import "./footer.scss";

export const footer = () => (
  <footer className="footer">
    <div className="footer__copyright">
      &copy; {new Date().getFullYear()} Made with ❤️ by{" "}
      <a
        className="footer__copyright--link"
        href="https://github.com/devarcanjo"
      >
        Dev Victor Arcanjo
      </a>
    </div>
  </footer>
);
