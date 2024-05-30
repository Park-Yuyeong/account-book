import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { ExpenditureContext } from "../context/ExpenditureContext";

const DefaultLayout = () => {
  const [itemList, setItemList] = useState(
    () => JSON.parse(localStorage.getItem("account-book")) ?? []
  );
  const [selectedMonth, setSelectedMonth] = useState(
    () =>
      JSON.parse(localStorage.getItem("account-book-selected-month")) ??
      new Date().getMonth() + 1
  );

  useEffect(() => {
    localStorage.setItem("account-book", JSON.stringify(itemList));
  }, [itemList]);

  useEffect(() => {
    localStorage.setItem(
      "account-book-selected-month",
      JSON.stringify(selectedMonth)
    );
  }, [selectedMonth]);

  return (
    <ExpenditureContext.Provider
      value={{
        itemList,
        setItemList,
        selectedMonth,
        setSelectedMonth,
      }}
    >
      <Outlet />
    </ExpenditureContext.Provider>
  );
};

export default DefaultLayout;
