import Header from "./header";
import Footer from "./footer";

function Layout(props) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="sm:mx-12 md:mx-32 lg:mx-56 xl:mx-72 mx-2"> 
        {props.children}
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
