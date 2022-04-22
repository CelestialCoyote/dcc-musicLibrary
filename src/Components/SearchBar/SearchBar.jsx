import React, { useState } from 'react';
import { Form, Button, Row, Col } from "react-bootstrap";
import EditLibrary from '../EditLibrary/EditLibrary';


const SearchBar = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    let searchString = React.createRef();  // React use ref to get input value

    const startSearch = () => {
        props.handleSearch(searchString.current.value);
    };

    const addItem = () => {
        // Todo: Bring up modal window to get user input.
        console.log('Add Song button clicked.');
    };

    return (

        <div id='search-bar'>
            <label id='search-label'>Find Song</label>
            <input id='search-input' ref={searchString} onChange={startSearch} type='text' placeholder='Search by: Song Title, Ablum Name, Artist or Group Name, or Release Date'></input>

            <button id='add-button' onClick={togglePopup}>Add Song</button>
            {isOpen && < EditLibrary
                content={<>
                    <b>Add Song:</b>
                    <Form>
                        <Form.Group className='mb-3' controlId="formBasicEmail">
                            <Row>
                                <Col>
                                    <Form.Label>Song Title:</Form.Label>
                                </Col>
                                <Col>
                                    <Form.Control type="text" placeholder="Song Title" />
                                </Col>
                            </Row>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Album Title</Form.Label>
                            <Form.Control type='text' placeholder='Album Title' />
                        </Form.Group>
                        <Button type='submit'>Add to Library</Button>
                    </Form>
                </>}
                handleClose={togglePopup}
            />};
        </div>

    );
};


export default SearchBar;
