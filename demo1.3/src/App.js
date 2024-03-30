import './App.css';
import Student from './Student';

function App() {
  return (
    <div className="App">
      <h2>Data pass into another component using Props</h2>
      <p>Prop mean one type of parameter but actual prop not a parameter just assume this, props is the property it's use for one data pass into another component.</p>

      <Student name={"Rahul Thakor"} address={"abc nr xyz"} email={"5126rahulthakor@gmail.com"} course={"React.js"} marks={"100/60"} name1={"Sujit"} address1={"vvcdj"} email1={"abgdhr@gmail.com"} course1={"React.js"} marks1={"100/80"} name2={"Ravi Rao"} address2={"abdcs"} email2={"Ravirao@gmail.com"} course2={"React.js"} marks2={"100/88"} name3={"Alex"} address3={"abdcs"} email3={"Alexjohn01@gmail.com"} course3={"React.js"} marks3={"100/62"}/>
      {/* <Student name={"Rahul Thakor"} address={"abc nr xyz"} email={"5126rahulthakor@gmail.com"} course={"React.js"} marks={"100/60"}/> */}
    </div>
  );
}

export default App;








