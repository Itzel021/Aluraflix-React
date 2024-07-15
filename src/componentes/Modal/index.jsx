import React, { useState, useEffect } from 'react';
import "./Modal.css";
import Boton from '../Boton';

const Modal = ({ video, onClose, onSave }) => {
    const [titulo, setTitulo] = useState('');
    const [categoria, setCategoria] = useState('');
    const [imagen, setImagen] = useState('');
    const [videoUrl, setVideoUrl] = useState('');
    const [descripcion, setDescripcion] = useState('');

    useEffect(() => {
        if (video) {
            setTitulo(video.titulo);
            setCategoria(video.categoria);
            setImagen(video.imagen);
            setVideoUrl(video.video);
            setDescripcion(video.descripcion);
        }
    }, [video]);

    const handleSave = () => {
        const updatedVideo = {
            ...video,
            titulo,
            categoria,
            imagen,
            video: videoUrl,
            descripcion
        };
        onSave(updatedVideo);
        onClose();
    };

    return (
        <>
            {video && (
                <div className="modal-overlay">
                    <div className="modal-container">
                        <div className="modal-header">
                            <h3>EDITAR CARD</h3>
                            <button className="close-button" onClick={onClose}>&times;</button>
                        </div>
                        <div className="modal-body">
                            <label>Título</label>
                            <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
                            <label>Categoría</label>
                            <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
                                <option value="Front End">Front End</option>
                                <option value="Back End">Back End</option>
                                <option value="Innovación y gestión">Innovación y gestión</option>
                            </select>
                            <label>Imagen</label>
                            <input type="text" value={imagen} onChange={(e) => setImagen(e.target.value)} />
                            <label>Video</label>
                            <input type="text" value={videoUrl} onChange={(e) => setVideoUrl(e.target.value)} />
                            <label>Descripción</label>
                            <textarea value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
                        </div>
                        <div className="modal-footer">
                            
                            <Boton titulo="Guardar" onClick={handleSave} botonActivo={true}/>
                            <Boton titulo="Limpiar" onClick={onClose}/>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal;