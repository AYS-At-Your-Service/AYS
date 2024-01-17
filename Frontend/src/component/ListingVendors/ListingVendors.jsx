const ListingVendors = () => {
    const data = [{
        id: 1,
        username: "Ashokan",
        rattings: 4.79,
        reviews: 12.3,
        experience: 4,
        price: 499,
        img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }, {
        id: 2,
        username: "Raja",
        rattings: 3.79,
        reviews: 14.3,
        experience: 3,
        price: 600,
        img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }, {
        id: 3,
        username: "Eleiber",
        rattings: 3.49,
        reviews: 9.3,
        experience: 6,
        price: 450,
        img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }, {
        id: 4,
        username: "Murgesh",
        rattings: 3.89,
        reviews: 12.3,
        experience: 2,
        price: 499,
        img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
    ]
    return (
        <>

            <div className="card-component">
                {data.map((data) => (
                    <>
                        <div className="card">
                            <div className="card-content-section base-text">

                                <div className="card-name-section">
                                    <span className="card-name-section-worker">{data.username}</span>
                                    <span>{data.experience}+ Yrs exp</span>
                                </div>
                                <div className="description">⭐
                                    <span className="card-star-span">{data.ratting} ({data.reviews}k reviews )</span>
                                </div>
                                <h2 className="card-price">
                                    {data.price}/Hr
                                </h2>
                                <div className="card-line-between"></div>
                                <div className="description">
                                    Installation of small fittings( towel hanger,hotel etc)
                                </div>
                                <div className="card-view-details  ">
                                    View Details
                                </div>
                            </div>
                            <div>
                                <div className="card-ImgBtn-section ">
                                    <img src={data.img} className="card-worker-pic" alt="pic" />

                                    <div className="book-now card-btn-abs">
                                        <button className="medium-btn">
                                            Book Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-line">
                            <hr className="card-line-linestyle"></hr>
                        </div>
                    </>

                ))}

            </div>
        </>
    )
}

export default ListingVendors