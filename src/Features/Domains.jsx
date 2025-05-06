import { useState } from "react"
import DomainsTable from "./DomainsTable"
import Header from "./Header"
import Modal from "../Components/Modal"

function Domains() {

    const [isModalOpen, setIsModalOpen] = useState(false)

    const [domainToEdit, setDomainToEdit] = useState({})

    const editHandler = (domain) => {
        setIsModalOpen(true)
        setDomainToEdit(domain)
    }

    return <section className="p-8">
        <Header onClick={() => setIsModalOpen(true)} />
        <DomainsTable
            editHandler={editHandler}
        />
        {
            isModalOpen
            && <Modal
                onClose={() => {
                    setIsModalOpen(false)
                    setDomainToEdit({})
                }}
                open={isModalOpen}
                domainToEdit={domainToEdit}
            />
        }
    </section>
}
export default Domains
