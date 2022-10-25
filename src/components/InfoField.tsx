
import "../styles/fieldStyle.scss"

type InfoFieldProps = {
    name?: string,
    value?: string,
}


export const InfoField = ({name, value} : InfoFieldProps) => {
    return (
        <ul className="fields">
            <label className="propName">{name}: </label>
            <label>{value}</label>
        </ul>
    );
}