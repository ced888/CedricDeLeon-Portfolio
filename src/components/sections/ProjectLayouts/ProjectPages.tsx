import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import { IoLogoTableau } from "react-icons/io5";

export function ProjectPages({ ProjectName = ""}: { ProjectName?: string;})  {

    switch(ProjectName) {
        case "Workflow Approval System":
            return <Workflow /> ;
        case "HypeShifts":
            return <HypeShifts />;
        case "Massage Therapy Booking App":
            return <MassageBookingApp />;
        case "Data Visualizations":
            return <DataVisualizations />;
        case "ArcGIS misc":
            return <ArcGIS />;
        case "This Website!!!":
            return (<div>Well, you&apos;re looking at it yourself... Have a gander :D</div>);
        default:
            return(<div>Sorry, this page is still in construction!</div>)
    }
}

function Workflow() {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center text-center">
            <p className="text-lg text-gray-700 dark:text-gray-300">
                This is an application that allows users to create, manage, and approve workflows within an organization. 
                It provides a user-friendly interface called &quot;Matrix Designer&quot; for defining workflow steps, assigning tasks, and tracking progress.
            </p>
            <Image
                src="/projects/workflow/Workflow Matrix Designer.gif" unoptimized
                height="3000"
                width={3000}
                alt="Matrix Designer gif"
                className="mt-4">
            </Image>
            <p className="text-m text-gray-700 dark:text-gray-300 mt-4"> figure 1. Matrix Designer</p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mt-4">
                The application also supports role-based access control with proper authentication process, ensuring that only authorized users can perform specific actions within the workflow. 
                It also includes features such as notifications and reporting to enhance workflow efficiency and visibility.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mt-4">
                Initially I was very involved in the Proof of Convept design and so I took charge of the Entity Relationship Diagram (ERD) then moved on to creating the backend using C# and .NET Framework.                  
                As the project progressed, I took on more responsibilities in front-end development of the application using Angular and TypeScript. 
                including designing and implementing the database schema, creating RESTful APIs, and integrating with Azure services for deployment and scalability.
            </p>
            <Image
                src="/projects/workflow/WorkflowERD.png"
                height="3000"
                width={3000}
                alt="Workflow ERD png"
                className="mt-4">
            </Image>
            <p className="text-m text-gray-700 dark:text-gray-300 mt-4"> figure 2. Workflow ERD</p>

        </div>
    );
}

function HypeShifts() {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center text-center">
            <Link
                href="https://github.com/ced888/HypeShiftsV1"
                className="text-3xl hover:text-green-600"
                target="_blank"
                >
                <FaGithub />
            </Link>
            <p className="text-lg text-gray-700 dark:text-gray-300">
            HypeShifts is a web-based shift scheduling application designed to streamline workforce management for 
            small businesses such as restaurants, cafés, and retail shops. The goal of this semester project is to 
            develop a practical, user-friendly solution that allows business owners and managers to efficiently create, 
            manage, and communicate employee work schedules.
            </p>
            <Image
                src="/projects/hypeshifts/HypeShifts.gif" unoptimized
                height="3000" 
                width={3000}
                alt="HypeShifts gif"
                className="mt-4">
            </Image>
            <p className="text-m text-gray-700 dark:text-gray-300 mt-4"> figure 1. HypeShifts Design</p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mt-4 text-left">
                Application Features:<br></br>
                    Calendar Viewer-- Seamlessly view shifts per day and can create schedule here as a manager.
                    <br></br>
                    Shift Swaps-- Hassle-free way for employees to switch shifts amongst each other and let manager know.
                    <br></br>
                    Employee Management-- Create a staff list showing employees and their work profiles.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mt-4">
            
            </p>
            <Image
                src="/projects/hypeshifts/HypeShifts ERD.png"
                height="3000"
                width={3000}
                alt="HypeShifts ERD png"
                className="mt-4">
            </Image>
            <p className="text-m text-gray-700 dark:text-gray-300 mt-4"> figure 2. HypeShifts ERD</p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mt-4">
                I was responsible of the early design stages and so I created the ERD.
                represents the underlying data model that supports the application&apos;s core functionality:
                managing employee schedules, shift assignments, and user roles for small businesses.
            </p>

        </div>
    );
}

