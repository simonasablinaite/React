function Cat({ cat, i }) {
  return (
    <div
      style={{
        backgroundColor: i % 2 ? "red" : "dodgerBlue",
        borderRadius: cat.weight > 4 ? "50px" : null,
        display: cat.weight < 4 ? "none" : "flex",
      }}
    >
      {cat.name} {cat.weight}
    </div>
  );
}
export default Cat;
