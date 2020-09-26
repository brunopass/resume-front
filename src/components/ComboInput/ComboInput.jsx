import React from 'react'
import './ComboInput.css'

const ComboInput = props => {
    const {value, options ,handleChange} = props

    return(
        <div className="combo-input-wrapper">
            <span className="combo-input-span">{value}</span>
            <select onChange={e => handleChange(e.target.value)} className="combo-input-container">
                {options.map((value,key)=>{
                    return <option value={value} key={key} className="combo-input-container-children">{value}</option>
                })}
            </select>
        </div>
    )
}

export default ComboInput