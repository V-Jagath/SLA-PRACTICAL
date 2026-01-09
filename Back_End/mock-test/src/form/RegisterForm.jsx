import useGetFormData from './useGetFormData'

const RegisterForm = () => {

    const { inputData, getInputData, getFormData } = useGetFormData()
    console.log(inputData)

    return (
        <>
            <form onSubmit={getFormData}>
                <label>Name :</label>
                <input type="text" name="name" onChange={getInputData} />
                <label>Mobile :</label>
                <input type="number" name="mobile" onChange={getInputData} />
                <label>Email :</label>
                <input type="eamil" name="email" onChange={getInputData} />
                <label>Password :</label>
                <input type="password" name="password" onChange={getInputData} />
                <label>Confirm Password :</label>
                <input type="password" name="conpassword" onChange={getInputData} />
                <input type="submit" value="Register Form" />
            </form>
        </>
    )
}

export default RegisterForm;
