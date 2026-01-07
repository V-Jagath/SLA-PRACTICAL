const withHoc = (WrapedComponent) => (props) => {

    const HocAlert = () => {
        alert("Normal Button Alert hjjjh")
    }

    return (<>
        <WrapedComponent {...props} text="newHocButton" fun={HocAlert} />
    </>)
}

export default withHoc;
