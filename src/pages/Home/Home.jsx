import styled from "styled-components";
import ExpenditureList from "../../components/ExpenditureList/ExpenditureList";
import InputForm from "../../components/InputForm/InputForm";
import MonthSelector from "../../components/MonthSelector/MonthSelector";

const Home = ({ itemList, setItemList, selectedMonth, setSelectedMonth }) => {
  return (
    <StMain>
      <InputForm itemList={itemList} setItemList={setItemList} />
      <MonthSelector
        selectedMonth={selectedMonth}
        setSelectedMonth={setSelectedMonth}
      />
      <ExpenditureList itemList={itemList} selectedMonth={selectedMonth} />
    </StMain>
  );
};

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

export default Home;
