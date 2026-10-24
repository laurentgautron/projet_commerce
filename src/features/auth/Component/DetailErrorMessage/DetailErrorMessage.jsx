import "./DetailErrorMessage";


function DetailErrorMessage({ errorInfos }) {
    return (

        errorInfos &&
        <div className="error">
            <h4>Erreurs: </h4>

            <div className="error">
                <p>{errorInfos.error && errorInfos.error}</p>
                <p>{errorInfos.message && errorInfos.message}</p>
                {errorInfos.details &&
                    <div className="detail">
                        <h5>Détails:</h5>
                        {errorInfos.details.map((detail, index) => (
                            <div key={index}>
                                {Object.entries(detail).map(([key, value]) => (
                                    <p key={key}>{key}: {value}</p>
                                ))}
                            </div>
                        ))}
                    </div>
                }
            </div>
        </div>

    )
}

export default DetailErrorMessage