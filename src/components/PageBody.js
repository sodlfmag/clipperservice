// import PageTitle from "../components/PageTitle";

const PageBody = ({ name, introduction }) => {
  return (
    <div className="PageBody">
      <div className="PageTitle_name">{name}</div>
      <div className="PageTitle_introduction">{introduction}</div>
    </div>
  );
};

export default PageBody;
