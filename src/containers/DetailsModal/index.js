import React, { Component } from 'react';
import styled from 'styled-components';

const Text = styled.p`
  text-transform: capitalize;
`;

const DetailModal = props => {
  const {
    proyecto: { asesor, autores, carreras, description, nombre, periodo, url },
    show,
    closeFunction,
  } = props;

  if (!show) {
    return <div />;
  }

  return (
    <div
      className="modal"
      style={{ display: show ? 'block' : 'none', overflowY: 'auto' }}
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Detalles del Proyecto</h5>
          </div>
          <div className="modal-body">
            <Text>
              <strong>Nombre</strong>
            </Text>
            <Text>{nombre}</Text>
            <Text>
              <strong>Asesor</strong>
            </Text>
            <Text>{`${asesor.nombre} ${asesor.apellidoPaterno} ${
              asesor.apellidoMaterno
            }`}</Text>
            <Text>
              <strong>Periodo Escolar</strong>
            </Text>
            <Text>{`${periodo.season} ${periodo.year}`}</Text>
            <Text>
              <strong>Autores</strong>
            </Text>
            {autores.map(item => (
              <Text key={item.id}>{`${item.nombre} ${item.apellidoPaterno} ${
                item.apellidoMaterno
              }`}</Text>
            ))}
            <Text>
              <strong>Programas Educativos</strong>
            </Text>
            {carreras.map(item => (
              <Text key={item.id}>{item.display}</Text>
            ))}
            <Text>
              <strong>Descripcion</strong>
            </Text>
            <Text>{description}</Text>
          </div>
          <div className="modal-footer">
            <a href={url} target="_blank">
              Ir al Proyecto
            </a>
            <button className="btn btn-danger" onClick={closeFunction}>
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailModal;
