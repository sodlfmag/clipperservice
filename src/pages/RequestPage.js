import PageBody from "../components/PageBody";
import RequestForm from "../components/RequestForm";
const RequestPage = () => {
  return (
    <>
      <div>
        <PageBody name="CONTACT" introduction="클리퍼와 함께하시겠습니까?" />
      </div>
      <RequestForm />
    </>
  );
};

export default RequestPage;
