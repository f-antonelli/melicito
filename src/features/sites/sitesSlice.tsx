import { createSlice } from "@reduxjs/toolkit";
import { IStateSites } from "../../interfaces/site.interface";

const sitesSlice = createSlice({
    name: "sites",
    initialState: { siteID: null },
    reducers: {
        setSiteID: (state, action) => {
            state.siteID = action.payload;
        },
    },
});

export const { setSiteID } = sitesSlice.actions

export default sitesSlice.reducer

export const selectCurrentSite = (state: IStateSites) => state.sites

