import Logo from "../components/logo/logo";

/**
 *
 * @param {{children: React.ReactNode}} properties
 * @returns
 */

function Layout(properties) {
  const { children } = properties;
  return (
    <>
      <header>
        <Logo size="60"></Logo>
        <h1>Projects</h1>
        <Logo size="60"></Logo>
      </header>
      <main>{properties.children}</main>
      <footer>
        <p>By Some Idiot</p>
        <span>who is terrible at design</span>
      </footer>
    </>
  );
}

export default Layout;
