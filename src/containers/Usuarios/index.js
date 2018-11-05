import React, { Component } from 'react';
import {
  MainRow,
  FilterWrapper,
  TableWrapper,
  FooterWrapper
} from './Usuarios.styled';

class Usuarios extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <MainRow className="row">
          <FilterWrapper className="col">
            <div className="row">
              <div className="col">
                <form className="form-inline">
                  <input
                    type="text"
                    className="form-control mb-2 mr-sm-2"
                    id="textFilter"
                    placeholder="Nombre, Apellido, Correo"
                  />
                  <select className="form-control mb-2 mr-sm-2">
                    <option selected>Tipo de Usuario</option>
                    <option>...</option>
                  </select>
                  <button
                    type="submit"
                    className="btn btn-primary mb-2 mr-sm-2"
                  >
                    Filtrar
                  </button>
                </form>
              </div>
              <div className="col d-flex justify-content-end">
                <button type="button" className="btn btn-success">
                  Crear Usuario
                </button>
              </div>
            </div>
          </FilterWrapper>
        </MainRow>
        <MainRow className="row">
          <TableWrapper className="col">
            <table className="table table-hover text-center">
              <thead>
                <tr>
                  <th scope="col">id</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Apellido</th>
                  <th scope="col">Tipo de Usuario</th>
                  <th scope="col">Correo</th>
                  <th scope="col">Estado</th>
                  <th className="text-right" scope="col">
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Julio</td>
                  <td>Palacios</td>
                  <td>Administrador</td>
                  <td>150300156@ucaribe.edu.mx</td>
                  <td>Activo</td>
                  <td className="text-right">Editar Borrar</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Ricardo</td>
                  <td>Yama</td>
                  <td>Administrador</td>
                  <td>150300804@ucaribe.edu.mx</td>
                  <td>Activo</td>
                  <td className="text-right">Editar Borrar</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Nardi</td>
                  <td>Santamaria</td>
                  <td>Administrador</td>
                  <td>150300130@ucaribe.edu.mx</td>
                  <td>Activo</td>
                  <td className="text-right">Editar Borrar</td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>Pablo</td>
                  <td>Melendez</td>
                  <td>Administrador</td>
                  <td>140300081@ucaribe.edu.mx</td>
                  <td>Activo</td>
                  <td className="text-right">Editar Borrar</td>
                </tr>
              </tbody>
            </table>
          </TableWrapper>
        </MainRow>
        {/* <FooterWrapper className="fixed-bottom d-flex justify-content-center">
          <div>
            <button type="button" disabled className="btn btn-primary mr-2">
              {'<-'}
            </button>
            <button type="button" className="btn btn-primary mr-2">
              1
            </button>
            <button type="button" className="btn btn-primary mr-2">
              2
            </button>
            <button type="button" className="btn btn-primary mr-2">
              3
            </button>
            <button type="button" className="btn btn-primary mr-2">
              {'->'}
            </button>
          </div>
        </FooterWrapper> */}
      </div>
    );
  }
}

export default Usuarios;
