import React from "react";
const skills = [
  {
    name: "Wordpres",
    percent: "80",
    type: "success",
  },
  {
    name: "HTML 5",
    percent: "90",
    type: "primary",
  },
  {
    name: "JQuery",
    percent: "50",
    type: "danger",
  },
  {
    name: "Photoshop",
    percent: "70",
    type: "info",
  },
];
const Profile = () => {
  return (
    <div>
      <div className="info flex-between border-bottom">
        <div>
          <p className="m-0 ">Full Name</p>
          <p className="text-secondary">Johnathan Deo</p>
        </div>
        <div>
          <p className="m-0 ">Mobile</p>
          <p className="text-secondary">(123) 456 7890</p>
        </div>
        <div>
          <p className="m-0 ">Email</p>
          <p className="text-secondary">johnathan@admin.com</p>
        </div>
        <div>
          <p className="m-0 ">Location</p>
          <p className="text-secondary">London</p>
        </div>
      </div>
      <div className="discription my-5">
        <p className="small">
          Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In
          enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam
          dictum felis eu pede mollis pretium. Integer tincidunt.Cras dapibus.
          Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
          Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
        </p>

        <p className="small">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries
        </p>
        <p className="small">
          It was popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </p>
      </div>
      <div className="skillset">
        <h5 className="border-bottom">Skill Set</h5>
        {skills.map((skill, i) => (
          <div key={i} className="p-3">
            <h6>
              {skill.name} {skill.percent}%
            </h6>
            <div class="progress" style={{ height: 8 }}>
              <div
                class={`progress-bar bg-${skill.type}`}
                role="progressbar"
                style={{ width: `${skill.percent}%` }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
