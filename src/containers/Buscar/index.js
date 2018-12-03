import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { listsActions, filtrosActions } from '../../redux/actions';
import { periodo } from '../../services/constants';
import {
  MainRow,
  FilterWrapper,
  TableWrapper,
  FooterWrapper,
} from './Buscar.styled';

class Buscar extends Component {
  componentDidMount() {
    const { getProyectos } = this.props;
    getProyectos();
  }
  handleSubmit = e => {
    e.preventDefault();
    const { getProyectos } = this.props;
    getProyectos();
  };

  render() {
    const { proyectos, nombre, changeNombre } = this.props;
    return (
      <div>
        <MainRow className="row">
          <FilterWrapper className="col">
            <div className="row">
              <div className="col">
                <form className="form-inline" onSubmit={this.handleSubmit}>
                  <input
                    type="text"
                    className="form-control mb-2 mr-sm-2"
                    id="textFilter"
                    value={nombre}
                    onChange={changeNombre}
                    placeholder="Nombre del Proyecto"
                  />
                  <select className="form-control mb-2 mr-sm-2">
                    <option>Periodo Escolar</option>
                    <option>...</option>
                  </select>
                  <select className="form-control mb-2 mr-sm-2">
                    <option>Carrera</option>
                    <option>
                      Ingenieria en logistica y cadena de suministro
                    </option>
                  </select>
                  <button
                    type="submit"
                    className="btn btn-primary mb-2 mr-sm-2"
                  >
                    Filtrar
                  </button>
                </form>
              </div>
            </div>
          </FilterWrapper>
        </MainRow>
        <MainRow className="row">
          <TableWrapper className="col">
            <table className="table table-hover text-center">
              <thead>
                <tr>
                  <th scope="col">Nombre</th>
                  <th scope="col">Carreras</th>
                  <th scope="col">Año</th>
                  <th scope="col">Asesor</th>
                  <th className="text-right" scope="col" />
                  {/* Acciones
                  </th> */}
                </tr>
              </thead>
              <tbody>
                {proyectos.map((item, index) => (
                  <tr>
                    <td>{item.nombre}</td>
                    <td>
                      {item.carreras.reduce(
                        (careerStr, carrera) =>
                          `${careerStr} ${carrera.nombre}`,
                        ''
                      )}
                    </td>
                    <td>{`${periodo[item.fecha[0]]} ${item.fecha[1]}${
                      item.fecha[2]
                    }${item.fecha[3]}${item.fecha[4]}`}</td>
                    <td>{`${item.asesor.nombre || ''} ${item.asesor
                      .apellidoPaterno || ''} ${item.asesor.apellidoMaterno ||
                      ''}`}</td>
                    <td className="text-right">
                      <a href="#">Ver Mas...</a>
                      <a href={item.url} target="_blank">
                        Descargar
                      </a>
                    </td>
                  </tr>
                ))}
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

const mapStateToProps = ({ lists, filtros }) => {
  const { proyectos } = lists;
  const { nombre } = filtros;
  return { proyectos, nombre };
};

const mapDispatchToProps = dispatch => {
  const { getProyectos } = listsActions;
  const { changeNombre } = filtrosActions;

  return bindActionCreators({ getProyectos, changeNombre }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Buscar);
