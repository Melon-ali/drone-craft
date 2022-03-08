import React from 'react'
import { Carousel, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Banner.css'

export default function Banner() {
  return (
    <>
            <Carousel>
                <Carousel.Item>
                    <Row>
                        <Col className='carousel-1'>
                        
                        </Col>
                        
                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <Row>
                        <Col className='carousel-2'>
                        
                        </Col>
                        
                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <Row>
                        <Col className='carousel-3'>
                        
                        </Col>
                        
                    </Row>
                </Carousel.Item> 
            </Carousel>
        </>
  )
}
