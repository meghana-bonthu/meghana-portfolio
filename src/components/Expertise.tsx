import React, { useState } from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faMicrosoft,
    faDocker,
    faGithub
} from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const fullStackSkills = [
    "C#",
    ".NET 8",
    "ASP.NET Core",
    "Angular",
    "React",
    "TypeScript",
    "JavaScript",
    "SQL Server",
    "Entity Framework Core",
    "REST APIs",
    "Microservices"
];

const cloudSkills = [
    "Microsoft Azure",
    "AWS",
    "Docker",
    "Git",
    "GitHub Actions",
    "Azure DevOps",
    "CI/CD",
    "RabbitMQ",
    "Redis",
    "Bicep"
];

const aiSkills = [
    "GitHub Copilot",
    "ChatGPT",
    "Prompt Engineering",
    "AI Gateways",
    "Human-in-the-Loop",
    "Sensitive Data Redaction",
    "Semantic Search",
    "Prompt Versioning"
];

const memoryTips: Record<string, string> = {
    "C#":
        "Think of C# as the language that gives instructions to your .NET application. A simple memory trick: C# writes the logic, while .NET provides the platform that runs it.",

    ".NET 8":
        "Think of .NET as the engine room of the application. C# is what you write, and .NET gives that code the runtime, libraries, tooling, and environment it needs to work.",

    "ASP.NET Core":
        "Remember ASP.NET Core as the web side of .NET. If .NET is the engine, ASP.NET Core is what helps that engine serve APIs, routes, authentication, middleware, and web requests.",

    "Angular":
        "Think of Angular as a complete frontend toolbox. Components build the screen, services share logic and data, routing changes pages, and forms handle user input.",

    "React":
        "A simple React memory rule is: UI follows state. When the state changes, React updates the part of the interface that needs to change.",

    "TypeScript":
        "Think of TypeScript as JavaScript with guardrails. It adds types so many mistakes can be caught while coding instead of later in the browser.",

    "JavaScript":
        "Remember JavaScript as the language that gives a web page behavior. HTML gives structure, CSS gives appearance, and JavaScript makes the page interactive.",

    "SQL Server":
        "Think of SQL Server as organized storage with rules. Tables hold the data, relationships connect it, queries retrieve it, and transactions help keep changes reliable.",

    "Entity Framework Core":
        "Think of EF Core as the translator between C# objects and database tables. You work with C# entities, and EF Core turns those operations into SQL.",

    "REST APIs":
        "A quick way to remember REST is resources plus HTTP verbs: GET reads, POST creates, PUT or PATCH updates, and DELETE removes.",

    "Microservices":
        "Think of microservices as dividing one large application into smaller focused services. Each service owns a specific responsibility and can evolve more independently.",

    "Microsoft Azure":
        "Think of Azure as Microsoft's cloud toolbox. Instead of owning every server yourself, you can choose cloud services for applications, databases, secrets, monitoring, storage, and infrastructure.",

    "AWS":
        "A simple way to remember AWS is: rent computing resources when you need them. Compute runs applications, storage keeps files, databases organize data, and networking connects everything.",

    "Docker":
        "Remember Docker as: package the application with what it needs. A container helps the application behave consistently across development, testing, and deployment environments.",

    "Git":
        "Think of Git as a time machine for source code. Commits create checkpoints, branches let you experiment separately, and merges bring approved changes back together.",

    "GitHub Actions":
        "Think of GitHub Actions as robots triggered by repository events. Push code, and a workflow can automatically build it, run tests, perform security checks, and validate the project.",

    "Azure DevOps":
        "Remember Azure DevOps as Microsoft's toolkit for managing software delivery: source control, work tracking, builds, tests, releases, and CI/CD pipelines can all live in one ecosystem.",

    "CI/CD":
        "Remember CI/CD as build, test, deliver. Continuous Integration checks changes frequently, while Continuous Delivery or Deployment prepares or releases those validated changes.",

    "RabbitMQ":
        "Think of RabbitMQ like a reliable post office between applications. A producer sends a message, RabbitMQ holds and routes it, and a consumer processes it when ready.",

    "Redis":
        "Think of Redis as the application's short-term memory. Frequently needed information can stay in fast memory so the application does not have to repeatedly ask the database.",

    "Bicep":
        "Think of Bicep as an Azure architecture blueprint written as code. Instead of manually creating cloud resources, you describe the infrastructure and let Azure build it consistently.",

    "GitHub Copilot":
        "Think of GitHub Copilot as an AI pair programmer. It can suggest code and help accelerate repetitive development, but the developer still reviews, tests, and owns the final implementation.",

    "ChatGPT":
        "Think of ChatGPT as a conversational engineering assistant: useful for exploring approaches, explaining unfamiliar concepts, debugging ideas, drafting tests, and reviewing solutions while you remain responsible for verification.",

    "Prompt Engineering":
        "Remember prompt engineering as giving AI a good specification. Clear context, constraints, examples, and expected output usually produce more useful and predictable responses.",

    "AI Gateways":
        "Think of an AI gateway as a controlled front door between your application and AI capabilities. It centralizes how requests are prepared, protected, versioned, and sent.",

    "Human-in-the-Loop":
        "The easiest memory rule is: AI suggests, human decides. Human-in-the-loop design keeps important decisions under human review instead of automatically trusting an AI-generated action.",

    "Sensitive Data Redaction":
        "Think of redaction as putting a privacy filter in front of external processing. Detect sensitive information first, mask what should not leave the application, and only then continue with the request.",

    "Semantic Search":
        "Traditional search asks whether the same words appear. Semantic search asks whether the meaning is related. Remember it as searching by intent rather than only exact wording.",

    "Prompt Versioning":
        "Think of prompt versioning like version control for AI instructions. When a prompt changes, its version tells you which instructions produced a particular AI result."
};

