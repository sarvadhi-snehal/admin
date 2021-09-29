import {
  PencilSquare,
  LayoutThreeColumns,
  Envelope,
} from "react-bootstrap-icons";
import MessagesList from "../Messages/MessagesList";
import NotificationInfo from "../Notification/NotificationInfo";
import ServicePannel from "./ServicePannel";
import Bounce from "react-reveal/Bounce";
const Notifiction = ({ panelColor }) => {
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
      {data.map((item, index) => {
        const { target, Icon, Component, title, footer } = item;
        return (
          <div className="flex-center " key={index}>
            <div
              className={" btn text-white"}
              data-bs-target={`#${target}`}
              data-bs-toggle="dropdown"
              data-bs-whatever={target}
            >
              <label className={title ? " badgeAnimation" : undefined}>
                <Icon size={20} />
              </label>
            </div>
            <Bounce top>
              <ul className="dropdown-menu mt-5" id={target} aria-hidden="true">
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
            </Bounce>
          </div>
        );
      })}
      {/* <Gear />÷ */}
      <ServicePannel />
    </div>
  );
};

export default Notifiction;
