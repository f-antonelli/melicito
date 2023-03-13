import { ISite } from "../../interfaces/site.interface"

interface SiteProps {
  site: ISite
}

const Site = ({ site }: SiteProps) => {
  return (
    <div>
      <p>{site.id}</p>
      <p>{site.default_currency_id}</p>
      <p>{site.name}</p>
    </div>
  )
}

export default Site