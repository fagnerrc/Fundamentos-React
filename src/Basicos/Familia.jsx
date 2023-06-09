import React, { cloneElement } from "react";
export default _ => {
    return (
        <div>
            <h1>Membros da Familia</h1>
            {
                React.Children.map(_.children, filho => {
                    return cloneElement(filho, _)
                })
            }
        </div>
    )
}