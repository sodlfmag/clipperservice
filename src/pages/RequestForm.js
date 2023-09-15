import React, { useState } from "react";
import emailjs from "emailjs-com";
import MyFooter from "../components/MyFooter";
import ToggleButton from "../components/SampleBtn";
import MyHeader from "../components/MyHeader";

function RequestForm(props) {
  const [formValues, setFormValues] = useState({
    name: "",
    title: "",
    email_address: "",
    clicked_category: [],
    phone_number: "",
    contents: "",
  });

  // const getCurrentValues = () => {
  //   console.log(formValues);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
    let flag = window.confirm("메일을 전송하시겠습니까?");

    if (flag) {
      emailjs
        .send(
          "service_zs62is5",
          "template_cgml46n",
          formValues,
          "f5pPGzqTWAl-S5e8L"
        )
        .then(
          (result) => {
            console.log(result.text);
            alert("전송을 완료했습니다.");
            // display success message to user
          },
          (error) => {
            console.log(error.text);
            // display error message to user
          }
        );
    } else {
      alert("전송을 취소했습니다.");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(value);
    // 카테고리 선택 시 배열에 이미 존재하는 경우 삭제, 존재하지 않는 경우 추가하는 동작
    if (name === "clicked_category") {
      if (formValues.clicked_category.includes(value)) {
        console.log("카테고리 해제:", value);
        setFormValues((prevValues) => ({
          ...prevValues,
          clicked_category: [...prevValues.clicked_category].filter(function (
            elem
          ) {
            return elem !== value;
          }),
        }));
      } else {
        console.log("카테고리 선택:", value);
        setFormValues((prevValues) => ({
          ...prevValues,
          clicked_category: [...prevValues.clicked_category, value],
        }));
      }
    }
    // 카테고리 선택이 아닌 텍스트 입력 시 실시간 formValues 변경값 반영
    else {
      console.log(value);
      setFormValues((prevValues) => ({
        ...prevValues,
        [name]: value,
      }));
    }
  };

  return (
    <div>
      <form className="RequestForm" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">&nbsp;* 의뢰자명&nbsp;&nbsp;&nbsp;</label>
          <input
            className={["RequestInput", "RequestInput_Requester"].join(" ")}
            type="text"
            id="name"
            name="name"
            placeholder="성명 (회사명)"
            value={formValues.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="email_address">
            &nbsp;* 메일주소&nbsp;&nbsp;&nbsp;
          </label>
          <input
            className={["RequestInput", "RequestInput_Email_Address"].join(" ")}
            type="email"
            id="email_address"
            name="email_address"
            placeholder="Example@company.com"
            value={formValues.email_address}
            onChange={handleInputChange}
          />
          <label htmlFor="phone_number">
            {" "}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*
            연락처&nbsp;&nbsp;&nbsp;
          </label>
          <input
            className={["RequestInput", "RequestInput_Phone_Number"].join(" ")}
            type="tel"
            id="phone_number"
            name="phone_number"
            placeholder="핸드폰 번호"
            value={formValues.phone_number}
            onChange={handleInputChange}
          />
        </div>
        <div className="RequestCategoryContainer">
          <div>
            <label htmlFor="clicked_category">
              * 문의 유형&nbsp;&nbsp;&nbsp;
            </label>
            <ToggleButton
              // type="button"
              name="clicked_category"
              value="투자 관련"
              upperFunction={handleInputChange}
            >
              투자 관련
            </ToggleButton>
            <ToggleButton
              // type="button"
              name="clicked_category"
              value="협업"
              upperFunction={handleInputChange}
            >
              협업
            </ToggleButton>
            <ToggleButton
              // type="button"
              name="clicked_category"
              value="지원"
              upperFunction={handleInputChange}
            >
              지원
            </ToggleButton>
            <ToggleButton
              // type="button"
              name="clicked_category"
              value="기타 문의"
              upperFunction={handleInputChange}
            >
              기타 문의
            </ToggleButton>
          </div>
        </div>
        <div>
          <label htmlFor="title">
            {" "}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*
            제목&nbsp;&nbsp;&nbsp;
          </label>
          <input
            className={["RequestInput", "RequestInput_Title"].join(" ")}
            type="text"
            id="title"
            name="title"
            value={formValues.title}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="contents">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*
            내용&nbsp;&nbsp;&nbsp;
          </label>
          <textarea
            className={["RequestInput", "RequestInput_Contents"].join(" ")}
            type="text"
            id="contents"
            name="contents"
            value={formValues.contents}
            onChange={handleInputChange}
          />
        </div>
        {/* EmailJs 첨부파일 업로드 유료기능이어서 삭제 */}
        {/* <div>
          &nbsp;&nbsp;&nbsp;&nbsp;첨부파일&nbsp;&nbsp;&nbsp;
          <button className="AttachmentBtn">업로드</button>
        </div> */}
        <div style={{ marginTop: "20px" }}>
          <button className="SubmitBtn" type="submit">
            전송
          </button>
        </div>
      </form>
      <div style={{ marginBottom: "150px" }}></div>
      {MyFooter()}
    </div>
  );
}
// Clicked Category가 선택처리가 안돼요 ㅠ
export default RequestForm;

// OnClick 중첩으로 RequestForm의 카테고리 선택내역 저장 불가
// 카테고리 선택 시마다 EmailJS전송되는 문제 발생중
