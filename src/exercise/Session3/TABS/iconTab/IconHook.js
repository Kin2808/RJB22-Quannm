import React from "react";
import { GrLayer } from "react-icons/gr";
import { BsBoxSeam } from "react-icons/bs";
import { FiTrendingUp } from "react-icons/fi";
import { TbLayoutDistributeHorizontal } from "react-icons/tb";
import "./iconTab.css";

export default function IconHook() {
  const [indexClick, setindexClick] = React.useState(0);
  const datas = [
    {
      name: "HISTORY",
      icon: <GrLayer />,
      content:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.",
    },
    {
      name: "APPROCH",
      icon: <BsBoxSeam />,
      content:
        "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
    },
    {
      name: "CULTURE",
      icon: <FiTrendingUp />,
      content:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est.",
    },
    {
      name: "METHOD",
      icon: <TbLayoutDistributeHorizontal />,
      content:
        "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.",
    },
  ];
  return (
    <>
      <div className="IconTab-main">
        <div
          style={{
            padding: `80px`,
            letterSpacing: `3px`,
            fontSize: `24px`,
            fontWeight: `400`,
          }}
        >
          ICON TABS
        </div>
        <div className="IconTab">
          {datas.map((data, index) => (
            <div>
              <button
                className="IconTab-info"
                key={index}
                onClick={() => {
                  setindexClick(index);
                }}
              >
                <i>{data.icon}</i>
                <p>{data.name}</p>
              </button>
              {index === indexClick && (
                <div className="tabs-txt">{data.content}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
