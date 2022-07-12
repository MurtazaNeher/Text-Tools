import React from 'react'
import "../App.css";


export default function Alerts(props) {
  return (
   props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  <strong>{props.alert.status}</strong> {props.alert.mssg}
</div>
  )
}
