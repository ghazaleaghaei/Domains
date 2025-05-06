import { useState } from "react";
import TextField from "./TextField";
import Select from "./Select";
import CheckBox from "./CheckBox";
import toast from "react-hot-toast";
import { useCreateDomainMutation, useEditDomainMutation } from "../Services/domainsApi";

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
    const isEditingDomain = Boolean(editId);

    const [createDomain, { isLoading: isCreating }] = useCreateDomainMutation();
    const [editDomain, { isLoading: isEditing }] = useEditDomainMutation();

    const [formData, setFormData] = useState(() =>
        isEditingDomain
            ? domainToEdit
            : {
                domain: "",
                isActive: false,
                createdDate: new Date().getTime(),
                status: "",
            }
    )

    const isFormValid = Object.values(formData).every(value => value !== '');

    const handelChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {

        e.preventDefault()

        try {

            if (isEditingDomain) {
                await editDomain({
                    id: editId,
                    ...formData
                }).unwrap();
            } else {
                await createDomain(formData).unwrap();
            }

            toast.success(
                isEditingDomain
                    ? "domain edited successfully!"
                    : "domain created successfully!"
            );

        } catch (err) {
            if (err.status === 400) {
                toast.error("invalid inputs")
            } else if (err.status === 404) {
                toast.error("not found domain")
            } else {
                toast.error(
                    isEditingDomain
                        ? "Failed to edit domain."
                        : "Failed to create domain."
                );
            }
        }

        setFormData({
            domain: "",
            isActive: false,
            createdDate: new Date().getTime(),
            status: "",
        })

        onClose()
    }


    return <section className="p-4 sm:p-10 w-64 sm:w-96 md:w-[50rem] h-full bg-white space-y-4">

        <h2 className="text-2xl font-medium">
            {isEditingDomain ? "Edit domain" : "Add domain"}
        </h2>

        <form
            className="flex flex-col h-full w-full"
            onSubmit={handleSubmit}
        >
            <div className="flex-1 w-full">
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
                    checked={formData.isActive}
                    onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
                    label="isActive"
                />
            </div>

            <div className="flex justify-end items-center gap-4 [&>button]:p-2 [&>button]:rounded [&>button]:disabled:opacity-50 [&>button]:duration-300 [&>button]:w-32 [&>button]:h-14 mb-10 [&>button]:cursor-pointer">
                <button
                    className="border border-gray-200"
                    disabled={isCreating || isEditing}
                    onClick={onClose}
                >
                    Cancel
                </button>
                <button
                    className="bg-sky-500 text-white"
                    type="submit"
                    disabled={!isFormValid || isCreating || isEditing}
                >
                    {isEditingDomain ? "Edit" : "Add"}
                </button>
            </div>

        </form>
    </section>
}
export default Form
