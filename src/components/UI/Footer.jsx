export default function Footer() {
  // The Navbar UI component will render each of the Link elements in the links prop
  return (
    <footer className="bg-secondary">
      <a href="https://github.com/MrDietCola" target="_blank"><img src="src/assets/github-mark.png" alt="" /></a>
      <a href="https://www.linkedin.com/in/a-j-seidler-a50556b2/" target="_blank"><img src="src/assets/linkedin.svg" alt="" /></a>
      <a href="">Another Link</a>
    </footer>
  );
}