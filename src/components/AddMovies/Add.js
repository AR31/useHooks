import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Form, FormGroup, Label, Input } from "reactstrap";
class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      id: "",
      title: "",
      img: "",
      desc: "",
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };



  render() {
    return (
      <div className="col-4">
        <button className="btn btn-outline-primary my-2 my-sm-0" onClick={this.toggle}>ADD Movies</button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Add Movie</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="id">id</Label>
                <Input
                  required
                  type="text"
                  name="id"
                  id="id"
                  placeholder="movie id"
                  onChange={e => this.handleChange(e)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="title">Title</Label>
                <Input
                  required
                  type="text"
                  name="title"
                  id="title"
                  placeholder="movie Title"
                  onChange={e => this.handleChange(e)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="image">image</Label>
                <Input
                  type="text"
                  name="img"
                  id="image"
                  placeholder="movie image"
                  onChange={e => this.handleChange(e)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="description">Description</Label>
                <Input
                  required
                  type="textarea"
                  name="desc"
                  id="description"
                  placeholder="movie Description"
                  onChange={e => this.handleChange(e)}
                />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.handleAdd}>
              ADD
            </Button>
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
export default Add;