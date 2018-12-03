import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { filtrosActions, listsActions } from '../../redux/actions';
import { MainRow, FilterWrapper, TableWrapper } from './Buscar.styled';
import DetailModal from '../DetailsModal';
import { antiBind } from '../../services/utils';

const Portal = ({ children }) =>
  createPortal(children, document.getElementById('root'));

class Buscar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      periodo: 0,
      carrera: 0,
      showModal: false,
      selected: 0,
    };
  }
  componentDidMount() {
    const { getProyectos, getDates, getCarreras } = this.props;
    getDates();
    getCarreras();
    getProyectos();
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { getProyectos } = this.props;
    const { carrera, periodo } = this.state;
    console.log(carrera, periodo);
    getProyectos({ carrera, periodo });
  };

  viewMore = (e, index) => {
    this.setState({ selected: index });
    this.toggleModal();
  };

  render() {
    const { proyectos, nombre, changeNombre, periodos, carreras } = this.props;
    const { periodo, carrera, showModal, selected } = this.state;
    const proy = proyectos[selected] || {};
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
                  <select
                    className="form-control mb-2 mr-sm-2"
                    style={{ textTransform: 'capitalize' }}
                    value={periodo}
                    name="periodo"
                    onChange={this.handleInput}
                  >
                    <option value={0}>Cualquier Periodo Escolar</option>
                    {periodos.map(item => (
                      <option key={item.id} value={item.id}>{`${item.season} ${
                        item.year
                      }`}</option>
                    ))}
                  </select>
                  <select
                    className="form-control mb-2 mr-sm-2"
                    style={{ textTransform: 'capitalize' }}
                    value={carrera}
                    name="carrera"
                    onChange={this.handleInput}
                  >
                    <option value={0}>Cualquier Materia</option>
                    {carreras.map(item => (
                      <option key={item.id} value={item.id}>
                        {item.display}
                      </option>
                    ))}
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
                  <th className="text-right" scope="col">
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody>
                {proyectos.map((item, index) => (
                  <tr key={item.id}>
                    <td>{item.nombre}</td>
                    <td>
                      {item.carreras.map(item => (
                        <p>{item.display}</p>
                      ))}
                    </td>
                    <td>{`${item.periodo.season} ${item.periodo.year}`}</td>
                    <td>{`${item.asesor.nombre || ''} ${item.asesor
                      .apellidoPaterno || ''} ${item.asesor.apellidoMaterno ||
                      ''}`}</td>
                    <td className="text-right">
                      <button
                        className="btn btn-secondary"
                        onClick={antiBind(this.viewMore, index)}
                      >
                        Ver Mas...
                      </button>
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
        <Portal>
          <DetailModal
            show={showModal}
            closeFunction={this.toggleModal}
            proyecto={proy}
          />
        </Portal>
      </div>
    );
  }
}

const mapStateToProps = ({ lists, filtros }) => {
  const { proyectos, periodos, carreras } = lists;
  const { nombre } = filtros;
  return { proyectos, periodos, carreras, nombre };
};

const mapDispatchToProps = dispatch => {
  const { changeNombre } = filtrosActions;
  const { getCarreras, getDates, getProyectos } = listsActions;
  return bindActionCreators(
    { getCarreras, getDates, getProyectos, changeNombre },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Buscar);
