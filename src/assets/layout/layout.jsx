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
      </header>
      <main>{properties.children}</main>
      <footer>
        <p>By Some Idiot</p>
      </footer>
    </>
  );
}

export default Layout;
