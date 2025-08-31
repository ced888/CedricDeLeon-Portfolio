import React from "react";
import Image from "next/image";

export function ProjectPages({ ProjectName = ""}: { ProjectName?: string;})  {

    switch(ProjectName) {
        case "Workflow Approval System":
            return <Workflow /> ;
        case "HypeShifts":
            return <HypeShifts />;
        default:
            return(<div>Select a project to see details.</div>)
    }
}

function Workflow() {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center text-center">

            <p className="text-lg text-gray-700 dark:text-gray-300">
                This is an application that allows users to create, manage, and approve workflows within an organization. 
                It provides a user-friendly interface called "Matrix Designer" for defining workflow steps, assigning tasks, and tracking progress.
            </p>
            <Image
                src="/projects/workflow/Workflow Matrix Designer.gif"
                height="3000"
                width={3000}
                alt="Matrix Designer gif">
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
                alt="Workflow ERD png">
            </Image>
            <p className="text-m text-gray-700 dark:text-gray-300 mt-4"> figure 2. Workflow ERD</p>

        </div>
    );
}

function HypeShifts() {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center text-center">

            <p className="text-lg text-gray-700 dark:text-gray-300">
            HypeShifts is a web-based shift scheduling application designed to streamline workforce management for 
            small businesses such as restaurants, cafés, and retail shops. The goal of this semester project is to 
            develop a practical, user-friendly solution that allows business owners and managers to efficiently create, 
            manage, and communicate employee work schedules.
            </p>
            <Image
                src="/projects/hypeshifts/HypeShifts.gif"
                height="3000"
                width={3000}
                alt="HypeShifts gif">
            </Image>
            <p className="text-m text-gray-700 dark:text-gray-300 mt-4"> figure 1. HypeShifts Design</p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mt-4 text-left">
                Key Features:<br></br>
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
                alt="HypeShifts ERD png">
            </Image>
            <p className="text-m text-gray-700 dark:text-gray-300 mt-4"> figure 2. HypeShifts ERD</p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mt-4">
                I was responsible of the early design stages and so I created the ERD.
                represents the underlying data model that supports the application's core functionality:
                managing employee schedules, shift assignments, and user roles for small businesses.
            </p>

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
                alt="">
            </Image>
            <p className="text-m text-gray-700 dark:text-gray-300 mt-4"> figrure 1. </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mt-4">
            
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mt-4">
            
            </p>
            <Image
                src="/projects/"
                height="3000"
                width={3000}
                alt="">
            </Image>
            <p className="text-m text-gray-700 dark:text-gray-300 mt-4"> figrure 2. </p>

        </div>
    );
}
*/}