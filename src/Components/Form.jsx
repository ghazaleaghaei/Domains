import { useEffect, useState } from "react";
import TextField from "./TextField";
import Select from "./Select";
import CheckBox from "./CheckBox";
import { useCreateDomainMutation } from "../Hooks/useAddDomain";
import toast from "react-hot-toast";

const statusOptions = [
    {
        id: 1,
        name: "verified",

    },
    {
        id: 2,
        name: "pending",

    },
    {
        id: 3,
        name: "rejected",

    },
]

function Form({ onClose, domainToEdit = {} }) {

    const { id: editId } = domainToEdit;
    const [createDomain] = useCreateDomainMutation();

    const isEditingProject = Boolean(editId);

    const [formData, setFormData] = useState({
        domain: "",
        isActive: false,
        createdDate: Math.floor(Date.now() / 1000),
        status: "",
    })

    const isFormValid = Object.values(formData).every(value => value !== '');

    const handelChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await createDomain(formData).unwrap();
            console.log(response);
            toast.success('Item created successfully!');
        } catch (err) {
            toast.error('Failed to create item.');
        }
        onClose()
    }


    return <section className="p-10 w-full h-full bg-white space-y-4">
        <h2 className="text-2xl font-medium">Add domain</h2>
        <form
            className="flex flex-col h-full"
            onSubmit={handleSubmit}
        >
            <div className="flex-1">
                <TextField
                    name="domain"
                    onChange={handelChange}
                    value={formData.domain || ""}
                    placeholder="EX: https://www.bridged.medio"
                />
                <Select
                    name="status"
                    selectItem={formData.status}
                    handleChange={(e) => setFormData({ ...formData, status: e.target.value })}
                    options={statusOptions}
                />
                <CheckBox
                    id="isActive"
                    name="isActive"
                    value={formData.isActive}
                    onChange={(e) => setFormData({ ...formData, isActive: e.target.value })}
                    label="isActive"
                />
            </div>
            <button
                className="bg-sky-500 text-white p-2 rounded-ful disabled:opacity-50 duration-300 w-32 h-16 mb-10"
                type="submit"
                disabled={!isFormValid}
            >
                Add
            </button>
        </form>
    </section>
}
export default Form
