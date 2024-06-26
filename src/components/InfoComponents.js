import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Info = () => {
    const { id } = useParams();

    const [filme, setFilme] = useState('');

    useEffect(() => {
        async function buscarFilme() {
            const filmes = axios.get(`http://143.198.156.185/api/filmes/porid/${id}`).then(function (value) {
                setFilme(value.data);
            }).catch(function (value) {
                console.log(value);
            });
        }

        buscarFilme();
    });



    return (
        <>

            <div className="card">

                <div className="card-header">
                    {filme.titulo}
                </div>
                <div className="card-body">
                    {filme.sinopse}
                </div>
                <div className="card-body">
                    CATEGORIA: {filme.categoria}
                </div>
                <div className="card-body">
                    FAVORITOS: {filme.qtd_favoritos}
                </div>

                <div className="card-body">
                    <img src={filme.url_thumbnail} height={500} />
                </div>
                <div className="card-body">
                    {filme.url_video}
                </div>



            </div>
        </>

    );
};

export default Info;