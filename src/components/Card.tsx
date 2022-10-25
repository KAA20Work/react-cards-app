
import React, {useState} from "react";
import { InfoField } from './InfoField';
import "../styles/fieldStyle.scss"
export type CardProps = {
    name: string,
    username: string,
    email: string,
    address: {
        street: string,
        suite: string,
        city: string,
        zipcode: string,
        geo: {
            lat: string,
            lng: string
        }
    },
    phone: string,
    website: string,
    company: {
        name: string,
        catchPhrase: string,
        bs: string
    }
}

export const Card  = ({...props} : CardProps) => {

    return (
        <li className='card'>
            
            <a className="cardContent">
                
                <div className="mainInfo">
                    <img className="avatar" src="https://mobimg.b-cdn.net/v3/fetch/54/54bb741fd881313da79ec7d7f648fe9d.jpeg"/>
                    <InfoField name='Имя' value={props.name}/>
                    <InfoField name='Имя пользователя' value={props.username}/>
                    <InfoField name='E-mail' value={props.email}/>
                    <InfoField name='Номер телефона' value={props.phone}/>
                    <InfoField name='Сайт' value={props.website}/>
                </div>
                <div className="moreInformation">
                    <div className="Location">
                        <InfoField name="Город" value={props.address.city}/>
                        <InfoField name="Улица" value={props.address.street}/>
                        <InfoField name="Дом" value={props.address.suite}/>
                        <InfoField name="Почтовый индекс" value={props.address.suite}/>
                        <InfoField name="Широта" value={props.address.geo.lat}/>
                        <InfoField name="Долгота" value={props.address.geo.lng}/>
                    </div>
                    <div className="Company">
                        <InfoField name='Компания' value={props.company.name}/>
                        <InfoField name='Ключевая фраза' value={props.company.catchPhrase}/>
                        <InfoField name='Должность' value={props.company.bs}/>
                    </div>
                </div>
                {/* <a className="locationFields">
                        <InfoField name="Город" value={props.address.city}/>
                        <InfoField name="Улица" value={props.address.street}/>
                        <InfoField name="Дом" value={props.address.suite}/>
                        <InfoField name="Почтовый индекс" value={props.address.suite}/>
                        <InfoField name="Широта" value={props.address.geo.lat}/>
                        <InfoField name="Долгота" value={props.address.geo.lng}/>
                    </a>
                    <a className="companyFields">
                        <InfoField name='Компания' value={props.company.name}/>
                        <InfoField name='Ключевая фраза' value={props.company.catchPhrase}/>
                        <InfoField name='Должность' value={props.company.bs}/>
                </a> */}
            </a>
        </li>
    );
}