function Expertise() {
    const [selectedSkill, setSelectedSkill] =
        useState<string | null>(null);

    return (
        <div className="container" id="expertise">
            <div className="skills-container">
                <h1>Expertise</h1>

                <div className="skills-grid">
                    <div className="skill">
                        <FontAwesomeIcon icon={faMicrosoft} size="3x" />

                        <h3>.NET Full Stack Development</h3>

                        <p>
                            I build and maintain full-stack web applications using
                            C#, ASP.NET Core, Angular, React, TypeScript, SQL Server,
                            and Entity Framework Core, with experience developing
                            REST APIs, responsive user interfaces, and scalable
                            application workflows.
                        </p>

                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>

                            {fullStackSkills.map((label, index) => (
                                <Chip
                                    key={index}
                                    className="chip clickable-chip"
                                    label={label}
                                    onClick={() => setSelectedSkill(label)}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faDocker} size="3x" />

                        <h3>Cloud, DevOps & Distributed Systems</h3>

                        <p>
                            I work with cloud-ready application architecture,
                            containerization, CI/CD pipelines, messaging, caching,
                            and infrastructure automation to improve reliability,
                            scalability, and delivery workflows.
                        </p>

                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>

                            {cloudSkills.map((label, index) => (
                                <Chip
                                    key={index}
                                    className="chip clickable-chip"
                                    label={label}
                                    onClick={() => setSelectedSkill(label)}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faGithub} size="3x" />

                        <h3>AI-Assisted Engineering</h3>

                        <p>
                            I use AI-assisted development tools and have built
                            application workflows around incident summarization,
                            suggested actions, semantic search, sensitive-data
                            redaction, prompt versioning, and human approval
                            controls.
                        </p>

                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>

                            {aiSkills.map((label, index) => (
                                <Chip
                                    key={index}
                                    className="chip clickable-chip"
                                    label={label}
                                    onClick={() => setSelectedSkill(label)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {selectedSkill && (
                <div
                    className="skill-modal-overlay"
                    onClick={() => setSelectedSkill(null)}
                >
                    <div
                        className="skill-modal"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="skill-modal-title"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <button
                            type="button"
                            className="skill-modal-close"
                            aria-label="Close quick fact"
                            onClick={() => setSelectedSkill(null)}
                        >
                            ×
                        </button>

                        <span className="skill-modal-eyebrow">
                            Quick Memory Tip
                        </span>

                        <h2 id="skill-modal-title">
                            {selectedSkill}
                        </h2>

                        <p>
                            {memoryTips[selectedSkill]}
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Expertise;


