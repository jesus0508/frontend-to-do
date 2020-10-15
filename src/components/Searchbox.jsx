import React from "react";

const SearchBox = ({ value, onChange, onSubmit }) => (
    <form onSubmit={onSubmit}>
        <input type="text" value={value} onChange={onChange} />
        <button type="submit">+ Agregar</button>
    </form>
)

export default SearchBox;