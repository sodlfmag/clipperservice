import MyHeader from "../components/MyHeader";
import PageBody from "../components/PageBody";
import RequestForm from "./RequestForm";
const RequestPage = () => {
  return (
    <>
      <MyHeader />
      <div>
        <PageBody name="CONTACT" introduction="클리퍼와 함께하시겠습니까?" />
      </div>
      <RequestForm />
    </>
  );
};

export default RequestPage;
