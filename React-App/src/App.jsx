const Name = ({ actors }) => {
  return (
    <div className="data">
      
        {actors.map((data, index) => {
          return <h1 key={index}>{data.Name}- {data.age}</h1>
        })}
      
    </div>
  );
};

const App = () => {
  return (
    <div>
      <h1 className="hello">hello</h1>
      <Name actors={[{ Name: "Tom cruise", age:100 }]} />
      <Name actors={[{ Name: "Rock", age:1000 }]} />
    </div>
  );
};

export default App;
