import { useEffect, useState } from "react";

const App = () => {
  console.log("Commonunt running");

  const [ennodaproduct, setEnnodaprodcut] = useState([]);
  const [searchpannuraproduct, setSearchPannuraproduct] = useState("");
  const [ennodacat, setEnnodacat] = useState([]);
  const [catvalue, setCatvalue] = useState("");
  const [enodaprocess, setEnodaprocess] = useState("");

  const data = [{ name: "Lowtohigh" }, { name: "hightolow" }];

  const fetchproducts = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products?limit=6");
      //console.log(res);
      const datas = await res.json();
      setEnnodaprodcut(datas.products);
      //console.log(datas.products);

      const allcat = datas.products.map((cat) => cat.category);

      //console.log(allcat);

      const removecat = Array.from(new Set(allcat));
      //console.log(removecat);
      setEnnodacat(removecat);
    } catch (error) {
      console.log("Sommeting error", error.message);
    }
  };

  useEffect(() => {
    fetchproducts();
  }, []);

  const serchpannuradata = (e) => {
    //console.log(e.target.value);

    setSearchPannuraproduct(e.target.value);
  };

  const sortvalue = (e) => {
    setEnodaprocess(e.target.value);
  };

  const searchpannu = () => {
    let searchfirst = ennodaproduct;

    if (catvalue !== "") {
      searchfirst = searchfirst.filter((e) => e.category === catvalue);
    }

    if (searchpannuraproduct !== "") {
      searchfirst = ennodaproduct.filter((e) =>
        e.title.toLowerCase().includes(searchpannuraproduct.toLowerCase())
      );
    }

    if (enodaprocess === "Lowtohigh") {
      searchfirst = ennodaproduct.sort((a, b) => a.price - b.price);
    } else if (enodaprocess === "hightolow") {
      searchfirst = ennodaproduct.sort((a, b) => b.price - a.price);
    }

    return searchfirst;
  };

  const catnewvalue = (e) => {
    setCatvalue(e.target.value);
  };

  const datas = searchpannu();

  return (
    <>
      <div className="bg-blue-500 h-250 p-10  ">
        <div>
          <h1 className="text-center text-2xl text-white">Products</h1>

          <div className="text-center my-3 flex gap-20 justify-center">
            <input
              type="text"
              placeholder="search"
              onChange={serchpannuradata}
              className="bg-white p-2 w-100 rounded-2xl border-0"
            />
            <select
              className="w-100 bg-white h-10 p-1 rounded-2xl"
              onChange={catnewvalue}
            >
              <option value="" selected disabled>
                Choose One...
              </option>

              {ennodacat.map((e, i) => (
                <option value={e} key={i}>
                  {e}
                </option>
              ))}
            </select>
            <select
              className="w-100 bg-white h-10 p-1 rounded-2xl"
              onChange={sortvalue}
            >
              <option value="" selected dd>
                Closes one...
              </option>
              {data.map((e, i) => (
                <option value={e.name} key={i}>
                  {e.name}
                </option>
              ))}
            </select>
          </div>

          <div className="flex my-10 gap-20 flex-wrap justify-center">
            {datas.map((e) => (
              <div className="w-50 bg-white p-6 rounded-2xl" key={e.id}>
                <img src={e.images} alt="" />
                <h1>
                  {e.title.length > 20 ? e.title.slice(0, 20) + "..." : e.title}
                </h1>
                <p>
                  {e.description.length > 30
                    ? e.description.slice(0, 30) + "..."
                    : e.description}
                </p>
                <p className="bg-green-300 mt-3 text-center w-14 p-1">
                  {e.price}
                </p>
                <button className="bg-orange-600 p-1 rounded mt-5 text-white hover:bg-black w-25">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default App;
