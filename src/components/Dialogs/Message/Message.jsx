import s from './../Dialogs.module.css'


const Dialogs__message = (props) => {
    return (
        <div className={s.dialogs__message}>{props.message}</div>
        )
}

export default Dialogs__message