import React from "react";
import { useContext } from "react";
import { USER_POST } from "../../api";
import useFetch from "../../hooks/useFetch";
import useForm from "../../hooks/useForm";
import { userContext } from "../../userContext";
import Button from "../forms/Button";
import Input from "../forms/Input";
import Error from '../helper/Error'

const LoginCreate = () => {
  const username = useForm();
  const email = useForm("email");
  const password = useForm();

  const { userLogin } = useContext(userContext);
  const { loading, error, request } = useFetch()

  async function handleSubmit(e) {
    e.preventDefault();

    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });
    const { response } = await request(url, options);
    // if (response.ok) alert("Conta criada com sucesso!")
    if (response.ok) userLogin(username.value, password.value);
  }

  return (
    <section>
      <h1 className="title">Cadstre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Email" type="email" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />
        {
          loading ? <Button disabled>Cadastrando...</Button> : <Button>Cadastrar</Button>
        }
        <Error error={error} />
      </form>
    </section>
  );
};

export default LoginCreate;
