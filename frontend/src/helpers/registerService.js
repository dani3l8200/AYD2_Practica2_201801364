const registerService = {};

registerService.registerUser = async (credentials) => {
  const reqOpt = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  };

  const url = `${process.env.REACT_APP_URL_FETCH}/users/signup`;
  const response = await fetch(url, reqOpt);
  const respJson = await response.json();
  if (!response.ok) throw Error(respJson.description);

  return respJson;
};
export default registerService;