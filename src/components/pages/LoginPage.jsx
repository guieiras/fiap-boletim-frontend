import React, { Component } from 'react';
import { Block, Input, Label, List, ListItem, Page, Navbar } from 'framework7-react';

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = { rm: '', password: '' }
    this.updateRM = this.updateRM.bind(this)
    this.updatePassword = this.updatePassword.bind(this)
  }

  render() {
    return <Page>
      <Navbar title="FIAP Boletim+"></Navbar>
      <Block>
        <p>Efetue Login usando a sua conta do Portal do Aluno FIAP.</p>
      </Block>
      <List form>
        <ListItem>
          <Label>RM</Label>
          <Input value={this.state.rm} type="text" onInput={this.updateRM} />
        </ListItem>
        <ListItem>
          <Label>Senha</Label>
          <Input value={this.state.password} type="password" onInput={this.updatePassword} />
        </ListItem>
      </List>
    </Page>
  }

  updateRM(event) {
    this.setState({ rm: event.target.value.replace(/[^0-9]/g, '').substring(0, 5) });
  }

  updatePassword(event) {
    this.setState({ password: event.target.value });
  }
}
