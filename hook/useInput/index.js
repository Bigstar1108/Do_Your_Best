// 실제로 사용할 때 보내는 값 예시
const App = () => {
    const maxLen = value => value.length <= 10;
    const name = useInput("Mr.", maxLen);
    return (
      <div>
        <h1>Hello</h1>
        <input placeholder="Name" {...name} />
      </div>
    );
};

export default App;