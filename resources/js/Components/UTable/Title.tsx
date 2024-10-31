import React from "react"
import { Col, Row } from "react-bootstrap"
import { UTableTitleProps } from "ubiionline/datatable"
import styles from "./FiltersContainer/index.module.css"

/**
 * Contenedor del titulo del datatable
 */
export default function Title({ img, title }: UTableTitleProps) {
    return (
        <Row className="mb-6">
            <Col className='t-left'>
                {img &&
                    <img src={img} className="image-icon" alt="logo-tabla" aria-roledescription="image" />
                }
                <span className={styles.title}>{title}</span>
            </Col>
        </Row>
    )

}