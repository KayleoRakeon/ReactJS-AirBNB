const Appartement = ({ name, image, price, note, isAvailable }) => (
    <div>
        <img alt={name} src={image} />
        <div>
            <h2>
                <svg width="20" height="20">
                    <circle cy="10" cx="10" r="10" fill={isAvailable ? "green" : "red"} />
                </svg>
                {name}
            </h2>
            <p>${price} per night</p>
            <p>{new Array(note).fill('⭐️')}</p>
        </div>
    </div>
)

export default Appartement
