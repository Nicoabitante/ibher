import React from 'react';

const WhatsOnSection = (props) => {
  return (
    <div>
      <h2>Reuniones en Hernandez</h2>
      <table className="table">
        <tbody>
        <tr><td>Reunión de oración</td><td>Miercoles 19:00hs </td></tr>
        <tr><td>Reunión General</td><td>Domingos 10:00hs </td></tr>
        <tr><td>GBC de niños</td><td>Sábados 15:00hs</td></tr>
        <tr><td>Reunión Pre-adolescentes</td><td>Sábados 18:00hs </td></tr>
        <tr><td>Reunión Jóvenes</td><td>Sábados 20:00hs </td></tr>
        </tbody>
      </table>
      <br/>

      <h2>Reuniones en Las Quintas</h2>
      <table className="table">
        <tbody>
        <tr><td>Reunión de oración</td><td>Martes 19:00hs </td></tr>
        <tr><td>Reunión General</td><td>Sábados 19:00hs </td></tr>
        </tbody>
      </table>
    </div>
  )
}

export default WhatsOnSection;
