import { useState } from "react";

const Name = ({ title }) => {
  const [hasLiked, setHasLiked] = useState(false);
  return (
    <div className="data">
        <h2>{title}</h2>
        <button className="like-btn" onClick={() => {setHasLiked(!hasLiked)}}>
          {hasLiked?'Liked':'Like'}
        </button>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Name  title="The lion king"/>
      <Name  title="f&furious"/>
      <Name  title="f&furious7"/>
    </div>
  );
};

export default App;
