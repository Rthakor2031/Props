function Student(Props) {
    console.log(Props.name);
    return (
        <div classname="App">
            <h3 style={{ color: 'red' }}>Student's Data</h3>
            <br />
            <table style={{}}>
                <tr>
                    <th>Name</th>
                    <th>Adress</th>
                    <th>Email@</th>
                    <th>Course</th>
                    <th>Marks</th>
                </tr>
                <tr>
                    <td>{Props.name}</td>
                    <td>{Props.address}</td>
                    <td>{Props.email}</td>
                    <td>{Props.course}</td>
                    <td>{Props.marks}</td>
                </tr>
                <tr>
                    <td>{Props.name1}</td>
                    <td>{Props.address1}</td>
                    <td>{Props.email1}</td>
                    <td>{Props.course1}</td>
                    <td>{Props.marks1}</td>
                </tr>
                <tr>
                    <td>{Props.name2}</td>
                    <td>{Props.address2}</td>
                    <td>{Props.email2}</td>
                    <td>{Props.course2}</td>
                    <td>{Props.marks2}</td>
                </tr>
                <tr>
                    <td>{Props.name3}</td>
                    <td>{Props.address3}</td>
                    <td>{Props.email3}</td>
                    <td>{Props.course3}</td>
                    <td>{Props.marks3}</td>
                </tr>

            </table>
        </div>
    )
}
export default Student;



