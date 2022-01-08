import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './style.scss';
////////////////////////////////////////////////
const Info = (({ icon, name, value }) => {
    return (
        <div className="over-info">
            <div className="info-icon">
                <i className={icon}></i>
            </div>
            <div className="info">
                <h1>{name}</h1>
                <span>{value}</span>
            </div>
        </div>
    )
})
////////////////////////////////////////////////
const Input = ({ name, type, placeholder }) => {
    return (
        <div className="over-input">
            <Field className="input" name={name} type={type} placeholder={placeholder} />
            <span className="error">
                <ErrorMessage name={name} />
            </span>
        </div>
    )
}
/////////////////////////////////////////////////
export default () => {
    const infos = [
        {
            icon: "fas fa-envelope",
            name: "email",
            value: "awlira.help@gmail.com"
        },
        {
            icon: "fas fa-mobile-alt",
            name: "phone",
            value: `+201100630555\n+201096172206`
        },
        {
            icon: "fab fa-whatsapp",
            name: "Whatsapp",
            value: "+201096172206\n+201100630555"
        },
        {
            icon: "fas fa-map-marker-alt",
            name: "address",
            value: ` Sea Street - El-Mahalla El Kobra\nEl Gharbeya - Egypt`
        }
    ]
    /////////////////////////////////////////////
    return (
        <div className="awlira-form">
            <div className="container">
                <section>
                    {infos.map((info, key) => (<Info {...info} key={key} />))}
                </section>
                <section>
                    <Formik
                        initialValues={{ fullName: '', companyName: '', phone: '', email: '', message: '' }}
                        validationSchema={Yup.object({
                            fullName: Yup.string()
                                .max(15, 'Must be 15 characters or less')
                                .required('Required'),
                            companyName: Yup.string()
                                .max(20, 'Must be 20 characters or less')
                                .required('Required'),
                            phone: Yup.number()
                                .required('Required'),
                            email: Yup.string()
                                .email('Invalid email address')
                                .required('Required'),
                            message: Yup.string()
                                //.max(150, 'Must be 150 characters or less')
                                .required('Required'),
                        })}
                        onSubmit={(values, { setSubmitting }) => {
                            setTimeout(() => {
                                console.log(JSON.stringify(values, null, 2));
                                setSubmitting(false);
                            }, 400);
                        }}
                    >
                        <Form>
                            <div className="form-grid">
                                <Input name="fullName" type="text" placeholder="your full name" />
                            </div>
                            <div className="form-grid">
                                <Input name="companyName" type="text" placeholder="comapny name" />
                                <Input name="email" type="email" placeholder="your email" />
                            </div>
                            <div className="form-grid">
                                <Input name="phone" type="text" placeholder="phone number (with country code)" />
                            </div>
                            <div className="form-grid">
                                <div className="over-input">
                                    <Field className="input textarea" name="message" as="textarea" placeholder="your message.." />
                                    <span className="error">
                                        <ErrorMessage name="message" />
                                    </span>
                                </div>
                            </div>
                            <div className="form-grid submit">
                                <button type="submit">contact now</button>
                            </div>
                        </Form>
                    </Formik>
                </section>
            </div>
        </div>
    )
}