"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import React, { useState } from "react";

const projects = [
  {
    num: "2024-July",
    title: "Openworkspace",
    description: [
      "OpenWorkspace® is a window management system that enables users to configure, save, and load arrangements of the native desktop as ‘workspaces’—complete with certain windows and tabs laid out to best suit some routine task, workflow, topic, or web experience at the desktop.",
      "Developed a React Dashboard:Created a user-friendly dashboard for managing waitlist users and sending email invitations for registration",
      "Handled Stripe Integration: Implemented user subscription management, including recurring payments and free trials.",
      "Integrated Stripe with WordPress: Successfully integrated Stripe with WordPress to streamline payment processing for the client.",
      "Managed HubSpot CRM: Worked on the Contacts and Tickets sections, including creating model views and handling ticket management.",
      "Implemented SendGrid Email Integration: Set up SendGrid for email delivery and created custom email templates for enhanced communication.",
    ],
    href: "https://openworkspace.com/",
  },
  {
    num: "2024-April",
    title: "Mattresmakers",
    description: [
      "Custommattresmakers specializes in creating mattresses tailored to individual customer requirements. They previously sold their custom mattresses through an outdated Shopify site and required a complete revamp to modernize the online shopping experience.",
      "Revamped Shopify Site for Custom Mattress Maker: Worked with a client specializing in custom-made mattresses to transform their outdated Shopify store into a modern, user-friendly platform.",
      "Theme Selection and Documentation: Assisted the client in selecting a new Shopify theme and documented the existing pages, links, and custom codes from their previous site.",
      "Customization and Integration: Refined and customized the newly purchased theme according to the client's needs, ensuring no disruption to existing features while enhancing functionality.",
      "Theme Code Modification: Edited and customized the Shopify theme code to align with the client's specific requirements and business model.",
    ],
    href: "https://custommattressmakers.com/",
  },
  {
    num: "2024-February",
    title: "Sara",
    description: [
      "Sara Course Transfer Application: Developed for institutions to facilitate course transfers for graduates, enabling students to select their current and destination institutions, view available courses, and check credit requirements for course transfers to potentially reduce study time.",
      "Frontend Development: Worked on the frontend using React and MUI for a modern, responsive, and user-friendly interface.",
    ],
    href: "",
  },
  {
    num: "2023-December",
    title: "Humsum-Shopify",
    description: [
      "Humsum Shopify Integration: Worked on integrating an existing hair donation platform with Shopify, allowing users to add donated hair to Shopify through a React dashboard.",
      "React Dashboard Development: Built a React dashboard with sections for orders, products, and shipping, enabling users to seamlessly add products to Shopify using Shopify APIs.",
      "Backend Development: Developed the backend for the project using Node.js to ensure smooth integration and data handling between the platform and Shopify.",
      "Wireframing and Workflow Planning: Created detailed wireframes and planned the entire workflow to ensure efficient interaction between the dashboard, Shopify, and the admin interface.",
    ],
    href: "https://www.humsum.org/",
  },
  {
    num: "2023-November",
    title: "Supermedicals",
    description: [
      "Supermedicals Shopify Store Development: Built a Shopify website for a dropshipping store, integrating shipping services through Shiprocket.",
      "Theme Customization: Edited and customized the existing Shopify theme to meet specific business needs.",
      "Digital Marketing: Ran ad campaigns on Instagram and Facebook, exploring Meta Ads, and enabled Google Analytics and Meta Pixels for tracking.",
      "Customer Review and OTP Authentication: Implemented a customer review system and integrated OTP authentication for secure purchasing.",
      "Understanding RTO: Gained experience in handling Return to Origin (RTO) processes for logistics.",
    ],
    href: "",
  },
  {
    num: "2023-June",
    title: "Movelist",
    description: [
      "Move List Moving Company Solution: Contributed to both frontend and backend development for a product designed to simplify processes for moving companies, with separate admin and user views.",
      "Frontend Development: Built the frontend using React and MUI for a modern, responsive user interface.",
      "Backend Development: Developed the backend using Node.js and Prisma as the ORM for efficient database management.",
      "Integration of SendGrid, Twilio, and Socket.io: Integrated SendGrid for email notifications, Twilio for messaging, and implemented real-time communication using Socket.io.",
      "Subscription Management: Designed and implemented the subscription system using Stripe, handling recurring payments and user management.",
      "AWS Familiarity: Gained experience with AWS Cognito, Amplify, Elastic Beanstalk, RDS, Route 53, and implemented AWS Lambda triggers for handling subscription processes.",
    ],
    href: "https://www.movelist.co/",
  },
  {
    num: "2023-March",
    title: "Humsum",
    description: [
      "Humsum Hair Donation Platform: Worked with a non-profit organization that donates and gifts hair, contributing as a frontend developer.",
      "Frontend Development: Built and enhanced the user interface, gaining experience with React, GraphQL, and AWS DynamoDB for seamless data management.",
      "i18n Language Translation: Participated in transforming the project to support both Spanish and English, ensuring full multilingual capability.",
    ],
    href: "https://www.humsum.org/",
  },
  {
    num: "2023-January",
    title: "Taxtrack",
    description: [
      "TaxTrack Website Redesign: Rebuilt the outdated website for a law firm specializing in tax services.",
      "Frontend Development: Developed the frontend using React, MUI, and Ant Design to create a modern and responsive user interface.",
    ],
    href: "https://fitzgeraldlg-taxtrack-client-dashboard-dev.azurewebsites.net/login",
  },
];

import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";
const MAX_CHAR_LIMIT = 50;
const Projects = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {projects.map((service, index) => {
            const [isExpanded, setIsExpanded] = useState(false);

            const toggleExpand = () => setIsExpanded(!isExpanded);
            const shouldShowReadMore =
              service.description.join(" ").length > MAX_CHAR_LIMIT;

            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>

                  <Link
                    href={service.href || "#"}
                    className={`w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45 ${
                      !service.href ? "invisible" : ""
                    }`}
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                {/* description */}
                <ScrollArea className="h-[250px]">
                  <div>
                    {service.description.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </div>
                </ScrollArea>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
