const setAuthLS = (key, value) => {
  console.log('almacenando', value);
  window.localStorage.setItem(key, value);
};

const getAuthLS = (key) => {
  const value = window.localStorage.getItem(key);
  return value;
};

const setValueLS = (key, value) => {
  console.log('almacenando', value);
  window.localStorage.setItem(key, value);
};

const getValueLS = (key) => {
  const value = window.localStorage.getItem(key);
  return value;
};

module.exports = { setAuthLS, getAuthLS, setValueLS, getValueLS};
