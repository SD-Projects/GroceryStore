import React from 'react'
import { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const CreateProduct = () => {

    const [image, setImage] = useState({})
    const initialFormData = ({ productName: "", productType: "", price: "", discountedPrice: "", date: "", imageFile: image })
    const [userFormData, setFormData] = useState(initialFormData)

    const uploadPicture = (e) => {
        setImage({
            picturePreview: URL.createObjectURL(e.target.files[0]),
            pictureAsFile: e.target.files[0],
        });
        console.log(image)
    };

    const formValidation = () => {

        if(userFormData.productName === ""){
            alert("Please give the product a name")
            return false
        }

        if(userFormData.productType === ""){
            alert("Please give the product a type")
            return false
        }

        if(userFormData.price === ""){
            alert("Please give the product a type")
            return false
        }

        return true
    }

    const handleUserFormSubmit = async (e) => {
        e.preventDefault()

        let validation = formValidation()

        if (validation === true){
            var formData = new FormData
            formData.append("imageFile", image.pictureAsFile)
            formData.append("productName", userFormData.productName)
            formData.append("productType", userFormData.productType)
            formData.append("price", userFormData.price)
            formData.append("discountedPrice", userFormData.discountedPrice)
            formData.append("date", userFormData.date)
    
            fetch("/products/upload", {
    
                body: formData,
                method: "POST",
            })
        }else{
            alert()
        }
    }

    const handleInputChange = (e) => {
        setFormData({ ...userFormData, [e.target.name]: e.target.value })
    }


    return (
        <div>

            <Container>

                <Form onSubmit={handleUserFormSubmit}>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formProductName">
                            <Form.Control onChange={handleInputChange} type="name" placeholder="Product Name" name="productName" />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formProductType">
                            <Form.Select aria-label="Default select example" onChange={handleInputChange} type="text" placeholder="Fruit, Dairy, etc" name="productType" >
                                <option>Product Type</option>
                                <option value="Fruit">Fruit</option>
                                <option value="Vegetable">Vegetable</option>
                                <option value="Dairy">Dairy</option>
                            </Form.Select>
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group className="mb-3" controlId="formPrice">
                            <Form.Control onChange={handleInputChange} type="name" placeholder="Price" name="price" />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group className="mb-3" controlId="formDiscountedPrice">
                            <Form.Control onChange={handleInputChange} type="name" placeholder="Discounted Price" name="discountedPrice" />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group className="mb-3" controlId="formDate">
                            <Form.Control onChange={handleInputChange} type="Date" name="date" />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                    </Row>


                    <Row className="mb-3">
                        <Form.Group className="mb-3" controlId="formFile">
                            <Form.Control onChange={uploadPicture} type="file" placeholder="File" name="imageFile" />
                        </Form.Group>
                    </Row>

                    <div className="btn-submit">
                        <Button variant="primary" type="submit">
                            Create Product
                        </Button>
                    </div>
                </Form>


            </Container>
        </div>
    )
}

export default CreateProduct