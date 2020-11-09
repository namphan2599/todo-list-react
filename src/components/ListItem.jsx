import React from 'react'
import Item from './Item'
import {
    CSSTransition,
    TransitionGroup,
  } from 'react-transition-group';

function ListItem(props) {
    let items = props.items
    return(
        <ul className="list-item">
            <TransitionGroup>
                {items.map(item => 
                    <CSSTransition
                        key={item.id}
                        timeout={500}
                        classNames="item"
                    >
                        <Item item={item} deleteItem={props.deleteItem}/>
                    </CSSTransition>
                )}    
            </TransitionGroup>
            
        </ul>
    )
}



export default ListItem