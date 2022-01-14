import Footer from './Footer';
import Navbar from './Navbar';

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <Navbar />
      <a href="#">This is a Link</a>
      <main>{children}</main>
      <Footer />
    </>
  );
}
