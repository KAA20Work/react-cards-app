import { KeyObject } from 'crypto';
import { InfoField } from '../Field/InfoField';
import "./cardStyle.scss"

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
    company } : CardProps) => {

        const mainInform = {name, username, email, phone, website};

        enum mainInformation {
            name = "Имя", 
            username = "Никнейм",
            email = "Почта",
            phone = "Телефон",
            website = "Сайт",
            address = "Адрес",
            street = "Улица",
            suite = "Дом",
            city = "Город",
            zipcode = "Почтовый индекс",
            geo = "Координаты",
            lat = "Широта",
            lng = "Долгота",
            catchPhrase = "Ключевая фраза",
            bs = "Направление"
        }

        return (
            
            <li className='card'>
                
                <a className="cardContent">
                    <div className="mainInfo">
                        <img className="avatar" src="https://mobimg.b-cdn.net/v3/fetch/54/54bb741fd881313da79ec7d7f648fe9d.jpeg"/>
                        
                        {
                            
                            Object.entries(mainInform).map(([key, value]) => 
                            <div>
                                <InfoField name={Object.entries(mainInformation).find(([fkey, fvalue]) => fkey === key)?.[1]} value={value} />
                            </div>
                            )
                        }
                    </div>
                    <div className="moreInformation">
                        <div className="Location">
                            {
                                Object.entries(address).map(([key, value]) => 
                                <div> 
                                    <InfoField name={Object.entries(mainInformation).find(([fkey, fvalue]) => fkey === key)?.[1]}/>
                                    {
                                        typeof value == 'string' ? value : <div>{Object.entries(address.geo)
                                            .map(([key, value]) => <InfoField name={Object.entries(mainInformation).find(([fkey, fvalue]) => fkey === key)?.[1]} value={value} />)}</div>
                                    }
                                </div>
                                )
                            }
                        </div>
                        <div className="Company">
                            {
                                Object.entries(company).map(([key, value]) => 
                                <div> 
                                    <InfoField name={Object.entries(mainInformation).find(([fkey, fvalue]) => fkey === key)?.[1]} value={value}/>
                                </div>
                                )
                            }
                        </div>
                    </div>
                </a>
            </li>
        );
}