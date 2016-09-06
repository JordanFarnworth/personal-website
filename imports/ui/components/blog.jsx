import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

export class Blog extends Component {

  getAboutCategories(){
    return [
      {_id: 1, title: "Category One", description: "Description One"},
      {_id: 2, title: "Category Two", description: "Description Two"},
      {_id: 3, title: "Category Three", description: "Description Three"},
      {_id: 4, title: "Category Four", description: "Description Four"}
    ];
  }

  renderCategories() {
    return this.getAboutCategories().map((cat) => (
      <div key={cat._id} className="panel panel-default">
          <div className="panel-heading" role="tab" id={"heading-" + cat._id}>
            <h4 className="panel-title">
              <a role="button" data-toggle="collapse" className="collapsed" data-parent="#accordion" href={"#collapse-" + cat._id} aria-expanded="true" aria-controls="collapseOne">
                {cat.title}
              </a>
            </h4>
          </div>
          <div id={"collapse-" + cat._id} className="panel-collapse collapse in" role="tabpanel" aria-labelledby={"heading-" + cat._id}>
            <div className="panel-body">
              {cat.description}
          </div>
        </div>
      </div>
    ));
  }


  render() {
    return (
      <div className="panel-group" id="accordion main" role="tablist" aria-multiselectable="true">
        {this.renderCategories()}
      </div>
    );
  }
}
