import "./MailList.css"

const MailList = () => {
  return (
    <div className='mail'>
        <h1 className="mailTitle">Save time and money when you book with us!</h1>
        <span className="mailDesc">We'll send the best travel deals to you when you subscribe</span>
        <div className="mailInputContainer">
            <input type="text" placeholder="janedoe@example.com" />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default MailList