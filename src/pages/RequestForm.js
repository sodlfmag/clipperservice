import RequestCategoryBtn from "../components/RequestCategoryBtn";
import MyFooter from "../components/MyFooter";
const RequestForm = () => {
  return (
    <>
      <div className="RequestForm">
        <div>
          <div>
            &nbsp;* 의뢰자명&nbsp;&nbsp;&nbsp;
            <input
              className={["RequestInput", "RequestInput_Requester"].join(" ")}
              type="text"
              name="name"
              placeholder="성명 (회사명)"
            />
          </div>
          <div>
            &nbsp;* 메일주소&nbsp;&nbsp;&nbsp;
            <input
              className={["RequestInput", "RequestInput_Email_Address"].join(
                " "
              )}
              type="text"
              name="email_address"
              placeholder="Example@company.com"
            />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*
            연락처&nbsp;&nbsp;&nbsp;
            <input
              className={["RequestInput", "RequestInput_Phone_Number"].join(
                " "
              )}
              type="text"
              name="phone_number"
              placeholder="핸드폰 번호"
            />
          </div>
          <div className="RequestCategoryContainer">
            * 문의 유형&nbsp;&nbsp;&nbsp;
            <RequestCategoryBtn category="앨범 커버" />
            <button className="RequestCategoryBtn">앨범 커버</button>
            <button className="RequestCategoryBtn">머천다이즈</button>
            <button className="RequestCategoryBtn">소품</button>
            <button className="RequestCategoryBtn">콜라보</button>
            <button className="RequestCategoryBtn">기타 문의</button>
          </div>
          <div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*
            제목&nbsp;&nbsp;&nbsp;
            <input
              className={["RequestInput", "RequestInput_Title"].join(" ")}
              type="text"
              name="title"
            />
          </div>
          <div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*
            내용&nbsp;&nbsp;&nbsp;
            <textarea
              className={["RequestInput", "RequestInput_Contents"].join(" ")}
              type="text"
              name="contents"
            />
          </div>
          <div>
            &nbsp;&nbsp;&nbsp;&nbsp;첨부파일&nbsp;&nbsp;&nbsp;
            <button className="AttachmentBtn">업로드</button>
          </div>
          <div>
            <button className="SubmitBtn">전송</button>
          </div>
        </div>
      </div>
      {MyFooter()}
    </>
  );
};

export default RequestForm;
