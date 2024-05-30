import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const Detail = ({ itemList, setItemList }) => {
  const navigate = useNavigate();
  const detailId = useParams().id;
  const detailItem = itemList.find((item) => item.id === detailId);

  const { date, category, cost, content } = detailItem;

  const [detailDate, setDetailDate] = useState(date);
  const [detailCategory, setDetailCategory] = useState(category);
  const [detailCost, setDetailCost] = useState(cost);
  const [detailContent, setDetailContent] = useState(content);

  const changeDetailPageDateInputValue = (e) => setDetailDate(e.target.value);
  const changeDetailPageCategoryInputValue = (e) =>
    setDetailCategory(e.target.value);
  const changeDetailPageCostInputValue = (e) => setDetailCost(e.target.value);
  const changeDetailPageContentInputValue = (e) =>
    setDetailContent(e.target.value);

  // 지출 내역 수정
  const modifyAccountBookItem = () => {
    if (
      detailDate.length &&
      detailCategory.length &&
      detailCost > 0 &&
      detailContent.length
    ) {
      const check = confirm("수정하시겠습니까?");
      if (check) {
        const changedItem = {
          id: detailId,
          date: detailDate,
          category: detailCategory,
          cost: detailCost,
          content: detailContent,
          month: new Date(detailDate).getMonth() + 1,
        };

        setItemList(
          itemList.map((item) => (item.id === detailId ? changedItem : item))
        );
        navigate("/");
      } else {
        alert("수정이 취소되었습니다");
      }
    } else {
      alert("알맞은 지출 양식을 작성해주세요!");
    }
  };

  // 지출 내역 삭제
  const deleteAccountBookItem = () => {
    const check = confirm("삭제하시겠습니까?");
    if (check) {
      setItemList(itemList.filter((item) => item.id !== detailId));
      navigate("/");
    } else {
      alert("삭제가 취소되었습니다");
    }
  };

  // Home으로 이동
  const goToBack = () => navigate("/");

  return (
    <StDetailWrapper>
      <StDiv>
        <label htmlFor="detail-date">날짜</label>
        <input
          id="detail-date"
          type="date"
          placeholder="YYYY-MM-DD"
          min="2024-01-01"
          max="2024-12-31"
          value={detailDate}
          onChange={changeDetailPageDateInputValue}
        />
      </StDiv>
      <StDiv>
        <label htmlFor="detail-category">항목</label>
        <input
          id="detail-category"
          type="text"
          placeholder="지출 항목"
          value={detailCategory}
          onChange={changeDetailPageCategoryInputValue}
        />
      </StDiv>
      <StDiv>
        <label htmlFor="detail-cost">금액</label>
        <input
          id="detail-cost"
          type="number"
          placeholder="지출 금액"
          value={detailCost}
          onChange={changeDetailPageCostInputValue}
        />
      </StDiv>
      <StDiv>
        <label htmlFor="detail-content">내용</label>
        <input
          id="detail-content"
          type="text"
          placeholder="지출 내용"
          value={detailContent}
          onChange={changeDetailPageContentInputValue}
        />
      </StDiv>
      <StButtonDiv>
        <StDetailPageButton onClick={modifyAccountBookItem}>
          수정
        </StDetailPageButton>
        <StDetailPageButton onClick={deleteAccountBookItem}>
          삭제
        </StDetailPageButton>
        <StDetailPageButton onClick={goToBack}>뒤로가기</StDetailPageButton>
      </StButtonDiv>
    </StDetailWrapper>
  );
};

const StDetailWrapper = styled.div`
  padding: 20px;
  border: 5px solid #2ec4b6;
  border-radius: 16px;

  display: flex;
  flex-direction: column;
`;

const StDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  label {
    margin-bottom: 5px;
    font-size: 14px;
  }

  input {
    padding: 10px;
    border: 1px solid #2ec4b6;
    border-radius: 4px;
    font-size: 14px;
  }

  #detail-date {
    max-width: 150px;
  }
`;

const StButtonDiv = styled.div`
  display: flex;
  gap: 10px;
`;

const StDetailPageButton = styled.button`
  padding: 10px 20px;
  background-color: #2ec4b6;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;

  &:hover {
    background-color: #1e7970;
  }
`;

export default Detail;
