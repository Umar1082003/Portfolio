import { GrFormNextLink } from "react-icons/gr";
import { useNavigate } from "react-router";

function SlideSec({ categories, active, handleClick }) {
  const navigate = useNavigate();
  return (
    <section className="slide-sec border-end-0 col-lg-3 col-md-5 pe-sm-0 border-end-sm-0 pe-md-3 pe-5 flex">
      {categories.map((cat) => (
        <button
          key={cat.value}
          onClick={() => {
            cat.value === "all" && navigate("/projects");
            handleClick(cat.value);
          }}
          className={`${
            active === cat.value ? "active" : ""
          } ${cat.value === "all" ? "border-1 border-secondary text-primary" : "text-light"} btn my-3 w-100 glass-card`}
        >
          {cat.label}
          {cat.value === "all" && <GrFormNextLink />}
        </button>
      ))}
    </section>
  );
}

export default SlideSec;
