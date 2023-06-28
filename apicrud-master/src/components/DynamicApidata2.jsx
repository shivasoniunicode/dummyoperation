import React from "react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { fetchApi, fetchDelete } from "../config/Configs";
import FormUpdate from "./FormUpdate";
import apiRender from "./JsonToTable";

function DynamicApidata2({ baseUrl = "", endpoint = "", setFormdata }) {
  const [data, setData] = useState([]);
  const [formEdit, setFormedit] = useState({});

  useEffect(() => {
    fetchApi(baseUrl, endpoint)
      .then((res) => {
        if (Array.isArray(res)) {
          setData(res);
        } else {
          setData(res[endpoint]);
        }
      })
      .catch((err) => console.log("url error"));
  }, []);

  const deleteUser = (id) => {
    alert(`Are you sure to delete ID: ${id}`);
    fetch(`${baseUrl}/${endpoint}/${id}`, {
      method: "DELETE",
    })
      .then((res) =>
        console.log(`Delete status:${res.status} and deleted id is ${id}`)
      )
      .catch((err) => console.log("error in url"));
  };

  return (
    <>
      <table className="table table-striped">
        {data.map((item, index) => {
          return (
            <tr id={item.id}>
              <td>
                {" "}
                <NavLink to={"/formUpdate"}>
                  <button onClick={() => setFormdata(item)}>edit</button>
                </NavLink>
                <button
                  onClick={() => {
                    deleteUser(item.id);
                  }}
                >
                  delete
                </button>
              </td>
              {apiRender(item)}
            </tr>
          );
        })}
      </table>
    </>
  );
}

export default DynamicApidata2;
