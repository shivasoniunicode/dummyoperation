import React from "react";

function FormUpdate({ data, setData }) {
  function changeHandle(e) {
    let temp = e.target.name;
    if (data.hasOwnProperty(temp)) {
      return setData({ ...data, [e.target.name]: e.target.value });
    }
  }

  const formrender = (input) => {
    return (
      Object.keys(input).length &&
      Object.values(input).map((item, index) => {
        // console.log(item);
        if (typeof item !== "object") {
          return (
            <tr>
              <td>
                <label>{Object.keys(input)[index]}</label>
              </td>
              <td>
                <input
                  type="text"
                  value={item}
                  name={Object.keys(input)[index]}
                  onChange={(e) => changeHandle(e)}
                />
              </td>
            </tr>
          );
        } else return <><b>{Object.keys(input)[index]}</b>{formrender(item)}</>
      })
    );
  };
  return (
    <>
      <form action="">{formrender(data)}</form>
    </>
  );
}

export default FormUpdate;
