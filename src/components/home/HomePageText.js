import React from 'react';
import './HomePageText.css';

const HomePageText = (props) => {

  return (
    <div className="row">
      <div className="col-md homepage-text about">
        <h3>Nuestra declaración de Misión</h3>
        <hr/>
        <p>Tenemos que hacer discípulos a todas las personas con el propósito de perfeccionarlas para una vida: ABUNDANTE (Jn. 10:10), FRUCTIFERA (Jn. 15:8) y MULTIPLICABLE (Hch. 6:7) y que se proyecte a la ciudad donde vivimos (Hch. 9:25) hasta transformarla, mientras nos extendemos con el mismo objetivo (Mar. 16:15, Mat. 24:14, Ap. 11:15) por toda la Provincia, el País y Naciones del mundo hasta que el reino de Jesucristo sea establecido en la tierra.</p>
      </div>
      <div className="col-md homepage-text vision">
        <h3>Nuestro Compromiso</h3>
        <hr/>
        <p>No basta con tener una visión, es preciso que exista una entrega y el deseo de poner por obra esa visión, eso es lo que se llama una Misión. Nuestro compromiso es poner todo nuestro empeño en alcanzarla dispuestos a enfrentarnos con pequeñas batallas a diario; esto nos conduce a vencer obstáculos, alcanzar metas, realizar sueños, y a no descansar hasta obtener el triunfo anhelado.

"Toda buena dádiva y todo don perfecto desciende de lo alto, del Padre de las luces, en el cual no hay mudanza, ni sombra de variación" (Stg. 1:17).</p>
      </div>
    </div>
  );
}

export default HomePageText;
