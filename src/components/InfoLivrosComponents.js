import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const InfoLivros = () => {

    const { id } = useParams();

    const [livro, setLivro] = useState('');


    useEffect(() => {
        async function buscarLivro() {
            const livro = axios.get(`http://143.198.156.185/api/livros/porid/${id}`).then(function (value) {
                setLivro(value.data);
            }).catch(function (value) {
                console.log(value);
            });
        }
        buscarLivro();
    });

    return (
        <>
            <div className="card">

                <div className="card-header">
                    {livro.titulo}
                </div>
                <div className="card-body">
                    {livro.sinopse}
                </div>
                <div className="card-body">
                    CATEGORIA: {livro.categoria}
                </div>
                <div className="card-body">
                    FAVORITOS: {livro.qtd_favoritos}
                </div>

                <div className="card-body">
                    <img src={livro.url_thumbnail} height={500} />
                </div>
                <div className="card-body">
                    {livro.url_video}
                </div>



            </div>
        </>

    );
};

export default InfoLivros;