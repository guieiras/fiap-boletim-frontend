import React, { Component } from 'react';
import { Card } from 'framework7-react';

export default class Subject extends Component {
  get subject() {
    return this.props.subject
  }

  render() {
    return <Card title={this.subject.name}>
      <div slot="content">
        <table>
          <thead>
            <tr>
              <th className="first">NAC</th>
              <th className="first">AM</th>
              <th className="first">PS</th>
              <th className="first">MD</th>
              <th className="second">NAC</th>
              <th className="second">AM</th>
              <th className="second">PS</th>
              <th className="second">MD</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="first">{this.calcNac(this.subject.firstSemester)}</td>
              <td className="first">{this.subject.firstSemester.partials.am}</td>
              <td className="first">{this.subject.firstSemester.partials.ps}</td>
              <td className="first">{this.subject.firstSemester.grade}</td>
              <td className="second">{this.calcNac(this.subject.secondSemester)}</td>
              <td className="second">{this.subject.secondSemester.partials.am}</td>
              <td className="second">{this.calcPs(1)}</td>
              <td className="second">{this.subject.secondSemester.grade}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Card>
  }

  calcNac(semester) {
    if(semester.partials.nac) { return semester.partials.nac; }
    if(semester.nacs.length == 1) { return semester.nacs[0]; }
    if(semester.nacs.length > 1) {
      const nacs = semester.nacs.map((nac) => (nac || 0));
      const lowerNac = nacs.sort((a, b) => a - b)[0];
      const nacSum = nacs.reduce((a, b) => a + b);
      return (nacSum - lowerNac) / (nacs.length - 1);
    }
    return null;
  }

  calcPs() {
    if (!this.subject.firstSemester.grade) { return null }
    if (this.subject.secondSemester.grade) { return null }
    if (!!this.subject.secondSemester.partials.ps) {
      return this.subject.secondSemester.partials.ps
    }

    const totalCurrent = this.subject.firstSemester.grade +
      (this.calcNac(this.subject.firstSemester) || 0) * 0.2 +
      (this.subject.secondSemester.partials.am * 0.3);

    return totalCurrent > 12 ? 0 : (12 - totalCurrent) * 2;

  }
}
