import React, { useEffect } from 'react'

import img1 from "../assets/talkai1.gif"
import img2 from "../assets/callatt1.gif"
import img3 from "../assets/3333.gif"
import { useParams } from 'react-router-dom'
import { useState } from 'react'

function BlogDetails() {
    const blogs = [
        {
            title: "Revolutionizing Order Processing: The AI Receptionist Solution",
            desc: "Talkai247’s integration of sophisticated AI technologies in telecommunication not only promises operational efficiency for businesses but also ensures a more personalized and responsive experience for customers.",
            id: 1,
            blogImg: img1
        },
        {
            title: "Revolutionizing Order Processing: The AI Receptionist Solution",
            desc: "Talkai247’s integration of sophisticated AI technologies in telecommunication not only promises operational efficiency for businesses but also ensures a more personalized and responsive experience for customers.",
            id: 2,
            blogImg: img2
        },
        {
            title: "Revolutionizing Order Processing: The AI Receptionist Solution",
            desc: "Talkai247’s integration of sophisticated AI technologies in telecommunication not only promises operational efficiency for businesses but also ensures a more personalized and responsive experience for customers.",
            id: 3,
            blogImg: img3
        },

    ]
    const { id } = useParams();
    const [Blog, setBlog] = useState([])
    useEffect(() => {
        console.log(id)
        console.log(blogs)
        const filterBlog = blogs.filter((blog) => blog.id == id)
        console.log(filterBlog)
        setBlog(filterBlog)
    }, [])

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        website: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        console.log(`Field ${name} changed to: ${value}`);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted with data:', formData);
        // Add form submission logic here
    };


    return (
        <>
            <div className='my-52'>
                <div className='flex justify-evenly'>
                    <div style={{ width: "60%" }}>
                        <div >
                            <img src={Blog[0]?.blogImg} alt="" style={{ height: "100vh" }} />
                        </div>
                        <div >
                            <h1 style={{ fontSize: "35px", fontWeight: "bold" }}>{Blog[0]?.title}</h1>
                            <span style={{ color: "gray", fontSize: "12px" }}>Business-January 28, 2024</span>
                        </div>
                        <div style={{ color: "gray" }}>
                            <h2>
                                Harnessing AI for Customer Orders: The Future of Business Efficiency
                            </h2>
                            <p>
                                Embracing an AI Receptionist for handling customer orders offers distinct advantages over traditional human receptionists. Unlike humans, AI can process several hundred calls simultaneously, ensuring that no customer ever encounters a busy signal. This capability dramatically reduces missed opportunities and enhances customer satisfaction.
                            </p>
                        </div>
                        <div className='' style={{ marginTop: "30px", color: "gray" }}>
                            <h2>
                                <b>
                                    Key Benefits Over Human Receptionists
                                </b>
                            </h2>
                            <ul style={{ listStyle: "circle", marginLeft: "40px" }}>
                                <li>
                                    <b>Unmatched Call Handling Capacity:</b> AI can manage countless calls at once, a feat impossible for human receptionists. This means every customer call is answered promptly, reducing wait times and preventing frustration.
                                </li>
                                <li>
                                    <b>Error Reduction:</b> AI systems minimize human error in order processing, leading to more accurate and reliable customer service.
                                </li>
                                <li>
                                    <b>24/7 Availability:</b> Unlike humans, AI doesn’t require breaks or sleep, offering round-the-clock service and ensuring that your business is always responsive.
                                </li>
                                <li>
                                    <b>Scalability and Flexibility:</b> AI can easily scale to handle peak times or a growing customer base without the need for additional staffing.
                                </li>
                                <li>
                                    <b>Consistency in Service:</b> AI provides a consistent level of service to every customer, maintaining the same tone and efficiency, regardless of the volume of calls.
                                </li>
                            </ul>

                            <div>
                                <p>
                                    <b> Conclusion </b>The integration of an AI Receptionist represents a significant step forward in customer service and business efficiency. By handling orders with greater capacity, accuracy, and availability, AI offers a solution that adapts to the dynamic needs of modern businesses.
                                </p>
                            </div>
                            <div className='my-3'>
                                <p>
                                    Transform your order management system with the power of AI. Explore how an AI Receptionist can elevate your business operations by visiting <a href=""> our website.                                </a>
                                </p>
                            </div>
                            <div>
                                <form onSubmit={handleSubmit}>
                                    <h2 style={{ color: "black", fontWeight: "bold" }}>Leave a Reply</h2>
                                    <div className='my-3'>
                                        <label htmlFor="name">Name*</label> <br />
                                        <input type="text" name="name" id="name" value={formData.name} onChange={handleInputChange} required style={{
                                            width: "60%",
                                            padding: "10px",
                                            border: "1px solid #ccc",
                                            borderRadius: "5px",
                                            boxSizing: "border-box",
                                            fontSize: "16px",
                                            outline: "none"
                                        }} />
                                    </div>
                                    <div className='my-3'>
                                        <label htmlFor="email">Email*</label> <br />
                                        <input type="email" name="email" id="email" value={formData.email} onChange={handleInputChange} required style={{
                                            width: "60%",
                                            padding: "10px",
                                            border: "1px solid #ccc",
                                            borderRadius: "5px",
                                            boxSizing: "border-box",
                                            fontSize: "16px",
                                            outline: "none"
                                        }} />
                                    </div>
                                    <div className='my-3'>
                                        <label htmlFor="website">Website*</label> <br />
                                        <input type="url" name="website" id="website" value={formData.website} onChange={handleInputChange}
                                            style={{
                                                width: "60%",
                                                padding: "10px",
                                                border: "1px solid #ccc",
                                                borderRadius: "5px",
                                                boxSizing: "border-box",
                                                fontSize: "16px",
                                                outline: "none"
                                            }}
                                        />
                                    </div>
                                    <div className='my-3'>
                                        <label htmlFor="message">Message*</label> <br />
                                        <textarea name="message" id="message" value={formData.message}
                                            rows={8}
                                            onChange={handleInputChange} required
                                            style={{
                                                width: "80%",
                                                padding: "10px",
                                                border: "1px solid #ccc",
                                                borderRadius: "5px",
                                                boxSizing: "border-box",
                                                fontSize: "16px",
                                                outline: "none"
                                            }}
                                        ></textarea>
                                    </div>
                                    <div>
                                        <button type="submit" style={{
                                            width: "15%",
                                            padding: "8px",
                                            backgroundColor: "#007BFF",
                                            border: "none",
                                            borderRadius: "5px",
                                            color: "white",
                                            fontSize: "16px",
                                            cursor: "pointer"
                                        }} >Submit</button>
                                    </div>
                                </form>
                            </div>


                        </div>
                    </div>
                    <div style={{ width: "30%" }}>
                        <div>
                            <h2 style={{ fontWeight: "bold", fontSize: "30px" }}>About Us</h2>
                            <h2 style={{ fontWeight: "bold", fontSize: "30px", color: "#7A7A7A" }}>
                                Talkai247: Elevating Business Communication with Premier AI Receptionist
                            </h2>

                        </div>
                        <div>
                            <h2 style={{ fontWeight: "bold", fontSize: "30px", marginTop: "10px" }}>Services</h2>
                            <ul style={{ color: "gray" }}>
                                <li className='my-4'>  Call Route Planning with TalkAi 247</li>
                                <li className='my-4'>Texts & Appointments with TalkAi247</li>
                                <li className='my-4'>AI  for Customer Orders: Bussiness Efficiency</li>
                                <li className='my-4'>Consulting with TalkAi247</li>
                                <li className='my-4'>Effortless Refund & Complaint Resolution</li>
                            </ul>
                            {/* <h2 style={{ fontWeight: "bold", fontSize: "30px", color: "#7A7A7A" }}>
                                Talkai247: Elevating Business Communication with Premier AI Receptionist 
                            </h2> */}

                        </div>
                    </div>
                </div >


            </div >
        </>
    )
}

export default BlogDetails