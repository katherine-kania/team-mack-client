import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import { getAllSearch } from '../../api/search.js'
import { useNavigate } from 'react-router-dom';
import SearchIndex from '../Search/SearchIndex'

const searchBar = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
}

const inputBar = {
    width: '60%',
    paddingLeft: '15%',
}

// we need to render a form that allows the user to search (events, venues, performers)
const GetSearch = (props) => {
    const { user, msgAlert } = props
    const navigate = useNavigate()
    // we want to set state defined as search with type and name as ...

    const [search, setSearch] = useState({ type: null, name: null })

    const [searchResults, setSearchResults] = useState(null)
    // we want to pass in the values we get from search forms

    // that we assigned to state and pass them in as parameters 
    // to getAllSearch
    // then have something that handles the change (handleChange function)
    const handleChange = (e) => {
        e.persist()

        setSearch(prevSearch => {
            // I used let as they aren't a constant variable as they are changing
            let name = e.target.name
            let value = e.target.value
            console.log('this is e.target.name', e.target.name)
            console.log('this is e.target.value', e.target.value)
            // if(type === "events" && name === " "){
            //     // value = true \\ I dont know actually what should be the value
            // } else if (type === "venues" && name === " "){
            //     // value = false
            // }else if(type === "performers" && name === " ") {
            //     value = parseInt(e.target.value)
            // }
            // if (search.type == 'performers') {
            //    let [type] = 'performers'  
            // } else if (search.type == 'events'){
            //     let [type] = 'events'
            // } else if (search.type == 'venues'){
            //     let [type] = 'venues'
            // } 
            const updatedValue = { [name]: value }


            console.log('this is prevSearch', prevSearch)
            console.log('updatedValue', updatedValue)

            return { ...prevSearch, ...updatedValue }
        })

    }

    const handleSubmit = (e) => {
        // e === event


        e.preventDefault()
        let searchType = search.type
        getAllSearch(search.type, search.name)
        
            // if create is successful we shoudl navigate to the show page
            .then(res => {
                if (search.type === 'performers'){
                    setSearchResults(res.data.performers)
                } else if (search.type === 'events'){
                    setSearchResults(res.data.events)
                } else if (search.type === 'venues'){
                    setSearchResults(res.data.venues)
                } else {
                    return null
                }
                console.log('this is the res.data', res.data)

                console.log('this is searchResults', searchResults)
                //navigate(`/search/${search.type}/${search.name}`

                // )
            })
    }
    console.log('this is searchResults 2', searchResults)
    // want something to submit the form (getAllSearch)
    return (
        <div style={searchBar}>
            <SearchIndex searchResults={searchResults} search={search} />
            <Form className='m-2' style={inputBar} onSubmit={handleSubmit}>
                    <Form.Group controlId='type'>
                    <Form.Select className='input' name="type" onChange={handleChange} aria-label="Default select example">
                        <option>Select Your Type</option>
                        <option value={search.type}>events</option>
                        <option value={search.type}>performers</option>
                        <option value={search.type}>venues</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group controlId='name'>
                    <Form.Control
                        className='input'
                        name="name"
                        placeholder='name of event, artist, or venue'
                        value={search.name}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Button variant="primary" type="submit" >
                    SEARCH
                </Button>
            </Form>
        
        </div>
    )
}

export default GetSearch