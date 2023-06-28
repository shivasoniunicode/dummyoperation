const fetchApi = async (url, endpoint = "") => {
  let response = await fetch(`${url}/${endpoint}`);
  response = response.json();
  return response;
};
// const fetchDelete = async (url, endpoint = "", endpoint2 = "") => {
//   let response = await fetch(`${url}/${endpoint}/${endpoint2}`, {
//     method:"DELETE"
//   });
//   return response;
// };
export { fetchApi };


