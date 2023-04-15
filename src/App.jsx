import { useEffect } from "react";
import { Home } from "../pages/Home";

function App() {
  // TODO: Router setup here
  // on page load, check if there is any hash in the url
  // if there is, scroll to that element
  // if there isn't, scroll to the top of the page

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView();
      }
    } else {
      window.scrollTo(0, 0);
    }
  });

  return (
    <>
      <Home />
    </>
  );
}

export default App;
