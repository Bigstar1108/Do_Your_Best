// content 더미데이터 예시
// const content = [
//     {
//       tab: "Section1",
//       content: "I'm the content of the Section1"
//     },
//     {
//       tab: "Section2",
//       content: "I'm the content of the Section2"
//     }
//   ];

const App = () => {
    const { currentItem, changeItem } = useTabs(0, content);
    return (
      <div>
        <h1>Hello</h1>
        {content.map((section, index) => (
          <button onClick={() => changeItem(index)}>{section.tab}</button>
        ))}
        <h3>{currentItem.content}</h3>
      </div>
    );
  };
  
  export default App;