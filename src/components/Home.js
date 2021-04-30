import * as React from 'react';

const Home = () => {
  return (
    <>
      <div className="sidebar">
        <p>
          My money's in that office, right? If she start giving me some bullshit
          about it ain't there, and we got to go someplace else and get it, I'm
          gonna shoot you in the head then and there. Then I'm gonna shoot that
          bitch in the kneecaps, find out where my goddamn money is. She gonna
          tell me too. Hey, look at me when I'm talking to you, motherfucker.
          You listen: we go in there, and that nigga Winston or anybody else is
          in there, you the first motherfucker to get shot. You understand?
        </p>
      </div>
      <div className="hero">
        <img src="meal-1200x800.jpg" onError={(error) => console.log(error)} />
      </div>
    </>
  );
};

export default Home;
