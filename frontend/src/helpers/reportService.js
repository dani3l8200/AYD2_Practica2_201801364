const reportService = {};

reportService.transfer = async (transferBody) => {
  const reqOpt = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(transferBody),
  };

  const url = `${process.env.REACT_APP_URL_FETCH}/reports/transfer`;
  const response = await fetch(url, reqOpt);
  const respJson = await response.json();
  if (!response.ok) throw Error(respJson.description);

  return respJson;
};

reportService.getReport = async (noAccount) => {
  const reqOpt = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const url = `${process.env.REACT_APP_URL_FETCH}/reports/getReport/${noAccount}`;
  const response = await fetch(url, reqOpt);
  const respJson = await response.json();
  if (!response.ok) throw Error(respJson.description);

  return respJson;
};

export default reportService;
