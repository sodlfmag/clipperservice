const RequestForm = () => {
  return (
    <div>
      <div>
        <div>
          * 의뢰자명&nbsp;&nbsp;&nbsp;
          <input type="text" name="name" />
        </div>
        <div>
          * 메일주소&nbsp;&nbsp;&nbsp;
          <input type="text" name="email_address" />
          * 연락처&nbsp;&nbsp;&nbsp;
          <input type="text" name="phone_number" />
        </div>
        <div>
          * 문의 유형&nbsp;&nbsp;&nbsp;
          <button>앨범 커버</button>
          <button>머천다이즈</button>
          <button>소품</button>
          <button>콜라보</button>
          <button>기타 문의</button>
        </div>
        <div>
          * 제목&nbsp;&nbsp;&nbsp;
          <input type="text" name="title" />
        </div>
        <div>
          * 내용&nbsp;&nbsp;&nbsp;
          <textarea type="text" name="contents" />
        </div>
        <div>
          첨부파일&nbsp;&nbsp;&nbsp;
          <button>첨부파일</button>
        </div>
      </div>
    </div>
  );
};

export default RequestForm;
