import './App.css';
import {useState} from 'react'

function GiftCard({data}){
  return (
    <div>
      <h1>{data.heading}</h1>
      <h2>{data.customer}</h2>
      <h3>{data.guests}</h3>
      <p>{data.buttonMessage}</p>
    </div>
  )
}

function App() {
  const [giftCardDetails, setGiftCardDetails] = useState({
    heading: 'Gift Card Page',
    customer: 'Customer: Jennifer Smith',
    guests: 'Free dinner for 4 guests',
    buttonMessage: 'To use your coupon, click the button below',
    valid: true
  })

  const onClickHandler = (e) => {
    e.preventDefault()
    setGiftCardDetails({...giftCardDetails, 
      guests: 'Your coupon has been used', 
      buttonMessage: 'Please visit our restaurant to renew your gift card'})
  }

  return (
    <div className="App">
      <GiftCard data={giftCardDetails} />
      {giftCardDetails.valid && <button onClick={onClickHandler}>Spend Gift Card</button>}
    </div>
  );
}

export default App;
