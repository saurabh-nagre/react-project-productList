import { useFormik} from "formik";
import * as Yup from "yup";
import "./loginForm.css"

export default function LoginForm(){


    const validationSchema = Yup.object().shape({
        username:Yup.string().min(10,"Min 10 chars required").required("It is required"),
        email: Yup.string().email("Enter correct email add").required("it is required"),
        password: Yup.string().required("it is required").matches('').matches(
            /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
            "Password must contain at least 8 characters, one uppercase, one number and one special case character"
        ),
        checkbox:Yup.boolean()
    })

    const formik = useFormik({
        initialValues: {
            username: '',
            email:'',
            password: '',
            checkbox:false
        },
        onSubmit: (values)=>{
            if(values.checkbox){
                fetch('https://reqres.in/api/users',{method:'post',body:values})
                .then((res)=>res)
                .then((response)=>{
                    console.log(response)
                    alert("Form submitted successfully")
                }).catch((err)=>{
                    alert(err)
                })
            }
            else {
                alert("you should agree terms and conditions")
            }

            
                
        },
        validationSchema
    });
    return (
        <>  
            {/* <div>
                {JSON.stringify(formik)}
            </div> */}
        
            <form>
                
                <input name="username" type='text' className="input" value={formik.values.username} 
                        onChange={formik.handleChange} onBlur={formik.handleBlur} 
                        placeholder="Enter username"></input>             
                <br></br>
                {formik.errors.username && <p className="error">*{formik.errors.username}</p>}

                <input name="email" type='email' className="input" value={formik.values.email} 
                        onChange={formik.handleChange} onBlur={formik.handleBlur} 
                        placeholder="Enter email"></input>
                <br></br>
                {formik.errors.email && <p className="error">{formik.errors.email}</p>}


                <input name="password" type='password' className="input" value={formik.values.password} onBlur={formik.handleBlur}
                    onChange = {formik.handleChange} placeholder="Enter password"></input>         
                {formik.errors.password && <p className="error">{formik.errors.password}</p>}       
                <br></br>

                <input name="checkbox" type='checkbox' value={formik.values.checkbox} onChange={formik.handleChange}/>
                <p>click to agree terms and conditions</p>
                {/* {formik.errors.checkbox && <p className="error">{formik.errors.checkbox}</p>} */}
                <button type='submit' onClick={formik.handleSubmit} className="submit">Submit</button>
                
            </form>
        </>
    );
}

