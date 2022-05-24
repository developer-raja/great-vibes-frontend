import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [message, setMessage] = useState("");

  const [nameErr, setNameErr] = useState({});
  const [emailErr, setEmailErr] = useState({});

  const onSubmit = (e) => {
    e.preventDefault();
    const isValid = formValidation();
    if (isValid) {
      setName("");
      setEmail("");
      setMobile("");
      setCountry("");
      setCity("");
      setState("");
      setMessage("");
    }
  };

  const formValidation = () => {
    const nameErr = {};
    const emailErr = {};
    let isValid = true;

    if (name.trim().length === 0) {
      nameErr.nameShort = "Name is required";
      isValid = false;
    }

    if (email.trim().length === 0) {
      emailErr.emailShort = "Email is required";
      isValid = false;
    }


    setNameErr(nameErr);
    setEmailErr(emailErr);

    return isValid;
  };

  return (
    <>
      <h1 className="text-center">Registration Form</h1>
      <form className="border shadow-lg p-5" onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">
            Name <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>

        {Object.keys(nameErr).map((key,index) => {
          return <div key={index} style={{ color: "red" }}>{nameErr[key]}</div>;
        })}

        <div className="form-group">
          <label htmlFor="email">
            Email <span className="text-danger">*</span>
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        {Object.keys(emailErr).map((key,index) => {
          return <div key={index} style={{ color: "red" }}>{emailErr[key]}</div>;
        })}

        <div className="form-group">
          <label htmlFor="mobile">Mobile</label>
          <input
            type="email"
            className="form-control"
            id="mobile"
            placeholder="Enter Mobile"
            value={mobile}
            onChange={(e) => {
              setMobile(e.target.value);
            }}
          />
        </div>

        <div className="form-group">
          <label htmlFor="country">Country</label>
          <input
            type="email"
            className="form-control"
            id="country"
            placeholder="Enter Country"
            value={country}
            onChange={(e) => {
              setCountry(e.target.value);
            }}
          />
        </div>

        <div className="form-group">
          <label htmlFor="city">City</label>
          <input
            type="email"
            className="form-control"
            id="city"
            placeholder="Enter City"
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />
        </div>

        <div className="form-group">
          <label htmlFor="state">State</label>
          <input
            type="email"
            className="form-control"
            id="state"
            placeholder="Enter State"
            value={state}
            onChange={(e) => {
              setState(e.target.value);
            }}
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            className="form-control"
            id="message"
            rows="3"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default Form;
