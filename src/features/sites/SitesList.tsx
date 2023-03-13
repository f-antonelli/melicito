import { useGetSitesQuery } from "./sitesApiSlice"

const SitesList = () => {
    const { data: sites, isLoading, isError, isSuccess, error } = useGetSitesQuery('sitesList')

    isLoading && <p>Loading...</p>

    isError && console.log(error)

    // isSuccess && console.log(sites)

    return (
        <div>SitesList</div>
    )
}

export default SitesList