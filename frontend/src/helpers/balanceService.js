

let getBalanceUser = async (accountNumber) => {

  const reqOpt = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const url = `${process.env.REACT_APP_URL_FETCH}/users/balance/${accountNumber}`;
  const response = await fetch(url, reqOpt);
  const respJson = await response.json();
  if (!response.ok) throw Error(respJson.description);

  return respJson;
};



export default getBalanceUser;
