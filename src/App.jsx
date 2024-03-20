import "./App.css";
import Header from "./component/Header";
// import localImage from './assets/card.png'
import Icon1 from "./assets/Frame.svg";
import Icon2 from "./assets/carcel.svg";
import { useEffect } from "react";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

function App() {
  // all product
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  // add to product cart
  const [cart, setCart] = useState([]);
  const [cook, setCook] = useState([]);

  // add product card
  const handelCard = (p) => {
    // const isExist = cart.find(item => item.id === p.recipe_id);
    const isExist = cart.find((item) => item.recipe_id == p.recipe_id);

    if (!isExist) {
      setCart([...cart, p]);
    } else {
      toast.error("already in card");
    }
  };

  // Preparing handle button
  const handlePreparing = (id) => {
    // console.log("parering cart",id)
    const cookItem = cart.find((item) => item.recipe_id == id);
    const newCart = cart.filter((item) => item.recipe_id !== id);
    // console.log("new cook",cookItem)
    setCook([...cook, cookItem]);
    setCart(newCart);
  };

  return (
    <div>
      <div>
        <Header></Header>
      </div>

      <div className="py-20">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto mb-14">
            <h3 className="lg:text-4xl mb-3 font-semibold">Our Recipes</h3>
            <p className="text-heading/60">
              Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus
              vulputate netus pharetra rhoncus. Eget urna volutpat curabitur
              elementum mauris aenean neque.{" "}
            </p>
          </div>
          <div className="grid lg:grid-cols-[650px,minmax(0,1fr)] grid-cols-1 gap-6 items-start ">
            <div className="grid md:grid-cols-2 gap-3">
              {product.map((pd) => (
                <div 
                  key={pd.recipe_id}
                  className="hover:shadow-xl duration-300 border p-4 rounded-2xl border-heading/30 flex flex-col"
                >
                  <div className="flex-grow">
                    <img
                      className="w-full h-auto aspect-[1/.6] object-cover rounded-2xl"
                      src={pd.recipe_image}
                      alt=""
                    />
                    <h5 className="text-xl mt-5 font-semibold">
                      {pd.recipe_name}
                    </h5>
                    <p className="mt-3 text-base border-b border-heading/30 pb-5">
                      {pd.short_description.slice(0, 50)}
                    </p>

                    <div className="pb-5 pt-2">
                      <h6 className="font-medium mt-2 mb-1">
                        Ingredients: {pd.ingredients.length}
                      </h6>

                      <ul className="list-disc pl-4 flex flex-col gap-3">
                        {pd.ingredients.map((item, index) => (
                          <li className="text-gray-400" key={index}>
                            {" "}
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="border-t border-heading/30">
                    <div className="flex flex-wrap items-center gap-3 mt-3">
                      <p className="flex items-center gap-1">
                        <img src={Icon1} alt="" />
                        <span className="text-base">
                          {pd.preparing_time}
                        </span>
                      </p>
                      <p className="flex items-center gap-1">
                        <img src={Icon2} alt="" />
                        <span className="text-base">{pd.calories}</span>
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        handelCard(pd);
                      }}
                      className="text-white rounded-full py-2 px-5 text-lg font-medium mt-4"
                    >
                      Want to Cook
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="border rounded-2xl border-heading/30 sticky top-5">
              <h5 className="text-center lg:text-2xl border-b border-heading/30 max-w-96 mx-auto p-4">
                Want to cook: {cart?.length}
              </h5>
              
              {cart.length > 0 ? (
                <div className="pt-6 overflow-x-auto">
                  <table className="w-full text-left rounded-lg ">
                    <thead>
                      <tr>
                        <th className="pb-3"></th>
                        <th className="pb-3">Name</th>
                        <th className="pb-3">Time</th>
                        <th className="pb-3">Calories</th>
                        <th className="pb-3"></th>
                      </tr>
                    </thead>

                    <tbody>
                      {cart.map((item, index) => (
                        <tr key={index} className="group">
                          <td className="px-2 py-3 border-b border-gray-200 bg-gray-50 group-last:border-b-0">
                            {index + 1}
                          </td>
                          <td className="px-2 py-3 border-b border-gray-200 bg-gray-50 group-last:border-b-0">
                            {item.recipe_name}
                          </td>
                          <td className="px-2 py-3 border-b border-gray-200 bg-gray-50 group-last:border-b-0">
                            {item.preparing_time}
                          </td>
                          <td className="px-2 py-3 border-b border-gray-200 bg-gray-50 group-last:border-b-0">
                            {item.calories}
                          </td>
                          <td className="px-2 py-3 border-b border-gray-200 bg-gray-50 group-last:border-b-0">
                            <button
                              onClick={() => handlePreparing(item.recipe_id)}
                              className="py-1 px-3 rounded-full font-medium text-base text-white"
                            >
                              Preparing
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : null}

              <div className="py-6">
                <h5 className="text-center lg:text-2xl border-b border-heading/30 max-w-96 mx-auto pb-4 px-4">
                  Currently cooking: {cook?.length}
                </h5>
                
              {cook.length > 0 ? (
                <table className="w-full text-left rounded-lg mt-6">
                  <thead>
                    <tr>
                      <th className="pb-3"></th>
                      <th className="pb-3">Name</th>
                      <th className="pb-3">Time</th>
                      <th className="pb-3">Calories</th>
                      <th className="pb-3"></th>
                    </tr>
                  </thead>

                  <tbody>
                    {cook.map((item,i) => (
                      <tr key={item.recipe_id} className="group">
                        <td className="px-2 py-3 border-b border-gray-200 bg-gray-50 group-last:border-b-0">
                          {i+1}
                        </td>
                        <td className="px-2 py-3 border-b border-gray-200 bg-gray-50 group-last:border-b-0">
                        {item.recipe_name}
                        </td>
                        <td className="px-2 py-3 border-b border-gray-200 bg-gray-50 group-last:border-b-0">
                          {item.preparing_time}
                        </td>
                        <td className="px-2 py-3 border-b border-gray-200 bg-gray-50 group-last:border-b-0">
                          {item.calories}
                        </td>
                        <td className="px-2 py-3 border-b border-gray-200 bg-gray-50 group-last:border-b-0">
                          <button className="py-1 px-3 rounded-full font-medium text-base text-white">
                            Preparing
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : null}
              </div>

            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
}

export default App;
