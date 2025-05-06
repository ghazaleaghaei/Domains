import DomainRow from "./DomainRow"
import Table from "../Components/Table"
import { useGetDomainsQuery } from "../Services/domainsApi";

function DomainsTable({
    editHandler,
    deferredQuery,
    sorted,
}) {

    const { data, refetch, isLoading, isError } = useGetDomainsQuery();

    const domains = data || []

    const filteredDomains = domains?.filter((item) =>
        item.domain.toLowerCase().includes(deferredQuery.toLowerCase())
    )

    const sortedDomains = [...filteredDomains]?.sort((a, b) => {
        switch (sorted) {
            case "asc":
                return a.domain.localeCompare(b.domain);
            case "desc":
                return b.domain.localeCompare(a.domain);
            case "newest":
                return b.createdDate - a.createdDate;
            case "oldest":
                return a.createdDate - b.createdDate;
            case "active":
                return b.isActive - a.isActive;
            default:
                return 0;
        }
    });

    if (isLoading) return <p>loading....</p>
    if (!domains.length || !filteredDomains.length) return <p> not found domains</p>

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
                    sortedDomains.map((domain, index) => (
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
