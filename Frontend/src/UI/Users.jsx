import { FaUserPlus } from "react-icons/fa";
import { IoStarHalf } from "react-icons/io5";

const UserCard = () => {
  return (
    <section className="bg-red max-w-32">
      <div>
        <div>
          <figure>
            <img alt="user-picture" />
            <figcaption>User Names goes here</figcaption>
          </figure>
          <span>
            <FaUserPlus />
          </span>
        </div>
        <p>title will go here</p>
      </div>
      <div>
        <p>
          Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
          Lorem Lorem{" "}
        </p>
      </div>
      <div>
        {" "}
        <span>Lorem Ipsum</span> <span> Lorem Ipsum</span>{" "}
        <span> Lorem Ipsum</span>
      </div>
      <div></div>
    </section>
  );
};
