export const FoodMenu = ({ menus }) => {
  console.log(menus);
  return (
    <div>
      <h1
        style={{
          color: "salmon",
        }}
      >
        오늘의 메뉴!
      </h1>
      <ul>
        {menus.map((desh) => (
          <li key={desh.id}>
            오늘의 메뉴는 {desh.menu}랑 사이드 메뉴는 {desh.side}다!
          </li>
        ))}
      </ul>
    </div>
  );
};
