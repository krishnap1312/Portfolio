
import { useFormik } from 'formik'
import React from 'react'
import { Link } from 'react-router-dom'


function ContactForm() {
    
    const Resume = "BH V KRISHNA PRASAD.pdf"


    const formik = useFormik({
        initialValues:{
            "Name" : "",
            "Email" : "",
            'Query ': ""
        },

        // onSubmit:(values)=>{
        //     axios({
        //         method:"post",
        //         url:`http://127.0.0.1:${PORT}/postMsg`,
        //         data:values
        //     }).then((response)=>{
        //         alert("Sent")
        //     })

        // }

    })

    return (
        <div className='Form'>
                    <div className='d-flex justify-content-center'>
                        <a href={Resume} download={Resume}>
                            <button className='Resume'>Download Resume</button>
                        </a>
                    </div>
            <div className='contactForm'>
                <div>

                    <div>
                        <h1>Contact Form</h1>
                    </div>

                    <div>
                        <p>Please contact me via this form and I will definitely reply to you within 24 Hours</p>
                        <p>Or Call me at +91-9039437039</p>
                        <p>bhvkrishna1302@gmail.com</p>
                    </div>
                    <div><p>Find me on: </p></div>
                    <div>
                        <Link to="/LinkedIn"><span className='formIcons  bi bi-linkedin'></span></Link>
                        <Link to="/GitHub"><span className='formIcons  bi bi-github'></span></Link>
                        
                    </div>
                </div>

                <div>
                    <div>
                        <div className='formInput'><input className='forminputs' placeholder="Name" type="text" name="Email" onChange={formik.handleChange} id="" /></div>
                        <div className='formInput'><input className='forminputs' placeholder="Email @" type="text" name="Name" onChange={formik.handleChange} id="" /></div>
                        <div className='formInput'><input className='forminputsL' placeholder="Query" type="text" name="Query" onChange={formik.handleChange} id="" /></div>
                        
                        <div className='ContactButtonDiv'>
                            <button className='ContactButton' onClick={formik.handleSubmit}>submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactForm