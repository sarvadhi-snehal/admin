import { Envelope } from "react-bootstrap-icons";
import { PencilSquare } from "react-bootstrap-icons";
import { LayoutThreeColumns } from "react-bootstrap-icons";
import { Gear } from "react-bootstrap-icons";
import MessagesList from "../Messages/MessagesList";
import NotificationInfo from "../Notification/NotificationInfo";
const Notifiction = () => {
  const data = [
    {
      Icon: Envelope,
      target: "notification",
      Component: MessagesList,
      title: "Notifications",
      size: "sm",
      footer: "Clear all notification",
    },
    {
      Icon: PencilSquare,
      target: "msg",
      Component: MessagesList,
      title: "YOU HAVE 4 MESSAGES",
      size: "sm",
      footer: "See all e-mails ",
    },
    {
      Icon: LayoutThreeColumns,
      target: "cacl",
      Component: NotificationInfo,
      size: "fullscreen",
      title: false,
      footer: false,
    },
  ];

  return (
    <div className="ms-auto me-4 d-flex ">
      {data.map((item) => {
        const { target, Icon, Component, size, title, footer } = item;
        return (
          <div className="flex-center ">
            <div
              className={" btn text-white"}
              data-bs-target={`#${target}`}
              data-bs-toggle="dropdown"
              data-bs-whatever={target}
            >
              <label className={title && " badgeAnimation"}>
                <Icon size={20} />
              </label>
            </div>
            <ul className="dropdown-menu mt-2" id={target} aria-hidden="true">
              <div className="">
                <div className="">
                  {title && (
                    <div className="modal-header">
                      <p className="modal-title text-dark">{title}</p>
                    </div>
                  )}
                  <div className="row">
                    <Component classname="scroll-div3 scroll" />
                  </div>
                  {footer && (
                    <div className=" p-3 text-center">
                      <h6 className="fs-bold text-dark m-auto">
                        {footer} &gt;
                      </h6>
                    </div>
                  )}
                </div>
              </div>
            </ul>
          </div>
        );
      })}

      <label className="btn text-white">
        <Gear />
      </label>
    </div>
  );
};

export default Notifiction;
