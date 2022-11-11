import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../features/categories/categoriesSlice";

export const useCategories = () => {
  const { categories } = useSelector((state) => state.persistedReducer.categories);
  const dispatch = useDispatch();

  const doFetchCategories = () => {
    dispatch(fetchCategories());
  };

  useEffect(() => {
    doFetchCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { categories };
};
