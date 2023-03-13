import { ISite } from "../../interfaces/site.interface"
import Site from "./Site"
import { useGetSitesQuery } from "./sitesApiSlice"

const SitesList = () => {
    const { data: sites, isLoading, isError, isSuccess, error } = useGetSitesQuery('sitesList')

    if (isLoading) return <p>Loading...</p>


    if (isError && 'status' in error) {
        console.log(error)
        return (<p>error</p>)
    }

    return (sites?.map((site: ISite) => <Site key={site.id} site={site} />
    ))
}

export default SitesList