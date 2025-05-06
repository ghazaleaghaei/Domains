import DomainRow from "./DomainRow"
import Table from "../Components/Table"
import { useGetDomainsQuery } from "../Services/domainsApi";

function DomainsTable({ editHandler }) {

    const { data, refetch, isLoading, isError } = useGetDomainsQuery();


    if (isLoading) return <p>loading....</p>
    if (!data.length) return <p> not found domains</p>

    return <>
        <Table>
            <Table.Header>
                <th>Domain URL</th>
                <th>Active Status</th>
                <th>Verification Status</th>
                <th>Created Date</th>
                <th></th>
            </Table.Header>
            <Table.Body>
                {
                    data.map((domain, index) => (
                        <DomainRow
                            domain={domain}
                            index={index}
                            key={domain.id}
                            editHandler={editHandler}
                        />
                    ))
                }
            </Table.Body>
        </Table>
    </>
}
export default DomainsTable
