import { FaUserPlus } from "react-icons/fa";
import { IoStarHalf } from "react-icons/io5";
import useTutors from "../../FetchingUsers/useTutors";

const UserCard = () => {
  const { isLoading, tutors } = useTutors();
  console.log(tutors);
  return (
    <section className="bg-red max-w-32">
      <div>
        <div>
          <figure>
            <img alt="user-picture" />
            <figcaption>{tutors.name}</figcaption>
          </figure>
          <span>
            <FaUserPlus />
          </span>
        </div>
        <p>title will go here</p>
      </div>
      <div>
        {" "}
        <span>Lorem Ipsum</span> <span> Lorem Ipsum</span>{" "}
        <span> Lorem Ipsum</span>
      </div>
      <div>
        <p>
          Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
          Lorem Lorem{" "}
        </p>
      </div>
      <div>
        <IoStarHalf />
        <button>Request</button>
        <p>
          <span>6</span>sesions
        </p>
      </div>
    </section>
  );
};
