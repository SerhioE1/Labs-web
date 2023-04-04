// @ts-ignore
export interface TourDetails {
    title: string,
    description: string,
    image: string,
    price: number,
    currency: string
}

export interface NewTours extends TourDetails {
    id: number,
    country?: string,
    city?: string
}

export const cardInfo : NewTours[] = [
    {
    id: 1,
    title: "Poland for cool boys",
    description: "A nice place for guys that are racists,\n" +
        "great place for homos",
    image: "https://www.google.com/search?q=krakow&sxsrf=APwXEdcAXiBJlvUStWLtOjqrM1fodfaOsw:1680632017391&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiD-JOT6pD-AhXoN-wKHWE9DYwQ_AUoAnoECAEQBA&biw=1440&bih=700&dpr=2#imgrc=-ML8IQ5bmTiSgM",
    price: 100,
    currency: '$'
    },
    {
        id: 2,
        title: "Krakow by himself",
        description: "The bset place for Russians,\n" +
            "Just a nice place",
        image: "https://www.google.com/search?q=krakow&sxsrf=APwXEdcAXiBJlvUStWLtOjqrM1fodfaOsw:1680632017391&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiD-JOT6pD-AhXoN-wKHWE9DYwQ_AUoAnoECAEQBA&biw=1440&bih=700&dpr=2#imgrc=NCusW4gglFyFDM",
        price: 200,
        currency: '$'
    },
    {
        id: 3,
        title: "Lviv",
        description: "Or it's Ukraine,\n" +
            "Well at least he was Polish",
        image: "https://www.google.com/search?q=lviv&sxsrf=APwXEddHFPHOyjxmEyEOWX4FnCC2VmVJPw:1680632128876&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiPsKjI6pD-AhWNuKQKHRm1ADUQ_AUoAnoECAEQBA&biw=1440&bih=700&dpr=2#imgrc=_iQW3G-bcij0SM",
        price: 300,
        currency: '$'
    }]


