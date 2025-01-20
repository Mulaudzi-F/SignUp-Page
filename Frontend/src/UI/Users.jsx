import { FaPlus } from "react-icons/fa6";

const UserCard = () => {
  return (
    <section className="bg-red max-w-32">
      <div>
        <div>
          <figure>
            <img alt="user-picture" />
            <figcaption>Lorem Ipsum</figcaption>
          </figure>
          <span>
            <FaPlus />
          </span>
        </div>
        <span>Lorem Ipsum</span> <span> Lorem Ipsum</span>{" "}
        <span> Lorem Ipsum</span>
      </div>
      <div>
        <p></p>
      </div>
      <div></div>
      <div></div>
    </section>
  );
};
