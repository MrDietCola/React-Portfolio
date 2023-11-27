export default function Footer() {
  // The Navbar UI component will render each of the Link elements in the links prop
  return (
    <footer className="bg-secondary p-5 d-flex justify-content-center footer-section">
      <a className="p-2" href="https://github.com/MrDietCola" target="_blank"><img className="footer-img" src="src/assets/github-mark.png" alt="" /></a>
      <a className="p-2" href="https://www.linkedin.com/in/a-j-seidler-a50556b2/" target="_blank"><img className="footer-img" src="src/assets/linkedin.svg" alt="" /></a>
      <a className="p-2" href=""><img className="footer-img" src="src/assets/linkedin.svg" alt="" /></a>
    </footer>
  );
}