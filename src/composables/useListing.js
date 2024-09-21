import axios from "../interceptors/axios/index.js";
import {ref, provide} from "vue";

export const useListing = () => {
    const listings = ref()
    provide('listings', listings)
    const listing = ref()

    const getListings = async () => {
        try {
            const response = await axios.get('real-estates')
            listings.value = response.data
        } catch (error) {
            console.log(error)
        }
    }

    const getListing = async (id) => {
        try {
            const response = await axios.get(`real-estates/${id}`)
            listing.value = response.data
        } catch (error) {
            console.log(error)
        }
    }

    const deleteListing = async (id) => {
        try {
            await axios.delete(`real-estates/${id}`)
        } catch (error) {
            console.log(error)
        }
    }

    provide('getListings', getListings)
    return {
        listings,
        listing,
        getListings,
        getListing,
        deleteListing
    }
}