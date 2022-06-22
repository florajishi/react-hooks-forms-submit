import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("Sylvia");
  const [lastName, setLastName] = useState("Woods");
  const [submittedData, setSubmittedData] = useState([])

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function handleSubmit(event){
    event.preventDefault();
    const formData = {
      firstName: firstName,
      lastName: lastName,
    };
    const dataArray = [...submittedData, formData]
    setSubmittedData(dataArray)
    setFirstName("")
    setLastName("")
  }
  return (
    <form>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <button type="submit" onSubmit={handleSubmit}>Submit</button>
    </form>
  );
}

export default Form;
