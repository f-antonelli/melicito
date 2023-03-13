export interface ISite {
    default_currency_id: string
    id: string
    name: string
}

interface ISiteID {
    siteID: string;
  }    
  
  export interface IStateSites {
    sites: ISiteID;
  } 