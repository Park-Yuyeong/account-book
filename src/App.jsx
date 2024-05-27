import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "./pages/Detail";
import Home from "./pages/Home";

function App() {
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
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                itemList={itemList}
                setItemList={setItemList}
                selectedMonth={selectedMonth}
                setSelectedMonth={setSelectedMonth}
              />
            }
          />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
