import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
    if (true) {
        throw SyntaxError;
    }
    return (
        <div>
            {
                robots.map((robot,i) => {
                    return (<Card 
                        key={i}
                        image={robot.id}
                        name={robot.name}
                        email={robot.email}
                        />
                    );
                    })
            }
        </div>
    );
}

export default CardList;