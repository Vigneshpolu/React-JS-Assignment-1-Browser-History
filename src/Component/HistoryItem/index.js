import './index.css'

const HistoryItem = props => {
  const {historyDetails, deleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

  const onClickDelete = () => {
    deleteHistory(id)
  }

  return (
    <li className="list-container">
      <div className="container">
        <p className="time">{timeAccessed}</p>
        <div className="img-container">
          <img src={logoUrl} alt="domain logo" className="logo" />
          <div className="title-container">
            <p className="title">{title}</p>
            <p className="domain-url">{domainUrl}</p>
          </div>
        </div>
      </div>
      <button
        type="button"
        onClick={onClickDelete}
        className="button"
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="img-url"
        />
      </button>
    </li>
  )
}

export default HistoryItem
