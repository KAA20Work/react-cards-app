
import React, {useEffect, useState} from "react";

import { InfoField } from './InfoField';
import "../styles/fieldStyle.scss"
import is from 'typescript';
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

export const Card  = ({
    name, 
    username, 
    email, 
    address,
    phone, 
    website, 
    company } : 
    {
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

    }) => {
        const mainInform = {name, username, email, phone, website};

    return (
        <li className='card'>
            <a className="cardContent">
                <div className="mainInfo">
                    <img className="avatar" src="https://mobimg.b-cdn.net/v3/fetch/54/54bb741fd881313da79ec7d7f648fe9d.jpeg"/>
                    {
                        Object.entries(mainInform).map(([key, value]) => 
                        <div> 
                            <InfoField name={key} value={value} />
                        </div>
                        )
                    }
                </div>
                <div className="moreInformation">
                    <div className="Location">
                        {
                            Object.entries(address).map(([key, value]) => 
                            <div> 
                                <InfoField name={key}/>
                                {
                                    typeof value == 'string' ? value : <div>{Object.entries(address.geo)
                                        .map(([key, value]) => <InfoField name={key} value={value} />)}</div>
                                }
                            </div>
                            )
                        }
                    </div>
                    <div className="Company">
                        {
                            Object.entries(company).map(([key, value]) => 
                            <div> 
                                <InfoField name={key} value={value}/>
                            </div>
                            )
                        }
                    </div>
                </div>
            </a>
        </li>
    );
}