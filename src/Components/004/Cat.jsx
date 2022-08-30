function Cat({ cat, i }) {
  return (
    <div style={{ backgroundColor: i % 2 ? "red" : "dodgerBlue" }}>
      {cat.name} {cat.weight}
    </div>
  );
}
export default Cat;
