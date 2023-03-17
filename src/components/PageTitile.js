const PageTitle = ({ name, introduction }) => {
  return (
    <div>
      <div className="PageTitle_name">{name}</div>
      <div className="PageTitle_introduction">{introduction}</div>
    </div>
  );
};

export default PageTitle;
