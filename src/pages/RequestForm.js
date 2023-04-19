import React, { useState } from "react";
import emailjs from "emailjs-com";

function RequestForm() {
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
          // display success message to user
        },
        (error) => {
          console.log(error.text);
          // display error message to user
        }
      );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

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
      setFormValues((prevValues) => ({
        ...prevValues,
        [name]: value,
      }));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formValues.name}
        onChange={handleInputChange}
      />

      <label htmlFor="title">Title:</label>
      <input
        type="text"
        id="title"
        name="title"
        value={formValues.title}
        onChange={handleInputChange}
      />

      <label htmlFor="email_address">Email:</label>
      <input
        type="email"
        id="email_address"
        name="email_address"
        value={formValues.email_address}
        onChange={handleInputChange}
      />

      <label htmlFor="clicked_category">Clicked category:</label>
      <div>
        <button
          type="button"
          name="clicked_category"
          value="앨범 커버"
          onClick={handleInputChange}
        >
          앨범 커버
        </button>
        <button
          type="button"
          name="clicked_category"
          value="머천다이즈"
          onClick={handleInputChange}
        >
          머천다이즈
        </button>
        <button
          type="button"
          name="clicked_category"
          value="소품"
          onClick={handleInputChange}
        >
          소품
        </button>
        <button
          type="button"
          name="clicked_category"
          value="콜라보"
          onClick={handleInputChange}
        >
          콜라보
        </button>
        <button
          type="button"
          name="clicked_category"
          value="기타 문의"
          onClick={handleInputChange}
        >
          기타 문의
        </button>
      </div>

      <label htmlFor="phone_number">Phone number:</label>
      <input
        type="tel"
        id="phone_number"
        name="phone_number"
        value={formValues.phone_number}
        onChange={handleInputChange}
      />

      <label htmlFor="contents">Contents:</label>
      <textarea
        id="contents"
        name="contents"
        value={formValues.contents}
        onChange={handleInputChange}
      />
      <button type="submit">Submit</button>

      {/* <div>
        <button onClick={getCurrentValues}>현재 값 조회</button>
      </div> */}
    </form>
  );
}

export default RequestForm;

// import RequestCategoryBtn from "../components/RequestCategoryBtn";
// import MyFooter from "../components/MyFooter";
// import React, { useState } from "react";
// import emailjs from "emailjs-com";

// const emailParams = {
//   name: "",
//   title: "",
//   email_address: "",
//   clicked_category: [],
//   phone_number: "",
//   contents: "",
// };

// const RequestForm = () => {
//   const [formValues, setFormValues] = useState({
//     name: "",
//     title: "",
//     email_address: "",
//     clicked_category: [],
//     phone_number: "",
//     contents: "",
//   });

//   emailjs
//     .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_USER_ID")
//     .then(
//       (result) => {
//         console.log(result.text);
//         // display success message to user
//       },
//       (error) => {
//         console.log(error.text);
//         // display error message to user
//       }
//     );

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;

//     if (name === "clicked_category") {
//       setFormValues((prevValues) => ({
//         ...prevValues,
//         [name]: [...prevValues.clicked_category, value],
//       }));
//     } else {
//       setFormValues((prevValues) => ({
//         ...prevValues,
//         [name]: value,
//       }));
//     }
//   };

//   return (
//     <>
//       <form className="RequestForm" onSubmit={handleSubmit}>
//         <div>
//           <div>
//             <label htmlFor="name">&nbsp;* 의뢰자명&nbsp;&nbsp;&nbsp;</label>
//             &nbsp;* 의뢰자명&nbsp;&nbsp;&nbsp;
//             <input
//               className={["RequestInput", "RequestInput_Requester"].join(" ")}
//               type="text"
//               name="name"
//               placeholder="성명 (회사명)"
//             />
//           </div>
//           <div>
//             &nbsp;* 메일주소&nbsp;&nbsp;&nbsp;
//             <input
//               className={["RequestInput", "RequestInput_Email_Address"].join(
//                 " "
//               )}
//               type="text"
//               name="email_address"
//               placeholder="Example@company.com"
//             />
//             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*
//             연락처&nbsp;&nbsp;&nbsp;
//             <input
//               className={["RequestInput", "RequestInput_Phone_Number"].join(
//                 " "
//               )}
//               type="text"
//               name="phone_number"
//               placeholder="핸드폰 번호"
//             />
//           </div>
//           <div className="RequestCategoryContainer">
//             * 문의 유형&nbsp;&nbsp;&nbsp;
//             <RequestCategoryBtn category="앨범 커버" />
//             <button className="RequestCategoryBtn">앨범 커버</button>
//             <button className="RequestCategoryBtn">머천다이즈</button>
//             <button className="RequestCategoryBtn">소품</button>
//             <button className="RequestCategoryBtn">콜라보</button>
//             <button className="RequestCategoryBtn">기타 문의</button>
//           </div>
//           <div>
//             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*
//             제목&nbsp;&nbsp;&nbsp;
//             <input
//               className={["RequestInput", "RequestInput_Title"].join(" ")}
//               type="text"
//               name="title"
//             />
//           </div>
//           <div>
//             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*
//             내용&nbsp;&nbsp;&nbsp;
//             <textarea
//               className={["RequestInput", "RequestInput_Contents"].join(" ")}
//               type="text"
//               name="contents"
//             />
//           </div>
//           <div>
//             &nbsp;&nbsp;&nbsp;&nbsp;첨부파일&nbsp;&nbsp;&nbsp;
//             <button className="AttachmentBtn">업로드</button>
//           </div>
//           <div>
//             <button className="SubmitBtn">전송</button>
//           </div>
//         </div>
//       </form>
//       <script
//         type="text/javascript"
//         src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"
//       ></script>

//       <script type="text/javascript">emailjs.init('f5pPGzqTWAl-S5e8L')</script>
//       <div style={{ marginBottom: "150px" }}></div>
//       {MyFooter()}
//     </>
//   );
// };

// // const btn = document.getElementById("SubmitBtn");

// // document.getElementById("form").addEventListener("submit", function (event) {
// //   event.preventDefault();

// //   btn.value = "Sending...";

// //   const serviceID = "default_service";
// //   const templateID = "template_cgml46n";

// //   emailjs.sendForm(serviceID, templateID, this).then(
// //     () => {
// //       btn.value = "Send Email";
// //       alert("Sent!");
// //     },
// //     (err) => {
// //       btn.value = "Send Email";
// //       alert(JSON.stringify(err));
// //     }
// //   );
// // });

// export default RequestForm;
