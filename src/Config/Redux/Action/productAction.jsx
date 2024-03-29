import axios from "axios";
const getProduct = () => async (dispatch) => {
  try {
    const products = await axios.get(`${process.env.REACT_APP_API_KEY}/products`);
    const result = products.data.data;
    dispatch({ type: "GET_ALL_PRODUCT", payload: result });
    console.log(result)
  } catch (err) {
    console.error(err.message);
  }
};


export default getProduct ;