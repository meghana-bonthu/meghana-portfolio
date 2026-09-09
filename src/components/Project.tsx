import React, { useState } from "react";
import dashboard from '../assets/images/opspilot/dashboard.png';
import lifecycle from '../assets/images/opspilot/lifecycle.png';
import ci from '../assets/images/opspilot/ci.png';
import '../assets/styles/Project.scss';

const technologyDetails: Record<string, string> = {
    ".NET 8":
        "Used as the primary backend platform for OpsPilotAI, providing the runtime and application foundation for the ASP.NET Core API, background services, authentication, health checks, and application workflows.",

    "ASP.NET Core":
        "Built the REST API, authentication endpoints, incident lifecycle operations, role-based authorization policies, Problem Details handling, health endpoints, and backend application services with ASP.NET Core.",

    "Angular":
        "Built the frontend experience for authentication, incident creation, incident queues, lifecycle actions, role-aware controls, and application interaction using Angular.",

    "TypeScript":
        "Used throughout the Angular frontend for components, services, authentication handling, HTTP interceptors, API contracts, and strongly typed application logic.",

    "SQL Server":
        "Used as the primary relational database for incidents, ASP.NET Core Identity data, team assignments, audit history, suggested actions, outbox messages, and processed-message records.",

    "Entity Framework Core":
        "Used for database access, domain persistence, relationships, schema migrations, incident history, Identity integration, and transactional persistence of application data and outbox messages.",

    "RabbitMQ":
        "Used for event-driven processing. Transactional outbox messages are published to RabbitMQ and consumed by a background notification worker, with idempotent consumer handling to prevent duplicate processing.",

    "Redis":
        "Used to cache incident-query results with explicit invalidation when incidents are created or modified. Separate cache keys support elevated users and reporter-specific incident views.",

    "Docker":
        "Used to run local infrastructure including SQL Server, RabbitMQ, and Redis. Docker-based Testcontainers are also used to provide isolated SQL Server instances for backend integration tests.",

    "GitHub Actions":
        "Built CI workflows that restore, build, and test the .NET backend; install, test, build, and audit the Angular frontend; and validate the Bicep infrastructure definitions on repository changes.",

    "Azure":
        "Designed cloud infrastructure for Azure App Service, Azure SQL, Key Vault, Application Insights, Log Analytics, health monitoring, alerts, and deployment slots. The infrastructure is defined and validated but has not been deployed.",

    "Bicep":
        "Created infrastructure-as-code definitions for the Azure architecture, including App Service, Azure SQL, Key Vault, observability resources, staging slots, health configuration, and monitoring. Bicep files are automatically validated in CI."
};

const technologies = Object.keys(technologyDetails);

function Project() {
    const [selectedTechnology, setSelectedTechnology] =
        useState<string | null>(null);

    return (
        <div className="projects-container" id="projects">
            <h1>Featured Project</h1>

            <div className="projects-grid">
                <div className="project featured-project">

                    <div className="project-heading">
                        <div>
                            <a
                                href="https://github.com/meghana-bonthu/OpsPilotAI"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <h2>OpsPilotAI</h2>
                            </a>

                            <h3>
                                AI-Assisted Incident Management Platform
                            </h3>
                        </div>

                        <a
                            href="https://github.com/meghana-bonthu/OpsPilotAI"
                            target="_blank"
                            rel="noreferrer"
                            className="project-button"
                        >
                            View on GitHub
                        </a>
                    </div>

                    <p className="project-intro">
                        A production-style full-stack incident management
                        platform built with .NET 8, ASP.NET Core, Angular,
                        TypeScript, SQL Server, and Entity Framework Core.
                        OpsPilotAI combines secure role-based workflows,
                        distributed processing, caching, AI-assisted
                        capabilities, automated testing, observability,
                        and cloud-ready infrastructure.
                    </p>

                    <div className="project-gallery">
                        <figure>
                            <a href={dashboard} target="_blank" rel="noreferrer">
                                <img
                                    src={dashboard}
                                    alt="OpsPilotAI incident management dashboard"
                                />
                            </a>
                            <figcaption>
                                Incident Management Dashboard
                            </figcaption>
                        </figure>

                        <figure>
                            <a href={lifecycle} target="_blank" rel="noreferrer">
                                <img
                                    src={lifecycle}
                                    alt="OpsPilotAI completed incident lifecycle"
                                />
                            </a>
                            <figcaption>
                                Secure Incident Lifecycle
                            </figcaption>
                        </figure>

                        <figure>
                            <a href={ci} target="_blank" rel="noreferrer">
                                <img
                                    src={ci}
                                    alt="OpsPilotAI successful GitHub Actions workflow"
                                />
                            </a>
                            <figcaption>
                                Automated CI & Quality Gates
                            </figcaption>
                        </figure>
                    </div>

                    <div className="project-highlights">
                        <div>
                            <strong>Secure Workflows</strong>
                            <span>
                                JWT authentication, role-based authorization,
                                ownership controls, and validated lifecycle transitions.
                            </span>
                        </div>

                        <div>
                            <strong>Distributed Architecture</strong>
                            <span>
                                Outbox Pattern, RabbitMQ, idempotent consumers,
                                background processing, and Redis caching.
                            </span>
                        </div>

                        <div>
                            <strong>AI-Assisted Workflows</strong>
                            <span>
                                Incident summaries, suggested actions, semantic
                                search, sensitive-data redaction, prompt versioning,
                                and human approval controls.
                            </span>
                        </div>

                        <div>
                            <strong>Quality & Cloud</strong>
                            <span>
                                xUnit, Testcontainers, Vitest, GitHub Actions,
                                Docker, Azure observability, and Bicep infrastructure.
                            </span>
                        </div>
                    </div>

                    <div className="technology-section">
                        <h3>How I Used the Technology</h3>

                        <p className="technology-hint">
                            Click a technology to see how it was used in OpsPilotAI.
                        </p>

                        <div className="project-tech">
                            {technologies.map((technology) => (
                                <button
                                    key={technology}
                                    type="button"
                                    className="tech-chip"
                                    onClick={() => setSelectedTechnology(technology)}
                                >
                                    {technology}
                                </button>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            {selectedTechnology && (
                <div
                    className="tech-modal-overlay"
                    onClick={() => setSelectedTechnology(null)}
                >
                    <div
                        className="tech-modal"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="tech-modal-title"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <button
                            type="button"
                            className="tech-modal-close"
                            aria-label="Close technology details"
                            onClick={() => setSelectedTechnology(null)}
                        >
                            ×
                        </button>

                        <span className="tech-modal-eyebrow">
                            OpsPilotAI Technology
                        </span>

                        <h2 id="tech-modal-title">
                            {selectedTechnology}
                        </h2>

                        <p>
                            {technologyDetails[selectedTechnology]}
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Project;

