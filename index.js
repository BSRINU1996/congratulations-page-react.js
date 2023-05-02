const element = (
    // Write your code here.
    <div className="bg-container">
        <h1 className="main-heading">Congratulations</h1>
        <div className="card">
            <img src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png" className="profile-image" />
            <p className="name-of-person">Bali Srinu</p>
            <p className="clg-name">Gudlavalleru Engineering College, Gudlavalleru,Gidivada.</p>
            <img src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png" className="gifted-thing-image" />
        </div>

    </div>
)

ReactDOM.render(element, document.getElementById('root'))