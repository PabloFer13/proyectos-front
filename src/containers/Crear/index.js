import React, { Component } from 'react';
import { FormWrapper } from './Crear.styled';

class Crear extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      tags: [
        {
          etiqueta: 'Internet of Things',
        },
        {
          etiqueta: 'Telecomunicaciones',
        },
        {
          etiqueta: 'Web Development',
        },
        {
          etiqueta: 'Algoritms',
        },
        {
          etiqueta: 'Arduino',
        },
        {
          etiqueta: 'Raspberry PI',
        },
      ],
      autores: [
        {
          nombre: 'Pablo Melendez',
        },
        {
          nombre: 'Hector Magana',
        },
        {
          nombre: 'Darwing Chavez',
        },
        {
          nombre: 'Ivan Mora',
        },
        {
          nombre: 'Rodolfo Perez Pinto',
        },
        {
          nombre: 'Armando Hoyos Icasas',
        },
      ],
      asesor: 0,
      fecha: '',
      url: '',
      carreras: [],
    };
  }
  handleInput = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
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
    return (
      <div className="row" style={{ margin: '0' }}>
        <div className="col">
          <h4 className="text-center">Crear Proyecto</h4>
          <form>
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <div className="form-group">
                  <label htmlFor="name">Nombre del Proyecto</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={name}
                    id="name"
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
                  <select
                    className="form-control"
                    name="asesor"
                    value={asesor}
                    id="asesor"
                  >
                    <option value="0">Seleccione...</option>
                    <option value="1">David Granados</option>
                    <option value="2">Yarely Baez</option>
                    <option value="3">Jose Enrique Alvarez Estrada</option>
                    <option value="4">Fernando Gomez</option>
                  </select>
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
                    <option value="1">Primavera 2015</option>
                    <option value="2">Verano 2015</option>
                    <option value="3">Primavera 2016</option>
                    <option value="4">Verano 2016</option>
                    <option value="5">Primavera 2017</option>
                    <option value="6">Verano 2017</option>
                    <option value="7">Primavera 2018</option>
                    <option value="8">Verano 2018</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="autores">Autores</label>
                  <input
                    className="form-control"
                    type="text"
                    id="autores"
                    name="autores"
                    placeholder="Combobox"
                  />
                </div>
                <div className="form-group d-flex  align-content-between flex-wrap justify-content-around">
                  {autores.map(({ nombre }) => (
                    <button
                      className="btn btn-success"
                      style={{ marginBottom: '10px' }}
                    >
                      {nombre}
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
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="tags">Etiquetas</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Combobox"
                    name="tags"
                    id="tags"
                  />
                </div>
                <div className="form-group d-flex align-content-between flex-wrap justify-content-around">
                  {tags.map(({ etiqueta }) => (
                    <button
                      className="btn btn-success"
                      style={{ marginBottom: '10px', marginRight: '5px' }}
                    >
                      {etiqueta}
                    </button>
                  ))}
                </div>
                <div className="form-group d-flex justify-content-end">
                  <button
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
                  </button>
                  <button
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

export default Crear;
