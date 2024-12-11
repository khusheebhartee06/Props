import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import './Homeabout.css';





function Homeabout() {
    const data = [
        {
            icon: "fa-solid fa-camera-retro fs-2",
            title: "BUSINESS MODEL",
            subtitle:"galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into eageMaker including versions of Lorem Ipsu"
        },
        {
            icon: "fa-solid fa-camera-retro fs-2",
            title: "BUSINESS EXECUTION",
            subtitle:"galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into eageMaker including versions of Lorem Ipsu"
        },
        {
            icon: "fa-solid fa-camera-retro fs-2",
            title: "BUSINESS MONITORING",
            subtitle:"galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into eageMaker including versions of Lorem Ipsu"
        }
    ]
    const Box = ({data}) => {
        return (
            <Col className='d-flex'>
                <div className="box">
                    <i class={data.icon}></i>
                    <h4>{ data.title}</h4>
                    <p>{ data.subtitle}</p>
                </div>
            </Col >
        )
    }

    return (
        <section id="Homeabout">
            <Container fluid className='py-5 px-lg-5'>
            <Row>
                <Col className='col-lg-8'>
                    <h1>Our About Us</h1>
                    <p>
                        text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsu
                    </p>
                </Col>
                </Row>
                <Row>
                    {
                        data.map((item, index) => {
                            return <Box data={item} key={index} />
                        })
                    }

                </Row>
        </Container>
        </section>
    )
}

export default Homeabout