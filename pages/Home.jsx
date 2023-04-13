import { About } from "../components/about/About";
import { Events } from "../components/events/Events";
import { Footer } from "../components/footer/Footer";
import { Landing } from "../components/landing/Landing";

function Home() {
  return (
    <>
      <Landing />
      <About />
      <Events />
      <Footer />
    </>
  );
}

export { Home };
