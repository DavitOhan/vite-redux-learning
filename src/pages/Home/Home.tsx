import { HomePageWrapper, UserForm, UserFormName } from "./styles"
import { useFormik } from "formik"
import { useDispatch } from "react-redux"
import Input from "components/Input"
import Button from "components/Button"
import{userActions} from "store/redux/users/userSlice"
function Home() {
  const dispatch=useDispatch()
  const formik = useFormik({
    initialValues: {
      firstLastName: "",
      age: "",
      jobTitle: "",
    },
    onSubmit: (values) => {
      dispatch(userActions.addUser)
      console.log(values)
    },
  })
  console.log()
  return (
    <HomePageWrapper>
      <UserForm onSubmit={formik.handleSubmit}>
        <UserFormName>Create User</UserFormName>
        <Input
          name="firstLastName"
          onChange={formik.handleChange}
          value={formik.values.firstLastName}
          labelName="First\Last name"
        />
        <Input
          name="age"
          onChange={formik.handleChange}
          value={formik.values.age}
          labelName="Age"
        />
        <Input
          name="jobTitle"
          onChange={formik.handleChange}
          value={formik.values.jobTitle}
          labelName="Job title"
        />
        <Button name="Create" type="submit" />
      </UserForm>
    </HomePageWrapper>
  )
}

export default Home
