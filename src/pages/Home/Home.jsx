import ExpenditureList from "../../components/ExpenditureList";
import InputForm from "../../components/InputForm";
import MonthSelector from "../../components/MonthSelector";

const Home = ({ itemList, setItemList, selectedMonth, setSelectedMonth }) => {
  return (
    <>
      <InputForm itemList={itemList} setItemList={setItemList} />
      <MonthSelector
        selectedMonth={selectedMonth}
        setSelectedMonth={setSelectedMonth}
      />
      <ExpenditureList itemList={itemList} selectedMonth={selectedMonth} />
    </>
  );
};

export default Home;
