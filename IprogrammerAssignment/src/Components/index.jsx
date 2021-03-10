import React, { Component } from 'react'
import axios from 'axios'
import './iprogram.css'
import PhotoList from './PhotoList/photolist'
import CompareTable from './CompareTable/compareTable'
class Iprogram extends Component {
    state = {
        photos: [],
        buttonArray: [],
        comparedList: []
    }

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/photos").then(response => {
            this.setState({ photos: response.data.slice(0, 9) })
        })
    }


    handleAddCompare = (id, value) => {
        const newArray = [...this.state.buttonArray, id];
        this.setState({ buttonArray: newArray })

        const newComparedList = [...this.state.comparedList, value]
        this.setState({ comparedList: newComparedList })
    }

    handleRemoveCompare = (id, value) => {
        const removedArray = this.state.buttonArray.filter(val => val != id)
        this.setState({ buttonArray: removedArray })

        const removeComparedList = this.state.comparedList.filter(val => val.id != id)
        this.setState({ comparedList: removeComparedList })
    }
    render() {
        return (
            <div className="container Iprogram">
                  <div className="row">
                {
                    this.state.photos.map((value, index) => {

                     return <PhotoList photos={value} key={value.id} buttonArray={this.state.buttonArray.includes(value.id)} handleRemoveCompare={this.handleRemoveCompare} handleAddCompare={this.handleAddCompare} />
                    })
                }
                </div>
                <CompareTable addedList={this.state.comparedList} />
            </div>
        );
    }
}

export default Iprogram;