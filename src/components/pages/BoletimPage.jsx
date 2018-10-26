import React, { Component } from 'react';
import axios from 'axios';
import { Block, BlockTitle, Card, Navbar, Page } from 'framework7-react';
import { decrypt } from '../../library/crypto';
import Boletim from '../base/Boletim';

export default class BoletimPage extends Component {
  constructor(props) {
    super(props);
    this.state = { status: 'initial', boletim: null };
  }

  componentDidMount() {
    const { rm, password } = decrypt(sessionStorage.getItem('_clientToken'));
    axios
      .post('http://localhost:4568/notas', { rm, senha: password })
      .then((response) => {
        this.setState({ boletim: response.data, status: 'success' });
      });
  }

  render() {
    return <Page>
      <Navbar title="FIAP Boletim+"></Navbar>
      <BlockTitle>Minhas Notas</BlockTitle>
      { this.boletim() }
    </Page>
  }

  boletim() {
    switch(this.state.status) {
      case 'initial':
        return <Card content="Carregando Boletim" />
      case 'success':
        return <Boletim boletim={this.state.boletim} />
    }
  }
}
