import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { filtrosActions, appActions } from '../../redux/actions';
import { FormWrapper, Combobox, Combobox2 } from './Crear.styled';
import { antiBind } from '../../services/utils';

class Crear extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: '',
      description: '',
      tags: [],
      autores: [],
      asesor: 0,
      fecha: '',
      url: '',
      // carreras: [],
    };
  }
  handleInput = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };
  handleSelect = (e, name, element) => {
    console.log('Entra al handle', name, element);
    this.setState(prevState => {
      const arr = prevState[name];
      if (arr.findIndex(item => item === element.id) === -1) {
        arr.push(element);
      }
      return { [name]: arr };
    });
    if (name === 'autores') {
      const { setAutores } = this.props;
      setAutores('');
    }
    if (name === 'Tags') {
      const { setTags } = this.props;
      setTags('');
    }
  };
  handleListButtonClick = (e, lista, element) => {
    this.setState(prevState => {
      const newArr = prevState[lista].filter(item => item.id !== element.id);
      return { [lista]: [...newArr] };
    });
  };
  handleAsesorSelect = (e, name, value, nombre) => {
    console.log('Llega');
    const { setAsesores } = this.props;
    setAsesores(nombre);
    this.setState({ [name]: value });

    // Handle BAD asesor
  };

  handleSubmit = e => {
    e.preventDefault();
    const { generarProyecto } = this.props;
    const { state } = this;
    const { autores: rawAutores } = state;
    const autores = rawAutores.map(({ id }) => id);
    generarProyecto({ ...state, autores });
  };

  render() {
    const {
      name,
      description,
      tags,
      autores,
      asesor,
      fecha,
      url,
      carreras,
    } = this.state;
    const {
      tags: tagsFilter,
      autores: autoresFilter,
      asesores: asesorFilter,
      carreras: carrerasFilter,
      tagsList,
      autoresList,
      asesoresList,
      carrerasList,
      changeAsesores,
      changeAutores,
      changeCarreras,
      changeTags,
    } = this.props;
    return (
      <div className="row" style={{ margin: '0' }}>
        <div className="col">
          <h4 className="text-center">Crear Proyecto</h4>
          <form onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <div className="form-group">
                  <label htmlFor="name">Nombre del Proyecto</label>
                  <input
                    type="text"
                    className="form-control"
                    name="nombre"
                    value={name}
                    id="nombre"
                    onChange={this.handleInput}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="url">URL del Proyecto</label>
                  <input
                    type="text"
                    className="form-control"
                    name="url"
                    value={url}
                    id="url"
                    onChange={this.handleInput}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="asesor">Asesor del Proyecto</label>
                  <Combobox
                    showMenu={asesorFilter.length > 0 && asesor === 0}
                    options={asesoresList}
                    selectCb={this.handleAsesorSelect}
                    val={asesorFilter}
                    inputCb={changeAsesores}
                    name="asesor"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="fecha">Fecha del Proyecto</label>
                  <select
                    className="form-control"
                    name="fecha"
                    value={fecha}
                    id="fecha"
                    onChange={this.handleInput}
                  >
                    <option value="0">Seleccione...</option>
                    <option value="p2015">Primavera 2015</option>
                    <option value="v2015">Verano 2015</option>
                    <option value="p2016">Primavera 2016</option>
                    <option value="v2016">Verano 2016</option>
                    <option value="p2017">Primavera 2017</option>
                    <option value="v2017">Verano 2017</option>
                    <option value="p2018">Primavera 2018</option>
                    <option value="v2018">Verano 2018</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="autores">Autores</label>
                  <Combobox2
                    showMenu={autoresFilter.length > 0}
                    options={autoresList}
                    selectCb={this.handleSelect}
                    val={autoresFilter}
                    inputCb={changeAutores}
                    name="autores"
                  />
                </div>
                <div className="form-group d-flex  align-content-between flex-wrap justify-content-around">
                  {autores.map(item => (
                    <button
                      type="button"
                      key={`autores${item.id}`}
                      className="btn btn-success"
                      style={{ marginBottom: '10px' }}
                      onClick={antiBind(
                        this.handleListButtonClick,
                        'autores',
                        item
                      )}
                    >
                      {`${item.nombre || ''} ${item.apellidoPaterno ||
                        ''} ${item.apellidoMaterno || ''}`}
                    </button>
                  ))}
                </div>
              </div>
              <div className="col-sm-12 col-md-6">
                <div className="form-group">
                  <label htmlFor="description">Descripcion del Proyecto</label>
                  <textarea
                    className="form-control"
                    value={description}
                    id="description"
                    name="description"
                    onChange={this.handleInput}
                  />
                </div>
                {/* <div className="form-group">
                  <label htmlFor="tags">Etiquetas</label>
                  <Combobox2
                    showMenu={tagsFilter.length > 0}
                    options={tagsList}
                    selectCb={this.handleSelect}
                    val={tagsFilter}
                    inputCb={changeTags}
                    name="tags"
                  />
                </div>
                <div className="form-group d-flex align-content-between flex-wrap justify-content-around"> */}
                {/* {tags.map(item => (
                    <button
                      type="button"
                      key={`tags${item.id}`}
                      className="btn btn-success"
                      style={{ marginBottom: '10px' }}
                      onClick={antiBind(
                        this.handleListButtonClick,
                        'tags',
                        item
                      )}
                    >
                      {item.etiqueta}
                    </button>
                  ))}
                </div> */}
                <div className="form-group d-flex justify-content-end">
                  {/* <button
                    className="btn btn-danger"
                    style={{ marginLeft: '5px' }}
                  >
                    Cancelar
                  </button>
                  <button
                    className="btn btn-secondary"
                    style={{ marginLeft: '5px' }}
                  >
                    Limpiar Campos
                  </button> */}
                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ marginLeft: '5px' }}
                  >
                    Guardar Proyecto
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const {
    filtros: { tags, autores, asesores, carreras },
    lists: {
      tags: tagsList,
      autores: autoresList,
      asesores: asesoresList,
      carreras: carrerasList,
    },
  } = state;

  return {
    tags,
    autores,
    asesores,
    carreras,
    tagsList,
    autoresList,
    asesoresList,
    carrerasList,
  };
};

const mapDispatchToProps = dispatch => {
  const {
    changeAsesores,
    changeAutores,
    changeCarreras,
    changeTags,
    setAsesores,
    setAutores,
    setTags,
  } = filtrosActions;
  const { generarProyecto } = appActions;
  return bindActionCreators(
    {
      changeAsesores,
      changeAutores,
      changeCarreras,
      changeTags,
      setAsesores,
      setAutores,
      setTags,
      generarProyecto,
    },
    dispatch
  );
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Crear);
