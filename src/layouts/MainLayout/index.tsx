import Footer from "./components/Footer";
import Header from "./components/Header";

interface IMainLayoutProps {
  children: React.ReactNode;
}
const MainLayout: React.FC<IMainLayoutProps> = ({ children }) => {
  return (
    <div className="bg-background">
      <div className="container">
        <Header />
        <div className="my-6">{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
