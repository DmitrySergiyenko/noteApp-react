import { Fragment, useContext, useEffect } from "react"
import { Form } from "../components/Form"
import { Loader } from "../components/Loader"
import { Notes } from "../components/Notes"
import { FirebaseContext } from "../context/firebase/firebaseContext"


export const Home = () => {
    // const notes = new Array (3).fill('').map((_, i) => ({id: i, title: `Note ${i+1}`}))
    const { loading, notes, fetchNotes } = useContext(FirebaseContext)

    useEffect(() => {fetchNotes()}, [])

    return (
        <Fragment>
            <Form />
            <hr />

            {loading 
            ? <Loader/>
            : <Notes notes={notes} />
            }

            

        </Fragment>
    )
}