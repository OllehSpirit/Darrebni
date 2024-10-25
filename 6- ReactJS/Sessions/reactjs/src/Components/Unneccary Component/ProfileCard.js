export default function ProfileCard({ users }) {
    return (
        <>

            <div className="d-flex">
                <p style={{ width: '10vw',fontWeight:'800'}}>First Name</p>
                <p style={{ width: '10vw',fontWeight:'800'}}>Last Name</p>
            </div>


            {users.map((element, index) => {
                return <div key={index} className="d-flex">
                    <p style={{ width: '10vw' }}>My name is {element.name}</p>
                    <p>My age is {element.age}</p>
                </div>
            })}

            {/* <table>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
            </tr>
            {users.map((element,index) => {
                return <tr key={index}>
                    <td style={{width:'10vw'}}>My name is {element.name}</td>
                    <td>My age is {element.age}</td>
                </tr>
            })}
            </table> */}

        </>
    )
}
