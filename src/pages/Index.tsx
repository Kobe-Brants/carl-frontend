const IndexPage = () => {
  return (
    <div>
      <h1>Environment Settings</h1>
      {import.meta.env.MODE}
    </div>
  );
};

export default IndexPage;
