
import "./fieldStyle.scss"

type InfoFieldProps = {
    name?: string,
    value?: string,
}


export const InfoField = ({name, value} : InfoFieldProps) => {
    return (
        <div className="fields">
            <span className="propName">{name}: </span>
            <span>{value}</span>
        </div>
    );
}