import { useEffect, useState } from "react";
import CheckButton from "./CheckButton";
import "./App.css";
import YoutubeVideoEmbed from "./YoutubeVideoEmbed";
import ReactGA from "react-ga4";

function App() {
  useEffect(() => {
    ReactGA.initialize("G-QHRXB6LR9T");
  }, []);

  //PROTEIN
  const [beef, setBeef] = useState(true);
  const [chicken, setChicken] = useState(true);
  const [shrimps, setShrimps] = useState(false);
  const [pork, setPork] = useState(true);
  const [tofu, setTofu] = useState(true);
  const [tempeh, setTempeh] = useState(false);

  //VEGETABLES
  const [broccoli, setBroccoli] = useState(true);
  const [cauliflower, setCauliflower] = useState(true);
  const [mushroom, setMushroom] = useState(true);
  const [cabbage, setCabbage] = useState(true);
  const [pakchoi, setPakchoi] = useState(false);
  const [bellPepper, setBellPepper] = useState(true);
  const [celery, setCelery] = useState(true);
  const [onion, setOnion] = useState(true);
  const [bambooShoot, setBambooShoot] = useState(false);
  const [carrot, setCarrot] = useState(true);
  const [greenBeans, setGreenBeans] = useState(false);
  const [zucchini, setZucchini] = useState(false);

  //TOPPINGS
  const [cashewNuts, setCashewNuts] = useState(false);
  const [peanuts, setPeanuts] = useState(true);
  const [almonds, setAlmonds] = useState(false);
  const [sesameSeeds, setSesameSeeds] = useState(true);
  const [chilis, setChilis] = useState(true);

  //CARBS
  const [rice, setRice] = useState(true);
  const [noodles, setNoodles] = useState(true);
  const [anythingSolid, setAnythingSolid] = useState(true);
  const [noCarbsOne, setNoCarbsOne] = useState(true);
  const [noCarbsTwo, setNoCarbsTwo] = useState(true);

  // HERBS
  const [basil, setBasil] = useState(true);
  const [thaiBasil, setThaiBasil] = useState(true);
  const [mint, setMint] = useState(false);
  const [coriander, setCoriander] = useState(false);
  const [parsley, setParsley] = useState(true);
  const [springOnions, setSpringOnions] = useState(true);

  const [recipe, setRecipe] = useState(null);

  function createNewDish() {
    const proteins = [];
    if (beef) proteins.push("Beef");
    if (chicken) proteins.push("Chicken");
    if (shrimps) proteins.push("Shrimps");
    if (pork) proteins.push("Pork");
    if (tofu) proteins.push("Tofu");
    if (tempeh) proteins.push("Tempeh");

    const veggies = [];
    if (broccoli) veggies.push("Broccoli");
    if (cauliflower) veggies.push("Cauliflower");
    if (mushroom) veggies.push("Mushroom");
    if (cabbage) veggies.push("Cabbage");
    if (pakchoi) veggies.push("Pakchoi");
    if (bellPepper) veggies.push("Bell Pepper");
    if (celery) veggies.push("Celery");
    if (onion) veggies.push("Onion");
    if (bambooShoot) veggies.push("Bamboo Shoot");
    if (carrot) veggies.push("Carrot");
    if (greenBeans) veggies.push("Green Beans");
    if (zucchini) veggies.push("Zucchini");

    const toppings = [];
    if (cashewNuts) toppings.push("Cashew Nuts");
    if (peanuts) toppings.push("Peanuts");
    if (almonds) toppings.push("Almonds");
    if (sesameSeeds) toppings.push("Sesame Seeds");
    if (chilis) toppings.push("Chilis");

    const carbs = [];
    if (rice) carbs.push("Rice");
    if (noodles) carbs.push("Noodles");
    if (anythingSolid) carbs.push("Anything Solid");
    if (noCarbsOne) carbs.push("No Carbs");
    if (noCarbsTwo) carbs.push("No Carbs");

    const herbs = [];
    if (basil) herbs.push("Basil");
    if (thaiBasil) herbs.push("ThaiBasil");
    if (mint) herbs.push("Mint");
    if (coriander) herbs.push("Coriander");
    if (parsley) herbs.push("Parsley");
    if (springOnions) herbs.push("Spring Onions");

    const emojis = [
      "😎",
      "🥢",
      "😋",
      "🤤",
      "😍",
      "🤗",
      "🤩",
      "🤪",
      "😁",
      "😗",
      "🥡",
    ];

    const newRecipe = `
    ${pickOne(proteins)},
    ${pickOne(veggies)},
    ${pickOne(carbs)},
    ${pickOne(toppings)},
    ${pickOne(herbs)} ${pickOne(emojis)} Stir Fry!`;

    function pickOne(optionsArray) {
      return optionsArray[Math.floor(Math.random() * optionsArray.length)];
    }

    setRecipe(newRecipe);

    // Send a custom event
    ReactGA.event({
      category: "Button",
      action: "Click",
      label: "Generate Recipe", // optional
    });
  }

  return (
    <div className="App">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <h1 className="display-3">Stir Fry Generator 2099</h1>
          </div>
          <div className="col-12 col-lg-5">
            <h2 className="mb-3">Protein 🍤🥩</h2>
            <ul className="list-inline">
              <li className="list-inline-item">
                <CheckButton
                  label="Beef"
                  checked={beef}
                  onClicked={() => setBeef(!beef)}
                ></CheckButton>
              </li>
              <li className="list-inline-item">
                <CheckButton
                  label="Chicken"
                  checked={chicken}
                  onClicked={() => setChicken(!chicken)}
                ></CheckButton>
              </li>
              <li className="list-inline-item">
                <CheckButton
                  label="Pork"
                  checked={pork}
                  onClicked={() => setPork(!pork)}
                ></CheckButton>
              </li>
              <li className="list-inline-item">
                <CheckButton
                  label="Shrimps"
                  checked={shrimps}
                  onClicked={() => setShrimps(!shrimps)}
                ></CheckButton>
              </li>
              <li className="list-inline-item">
                <CheckButton
                  label="Tofu"
                  checked={tofu}
                  onClicked={() => setTofu(!tofu)}
                ></CheckButton>
              </li>
              <li className="list-inline-item">
                <CheckButton
                  label="Tempeh"
                  checked={tempeh}
                  onClicked={() => setTempeh(!tempeh)}
                ></CheckButton>
              </li>
            </ul>
          </div>
          <div className="col-12 col-lg-5">
            <h2 className="mb-3">Carbs 🍚🍜</h2>
            <ul className="list-inline">
              <li className="list-inline-item">
                <CheckButton
                  label="Rice"
                  checked={rice}
                  baseColor="secondary"
                  onClicked={() => setRice(!rice)}
                ></CheckButton>
              </li>
              <li className="list-inline-item">
                <CheckButton
                  label="Noodles"
                  checked={noodles}
                  baseColor="secondary"
                  onClicked={() => setNoodles(!noodles)}
                ></CheckButton>
              </li>
              <li className="list-inline-item">
                <CheckButton
                  label="Anything-solid"
                  checked={anythingSolid}
                  baseColor="secondary"
                  onClicked={() => setAnythingSolid(!anythingSolid)}
                ></CheckButton>
              </li>
              <li className="list-inline-item">
                <CheckButton
                  label="No Carbs Needed"
                  checked={noCarbsOne}
                  baseColor="secondary"
                  onClicked={() => setNoCarbsOne(!noCarbsOne)}
                ></CheckButton>
              </li>
              <li className="list-inline-item">
                <CheckButton
                  label="No Carbs Needed"
                  checked={noCarbsTwo}
                  baseColor="secondary"
                  onClicked={() => setNoCarbsTwo(!noCarbsTwo)}
                ></CheckButton>
              </li>
            </ul>
          </div>
          <div className="col col-lg-10">
            <h2 className="mb-3">Vegetables 🥦🥕</h2>
            <ul className="list-inline">
              <li className="list-inline-item">
                <CheckButton
                  label="Broccoli"
                  checked={broccoli}
                  baseColor="success"
                  onClicked={() => setBroccoli(!broccoli)}
                ></CheckButton>
              </li>
              <li className="list-inline-item">
                <CheckButton
                  label="Cauliflower"
                  checked={cauliflower}
                  baseColor="success"
                  onClicked={() => setCauliflower(!cauliflower)}
                ></CheckButton>
              </li>
              <li className="list-inline-item">
                <CheckButton
                  label="Mushroom"
                  checked={mushroom}
                  baseColor="success"
                  onClicked={() => setMushroom(!mushroom)}
                ></CheckButton>
              </li>
              <li className="list-inline-item">
                <CheckButton
                  label="Cabbage"
                  checked={cabbage}
                  baseColor="success"
                  onClicked={() => setCabbage(!cabbage)}
                ></CheckButton>
              </li>
              <li className="list-inline-item">
                <CheckButton
                  label="Pakchoi"
                  checked={pakchoi}
                  baseColor="success"
                  onClicked={() => setPakchoi(!pakchoi)}
                ></CheckButton>
              </li>
              <li className="list-inline-item">
                <CheckButton
                  label="Bell Pepper"
                  checked={bellPepper}
                  baseColor="success"
                  onClicked={() => setBellPepper(!bellPepper)}
                ></CheckButton>
              </li>
              <li className="list-inline-item">
                <CheckButton
                  label="Celery"
                  checked={celery}
                  baseColor="success"
                  onClicked={() => setCelery(!celery)}
                ></CheckButton>
              </li>
              <li className="list-inline-item">
                <CheckButton
                  label="Onion"
                  checked={onion}
                  baseColor="success"
                  onClicked={() => setOnion(!onion)}
                ></CheckButton>
              </li>
              <li className="list-inline-item">
                <CheckButton
                  label="Bamboo shoot"
                  checked={bambooShoot}
                  baseColor="success"
                  onClicked={() => setBambooShoot(!bambooShoot)}
                ></CheckButton>
              </li>
              <li className="list-inline-item">
                <CheckButton
                  label="Carrot"
                  checked={carrot}
                  baseColor="success"
                  onClicked={() => setCarrot(!carrot)}
                ></CheckButton>
              </li>
              <li className="list-inline-item">
                <CheckButton
                  label="Green Beans"
                  checked={greenBeans}
                  baseColor="success"
                  onClicked={() => setGreenBeans(!greenBeans)}
                ></CheckButton>
              </li>
              <li className="list-inline-item">
                <CheckButton
                  label="Zucchini"
                  checked={zucchini}
                  baseColor="success"
                  onClicked={() => setZucchini(!zucchini)}
                ></CheckButton>
              </li>
            </ul>
          </div>
          <div className="col-12 col-lg-5">
            <h2 className="mb-3">Toppings 🥜🌶️</h2>
            <ul className="list-inline">
              <li className="list-inline-item">
                <CheckButton
                  label="Cashew Nuts"
                  checked={cashewNuts}
                  baseColor="danger"
                  onClicked={() => setCashewNuts(!cashewNuts)}
                ></CheckButton>
              </li>
              <li className="list-inline-item">
                <CheckButton
                  label="Peanuts"
                  checked={peanuts}
                  baseColor="danger"
                  onClicked={() => setPeanuts(!peanuts)}
                ></CheckButton>
              </li>
              <li className="list-inline-item">
                <CheckButton
                  label="Almonds"
                  checked={almonds}
                  baseColor="danger"
                  onClicked={() => setAlmonds(!almonds)}
                ></CheckButton>
              </li>
              <li className="list-inline-item">
                <CheckButton
                  label="Sesame Seeds"
                  checked={sesameSeeds}
                  baseColor="danger"
                  onClicked={() => setSesameSeeds(!sesameSeeds)}
                ></CheckButton>
              </li>
              <li className="list-inline-item">
                <CheckButton
                  label="Chilis"
                  checked={chilis}
                  baseColor="danger"
                  onClicked={() => setChilis(!chilis)}
                ></CheckButton>
              </li>
            </ul>
          </div>
          <div className="col-12 col-lg-5">
            <h2 className="mb-3">Herbs 🌿🪴</h2>
            <ul className="list-inline">
              <li className="list-inline-item">
                <CheckButton
                  label="Basil"
                  checked={basil}
                  baseColor="info"
                  onClicked={() => setBasil(!basil)}
                ></CheckButton>
              </li>
              <li className="list-inline-item">
                <CheckButton
                  label="Thai Basil"
                  checked={thaiBasil}
                  baseColor="info"
                  onClicked={() => setThaiBasil(!thaiBasil)}
                ></CheckButton>
              </li>
              <li className="list-inline-item">
                <CheckButton
                  label="Mint"
                  checked={mint}
                  baseColor="info"
                  onClicked={() => setMint(!mint)}
                ></CheckButton>
              </li>
              <li className="list-inline-item">
                <CheckButton
                  label="Coriander"
                  checked={coriander}
                  baseColor="info"
                  onClicked={() => setCoriander(!coriander)}
                ></CheckButton>
              </li>
              <li className="list-inline-item">
                <CheckButton
                  label="Parsley"
                  checked={parsley}
                  baseColor="info"
                  onClicked={() => setParsley(!parsley)}
                ></CheckButton>
              </li>
              <li className="list-inline-item">
                <CheckButton
                  label="Spring Onions"
                  checked={springOnions}
                  baseColor="info"
                  onClicked={() => setSpringOnions(!springOnions)}
                ></CheckButton>
              </li>
            </ul>
          </div>
          <div className="col-12 col-lg-10">
            <div className="d-flex justify-content-center mb-3">
              <button
                className="btn btn-lg btn-warning"
                onClick={createNewDish}
              >
                Generate Stir Fry 🧞‍♂️
              </button>
            </div>
            {recipe && (
              <div className="card text-bg-dark">
                <div className="card-body">
                  <div className="display-3">{recipe}</div>
                </div>
              </div>
            )}
            <div className="text-center mb-3">
              <hr />
              <div className="text-muted">
                Inspired by{" "}
                <a
                  href="https://www.youtube.com/watch?v=fBoV65FSbkQ&t=339s"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Alex "French Guy Cooking" Youtube channel
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-4">
            <YoutubeVideoEmbed videoID={"fBoV65FSbkQ"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
