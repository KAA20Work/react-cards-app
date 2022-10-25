
import "../styles/fieldStyle.scss"

type InfoFieldProps = {
    name?: string,
    value?: string,
    children?: JSX.Element|JSX.Element[];
}


export const InfoField = ({name, value, children} : InfoFieldProps) => {
    return (
        <ul className="fields">
            <label className="propName">{name}: </label>
            <label>{value}</label>
        </ul>
    );
}