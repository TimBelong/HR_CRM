import './app-filter.css'

const AppFilter = () => {
    return (
        <div className="btn-group">
            <button 
                className="btn btn-light"
                type="button">
                    All Eomployees
            </button>

            <button 
                className="btn btn-outline-light"
                type="button">
                    Employee up for promotion
            </button>

            <button 
                className="btn btn-outline-light"
                type="button">
                    Salary above 35,000
            </button>
        </div>
    )
}
export default AppFilter;
