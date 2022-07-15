import React, { Component } from "react";
import "./VerticalButton.css";

export default class VerticalButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.",
      head: "LET'S TALK TABS",
    };
  }
  render() {
    const datas = [
      {
        name: "HISTORY",
        head: "LET'S TALK TABS",
        content:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.",
      },
      {
        name: "APPROACH",
        head: "COOL TABS",
        content:
          "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
      },
      {
        name: "CULTURE",
        head: "SHORTER TABS",
        content:
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est.",
      },
      {
        name: "METHOD",
        head: "LONGER TABS",
        content:
          "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.",
      },
    ];
    return (
      <>
        <div className="VB-main row">
        <h4 className="col-12">VERTICAL BUTTON</h4>
          <div className="VB-head col-4">
            {datas.map((data, index) => (
              <button
                key={index}
                onClick={() => {
                  this.setState({
                    content: data.content,
                    head: data.head,
                  });
                }}
              >
                <ul>
                    <li>{data.name}</li>
                </ul>
                
              </button>
            ))}
          </div>
          <div className="VB-info col-8">
            <h5>{this.state.head}</h5>
            <p>{this.state.content}</p>
          </div>
        </div>
      </>
    );
  }
}
