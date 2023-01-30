import React, { useEffect, useRef, useState } from "react";

function Dropdown({ options, value, onChange }) {

  const [showDropdown, setShowDropdown] = useState(false);

  const divEl = useRef();

  // -------------------- USEEFFECT FOR SETTING AND REMOVING CLICK EVENT LISTENER -------------------- vv//
  useEffect(() => {
    // ----- FUNCTION THAT WILL EXECUTE WHEN EVENT LISTENER HEARS EVENT (in this case, a click) ----- vv//
    const handler = (event) => {
      if (!divEl.current) return;
      
      if (!divEl.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    // ----- FUNCTION THAT WILL EXECUTE WHEN EVENT LISTENER HEARS EVENT ----- ^^//

    // ----- SETTING EVENT LISTENER ----- vv//
    document.addEventListener("click", handler, true);
    // ----- SETTING EVENT LISTENER ----- ^^//

    // ----- CLEANUP FUNCTION TO REMOVE EVENT LISTENER ----- vv//
    return () => {
      document.removeEventListener("click", handler);
    };
    // ----- CLEANUP FUNCTION TO REMOVE EVENT LISTENER ----- ^^//
  }, []);
  // -------------------- USEEFFECT FOR SETTING AND REMOVING CLICK EVENT LISTENER -------------------- ^^//

  const handleClick = () => {
    setShowDropdown((currentShowDropdown) => !currentShowDropdown);
  };

  const handleOptionClick = (option) => {
    setShowDropdown(false);
    onChange(option);
  };

  const renderedDropdownOptions = options.map((option, index) => {
    return (
      <li key={index} onClick={() => handleOptionClick(option)}>
        {option.label}
      </li>
    );
  });

  // let currLabel = value ? value.label : 'Select...'

  // ---------- TESTING EVENT LISTENER HANDLE CLICK ---------- //
  // const dropdown = document.querySelector('.dropdown');

  // const handleClick = (event) => {
  //   if (dropdown.contains(event.target)) {
  //     console.log("Inside dropdown");
  //   }
  //   else if(!dropdown) console.log("does not exist")
  //   else console.log("OUTSIDE dropdown")
  // }

  // document.addEventListener('click', handleClick, true);

  return (
    <div ref={divEl} className="dropdown">
      <div onClick={handleClick}>{value?.label || "Select..."}</div>
      {showDropdown && <ul>{renderedDropdownOptions}</ul>}
    </div>
  );
}

export default Dropdown;
