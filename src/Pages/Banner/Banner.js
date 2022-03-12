import React from 'react'
import { Carousel, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Banner.css'

export default function Banner() {
  return (
    <>
            <Carousel>
                <Carousel.Item>
                    <div className='carousel-1'>
                        <Row >
                            <Col>
                                
                            </Col>
                            <Col>
                            
                            </Col>
                        </Row>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='carousel-2'>
                        <Row>
                            <Col>
                            
                            </Col>
                            <Col>
                            
                            </Col>
                        </Row>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div  className='carousel-3'>
                        <Row>
                            <Col>
                            
                            </Col>
                            <Col>
                            
                            </Col>
                        </Row>
                    </div>
                </Carousel.Item> 
            </Carousel>
        </>
  )
}
