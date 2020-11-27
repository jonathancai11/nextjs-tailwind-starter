import Header from "./header";
import Footer from "./footer";

function Layout(props) {
  return (
    <div>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          {props.children}
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
