import './App.css'
import Customer from './Customer'


function App() {
  return (
    <>
      <Customer tag="Our Customer"/>
      <Customer nama="Ucup" alamat={"Depok"} member={"Gold"} />
      <Customer nama="Raja" alamat={"Jakarta"} member={"Silver"} />
      <Customer nama="Aldi" alamat={"Bandung"} member={"Platinum"} />
      <Customer nama="Alex" alamat={"Depok"} member={"Non member"} />
    </>

  )
}

export default App