function MassageBookingApp() {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center text-center">
            <Link
                href="https://github.com/ced888/MassageWebsite"
                className="text-3xl hover:text-green-600"
                target="_blank"
                >
                <FaGithub />
            </Link>
            <p className="text-lg text-gray-700 dark:text-gray-300">
                This web application is a modern, user-friendly massage booking website designed to streamline the 
                appointment process for spas, wellness centers, and independent massage therapists. The platform 
                allows clients to book massage sessions based on either a specific service (e.g., Swedish massage, deep tissue) 
                or a preferred therapist, offering flexibility and personalized experiences.
            </p>
            <Image
                src="/projects/massage/Homepage.png"
                height="3000"
                width={3000}
                alt=""
                className="mt-4">
            </Image>
            <p className="text-m text-gray-700 dark:text-gray-300 mt-2 mb-2"> figure 1. Homepage</p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mt-4">
            
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mt-4">
                This application offers two distinct booking flows to accommodate different user preferences:
            <br></br>
            Therapist-Based Flow -- Users can select a specific therapist they prefer and view their available services and time slots.
            <br></br>
            Service-Based Flow -- Users can choose a specific massage service and view the therapists available for that service along with their time slots.
            </p>
            <Image
                src="/projects/massage/Booking Therapist.png"
                height="3000"
                width={3000}
                alt=""
                className="mt-4">
            </Image>
            <p className="text-m text-gray-700 dark:text-gray-300 mt-2 mb-2"> figure 2. Booking page</p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mt-4 text-left ml-2">
                1. Therapist-Based Flow:
                <br></br>
                Choose Therapist → View Their Services → Select Date & Time → Confirm Booking
            </p>
            <Image
                src="/projects/massage/Booking Service.png"
                height="3000"
                width={3000}
                alt=""
                className="mt-4">
            </Image>
            <p className="text-m text-gray-700 dark:text-gray-300 mt-2 mb-4"> figure 3. Service page</p>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 mt-4 text-left ml-2">
                2. Service-Based Flow:
                <br></br>
                Choose Service → Select Date → Pick Available Time Slot → Book with Assigned Therapist
                <br></br><br></br>
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mt-4">
                The application also includes a subscription service with a secure payment gateway integration through Stripe, 
                allowing users to complete their bookings with ease and confidence.
            </p>
            <Image
                src="/projects/massage/Payment Stripe.png"
                height="3000"
                width={3000}
                alt=""
                className="mt-4">
            </Image>
            <p className="text-m text-gray-700 dark:text-gray-300 mt-2 mb-4"> figure 4. Stripe payment method</p>
        </div>
    );
}

function DataVisualizations() {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center text-center">
            <Link
                href="https://public.tableau.com/app/profile/cedric.de.leon/vizzes"
                className="text-3xl hover:text-green-600"
                target="_blank"
                >
                <IoLogoTableau />
            </Link>
            <p className="text-lg text-gray-700 dark:text-gray-300">
                Here&apos;s some of my work to showcase my skills in data visualization using Tableau and Microsoft Excel!
            </p>
            <Image
                src="/projects/datavisualizations/AvgTempMap.png"
                height="3000"
                width={3000}
                alt=""
                className="mt-4">
            </Image>
            <p className="text-m text-gray-700 dark:text-gray-300 mt-2 mb-4"> figure 1. Average Temperature Map</p>
            <Image
                src="/projects/datavisualizations/WildfireSummary.png"
                height="3000"
                width={3000}
                alt=""
                className="mt-4">
            </Image>
            <p className="text-m text-gray-700 dark:text-gray-300 mt-2 mb-4"> figure 2. Wildfires in Canada 2021</p>
            <Image
                src="/projects/datavisualizations/WildfireABvsBC.png"
                height="3000"
                width={3000}
                alt=""
                className="mt-4">
            </Image>
            <p className="text-m text-gray-700 dark:text-gray-300 mt-2 mb-4"> figure 3. Wildfires in Alberta vs British Columbia</p>
        </div>
    );
}

function ArcGIS() {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center text-center">

            <p className="text-lg text-gray-700 dark:text-gray-300">
                Here&apos;s some of my work to showcase my skills in data visualization using ArcGIS!
            </p>
            <Image
                src="/projects/arcgis/EdmontonRaster.jpg"
                height="3000"
                width={3000}
                alt=""
                className="mt-4">
            </Image>
            <p className="text-m text-gray-700 dark:text-gray-300 mt-2 mb-4"> figure 1. Cool Edmonton Raster based on population zones.</p>
            <Image
                src="/projects/arcgis/Alberta Highways.png"
                height="3000"
                width={3000}
                alt=""
                className="mt-4">
            </Image>
            <p className="text-m text-gray-700 dark:text-gray-300 mt-2 mb-4"> figure 2. Alberta Highways</p>
            <Image
                src="/projects/arcgis/Alberta Reintroduction species.png"
                height="3000"
                width={3000}
                alt=""
                className="mt-4">
            </Image>
            <p className="text-m text-gray-700 dark:text-gray-300 mt-2 mb-4"> figure 3. Alberta Retintroduction planting zones for wildfire affected plants</p>
        </div>
    );
}

{/* Template for future projects
function Workflow() {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center text-center">

            <p className="text-lg text-gray-700 dark:text-gray-300">
            
            </p>
            <Image
                src="/projects/"
                height="3000"
                width={3000}
                alt=""
                className="mt-4">
            </Image>
            <p className="text-m text-gray-700 dark:text-gray-300 mt-2 mb-4"> figure 1. </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mt-4">
            
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mt-4">
            
            </p>
            <Image
                src="/projects/"
                height="3000"
                width={3000}
                alt=""
                className="mt-4">
            </Image>
            <p className="text-m text-gray-700 dark:text-gray-300 mt-2 mb-4"> figure 2. </p>

        </div>
    );
}
*/}