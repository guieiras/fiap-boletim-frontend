import React, { Component } from 'react';
import {
  Block,
  Button,
  Checkbox,
  Input,
  Label,
  List,
  ListItem,
  Page,
  Navbar
} from 'framework7-react';
import { encrypt } from '../../library/crypto';

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = { rm: '', password: '', remember: true };
    this.authenticate = this.authenticate.bind(this);
    this.setRemember = this.setRemember.bind(this);
    this.updateRM = this.updateRM.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
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
        <ListItem title="Lembrar-me">
          <Checkbox slot="media" onChange={this.setRemember} checked={this.state.remember}/>
        </ListItem>
      </List>
      <Block>
        <Button big raised fill onClick={this.authenticate}>Login</Button>
      </Block>
    </Page>
  }

  authenticate() {
    const { rm, password } = this.state;
    const token = encrypt({ rm, password });

    if(this.state.remember) {
      localStorage.setItem('_clientToken', token);
    }
    sessionStorage.setItem('_clientToken', token);

    this.$f7router.navigate('/boletim');
  }

  setRemember() {
    this.setState({ remember: !this.state.remember });
  }

  updateRM(event) {
    this.setState({ rm: event.target.value.replace(/[^0-9]/g, '').substring(0, 5) });
  }

  updatePassword(event) {
    this.setState({ password: event.target.value });
  }
}
