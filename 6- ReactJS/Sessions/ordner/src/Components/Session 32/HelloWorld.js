import styles from './HelloWorld.module.css'
import Inside from './Inside'

export default function HelloWorld() {
    return (
        <div>
            <div>Hello World!</div>
            <Inside/>

            <div className={`d-flex flex-wrap ${styles.myTable}`}>
                <p style={{ width: '40vw',fontWeight:'800'}}>First Name</p>
                <p style={{ width: '40vw',fontWeight:'800'}}>Last Name</p>

                <p style={{ width: '40vw'}}>Anas</p>
                <p style={{ width: '40vw'}}>Attoum</p>
                <p style={{ width: '40vw'}}>A</p>
                <p style={{ width: '40vw'}}>B</p>
                <p style={{ width: '40vw'}}>C</p>
                <p style={{ width: '40vw'}}>D</p>
                <p style={{ width: '40vw'}}>X</p>
                <p style={{ width: '40vw'}}>Y</p>

            </div>

            {/* <table className={styles.table}>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                </tr>
                <tr>
                    <td>Anas</td>
                    <td>Attoum</td>
                </tr>
                <tr>
                    <td>A</td>
                    <td>B</td>
                </tr>
                <tr>
                    <td>C</td>
                    <td>D</td>
                </tr>
                <tr>
                    <td>X</td>
                    <td>Y</td>
                </tr>
            </table> */}
        </div>
    )
}
