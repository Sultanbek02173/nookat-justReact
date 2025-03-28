import './tourModal.scss';

export const TourModal = ({ mapUrl, closeModal }) => {
    return (
        <div
            className="modal"
            onClick={closeModal}
        >
            <iframe
                src={mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
            ></iframe>
        </div>
    );
}



