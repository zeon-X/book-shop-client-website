import { useEffect, useState } from "react";
import axiosInstance from "../Utilities/axiosInstance/axiosInstance";

const useCategories = () => {
  const [categoryList, setCategoryList] = useState([]);
  useEffect(() => {
    axiosInstance.get("category/get").then((res) => {
      setCategoryList(res.data);
    });
  }, []);

  return [categoryList, setCategoryList];
};

export default useCategories;
