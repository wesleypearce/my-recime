import * as React from 'react';
import image from '../../public/meal-1200x800.jpg';

const Home = () => {
  return (
    <>
      <div className="columns mt-4">
        <div className="column">
          <p>
            My money's in that office, right? If she start giving me some
            bullshit about it ain't there, and we got to go someplace else and
            get it, I'm gonna shoot you in the head then and there. Then I'm
            gonna shoot that bitch in the kneecaps, find out where my goddamn
            money is. She gonna tell me too. Hey, look at me when I'm talking to
            you, motherfucker. You listen: we go in there, and that nigga
            Winston or anybody else is in there, you the first motherfucker to
            get shot. You understand?
          </p>
        </div>
        <div className="column">
          <figure className="image is-3by2">
            <img src={image} />
          </figure>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
            architecto sint. Ipsa error ad nihil aliquid eius voluptas maiores
            sequi, sed quos perferendis! Sint commodi dicta harum est doloremque
            amet?
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
