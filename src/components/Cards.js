import React from 'react'
import CardItem from './CardItem'
import "./Cards.css"

const Cards = () => {
    return (
        <div className="cards">
            <h1> Check out these EPIC Destination </h1>
            <div className="cards__container"> 
               <div className="cards__wrapper">  
                  <ul className="cards__items"> 
                     <CardItem 
                        src="https://images.unsplash.com/photo-1493713838217-28e23b41b798?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                        text="Explore the hidden waterfall deep inside the Amazon Jungle"
                        label="Adventure"
                        path="/services"
                     />
                     <CardItem 
                        src="https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80"
                        text="Travel through the Islands of Bali in a Private Cruise"
                        label="Luxury"
                        path="/services"
                     />
                  </ul>

                  <ul className="cards__items"> 
                     <CardItem 
                        src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1955&q=80"
                        text="Explore the hidden waterfall deep inside the Amazon Jungle"
                        label="Adventure"
                        path="/services"
                     />
                     <CardItem 
                        src="https://images.unsplash.com/photo-1491555103944-7c647fd857e6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                        text="Travel through the Islands of Bali in a Private Cruise"
                        label="Beautiful"
                        path="/products"
                     />
                     <CardItem 
                        src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                        text="Travel through the Islands of Bali in a Private Cruise"
                        label="Luxury"
                        path="/products"
                     />


                  </ul>

                 
               </div>
            </div>    
        </div>
    )
}

export default Cards
