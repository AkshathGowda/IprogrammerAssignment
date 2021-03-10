import React from 'react'
import '../iprogram.css'
const CompareTable = (props) => {

    const renderList = props.addedList ? props.addedList.map((val,index) => {
        return (
            <tr key={val.id}>
                <td>Photo {index+1}</td>
                <td>{val.id}</td>
                <td>{val.url}</td>
                <td>{val.title}</td>
            </tr>
        )
    }) : ""   

    return (
        <table className="table table-bordered my-3">
            <thead>
                <tr>
                    <th colSpan='4' className="text-center"> COMPARISION TABLE</th>
                </tr>
                <tr>
                    <th></th>
                    <th>ID</th>
                    <th>URL</th>
                    <th>Title</th>
                </tr>
            </thead>
            <tbody>
                {
                    renderList
                }


            </tbody>
        </table>
    )
}

export default CompareTable;
