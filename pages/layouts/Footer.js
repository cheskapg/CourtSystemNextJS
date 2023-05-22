import '../App.css';
function NewlineText(props) {
  const text = props.text;
  return <div className = "newline">{text}</div>;
}
function App() {
  return (
    <div className="fixed-bottom">
  
      <h6>
      <NewlineText text={'Francheska Palma Gil\n'} />
        </h6>
    </div>
  );
}

export default App;
