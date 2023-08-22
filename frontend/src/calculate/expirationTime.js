const expirationTime = () => {
  return new Date().getTime() + 60 * 60 * 1000;
  //adding 1hr
};

export default expirationTime;
