const Layout = ({ children }) => {
  return (
    <main className="h-auto sm:h-auto md:h-auto lg:h-screen overflow-x-hidden bg-blue-dark ">
      {children}
    </main>
  );
};

export default Layout;
