import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { ISite } from "../../interfaces/site.interface"
import { setSiteID } from "./sitesSlice"

interface SiteProps {
  site: ISite
}

const Site = ({ site }: SiteProps) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = () => {
    dispatch(setSiteID(site.id))

    navigate('/home')
  }

  return (
    <button onClick={handleSubmit}>
      <p>{site.name}</p>
    </button>
  )
}

export default Site