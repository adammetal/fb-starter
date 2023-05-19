import { useState } from "react";

const types = [
  {
    name: "IPA",
    description: "India Pale Ale",
  },
  {
    name: "Stout",
    description: "Strong, dark beer",
  },
  {
    name: "Pilsner",
    description: "Pale lager with a crisp taste",
  },
  {
    name: "Wheat Beer",
    description: "Beer made from wheat malt",
  },
  {
    name: "Porter",
    description: "Dark beer with a rich, roasted flavor",
  },
  {
    name: "Amber Ale",
    description: "Medium-bodied, amber-colored beer",
  },
  {
    name: "Saison",
    description: "Belgian farmhouse ale",
  },
  {
    name: "Brown Ale",
    description: "Malty, caramel-flavored beer",
  },
  {
    name: "Hefeweizen",
    description: "German wheat beer with banana and clove flavors",
  },
  {
    name: "Belgian Tripel",
    description: "Strong, golden ale with complex flavors",
  },
  {
    name: "Lager",
    description: "Bottom-fermented beer with a clean, crisp taste",
  },
  {
    name: "Sour Ale",
    description: "Tart and acidic beer style",
  },
  {
    name: "Pale Ale",
    description: "Hop-forward beer with a pale color",
  },
  {
    name: "Gose",
    description: "Salty and sour German beer style",
  },
  {
    name: "Scotch Ale",
    description: "Sweet and malty Scottish beer",
  },
];

function BeerMessage(props) {
  const [beer, setBeer] = useState("");
  const [type, setType] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // validation?
    if (beer.length > 0 && type.length > 0 && message.length > 0) {
      props.onSend({ beer, type, message });
      setBeer('');
      setType('');
      setMessage('');
    }
  };

  /**
   *
   * @param {function} setter
   * State setter function that accept a string
   *
   * @returns {function}
   * The concrete event handler to wire into input.
   */
  const changeHandler = (setter) => {
    return (event) => {
      setter(event.target.value);
    };
  };

  return (
    <div className="card">
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label htmlFor="beer">Name of the beer you drank</label>
            <input
              value={beer}
              onChange={changeHandler(setBeer)}
              id="beer"
              className="form-control"
              type="text"
            />
          </div>

          {/* .mb-2>label+textarea */}
          <div className="mb-2">
            <label htmlFor="message">Was it good?</label>
            <textarea
              value={message}
              onChange={changeHandler(setMessage)}
              className="form-control"
              id="message"
            />
          </div>

          <div className="mb-2">
            <label htmlFor="type">Type of a beer you drank</label>
            <select
              value={type}
              onChange={changeHandler(setType)}
              className="form-select"
              id="type"
            >
              <option value="">Select a beer type</option>
              {types.map((type) => (
                <option key={type.name} value={type.name}>
                  {type.name} - {type.description}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-2">
            <button type="submit" className="btn btn-primary">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BeerMessage;
