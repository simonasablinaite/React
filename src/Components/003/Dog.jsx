import rand from "../../Functions/random.js";

function Dog() {
  return (
    <>
      <h2
        style={{
          color: ["yellowgreen", "yellow", "orange"][rand(0, 2)],
          fontSize: rand(0, 1) ? "40px" : null,
        }}
      >
        Dog {false ? "Jo" : "Ne jo"}
      </h2>
      <h3 className={rand(0, 1) ? "dog" : "cat"}>Big {rand(100, 999)}</h3>
    </>
  );
}

export default Dog;
