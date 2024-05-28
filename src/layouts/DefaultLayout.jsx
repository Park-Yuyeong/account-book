import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { ExpenditureContext } from "../context/ExpenditureContext";

const DefaultLayout = () => {
  const todayMonth =
    JSON.parse(localStorage.getItem("account-book-selected-month")) ??
    new Date().getMonth() + 1;
  const storedItemList = JSON.parse(localStorage.getItem("account-book")) ?? [];

  const [itemList, setItemList] = useState(storedItemList);
  const [selectedMonth, setSelectedMonth] = useState(todayMonth);

  useEffect(() => {
    localStorage.setItem("account-book", JSON.stringify(itemList));
    localStorage.setItem(
      "account-book-selected-month",
      JSON.stringify(selectedMonth)
    );
  }, [itemList, selectedMonth]);

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
