

function login (){


    return (

        <>
        <div className="container pt-2">
            <div className="card">
                <div className="card-tittle pt-2 card-header" >
                    <h1>Login</h1>
                    <div className="row"></div>

                    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <label className="label-control"><b>Endereço de email</b></label>
                        <input className="form-control" type="email" placeholder="Digite o email"
                         ></input>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <label className="label-control"><b>Senha</b></label>
                        <input className="form-control" type="password" placeholder="Senha"
                        ></input>
                    </div>

                    
                    <div className="remember-forgot">
                        <label className="label-control" >Lembrar senha</label>
                        <input type="checkbox"></input>
                        
                        
                    </div>


                    <div className="mb-3"></div>
                    <button type="submit" class= "btn btn-success" >Entrar</button>

                </div>

            </div>

        </div>
        </>
    )

}

export default login;
