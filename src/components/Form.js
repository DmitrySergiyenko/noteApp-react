import { useContext, useState } from "react"
import { AlertContext } from "../context/alert/alertContext"
import { FirebaseContext } from "../context/firebase/firebaseContext"

export const Form = () => {
    const [value, setValue] = useState('')
    const alert = useContext(AlertContext)
    const firebase = useContext(FirebaseContext)

    const submitHandler = event => {
        event.preventDefault()

        if (value.trim()) {
            firebase.addNote(value.trim()).then(() => {
                alert.show("Note has been created", 'success')
            }).catch (() => {
                alert.show('Something wrong', 'danger')
            })
            setValue('')
        } else {
            alert.show("Enter a note")
        }

        //alert.show(value, 'success')
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="input a note"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
            </div>
        </form>
    )
}