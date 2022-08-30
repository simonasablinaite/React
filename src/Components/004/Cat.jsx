function Cat({ cat, i }) {
  return (
    <div
      style={{
        backgroundColor: i % 2 ? "red" : "dodgerBlue",
        borderRadius: cat.weight > 4 ? "50px" : 0,
      }}
    >
      {cat.name} {cat.weight}
    </div>
  );
}
export default Cat;
