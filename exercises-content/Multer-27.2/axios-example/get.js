axios.get('/user', {
    params: {
      ID: 12345
    }
  })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  })

// Você pode usar métodos async também
const getUser = async () => {
  try {
    const response = await axios.get('/user?ID=12345');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
