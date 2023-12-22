import React from "react";

const data = [
    {
        img: "/images/Group-3716.png",
        title: "Invoice Digitization ",
        desc: "Automate all formats of invoices received across any channel into a centralized repository in a single format to reduce error & increase team efficiency"
    },

    {
        img: "/images/Group-3682.png",
        title: "Invoice Processing   ",
        desc: "Automate invoice capturing, invoice exchange with vendors & approval workflows. Centralized vendor portal for tracking all PO’s"
    },

    {
        img: "/images/Group-3683.png",
        title: "Centralized access and collaboration  ",
        desc: "Collaboration, interaction and documentation is centered at each invoice level making approval workflows efficient, seamless and audit ready"
    },

    {
        img: "/images/Group-3681.png",
        title: "Advanced & Quick customizable workflows  ",
        desc: "Advanced AI that adapts to AP processes unique to your organization within the shortest amount of time"
    },

    {
        img: "/images/Group.png",
        title: "Invoice Matching   ",
        desc: "Effortless 2 and 3 way matching with easy to understand ‘reason’ coding for users increasing efficiency & protect against fraud and duplication"
    },

    {
        img: "/images/Group-3684.png",
        title: "Integrated Vendor Management  ",
        desc: "Manage vendor onboarding, documentation and payment from one place"
    },

    {
        img: "/images/Vector.png",
        title: "Strengthen treasury & your supply chain ",
        desc: "Increase treasury income through early payments via dynamic discounting. Earn more from each spend via KredX’s AP card program"
    },

    {
        img: "/images/Group-3686.png",
        title: "Audit ready  ",
        desc: "One-click access to all conversations and notes at each invoice level. Data available on cloud archived after 7 years for full audit trail wherever required."
    },


]
const Card = ({ item }) => {
    return (
      <div className="service-container w-full lg:w-1/3 xl:w-1/4">
        <div className="wrapper">
          <div className="imageContainer">
            <img src={item.img} alt="" />
          </div>
          <div className="textContainer">
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        </div>
      </div>
    );
  };
  
  const Services = () => {
    return (
      <div className="services mx-auto max-w-screen-xl">
        <h2>KredX AP Automation Capabilities</h2>
        <div className="flex flex-wrap">
          {data.map((item) => (
            <Card key={item.title} item={item} />
          ))}
        </div>
        <button>Request Demo</button>
      </div>
    );
  };
  
  export default Services;