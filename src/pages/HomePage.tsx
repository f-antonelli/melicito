import { useSelector } from "react-redux"
import SitesList from "../features/sites/SitesList"
import { selectCurrentSite } from "../features/sites/sitesSlice"

export const HomePage = () => {
  const site = useSelector(selectCurrentSite)

  return (
    <>
      <h1>Bienvenido</h1>
      <hr />
      <h3>Pais elegido: {site.siteID}</h3>
    </>
  )
}

export default HomePage