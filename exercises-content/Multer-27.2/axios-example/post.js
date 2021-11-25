const body = {
  firstName: 'Fred',
  lastName: 'Flintstone'
};

axios.post('/user', body)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
