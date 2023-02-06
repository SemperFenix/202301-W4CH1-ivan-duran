import { Button } from "../button/button";
import { Gentleman } from "../gentleman/gentleman";
import { Info } from "../info/info";
import { MOCK_CASPOSOS } from "../../mocks/mock";

function App() {
  return (
    <>
      <header className="main-header">
        <h1 className="main-title">The pointing gentlemen</h1>
        <Button />
      </header>
      <main className="main">
        <ul className="gentlemen">
          {MOCK_CASPOSOS.map((item) => (
            <Gentleman
              id={item.id}
              name={item.name}
              status={item.status}
              profession={item.profession}
              twitter={item.twitter}
              picture={item.picture}
              alternativeText={item.alternativeText}
              selected={item.selected}
            ></Gentleman>
          ))}
        </ul>
      </main>
    </>
  );
}

export default App;
