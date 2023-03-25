import { LandingPage } from "./views/landing";

function App() {

  const headerStyles = {
    background: "transparent",
    color: "darkblue",
    padding: "1em",
    width: "fit-content",
    border: "2px dashed",
    borderRadius: "0 32px 0 32px"
  }
  return (
    <>
      <h1 style={headerStyles}>Rejection Chronicles</h1>
      <LandingPage />
    </>
  );
}

export default App;
