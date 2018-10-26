import React, { Component } from 'react';
import Subject from './Subject';
import SubjectSerializer from '../../library/serializers/SubjectSerializer';

export default class Boletim extends Component {
  render() {
    return <div>
      { this.props.boletim.map((subject) => <Subject key={subject.id} subject={SubjectSerializer(subject)} />) }
    </div>
  }
}
