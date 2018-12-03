import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { filtrosActions, appActions, listsActions } from '../../redux/actions';
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
      periodo: 0,
      // url: '',
      carreras: [],
    };
    this.documentFileInput = React.createRef();
  }
  componentDidMount() {
    const { getDates } = this.props;
    getDates();
  }
  handleInput = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };
  handleSelect = (e, name, element) => {
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
    if (name === 'tags') {
      const { setTags } = this.props;
      setTags('');
    }
    if (name === 'carreras') {
      const { setCarreras } = this.props;
      setCarreras('');
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

  resetFields = () => {
    const { setAsesores, setAutores, setTags, setCarreras } = this.props;
    this.setState({
      nombre: '',
      description: '',
      tags: [],
      autores: [],
      asesor: 0,
      periodo: 0,
      carreras: [],
    });
    setAsesores('');
    setAutores('');
    setTags('');
    setCarreras('');
  };

  handleSubmit = e => {
    e.preventDefault();

    const { generarProyecto } = this.props;
    const {
      autores: rawAutores,
      carreras: rawCarreras,
      periodo,
      asesor,
      description,
      nombre,
    } = this.state;
    const autores = rawAutores.map(({ id }) => id);
    const carreras = rawCarreras.map(({ id }) => id);
    const { documentFileInput: inputRef } = this;
    const errors = [];

    if (autores.length === 0) {
      errors.push('Autores');
    }
    if (carreras.length === 0) {
      errors.push('Carreras');
    }
    if (periodo === 0) {
      errors.push('Periodo');
    }
    if (nombre === '') {
      errors.push('Nombre');
    }
    if (asesor === '') {
      errors.push('Asesor');
    }
    if (description === '') {
      errors.push('Descripcion');
    }

    if (errors.length > 0) {
      const errString = errors.reduce(
        (acc, item) => `${acc}${item}\n`,
        'Faltan los siguientes campos: \n'
      );
    } else if (
      !(!inputRef.current.files || inputRef.current.files.length === 0)
    ) {
      const doc = inputRef.current.files[0];
      generarProyecto({
        ...this.state,
        autores: JSON.stringify(autores),
        carreras: JSON.stringify(carreras),
        doc,
      });
    } else {
      alert('Es necesario agregar un archivo');
    }
  };

  render() {
    const {
      name,
      description,
      tags,
      autores,
      asesor,
      periodo,
      //   url,
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
      periodosList,
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
                  <label htmlFor="url">Archivo del Proyecto</label>
                  <input
                    type="file"
                    id="url"
                    className="form-control-file"
                    ref={this.documentFileInput}
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
                    name="periodo"
                    value={periodo}
                    id="periodo"
                    onChange={this.handleInput}
                    style={{ textTransform: 'capitalize' }}
                  >
                    <option value={0}>Seleccione...</option>
                    {periodosList.map(item => (
                      <option
                        value={item.id}
                        style={{ textTransform: 'capitalize' }}
                      >{`${item.season} ${item.year}`}</option>
                    ))}
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
                  <label htmlFor="tags">Carreras</label>
                  <Combobox2
                    showMenu={carrerasFilter.length > 0}
                    options={carrerasList}
                    selectCb={this.handleSelect}
                    val={carrerasFilter}
                    inputCb={changeCarreras}
                    name="carreras"
                  />
                </div>
                <div className="form-group d-flex align-content-between flex-wrap justify-content-around">
                  {carreras.map(item => (
                    <button
                      type="button"
                      key={`tags${item.id}`}
                      className="btn btn-success"
                      style={{ marginBottom: '10px' }}
                      onClick={antiBind(
                        this.handleListButtonClick,
                        'carreras',
                        item
                      )}
                    >
                      {item.display}
                    </button>
                  ))}
                </div>
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
                <div className="form-group d-flex align-content-between flex-wrap justify-content-around">
                  {tags.map(item => (
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
                  <button
                    className="btn btn-danger"
                    style={{ marginLeft: '5px' }}
                    onClick={this.resetFields}
                  >
                    Cancelar
                  </button>
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
      periodos: periodosList,
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
    periodosList,
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
    setCarreras,
  } = filtrosActions;
  const { getDates } = listsActions;
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
      setCarreras,
      generarProyecto,
      getDates,
    },
    dispatch
  );
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Crear);
