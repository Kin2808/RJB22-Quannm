import React from "react";

export default function TextHook() {
  const [indexClick, setindexClick] = React.useState(0);
  const datas = [
    {
        name: 'HISTORY',
        content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.',
    },
    {
        name: 'APPROACH',
        content: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?'
    },
    {
        name: 'CULTURE',
        content: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est.'
    },
    {
        name: 'METHOD',
        content: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.'
    }
  ];
  return (
    <div className="Texttabs-main">
      <div
        style={{ fontSize: `25px`, fontWeight: `400`, margin: `10px 0 80px` }}
      >
        TEXT TABS
      </div>
      <div className="Texttabs">
        <div className="Texttabs-info">
          {datas.map((data, index) => (
            <div>
              <button
                key={index}
                onClick={() => {
                  setindexClick(index);
                }}
              >
                {data.name}
              </button>
              {index === indexClick && (
                <div className="tabs-txt">{data.content}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
