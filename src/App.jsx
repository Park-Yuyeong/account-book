import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
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
    <StMain>
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
          <Route
            path="/detail/:id"
            element={<Detail itemList={itemList} setItemList={setItemList} />}
          />
        </Routes>
      </BrowserRouter>
    </StMain>
  );
}

const StMain = styled.main`
  width: 100%;
  min-width: 600px;
  max-width: 800px;

  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0px auto;
  padding: 2rem;
`;

export default App;
