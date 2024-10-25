import ProfileCard from "./ProfileCard"

function FullComponent() {
    const users = [{ id: 0, name: 'Anas', age: 23 }, { id: 1, name: 'x', age: 23 }]
    return (
        <>
            <ProfileCard users={users} />
        </>
    )
}

export default FullComponent