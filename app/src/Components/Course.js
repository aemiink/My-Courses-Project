function Course({id,Content,Title,Price, removeOneCourse}) {

    const handleClick = () => {
        removeOneCourse(id)
    }


    return ( 
        <div className="card">
            <div className="card-title-price">
                <h2 className="card-title">{Title}</h2>
                <h4 className="card-price">{Price}</h4>
            </div>
            <div className="card-content">
                <p className="content"> {Content} </p>
            </div>
            <button className="button-delete" onClick={handleClick}>Delete</button>    
        </div>
     );
}

export default Course ;