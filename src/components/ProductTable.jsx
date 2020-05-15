import React from 'react'

export default (props) => {
    const rows = props.products.map(product => {
        return (
            <tr key={product.id}>
                <th>{product.id}</th>
                <th>{product.name}</th>
                <th>R$ {product.price}</th>
            </tr>
        )
    });

    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
}