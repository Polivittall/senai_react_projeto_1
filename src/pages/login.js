
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { Alert } from 'react-bootstrap';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();

    let response = await axios.post('http://143.198.156.185/api/auth/login', {
      "email": email,
      "password": password
    }).then(function (value) {
      setSuccess(`Seja bem vindo, ${value.data.user.name}!`);
      setError(null)
    })
      .catch(function (value) {
        setError(value.response.data.error);
        setSuccess(null)
      });
  }


  return (
    <>
      <div style={{
        backgroundImage: `url("https://www.plex.tv/wp-content/uploads/2024/01/Watch-Free-Hero-2048x1152-3.png")`,
        backgroundRepeat: 'no-repeat',
        width: 2000,
        height:900,
      }} >
        <div className='row justify-content-center'>
          <div className='card col-sm-12 col-md-8 col-lg-6' style={{"margin-top": "200px"}}>
            <div className="card-header border-bottom" ><b><h1>Login</h1></b></div>
            <div className="card-body">
              {error && <Alert variant="danger">{error}</Alert>}
              {success && <Alert variant="success">{success}</Alert>}

              <div className='row'></div>


              <Form onSubmit={handleSubmit} className='container pt-2'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label><b>Endereço de email</b></Form.Label>
                  <Form.Control type="email" placeholder="Digite o email" value={email} onChange={(e) => setEmail(e.target.value)} />
                  <Form.Text className="text-muted">
                    Nunca compartilhamos seu email
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label><b>Senha</b></Form.Label>
                  <Form.Control type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Lembrar senha" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  <b>Entrar</b>
                </Button>
              </Form>


              <div className='register-link'>
                <p>Não tem uma conta? <a href='/Cadastro'>Cadastrar</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )

}

export default Login;
