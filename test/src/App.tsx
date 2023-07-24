import { useDispatch, useSelector } from "react-redux/es/exports";
import { instance } from "./AxiosInstance";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const { products } = useSelector<any>((state) => state);

  const fetchProducts = async () => {
    try {
      const { data } = await instance.get("");
      dispatch({
        type: "products/fetch",
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const addProduct = async (product: any) => {
    const { data } = await instance.post("", product);
    dispatch({ type: "products/add", payload: data });
  };
  const updateProduct = async (product: any) => {
    const { data } = await instance.put("" + product.id, product);
    dispatch({ type: "products/update", payload: data });
  };
  const deleteProduct = async (product: any) => {
    await instance.delete("" + product.id);
    dispatch({ type: "products/delete", payload: product });
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <button onClick={() => addProduct({ name: "aaa", id: 100 })}>Thêm</button>
      <button onClick={() => updateProduct({ name: "aaa update", id: 100 })}>
        Sửa
      </button>
      <button onClick={() => deleteProduct({ id: 100 })}>Xóa</button>
      <ul>
        {products?.map((p) => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
