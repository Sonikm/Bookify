import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useFirebase } from "../context/Firebase";

function ListingPage() {
  const [name, setName] = useState("");
  const [isbnNumber, setIsbnNumber] = useState("");
  const [price, setPrice] = useState("");
  const [coverPic, setCoverPic] = useState("");
  const firebase = useFirebase();

  async function handleSubmit(e) {
    e.preventDefault();
    await firebase.handleCreateNewListing(name, isbnNumber, price, coverPic);
  }

  return (
    <div className="container">
      <Form className="mt-3" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="fw-bold">Enter Book Name</Form.Label>
          <Form.Control
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            type="text"
            placeholder="Enter book name.."
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="fw-bold">Enter ISBN Number</Form.Label>
          <Form.Control
            required
            value={isbnNumber}
            onChange={(e) => setIsbnNumber(e.target.value)}
            type="number"
            placeholder="Enter ISBN number.."
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="fw-bold">Enter Price Number</Form.Label>
          <Form.Control
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            type="number"
            placeholder="Enter Price.."
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="fw-bold">Add Cover</Form.Label>
          <Form.Control
            onChange={(e) => setCoverPic(e.target.files[0])}
            type="file"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Create
        </Button>
      </Form>
    </div>
  );
}

export default ListingPage;
